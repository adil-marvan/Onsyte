import React from "react";
import "./Datatable.css";

const data = [
  { id: "FL-LAK-1", global_id: "C-101-101-V2", client_info: "FLAB07156", station_id: "Florida", description: "Lake County", operator: "32757", permit_no: "400", model_no: "121.00", state: "121.00", actions: "121.00", zip: "121.00", latitude: "121.00", county: "121.00" },
  { id: "FL-LAK-2", global_id: "C-101-101-V2", client_info: "FLAB07156", station_id: "Florida", description: "Lake County", operator: "32757", permit_no: "400", model_no: "85.50", state: "85.50", actions: "85.50", zip: "85.50", latitude: "85.50", county: "85.50" },
  { id: "FL-LAK-3", global_id: "C-101-101-V2", client_info: "FLAB07156", station_id: "Florida", description: "Lake County", operator: "32757", permit_no: "400", model_no: "60.00", state: "60.00", actions: "60.00", zip: "60.00", latitude: "60.00", county: "60.00" },
  { id: "FL-LAK-4", global_id: "C-101-101-V2", client_info: "FLAB07156", station_id: "Florida", description: "Lake County", operator: "32757", permit_no: "400", model_no: "110.50", state: "110.50", actions: "110.50", zip: "110.50", latitude: "110.50", county: "110.50" },
  { id: "FL-LAK-5", global_id: "C-101-101-V2", client_info: "FLAB07156", station_id: "Florida", description: "Lake County", operator: "32757", permit_no: "400", model_no: "70.5", state: "70.5", actions: "70.5", zip: "70.5", latitude: "70.5", county: "70.5" },
  { id: "FL-LAK-6", global_id: "C-101-101-V2", client_info: "FLAB07156", station_id: "Florida", description: "Lake County", operator: "32757", permit_no: "400", model_no: "121.00", state: "121.00", actions: "121.00", zip: "121.00", latitude: "121.00", county: "121.00" },
  { id: "FL-LAK-7", global_id: "C-101-101-V2", client_info: "FLAB07156", station_id: "Florida", description: "Lake County", operator: "32757", permit_no: "400", model_no: "180.00", state: "180.00", actions: "180.00", zip: "180.00", latitude: "180.00", county: "180.00" },
  { id: "FL-LAK-8", global_id: "C-101-101-V2", client_info: "FLAB07156", station_id: "Florida", description: "Lake County", operator: "32757", permit_no: "400", model_no: "150.00", state: "150.00", actions: "150.00", zip: "150.00", latitude: "150.00", county: "150.00" },
  { id: "FL-LAK-9", global_id: "C-101-101-V2", client_info: "FLAB07156", station_id: "Florida", description: "Lake County", operator: "32757", permit_no: "400", model_no: "157.00", state: "157.00", actions: "157.00", zip: "157.00", latitude: "157.00", county: "157.00" }
];

function DataTable() {
  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="station-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Global Id</th>
              <th>Client Info</th>
              <th>Station Id</th>
              <th>Description</th>
              <th>Operator</th>
              <th>Permit No</th>
              <th>Model No</th>
              <th>State</th>
              <th>Actions</th>
              <th>Zip</th>
              <th>Latitude</th>
              <th>County</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.global_id}</td>
                <td>{row.client_info}</td>
                <td>{row.station_id}</td>
                <td>{row.description}</td>
                <td>{row.operator}</td>
                <td>{row.permit_no}</td>
                <td>{row.model_no}</td>
                <td>{row.state}</td>
                <td>{row.actions}</td>
                <td>{row.zip}</td>
                <td>{row.latitude}</td>
                <td>{row.county}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
