import React, { Component } from "react";
import MainNavigation from "./MainNavigation";
import Search from "./Search";

/**
 * Header component renders the header of the application
 * @export
 * @class Header
 * @extends {Component}
 */
export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Nytimes
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <MainNavigation />
          <Search />
        </div>
      </nav>
    );
  }
}

//TODO: addd proptypes, Cleanup the component
