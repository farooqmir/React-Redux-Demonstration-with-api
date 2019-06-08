import React, { Component } from "react";
import Content from "../../static/Content";
import NavigationItem from "../navigation/NavigationItem";

/**
 * Main Navigation represents the main header navigation
 *
 * @export
 * @class MainNavigation
 * @extends {Component}
 */
export default class MainNavigation extends Component {
  constructor(props) {
    super(props);
  }
  renderNavigation() {
    return Content.navigation.paths.map((path, k) => {
      return <NavigationItem key={k} path={path} />;
    });
  }

  render() {
    return <ul className="navbar-nav mr-auto">{this.renderNavigation()}</ul>;
  }
}

//TODO: Proptypes to be added
