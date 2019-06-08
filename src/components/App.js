/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import Header from "./navigation/Header";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import ArticlesPage from "./containers/ArticlesPage";
import ArticlePage from "./containers/ArticlePage";

/**
 * App component for controlling all application pages
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/articles/:type/:days" component={ArticlesPage} />
          <Route exact path="/articles/:id" component={ArticlePage} />
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
