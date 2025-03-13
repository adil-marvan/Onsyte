import React, { useState } from "react";
import "./AlarmTable.css";
import filter from "../../Assets/Table-image/filter .png"; 
import Button from "../../Components/button/Button"; 

const AlarmTable = () => {
  const [alarms, setAlarms] = useState([
    {
      time: "16/01/2025 10:31 AM",
      globalId: "FL-LAK-1",
      clientInfo: "FL-LAK-1",
      stationId: "FLAB07156",
      alarm: "WASHOUT, DT HIGH WATER, RT HIGH WATER",
      category: "Critical",
      state: "Florida",
    },
    {
      time: "26/12/2024 08:21 AM",
      globalId: "GA-WAL-1",
      clientInfo: "GA-WAL-1",
      stationId: "FLAB07156",
      alarm: "WASHOUT, DT HIGH WATER, RT HIGH WATER",
      category: "Not Critical",
      state: "Florida",
    },
  ]);

  return (
    <div className="table-container">
      {/* Table Header */}
      <div className="table-header">
        <h2>All Stations</h2>
        <input className="search-input" type="text" placeholder="Search" />
        <div className="filter">
          <img src={filter} alt="Filter" />
        </div>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="station-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Global Id</th>
              <th>Client Info</th>
              <th>Station Id</th>
              <th>Alarm</th>
              <th>Category</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {alarms.map((alarm, index) => (
              <tr key={index}>
                <td>{alarm.time}</td>
                <td>{alarm.globalId}</td>
                <td>{alarm.clientInfo}</td>
                <td>{alarm.stationId}</td>
                <td className="alarm-text">{alarm.alarm}</td>
                <td>
                  <Button
                    color={alarm.category === "Critical" ? "red" : "orange"}
                    size="large"
                    label={alarm.category}
                    type="button"
                  />
                </td>
                <td>{alarm.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlarmTable;



