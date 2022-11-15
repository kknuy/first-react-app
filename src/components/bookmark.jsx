import React from "react";
import PropTypes from 'prop-types'

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.string.isRequired,
}
export default BookMark;
