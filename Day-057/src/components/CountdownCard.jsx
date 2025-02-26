import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../App.css"

const CountdownCard = ({ countdown, onDelete }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const eventDate = new Date(countdown.date);
      const difference = eventDate - now;

      if (difference <= 0) {
        onDelete(countdown.id); // Remove if time is up
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [countdown, onDelete]);

  return (
    <div className="countdown-card">
      <h2>{countdown.title}</h2>
      <p>
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
      </p>
      <button className="delete-btn" onClick={() => onDelete(countdown.id)}>❌</button>
    </div>
  );
};

CountdownCard.propTypes = {
  countdown: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CountdownCard;
