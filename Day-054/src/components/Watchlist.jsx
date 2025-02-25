import PropTypes from 'prop-types';
import '../App.css';

const Watchlist = ({ watchlist, removeFromWatchlist }) => {
  return (
    <div className='watchlist-container'>
      <h2>📋 Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist yet!</p>
      ) : (
        <div className='watchlist'>
          {watchlist.map((movie) => (
            <div key={movie.id} className='watchlist-item'>
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <h4>{movie.title}</h4>
                <button onClick={() => removeFromWatchlist(movie.id)}>
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Watchlist.propTypes = {
  watchlist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
  removeFromWatchlist: PropTypes.func.isRequired,
};

export default Watchlist;
