import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../Assets/Third-page-nav/logo.png";
import star from "../Assets/Third-page-nav/Star.png";
import vector from "../Assets/Third-page-nav/Globe.png";
import map from "../Assets/Third-page-nav/map.png";
import image from "../Assets/Third-page-nav/all.png";
import './Nav.css';

function Nav() {
  const navigate = useNavigate(); // ✅ useNavigate is inside the component

  const handleNavigate = () => {
    navigate("/test"); // ✅ Now it correctly uses navigate
  };

  return (
    <div className="station-container-x">
      <div className="nav-container-f">
        {/* Logo Section */}
        <div className="img">
          <img src={logo} alt="Logo" />
          <div className="station-info">
            <div className='all'><img src={image} alt="" /></div>
          </div>
        </div>

        {/* Header Section */}
        <div className="header">
          {/* Station Info */}
        </div>
      </div>

      {/* Status Section */}
      <div className="status-container">
        <div className="status-items">
          <div className="status-item">
            <span className="status-label">Alarm Status</span>
            <span className="status-indicator-ok">OK</span>
          </div>
          <div className="status-item">
            <span className="status-label">Connection PLC</span>
            <span className="status-indicator-ok">OK</span>
          </div>
          <div className="status-item">
            <span className="status-label">Inbound Service</span>
            <span className="status-indicator-ok">OK</span>
          </div>
          <div className="status-item">
            <span className="status-label">Outbound Service</span>
            <span className="status-indicator-ok">OK</span>
          </div>
        </div>

        {/* Time Information */}
        <div className="time-info">
          <div className="time-item">
            <span className="time-label">Time Elapsed</span>
            <span className="time-value">00:00:30</span>
          </div>
          <div className="time-item">
            <span className="time-label">Time Out</span>
            <span className="time-value">00:10:00</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        <span className="active">Station Status</span>
        <span>Station Id</span>
        <span onClick={handleNavigate} style={{ cursor: "pointer" }}>Alarms</span>
        <span>Station Info</span>
      </div>
    </div>
  );
}

export default Nav;




