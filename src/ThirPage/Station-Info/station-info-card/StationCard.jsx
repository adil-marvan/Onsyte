import React from "react";
import "./StationInfo.css";

const DetailsForm = () => {
  const fields = [
    { label: "STATION ID", value: "FL_LAK_9" },
    { label: "CONTROLLER SERIAL NO", value: "18567" },
    { label: "SOFTWARE", value: "2.4" },
    { label: "FIRMWARE", value: "V2.2" },
  ];

  return (
    <div className="station-container">
    <div className="details-container">
      <h2 className="details-title">Details</h2>
      <div className="details-grid">
        {fields.map(({ label, value },index) => (
          <div key={index} className="field-group">
            <label className="field-label">{label}</label>
            <div className="field-input-wrapper">
              <input type="text" value={value} readOnly className="field-input" />
              <button className="edit-button">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DetailsForm;
