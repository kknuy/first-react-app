import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name, id }) => {
    return (
        <span key={id} className={"badge bg-" + color + " m-2"}>
            {name}
        </span>
    );
};

Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};
export default Qualitie;
