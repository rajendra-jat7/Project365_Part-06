import PropTypes from 'prop-types';

const MovieCard = ({ movie, addToWatchlist }) => {
  // Ensure movie object exists before rendering
  if (!movie || !movie.poster_path) return null;

  return (
    <div className='movie-card'>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title || 'Movie Poster'}
      />
      <h3>{movie.title || 'Untitled Movie'}</h3>
      <p>⭐ {movie.vote_average || 'N/A'}</p>
      <button onClick={() => addToWatchlist(movie)}>➕ Add to Watchlist</button>
    </div>
  );
};

// ✅ Add PropTypes validation
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
  addToWatchlist: PropTypes.func.isRequired,
};

export default MovieCard;
