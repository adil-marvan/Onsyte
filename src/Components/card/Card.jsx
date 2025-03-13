import React from "react";
import "./Card.css";
import blueIcon from "../../Assets/Card-image/image 1.png";
import greenIcon from "../../Assets/Card-image/image 2.png";
import redIcon from "../../Assets/Card-image/image 3.png";
import yellowIcon from "../../Assets/Card-image/image 4.png";

const colorSchemes = {
  blue: {
    background: "#DBEAFE",
    text: "#1E3A8A",
    icon: blueIcon,
  },
  green: {
    background: "#ECFDF5",
    text: "#065F46",
    icon: greenIcon,
  },
  red: {
    background: "#FEF2F2",
    text: "#B91C1C",
    icon: redIcon,
  },
  yellow: {
    background: "#FEFCE8",
    text: "#92400E",
    icon: yellowIcon,
  },
};

const Card = ({ title, value, colorScheme }) => {
  if (!colorSchemes[colorScheme]) {
    console.error(`Invalid colorScheme: "${colorScheme}". Expected one of ${Object.keys(colorSchemes).join(", ")}`);
    return null; // Prevents rendering if colorScheme is invalid
  }

  const colors = colorSchemes[colorScheme];

  return (
  
    <div className="card" style={{ backgroundColor: colors.background }}>
      <div className="header">
        <img src={colors.icon} alt={`${colorScheme} icon`} className="icon" />
      </div>
      <div className="content">
        <div className="value" style={{ color: colors.text }}>{value}</div>
        <p className="title" style={{ color: colors.text }}>{title}</p>
      </div>
      
    

  </div>
  );
};


export default Card;

