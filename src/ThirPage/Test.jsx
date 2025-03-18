import React from 'react';
import Button from '../Components/button/Button';
import './Alarm.css';
import Sidebar from '../Components/SideBar/Sidebar';
import Navbarlatest from '../SecondPage/Navbarlatest';
import Nav from './Nav';

// Sample alarm data
const alarms = [
  { id: "O9", label: "WASHOUT", status: "CRITICAL" },
  { id: "DT1", label: "CLEANOUT FAILURE", status: "NON-CRITICAL" },
  { id: "FL1", label: "DT HIGH WATER", status: "NON-CRITICAL" },
  { id: "FL2", label: "RT HIGH WATER", status: "NON-CRITICAL" },
  { id: "XF9", label: "TRANSFER FAILURE", status: "NON-CRITICAL" },
  { id: "DS9", label: "DISCHARGE FAILURE", status: "NON-CRITICAL" },
  { id: "WS9", label: "WASTING FAILURE", status: "NON-CRITICAL" },
  { id: "DX9", label: "DT XDUCER FAILURE", status: "CRITICAL" },
];

const secondaryAlarms = [
  { id: "RX9", label: "RT XDUCER FAILURE", status: "CRITICAL" },
  { id: "RA9", label: "RATION FAILURE", status: "NON-CRITICAL" },
  { id: "XXX1", label: "SPARE", status: "NON-CRITICAL" },
  { id: "XXX2", label: "SPARE", status: "NON-CRITICAL" },
  { id: "XXX3", label: "SPARE", status: "NON-CRITICAL" },
  { id: "XXX4", label: "SPARE", status: "NON-CRITICAL" },
  { id: "XXX5", label: "SPARE", status: "CRITICAL" },
];

const AlarmItem = ({ id, label, status }) => (
  <div className={`alarm-item ${status === "CRITICAL" ? "critical" : "non-critical"}`}>
    <span className="alarm-id">{id}</span>
    <span className="alarm-label">{label}</span>
    <span className="alarm-status">{status}</span>
  </div>
);

function Alarm() {
  return (
    <>
   
    <Navbarlatest/>
    <Nav/>
    <Sidebar/>
    
    <div className="alarm-container">
      <div className="alarm-header">
        <h2>Details</h2>
        <button className="reset-button">Reset All Alarms</button>
      </div>

      <div className="alarm-section">
        {alarms.map((alarm, index) => (
          <AlarmItem key={index} id={alarm.id} label={alarm.label} status={alarm.status} />
        ))}
      </div>

      <div className="alarm-section">
        {secondaryAlarms.map((alarm, index) => (
          <AlarmItem key={index} id={alarm.id} label={alarm.label} status={alarm.status} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Alarm;

