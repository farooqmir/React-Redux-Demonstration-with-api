import React, { Component } from "react";
import Articles from "../Lists/Articles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "../../components/shared/Loader";
import * as actions from "../../actions/articlesActions";
import { getArticleTitleByRoute } from "../../utils/RoutHelpers";
import content from "../../static/Content";
import Alert from "../shared/Alert";

/**
 * Articles Page Container is used to view all articles on a page
 * Coontainer Component
 * @export
 * @class ArticlesPage
 * @extends {Component}
 */
export class ArticlesPage extends Component {
  constructor(props) {
    super(props);
    this.currentlyViewing = "Articles";
  }

  componentWillUpdate(nextProps) {
    //TODO: Use state router
    if (
      nextProps.match.params.type != this.props.match.params.type &&
      nextProps.match.params.type != this.props.match.params.type
    ) {
      this.currentlyViewing = getArticleTitleByRoute(
        content,
        nextProps.match.url
      );
      this.props.actions.fetchArticles(nextProps.match.params);
    }
  }
  componentWillMount() {
    let {
      match: { params }
    } = this.props;
    this.props.actions.fetchArticles(params);

    this.currentlyViewing = getArticleTitleByRoute(
      content,
      this.props.match.url
    );
  }

  render() {
    return (
      <div>
        {this.props.articles.isFetching && <Loader />}
        {!this.props.articles.isFetching && (
          <div>
            <Alert type="alert-seconday" contentbox="mt-2">
              <h6>You are currently viewing:</h6>
              <h4>
                <strong>{this.currentlyViewing}</strong>
              </h4>
            </Alert>

            <Articles {...this.props} />
          </div>
        )}
      </div>
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
)(ArticlesPage);

//TODO: PropTypes to be added
