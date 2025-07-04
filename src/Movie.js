import React from "react";
import PropTypes from "prop-types";

function movie() {
  return <h1></h1>;
}

movie.PpopTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default movie;
