import React from "react";
import "./DataTable.css"
import filter from "../Assets/Table-image/filter .png"

const data = [
  { id: 1, clint_info: "FLk-1", permit_no: "FLAB07156", connection: "online", alarm: "", state: "Florida", country: "Lake country", zip: "32757", daily_Flow: "121", rtl: "121", dtl: "121" },
  { id: 1, clint_info: "FLk-2", permit_no: "FLAB07156", connection: "online", alarm: "", state: "Florida", country: "Lake country", zip: "32757", daily_Flow: "121", rtl: "121", dtl: "121" },
  { id: 1, clint_info: "FLk-3", permit_no: "FLAB07156", connection: "online", alarm: "", state: "Florida", country: "Lake country", zip: "32757", daily_Flow: "121", rtl: "121", dtl: "121" },
  { id: 1, clint_info: "FLk-4", permit_no: "FLAB07156", connection: "online", alarm: "", state: "Florida", country: "Lake country", zip: "32757", daily_Flow: "121", rtl: "121", dtl: "121" },
  { id: 1, clint_info: "FLk-5", permit_no: "FLAB07156", connection: "online", alarm: "", state: "Florida", country: "Lake country", zip: "32757", daily_Flow: "121", rtl: "121", dtl: "121" },
  { id: 1, clint_info: "FLk-6", permit_no: "FLAB07156", connection: "online", alarm: "", state: "Florida", country: "Lake country", zip: "32757", daily_Flow: "121", rtl: "121", dtl: "121" },
  { id: 1, clint_info: "FLk-7", permit_no: "FLAB07156", connection: "online", alarm: "", state: "Florida", country: "Lake country", zip: "32757", daily_Flow: "121", rtl: "121", dtl: "121" },
  { id: 1, clint_info: "FLk-8", permit_no: "FLAB07156", connection: "online", alarm: "alarm", state: "Florida", country: "Lake country", zip: "32757", daily_Flow: "121", rtl: "121", dtl: "121" },
  { id: 1, clint_info: "FLk-9", permit_no: "FLAB07156", connection: "online", alarm: "", state: "Florida", country: "Lake country", zip: "32757", daily_Flow: "121", rtl: "121", dtl: "121" },
]

function DataTable() {
  return (
    <div className="table-container">
      <div className="table-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>All Stations</h2>
          <p> - 100 entries</p>
        </div>
        <input className="search-input" type="text" placeholder=" Search" />
        <div className="filter">
          <img src={filter} alt="Filter" />
          
        </div>
      </div>


      <div className="table-wrapper">
        <table className="station-table">
          <thead>
            <tr>
              <th>Client Info</th>
              <th>Permit No</th>
              <th>Connection</th>
              <th>Alarm</th>
              <th>State</th>
              <th>Country</th>
              <th>Zip</th>
              <th>Daily Flow</th>
              <th>RTL</th>
              <th>DTL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.clint_info}</td>
                <td>{row.permit_no}</td>
                <td className="connection">{row.connection}</td>
                <td className={row.alarm }>
                  {row.alarm}
                </td>

                <td>{row.state}</td>
                <td>{row.country}</td>
                <td>{row.zip}</td>
                <td>{row.daily_Flow}</td>
                <td>{row.rtl}</td>
                <td>{row.dtl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;

