import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/articlesActions";

/**
 * Search component helps user search articles currently displayed
 * @export
 * @class Search
 * @extends {Component}
 */
export class Search extends Component {
  constructor(props) {
    super(props);
  }

  searchArticles(done, event) {
    this.props.actions.SearchArticlesByText(event.target.value, true);
  }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          onChange={this.searchArticles.bind(this, false)}
          placeholder="Search your Articles here."
          aria-label="Search"
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { articles: state.articles, router: state.router };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
