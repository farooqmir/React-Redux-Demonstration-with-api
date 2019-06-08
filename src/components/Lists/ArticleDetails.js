import React from "react";

/**
 * ArticleDetails functional component is used to show Article Details
 * Article Details are shown when user clicks on a particular article in article listing
 * @param {*} props
 */
const ArticleDetails = props => {
  const { title, abstract, byline, source, type, url } = props;
  const imageurl =
    props.media && props.media[0] && props.media[0]["media-metadata"][2].url;
  return (
    <div className="card article-details-card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <h5 className="card-title">{byline}</h5>
        <h6 className="card-title">
          <strong>{source}</strong>
        </h6>
        <h6 className="card-title">
          <strong>Type: {type}</strong>
        </h6>
        {imageurl && (
          <p className="card-text">
            <img src={imageurl} />
          </p>
        )}
        <p className="card-text">{abstract}</p>
        {url && (
          <a target="_blank" href={url} className="btn btn-primary ">
            <strong>View Full Article Here</strong>
          </a>
        )}
        <hr />
      </div>
    </div>
  );
};
export default ArticleDetails;

//TODO: PropTypes to be added
