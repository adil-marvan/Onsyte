// import React from "react";
// import Button from "../../Components/button/Button";
// import "./StationCard.css"
// import InputField from "../../Components/input-field/Inputfield";

// const vesselOptions = ["S85 D2 CONCRETE TANK", "Option 2", "Option 3"];

// const detailsData = [
//   {
//     title: "Details",
//     fields: [
//       { label: "DT HIGH LEVEL(IN)", value: "48" },
//       { label: "RT HIGH LEVEL(IN)", value: "52" },
//       { label: "DT XDUCER OFFSET", value: "-3" },
//       { label: "RT XDUCER OFFSET", value: "-3" },
//     ],
//   },
//   {
//     title: "Details",
//     fields: [
//       { label: "MIN BATCH SIZE", value: "48" },
//       { label: "MAX BATCH SIZE", value: "52" },
//     ],
//   },
//   {
//     title: "Details",
//     fields: [
//       { label: "SEED LEVEL(in)", value: "48" },
//       { label: "SEED VOLUME(gal)", value: "252.34" },
//     ],
//   },
//   {
//     title: "Details",
//     fields: [
//       { label: "SETTLING_TIME", value: "48" },
//       { label: "IDLE_TIME", value: "52" },
//       { label: "P2_OFFSET", value: "-3" },
//       { label: "P3_OFFSET", value: "-3" },
//     ],
//   },
//   {
//     title: "Details",
//     fields: [
//       { label: "PUMP1_SLOW_TIME", value: "48" },
//       { label: "PUMP2_SLOW_TIME", value: "52" },
//       { label: "PUMP3_MAX_TIME", value: "-3" },
//     ],
//   },
//   {
//     title: "Details",
//     fields: [
//       { label: "PUMP2_MAX_TIME", value: "48" },
//       { label: "PUMP3_MAX_TIME", value: "52" },
//       { label: "AERATION_DURATION_ON", value: "" },
//       { label: "AERATION_DURATION_OFF", value: "" },
//     ],
//   },
  
// ];

// function StationCard() {
//   return (
//     <div className="dashboard-container">
//       {/* Vessel Selection */}
//       <div className="vessel-section">
//         <label>Vessel</label>
//         <select className="vessel-select">
//           {vesselOptions.map((option, index) => (
//             <option key={index}>{option}</option>
//           ))}
//         </select>
//         <Button color="blue" size="extra-medium" label="Login" type="submit" />
//         <Button color="blue" size="extra-medium" label="Login" type="submit" />
//       </div>

//       {/* Details Section */}
//       <div className="detail-section">
//         {detailsData.map((section, index) => (
//           <div key={index} className="details-card">
//             <h3>{section.title}</h3>
//             <ul>
//               {section.fields.map((field, fieldIndex) => (
//                 <li key={fieldIndex}>
//                   <strong>{field.label}: </strong> {field.value}
//                   <InputField 
//                                 type="text" 
//                                 placeholder="Enter your password" 
//                                 size="small" 
                                 
                                
//                             />
//                              <Button color="blue" size="extra-medium" label="Login" type="submit" />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StationCard;


import React from "react";
import Button from "../../Components/button/Button";
import "./StationCard.css";
import InputField from "../../Components/input-field/Inputfield";

const vesselOptions = ["S85 D2 CONCRETE TANK", "Option 2", "Option 3"];

const detailsData = [
  {
    title: "Details",
    fields: [
      { label: "DT HIGH LEVEL(IN)", value: "48" },
      { label: "RT HIGH LEVEL(IN)", value: "52" },
      { label: "DT XDUCER OFFSET", value: "-3" },
      { label: "RT XDUCER OFFSET", value: "-3" },
    ],
  },
  {
    title: "Details",
    fields: [
      { label: "MIN BATCH SIZE", value: "48" },
      { label: "MAX BATCH SIZE", value: "52" },
    ],
  },
  {
    title: "Details",
    fields: [
      { label: "SEED LEVEL(in)", value: "48" },
      { label: "SEED VOLUME(gal)", value: "252.34" },
    ],
  },
  {
    title: "Details",
    fields: [
      { label: "SETTLING_TIME", value: "48" },
      { label: "IDLE_TIME", value: "52" },
      { label: "P2_OFFSET", value: "-3" },
      { label: "P3_OFFSET", value: "-3" },
    ],
  },
  {
    title: "Details",
    fields: [
      { label: "PUMP1_SLOW_TIME", value: "48" },
      { label: "PUMP2_SLOW_TIME", value: "52" },
      { label: "PUMP3_MAX_TIME", value: "-3" },
    ],
  },
  {
    title: "Details",
    fields: [
      { label: "PUMP2_MAX_TIME", value: "48" },
      { label: "PUMP3_MAX_TIME", value: "52" },
      { label: "AERATION_DURATION_ON", value: "" },
      { label: "AERATION_DURATION_OFF", value: "" },
    ],
  },
];

function StationCard() {
  return (
    <div className="dashboard-container-W">
      {/* Vessel Selection */}
      <div className="vessel-section">
        <label>Vessel</label>
        <select className="vessel-select">
          {vesselOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <Button color="blue" size="extra-medium" label="Login" type="submit" />
        <Button color="blue" size="extra-medium" label="Login" type="submit" />
      </div>

      {/* Details Section */}
      <div className="detail-section">
        {detailsData.map((section, index) => (
          <div key={index} className="details-card">
            <h3>{section.title}</h3>
            <ul>
              {section.fields.map((field, fieldIndex) => (
                fieldIndex % 2 === 0 ? (
                  <div key={fieldIndex} className="field-row">
                    <li>
                      <strong>{field.label}: </strong>
                      <InputField type="text" placeholder="Enter value" size="small" />
                      <Button color="blue" size="small" label="Edit" type="button" />
                    </li>
                    {section.fields[fieldIndex + 1] && (
                      <li>
                        <strong>{section.fields[fieldIndex + 1].label}: </strong>
                        <InputField type="text" placeholder="Enter value" size="small" />
                        <Button color="blue" size="small" label="Edit" type="button" />
                      </li>
                    )}
                  </div>
                ) : null
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StationCard;


