import PropTypes from "prop-types";
import CountdownCard from "./CountdownCard";
import "../App.css"

const CountdownList = ({ countdowns, onDelete }) => (
  <div className="countdown-list">
    {countdowns.length === 0 ? (
      <p className="empty-message">No events added yet. Add one to start!</p>
    ) : (
      countdowns.map((countdown) => (
        <CountdownCard key={countdown.id} countdown={countdown} onDelete={onDelete} />
      ))
    )}
  </div>
);

CountdownList.propTypes = {
  countdowns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CountdownList;
