import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

// 매개변수 자리에서 곧바로 props를 구조분해(=인자로 받음)
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail", // 이동할 경로
        state: {
          // 함께 전달할 상태값
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
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
          <p className="movie_summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
