import React from "react";
import "./CardRight.css";

const detailsData = [
  {
    title: "Details",
    fields: [
      { label: "TOTAL BATCHES STARTED", value: "610" },
      { label: "TOTAL BATCHES TREATED", value: "512" },
      { label: "TOTAL WASTE WATER TREATED", value: "54235" },
      { label: "DAILY FLOW AT DISCHARGE (gal)", value: "345.45" },
      { label: "AVERAGE BATCH SIZE", value: "105.93" },
      { label: "TOTAL DAYS RUNNING", value: "157" },
    ],
  },
  {
    title: "Details",
    fields: [
      { label: "XFER PUMP RUNTIME", value: "38.93" },
      { label: "DISCHARGE PUMP RUNTIME", value: "512" },
      { label: "BLOWER RUN TIME", value: "345.45" },
      { label: "WASTING CYCLES", value: "105.93" },
    ],
  },
  {
    title: "Details",
    fields: [
      { label: "P1 STATE", value: "ON" },
      { label: "P1 CURRENT ONTIME", value: "512" },
      { label: "P1 TOTAL RUNTIME", value: "12:12" },
      { label: "P2 STATE", value: "345.45" },
      { label: "P2 CURRENT ONTIME", value: "105.93" },
      { label: "P2 TOTAL RUNTIME", value: "157" },
    ],
  },
  {
    title: "Details",
    fields: [
      { label: "P3 STATE", value: "38.93" },
      { label: "P3 CURRENT ONTIME", value: "512" },
      { label: "P3 TOTAL RUNTIME", value: "54235" },
      { label: "TANK3 PRESSURE", value: "105.93" },
      { label: "TANK3 LEVEL", value: "157" },
    ],
  },
  {
    title: "Details",
    fields: [{ label: "TANK3 LEVEL", value: "38.93" }],
  },
];

function StationStatus() {
  return (
    <div className="station-status-container">
      {detailsData.map((section, index) => (
        <div key={index} className="details-card">
          <h3>{section.title}</h3>
          <ul>
            {section.fields.map((field, fieldIndex) => (
              <li key={fieldIndex}>
                <strong>{field.label}:</strong> {field.value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default StationStatus;
