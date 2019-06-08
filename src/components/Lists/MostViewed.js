import React, { Component } from "react";
import Content from "../../static/Content.js";
import Maps from "../../static/Maps";
import { Link } from "react-router-dom";

/**
 * MostViewed: show last week links
 * @export
 * @class MostViewed
 * @extends {Component}
 */
export default class MostViewed extends Component {
  constructor(props) {
    super(props);
  }
  renderMostViewedOptions() {
    return Content.mostPopular.map((item, k) => {
      let classname = `badge badge-pill mr-2 p-2 badge-${
        Maps.colorsByIndex[k]
      }`;
      return (
        <li className="nav-item">
          <Link key={k} to={item.path} className={classname}>
            {item.label}
          </Link>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="card mt-4 mb-4 p-4 justify-content-end">
          <h4 className="mr-3">Articles this week: </h4>
          <ul className="nav ">{this.renderMostViewedOptions()}</ul>
        </div>
      </div>
    );
  }
}

//TODO: PropTypes to be added
