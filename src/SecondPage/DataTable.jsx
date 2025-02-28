import React from "react";
import "./DataTable.css";

const Table = () => {
  const data = [
    { id: "FL-LAK-1", state: "Florida", status: "Online", alarm: "" },
    { id: "FL-LAK-2", state: "Florida", status: "Online", alarm: "" },
    { id: "FL-LAK-3", state: "Florida", status: "Online", alarm: "" },
    { id: "FL-LAK-4", state: "Florida", status: "Online", alarm: "CRITICAL" },
  ];

  return (
    <div className="table-container">
      <h3>All Stations</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>State</th>
            <th>Connection</th>
            <th>Alarm</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={row.alarm ? "critical" : ""}>
              <td>{row.id}</td>
              <td>{row.state}</td>
              <td className="status">{row.status}</td>
              <td className="alarm">{row.alarm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
