import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

const GoalForm = ({ addGoal }) => {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.trim()) {
      addGoal(goal);
      setGoal("");
    }
  };

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your daily goal..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button type="submit">➕ Add Goal</button>
    </form>
  );
};

GoalForm.propTypes = {
  addGoal: PropTypes.func.isRequired,
};

export default GoalForm;
