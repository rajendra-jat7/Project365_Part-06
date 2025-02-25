import PropTypes from "prop-types";
import Flashcard from "./Flashcard";
import "../App.css"

const FlashcardList = ({ flashcards, onDelete }) => {
  return (
    <div className="flashcard-list">
      {flashcards.length === 0 ? (
        <p>No flashcards available. Start adding some!</p>
      ) : (
        flashcards.map((card) => (
          <Flashcard key={card.id} card={card} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

FlashcardList.propTypes = {
  flashcards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      word: PropTypes.string.isRequired,
      translation: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default FlashcardList;
