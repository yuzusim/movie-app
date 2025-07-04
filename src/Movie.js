import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// 매개변수 자리에서 곧바로 props를 구조분해(=인자로 받음)
function movie({ id, year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie_data">
        <h2 class="movie_title">{title}</h2>
        <h5 class="movie_year">{year}</h5>
        <p class="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

movie.PpopTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default movie;
