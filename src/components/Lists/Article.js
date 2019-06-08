import React, { Component } from "react";
import { Link } from "react-router-dom";
import content from "../../static/Content";
/**
 * Article component represents each Article Title whiledisplaying Articles
 * @export
 * @class Article
 * @extends {Component}
 */
export default class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imageurl =
      this.props.article.media &&
      this.props.article.media[0] &&
      this.props.article.media[0]["media-metadata"][2].url;

    imageurl = imageurl ? imageurl : content.defaults.articleImage;

    return (
      <div className="card">
        <img src={imageurl} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{this.props.article.title}</h3>
          <h6 className="card-subtitle mb-2 text-muted">
            <strong>{this.props.article.updated}</strong>
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            {this.props.article.source} - {this.props.article.byline}
          </h6>
          <p className="card-text">{this.props.article.abstract}</p>
          <Link to={`/articles/${this.props.article.id}`} className="card-link">
            View this Article
          </Link>
        </div>
      </div>
    );
  }
}

//TODO: PropTypes to be added
