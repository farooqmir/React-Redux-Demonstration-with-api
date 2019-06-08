import React, { Component } from "react";
import Article from "./Article";
import MostViewed from "./MostViewed";
import Alert from "../shared/Alert";

/**
 * Articles component is used to show all the fetched articles
 * @export
 * @class Articles
 * @extends {Component}
 */
export default class Articles extends Component {
  constructor(props) {
    super(props);
  }

  renderList(items, params) {
    if (items.length > 0) {
      return items.map(function(article, k) {
        return (
          <div key={k} className="col col-12 col-md-4 m10">
            <Article article={article} criteria={params} />
          </div>
        );
      });
    } else {
      return (
        <Alert type="alert-danger" contentbox="m-4 p-5">
          Sorry, we couldn't find any related articles.
        </Alert>
      );
    }
  }
  render() {
    const {
      match: { params }
    } = this.props;
    const items = this.props.articles.isSearching
      ? this.props.articles.filteredItems
      : this.props.articles.items;
    return (
      <section>
        <MostViewed />
        <article className="row">{this.renderList(items, params)}</article>
      </section>
    );
  }
}
//TODO: PropTypes to be added
