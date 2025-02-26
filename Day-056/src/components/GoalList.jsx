import PropTypes from "prop-types";
import GoalItem from "./GoalItem";
import "../App.css"

const GoalList = ({ goals, toggleComplete, deleteGoal }) => {
  if (goals.length === 0) {
    return <p className="no-goals">No goals for today. Add some!</p>;
  }

  return (
    <div className="goal-list">
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          toggleComplete={toggleComplete}
          deleteGoal={deleteGoal}
        />
      ))}
    </div>
  );
};

GoalList.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteGoal: PropTypes.func.isRequired,
};

export default GoalList;
