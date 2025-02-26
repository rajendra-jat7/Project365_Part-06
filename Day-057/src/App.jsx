import { useState, useEffect } from "react";
import CountdownForm from "./components/CountdownForm";
import CountdownList from "./components/CountdownList";
import "./App.css";

const App = () => {
  // Load countdowns from localStorage with error handling
  const loadCountdowns = () => {
    try {
      const saved = localStorage.getItem("countdowns");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error parsing local storage:", error);
      localStorage.removeItem("countdowns");
      return [];
    }
  };

  const [countdowns, setCountdowns] = useState(loadCountdowns);

  // Save countdowns to localStorage on update
  useEffect(() => {
    localStorage.setItem("countdowns", JSON.stringify(countdowns));
  }, [countdowns]);

  // Add new countdown
  const addCountdown = ({ title, date }) => {
    const newCountdown = { id: Date.now(), title, date };
    setCountdowns([...countdowns, newCountdown]);
  };

  // Delete countdown
  const deleteCountdown = (id) => {
    setCountdowns(countdowns.filter((countdown) => countdown.id !== id));
  };

  return (
    <div className="app">
      <h1>⏳ Dynamic Event Countdown</h1>
      <CountdownForm addCountdown={addCountdown} />
      <CountdownList countdowns={countdowns} onDelete={deleteCountdown} />
    </div>
  );
};

export default App;
