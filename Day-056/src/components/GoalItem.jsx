import PropTypes from "prop-types";
import "../App.css"

const GoalItem = ({ goal, toggleComplete, deleteGoal }) => {
  return (
    <div className={`goal-item ${goal.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(goal.id)}>{goal.text}</span>
      <button className="delete-btn" onClick={() => deleteGoal(goal.id)}>
        ❌
      </button>
    </div>
  );
};

GoalItem.propTypes = {
  goal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteGoal: PropTypes.func.isRequired,
};

export default GoalItem;
