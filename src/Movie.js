import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// 매개변수 자리에서 곧바로 props를 구조분해(=인자로 받음)
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h2 className="movie_title">{title}</h2>
        <h5 className="movie_year">{year}</h5>

        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="movie_genre">
              {genre}
            </li>
          ))}
        </ul>

        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.PpopTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
