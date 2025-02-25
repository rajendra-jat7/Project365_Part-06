import { useState, useEffect } from "react";
import FlashcardForm from "./components/FlashcardForm";
import FlashcardList from "./components/FlashcardList";
import "./App.css";

const App = () => {
  const [flashcards, setFlashcards] = useState(() => {
    const storedCards = localStorage.getItem("flashcards");
    return storedCards ? JSON.parse(storedCards) : [];
  });

  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
  }, [flashcards]);

  const addFlashcard = ({ word, translation }) => {
    const newCard = {
      id: Date.now(),
      word,
      translation,
    };
    setFlashcards([newCard, ...flashcards]);
  };

  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter((card) => card.id !== id));
  };

  return (
    <div className="app">
      <h1>📚 Language Learning Flashcards</h1>
      <FlashcardForm addFlashcard={addFlashcard} />
      <FlashcardList flashcards={flashcards} onDelete={deleteFlashcard} />
    </div>
  );
};

export default App;
