import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

const CountdownForm = ({ addCountdown }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) return alert("Please fill in all fields!");

    addCountdown({ title, date });
    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="countdown-form">
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">➕ Add Event</button>
    </form>
  );
};

CountdownForm.propTypes = {
  addCountdown: PropTypes.func.isRequired,
};

export default CountdownForm;
