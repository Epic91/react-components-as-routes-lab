import React from 'react';
import { NavLink } from 'react-router-dom';
import { movies } from '../data';

const NavBar = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {/* iterate throught the movie array */}
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>Name: {movie.title}</h2>
          <p>Time: {movie.time}</p>
          <p>Genres: </p>
            <ul>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
