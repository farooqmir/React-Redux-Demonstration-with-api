import React from "react";

/**
 * Alert show bootstrap Alert
 */
const Alert = props => {
  const classes_ = `alert alert-secondary ${props.type} ${props.contentbox}`;
  return (
    <div className={classes_} role="alert">
      {props.children}
    </div>
  );
};

export default Alert;

//TODO: PropTypes to be added
