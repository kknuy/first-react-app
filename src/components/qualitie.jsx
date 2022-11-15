import React from "react";

const Qualitie = ({ color,name,id }) => {
  return (
      <span key={id} className={"badge bg-" + color + " m-2"}>{name}</span>
    );
};

export default Qualitie;
