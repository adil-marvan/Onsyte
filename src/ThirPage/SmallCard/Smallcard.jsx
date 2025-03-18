import React from "react";
import "./Smallcard.css";

const DeviceOperations = () => (
  <div className="device-operations-container">
    <div className="device-section">
      <h3>Device</h3>
      <div className="device-buttons">
        {["XFER", "AUX", "DISCH", "AERATE", "WASTE", "RATION"].map((item) => (
          <button key={item} className="device-button">{item}</button>
        ))}
      </div>
    </div>

    <div className="operations-section">
      <h3>Operations</h3>
      <div className="auto-toggle">
        Auto <input type="checkbox" />
      </div>
      <div className="status-icons">
        <span className="status success">✅ Start OK</span>
        <span className="status error">⛔ Alarm</span>
        <span className="status inactive">⚪ Start OK</span>
        <span className="status inactive">⚫ Alarm</span>
      </div>
      <div className="operation-buttons">
        <button className="pause">⏸ Pause</button>
        <button className="abort">🚫 Abort</button>
        <button className="reset">↩ Reset</button>
        <button className="skip">⏭ Skip</button>
      </div>
    </div>
  </div>
);

export default DeviceOperations;
