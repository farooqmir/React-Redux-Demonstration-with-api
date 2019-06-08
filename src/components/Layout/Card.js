import React from "react";
import { Link } from "react-router-dom";

/**
 * Card Functional Component is used to display a Card
 * @param {*} props
 */
const Card = props => {
  const { title, bodytext, linkurl, linktext, imageurl } = props;
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      {imageurl && (
        <p className="card-text">
          <img src={imageurl} />
        </p>
      )}
      <p className="card-text">{bodytext}</p>
      {linkurl && (
        <Link to={linkurl} className="btn btn-primary ">
          <strong>{linktext}</strong>
        </Link>
      )}
      <hr />
    </div>
  );
};
export default Card;

//TODO: PropTypes to be added
