import React, { useState } from "react";
import "./HistoryTable.css";
import Button from "../../../Components/button/Button";

const stationsData = [
    { id: "FL-APK-1", stationId: "FLAB07156", state: "Florida", country: "Lake County", zip: "32712" },
    { id: "FL-APK-10", stationId: "FLAB07156", state: "Florida", country: "Lake County", zip: "32712" },
];

function Table() {
    const [selectedStation, setSelectedStation] = useState(stationsData[0].id);

    return (
        <div className="container">
            {/* Top Controls */}
            <div className="controls">
                <h2>Stations</h2>
                <input type="text" placeholder="Search..." className="search-input" />

                <h2>Period</h2>
                <input type="text" className="date-input" placeholder="Select To and From Dates" disabled />

                <div className="radio-group">
                    <label><input type="radio" name="period" value="preset" defaultChecked /> Preset</label>
                    <label><input type="radio" name="period" value="current" /> Current Month</label>
                    <label><input type="radio" name="period" value="past" /> Past Month</label>
                </div>

                <div className="btn-group">
                    <Button color="blue" size="small" label="Show" type="button" />
                    <Button color="blue" size="small" label="Download CSV" type="button" />
                </div>
            </div>

            {/* Table */}
            <div className="stations-table">
                <table>
                    <thead>
                        <tr>
                            <th>Global Id</th>
                            <th>Station Id</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>ZIP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stationsData.map((station) => (
                            <tr key={station.id}>
                                <td>
                                    <input
                                        type="radio"
                                        name="station"
                                        value={station.id}
                                        checked={selectedStation === station.id}
                                        onChange={() => setSelectedStation(station.id)}
                                    />
                                    {station.id}
                                </td>
                                <td>{station.stationId}</td>
                                <td>{station.state}</td>
                                <td>{station.country}</td>
                                <td>{station.zip}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

          
        </div>
    );
}

export default Table;


