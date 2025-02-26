import { useState, useEffect } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import "./App.css";

const App = () => {
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");
    return savedGoals ? JSON.parse(savedGoals) : [];
  });

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = (text) => {
    const newGoal = {
      id: Date.now(),
      text,
      completed: false,
    };
    setGoals([...goals, newGoal]);
  };

  const toggleComplete = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <div className="app">
      <h1>✅ Daily Goal Tracker</h1>
      <GoalForm addGoal={addGoal} />
      <GoalList goals={goals} toggleComplete={toggleComplete} deleteGoal={deleteGoal} />
    </div>
  );
};

export default App;
