import { useState, useEffect } from "react";
import MovieSearch from "./components/MovieSearch";
import Watchlist from "./components/MovieCard";
import "./App.css"

const App = () => {
  const [watchlist, setWatchlist] = useState(() => {
    const stored = localStorage.getItem("watchlist");
    return stored ? JSON.parse(stored) : [];
  });

  // Save watchlist to localStorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    } else {
      alert("Movie is already in your watchlist!");
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
  };

  return (
    <div className="app">
      <MovieSearch addToWatchlist={addToWatchlist} />
      <Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />
    </div>
  );
};

export default App;
