import React from "react";
import "./card.css";
// import Smallcard from "../SmallCard/Smallcard";
import DeviceOperations from "../SmallCard/Smallcard";
// import DeviceOperations from "../DeviceOperations/DeviceOperations"; // Import your component

const Card = ({ title, data }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="data-grid">
          {data.map(({ label, value }, index) => (
            <div key={index}>
              <p className="label">{label}</p>
              <p className="value">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const cardsData = [
    {
      title: "Active Data",
      data: [
        { label: "Current Batch Size", value: "30 GAL" },
        { label: "Process Stage", value: "N/A" },
        { label: "Time Elapsed (Stage)", value: "01:23:58" },
        { label: "Time Left (Stage)", value: "00:06:01" },
      ],
    },
    {
      title: "Last Batch",
      data: [
        { label: "Last Batch Size", value: "30 GAL" },
        { label: "Start Time (XFER)", value: "13:18:02" },
        { label: "End Time (DISCH)", value: "19:33:58" },
        { label: "Batch Duration (Hours)", value: "6.25" },
      ],
    },
    {
      title: "Detail 1",
      data: [
        { label: "redox", value: "30.23" },
        { label: "ph", value: "8" },
        { label: "pcb_temp", value: "12.5 C" },
        { label: "tank_temp", value: "36.3 C" },
      ],
    },
    {
      title: "Detail 2",
      data: [
        { label: "PumpStatusTimestamp", value: "12:12:12" },
        { label: "Air.state", value: "8" },
        { label: "Air.current_ontime", value: "12:54" },
        { label: "Air.total_runtime", value: "36.3 C" },
      ],
    },
  ];

  return (
    <div className="dashboard">
      {cardsData.map((card, index) => (
        <React.Fragment key={index}>
          <Card title={card.title} data={card.data} />
          {index === 2 && <DeviceOperations />} {/* Renders after the third card */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Dashboard;
