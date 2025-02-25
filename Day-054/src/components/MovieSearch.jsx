import { useState } from 'react';
import '../App.css';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

const MovieSearch = ({ addToWatchlist }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    if (!query) return alert('Enter a movie name!');
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&query=${query}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className='search-container'>
      <h1>🎬 Movie Search & Watchlist</h1>
      <input
        type='text'
        placeholder='Search for a movie...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Search</button>

      <div className='movie-list'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addToWatchlist={addToWatchlist}
          />
        ))}
      </div>
    </div>
  );
};

MovieSearch.propTypes = {
  addToWatchlist: PropTypes.func.isRequired,
};

export default MovieSearch;
