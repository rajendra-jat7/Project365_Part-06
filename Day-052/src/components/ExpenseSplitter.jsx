import { useState } from "react";
import "../styles/ExpenseSplitter.css";

const ExpenseSplitter = () => {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [expense, setExpense] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Add a new person with expense
  const addPerson = () => {
    if (name.trim() && expense > 0) {
      setPeople([...people, { name, expense: parseFloat(expense) }]);
      setName("");
      setExpense("");
    } else {
      alert("Enter valid name and expense!");
    }
  };

  // Calculate Total and Share
  const totalExpense = people.reduce((total, person) => total + person.expense, 0);
  const share = people.length > 0 ? totalExpense / people.length : 0;

  // Calculate who owes how much
  const getBalance = (personExpense) => (personExpense - share).toFixed(2);

  // Remove a person
  const removePerson = (index) => {
    const updatedPeople = people.filter((_, i) => i !== index);
    setPeople(updatedPeople);
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <h1>💸 Expense Splitter</h1>

      <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <button onClick={addPerson}>Add Person</button>
      </div>

      {people.length > 0 ? (
        <div className="summary">
          <h2>Total Expense: ₹{totalExpense.toFixed(2)}</h2>
          <h3>Each Person&apos;s Share: ₹{share.toFixed(2)}</h3>
        </div>
      ) : (
        <p>No expenses added yet!</p>
      )}

      <div className="people-list">
        {people.map((person, index) => (
          <div key={index} className="person-card">
            <p>
              <strong>{person.name}</strong> spent ₹{person.expense.toFixed(2)}
            </p>
            <p>
              {getBalance(person.expense) > 0
                ? `Receives ₹${Math.abs(getBalance(person.expense))}`
                : `Owes ₹${Math.abs(getBalance(person.expense))}`}
            </p>
            <button className="remove-btn" onClick={() => removePerson(index)}>
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseSplitter;
