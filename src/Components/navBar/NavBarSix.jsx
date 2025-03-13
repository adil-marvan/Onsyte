import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const tabs = [
  { name: "Users", path: "/AdminUser" },
  { name: "Groups", path: "/groups" },
  { name: "Stations", path: "/stationPage" }, // Route to StationPage
  { name: "Operator", path: "/operator" },
  { name: "Email Notification", path: "/email-notification" },
  { name: "Stage Names DC", path: "/stage-names-dc" },
  { name: "Alarm DC", path: "/alarm-dc" },
  { name: "Performance", path: "/performance" },
];

export default function NavBar() {
  const [activeTab, setActiveTab] = useState("Stations");
  const navigate = useNavigate();

  const handleNavigation = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.path); // ✅ Navigate to the correct route
  };

  return (
    <div className="nav-container">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`nav-item ${activeTab === tab.name ? "active" : ""}`}
          onClick={() => handleNavigation(tab)}
        >
          {tab.name}
          {activeTab === tab.name && <div className="underline" />}
        </div>
      ))}
    </div>
  );
}

