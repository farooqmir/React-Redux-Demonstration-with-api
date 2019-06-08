import React from "react";
import DashboardCards from "../Layout/DashboardCards";

/**
 * Dashboard functional component represents the Dashbord
 * Dashboard is where user land when he hits this portal
 * @param {*} props
 */
const Dashboard = props => {
  const { title } = props;
  return (
    <div className="home">
      <div className="card text-center">
        <div className="card-header">{title}</div>
        <DashboardCards />
        <div className="card-footer text-muted" />
      </div>
    </div>
  );
};
export default Dashboard;

//TODO: PropTypes to be added
