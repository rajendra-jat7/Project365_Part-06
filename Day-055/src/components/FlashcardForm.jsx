import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css"

const FlashcardForm = ({ addFlashcard }) => {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.trim() && translation.trim()) {
      addFlashcard({ word, translation });
      setWord("");
      setTranslation("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flashcard-form">
      <input
        type="text"
        placeholder="Enter Word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Translation"
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
      />
      <button type="submit">➕ Add Flashcard</button>
    </form>
  );
};

FlashcardForm.propTypes = {
  addFlashcard: PropTypes.func.isRequired,
};

export default FlashcardForm;
