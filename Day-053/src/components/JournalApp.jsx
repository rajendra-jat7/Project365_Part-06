import { useState, useEffect } from "react";
import "../styles/JournalApp.css";

const JournalApp = () => {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("😊");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("journalEntries"));
    if (storedEntries) setEntries(storedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = () => {
    if (title.trim() && content.trim()) {
      const newEntry = {
        id: Date.now(),
        title,
        content,
        mood,
        date: new Date().toLocaleDateString(),
      };
      setEntries([newEntry, ...entries]);
      setTitle("");
      setContent("");
      setMood("😊");
    } else {
      alert("Please fill in both title and content!");
    }
  };

  const deleteEntry = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
  };

  const editEntry = (id) => {
    const entryToEdit = entries.find((entry) => entry.id === id);
    setTitle(entryToEdit.title);
    setContent(entryToEdit.content);
    setMood(entryToEdit.mood);
    deleteEntry(id);
  };

  const filteredEntries = entries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(search.toLowerCase()) ||
      entry.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="journal-container">
      <h1>📔 Daily Journal</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Journal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your thoughts here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label>
          Mood:
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option value="😊">😊 Happy</option>
            <option value="😐">😐 Neutral</option>
            <option value="😢">😢 Sad</option>
          </select>
        </label>
        <button onClick={addEntry}>Add Entry</button>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search journal..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="entries-list">
        {filteredEntries.length === 0 ? (
          <p>No journal entries found!</p>
        ) : (
          filteredEntries.map((entry) => (
            <div key={entry.id} className="entry-card">
              <h3>{entry.title}</h3>
              <p>{entry.content}</p>
              <p>Date: {entry.date}</p>
              <p>Mood: {entry.mood}</p>
              <button onClick={() => editEntry(entry.id)}>✏️ Edit</button>
              <button onClick={() => deleteEntry(entry.id)}>❌ Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JournalApp;
