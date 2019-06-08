import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

/**
 * Navigation Item represents each link in the main header navigation
 * @export
 * @class NavigationItem
 * @extends {PureComponent}
 */

export default class NavigationItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    let { path } = this.props;

    return (
      <li className="nav-item active">
        <Link to={path.path} className="btn btn-primary">
          {path.displayName}
          <span className="sr-only">(current)</span>
        </Link>
      </li>
    );
  }
}
//TODO: Add PropTypes
