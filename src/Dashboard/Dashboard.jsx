import React from "react";
import "./dashboard.css";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats">
        <div className="stat-box total">100 Total Stations</div>
        <div className="stat-box online">85 Online Stations</div>
        <div className="stat-box alarm">2 In Alarm</div>
        <div className="stat-box offline">15 Offline Stations</div>
      </div>
      <Table />
    </div>
  );
};

export default Dashboard;

