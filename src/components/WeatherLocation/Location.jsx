import React from "react";
import "./styles.css";

const Location = props => {
  const { city } = props;
  return <div className="locationCont">{city}</div>;
};

export default Location;
