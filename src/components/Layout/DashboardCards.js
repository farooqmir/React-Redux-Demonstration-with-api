import React from "react";
import Content from "../../static/Content";
import Card from "./Card";

/**
 * DashboardCards functional component represents the each card in Dashbord
 * Dashboard cards are displayed in the Dashboard- when user lands on hame page
 * @param {*} props
 */
const DashboardCards = () => {
  const renderDashCards = () => {
    return Content.dashboardCards.map((item, i) => {
      return (
        <Card
          key={i}
          title={item.title}
          bodytext={item.bodytext}
          linktext={item.linktext}
          linkurl={item.linkurl}
        />
      );
    });
  };
  return renderDashCards();
};
export default DashboardCards;

//TODO: PropTypes to be added
