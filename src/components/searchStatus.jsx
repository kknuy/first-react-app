import React from "react";
import PropTypes from 'prop-types'

const SearchStatus = ({ length }) => {
  const formatText = () => {
    return length === 0
      ? "Никто не тусанет с тобой"
      : `Сегодня с тобой тусанет ${
          length >= 5
            ? length + " человек"
            : length + " человека"
        }`;
  };

  return (
    <h2>
      <span className={length === 0 ? "badge bg-warning text-dark m-2" : "badge bg-primary m-2"}>{formatText()}</span>
    </h2>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
}
export default SearchStatus;
