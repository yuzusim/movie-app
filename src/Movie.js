import React from "react";
import PropTypes from "prop-types";

// 매개변수 자리에서 곧바로 props를 구조분해(=인자로 받음)
function movie({ id, year, title, summary, poster }) {
  return <h2>{title}</h2>;
}

movie.PpopTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default movie;
