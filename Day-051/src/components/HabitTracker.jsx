import { useState, useEffect } from "react";
import "../styles/HabitTracker.css";

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  // Load habits from local storage on mount
  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits"));
    if (storedHabits) setHabits(storedHabits);
  }, []);

  // Save habits to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (newHabit.trim() !== "") {
      setHabits([...habits, { name: newHabit, progress: Array(7).fill(false) }]);
      setNewHabit("");
    }
  };

  const toggleProgress = (habitIndex, dayIndex) => {
    const updatedHabits = [...habits];
    updatedHabits[habitIndex].progress[dayIndex] = !updatedHabits[habitIndex].progress[dayIndex];
    setHabits(updatedHabits);
  };

  const deleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
  };

  return (
    <div className="habit-tracker">
      <h1>📅 Habit Tracker</h1>
      <div className="habit-input">
        <input
          type="text"
          placeholder="Enter a new habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button onClick={addHabit}>Add Habit</button>
      </div>
      <div className="habits-list">
        {habits.length === 0 ? <p>No habits added yet!</p> : null}
        {habits.map((habit, habitIndex) => (
          <div key={habitIndex} className="habit-card">
            <h3>{habit.name}</h3>
            <div className="progress-tracker">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`day ${habit.progress[dayIndex] ? "completed" : ""}`}
                  onClick={() => toggleProgress(habitIndex, dayIndex)}
                >
                  {day}
                </div>
              ))}
            </div>
            <button className="delete-btn" onClick={() => deleteHabit(habitIndex)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitTracker;
