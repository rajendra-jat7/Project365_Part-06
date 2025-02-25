import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

const Flashcard = ({ card, onDelete }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flashcard-content">
        <p>{flipped ? card.translation : card.word}</p>
      </div>
      <button className="delete-btn" onClick={(e) => {
        e.stopPropagation();
        onDelete(card.id);
      }}>❌</button>
    </div>
  );
};

Flashcard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    word: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Flashcard;
