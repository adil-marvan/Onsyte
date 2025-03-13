import React from 'react'
import Button from './Components/button/Button';
//  import Button from '../../Components/button/Button';
 const alarms = [
     { id: "o9", label: "WASHOUT", status: "critical", },
     { id: "DT1", label: "CLEANOUT FAILURE", status: "NON-CRITICAL" },
    { id: "FL1", label: "DT HIGH WATER", status: "NON-CRITICAL" },
    { id: "FL2", label: "RT HIGH WATER", status: "NON-CRITICAL" },
    { id: "XF9", label: "TRANSFER FAILURE", status: "NON-CRITICAL" },
     { id: "DS9", label: "DISCHARGE FAILURE", status: "NON-CRITICAL" },
     { id: "WS9", label: "WASTING FAILURE", status: "NON-CRITICAL" },
     { id: "DX9", label: "DT XDUCER FAILURE", status: "CRITICAL" },
 ]
 const secondaryAlarms = [
     { id: "RX9", label: "RT XDUCER FAILURE", status: "CRITICAL" },
     { id: "RA9", label: "RATION FAILURE", status: "NON-CRITICAL" },
     { id: "XXX", label: "SPARE", status: "NON-CRITICAL" },
     { id: "XXX", label: "SPARE", status: "NON-CRITICAL" },
     { id: "XXX", label: "SPARE", status: "NON-CRITICAL" },
     { id: "XXX", label: "SPARE", status: "NON-CRITICAL" },
     { id: "XXX", label: "SPARE", status: "CRITICAL" },
   ];
 
 function Alarm() {
     return (
         <div className='alar-container'>
             <div className='alarm-header'>
                 <h2>DEAtails</h2>
                 <Button color="blue" size="small" label="Show" type="button" />
        </div>
        <div className="alarm-section">
        {alarms.map((alarm, index) => (
          <Alarm key={index} id={alarm.id} label={alarm.label} status={alarm.status} />
        ))}
      </div>

        
        </div>
    )
 }
 
 export default Alarm