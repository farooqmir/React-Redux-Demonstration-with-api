import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/articlesActions";
import ArticleDetails from "../Lists/ArticleDetails";

/**
 * Articla Page Component is used to view an Article
 * User can navigate to NyTimes Article from here
 * @export
 * @class ArticlePage
 * @extends {Component}
 */
export class ArticlePage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const params = this.props.router.location.pathname.match(/[0-9]+/g);
    if (params.length) {
      this.props.actions.fetchArticleById(params[0]);
    }
  }

  render() {
    return (
      <article>
        <ArticleDetails {...this.props.article} />
      </article>
    );
  }
}

function mapStateToProps(state) {
  return { article: state.articles.article, router: state.router };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlePage);

//TODO: PropTypes to be added
