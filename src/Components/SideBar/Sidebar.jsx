import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Sidebar.css';
import logo from "../../Assets/loginpage/logo 1 .png"
import Image1 from "../../Assets/Sidebar-image/image1new.png"
import Image2 from "../../Assets/Sidebar-image/image.2.png";
import Image3 from "../../Assets/Sidebar-image/image.3.png" ;
import Image4 from "../../Assets/Sidebar-image/image.4.png"  ;
import Image5 from "../../Assets/Sidebar-image/image.5.png"  ;
import  Image6  from "../../Assets/Sidebar-image/image6.png";
import  Image7  from "../../Assets/Sidebar-image/image.7.png";
import  Image8  from "../../Assets/Sidebar-image/image.8.png";
import  Image9  from "../../Assets/Sidebar-image/image.9.png";
import  Image10  from "../../Assets/Sidebar-image/image.10.png";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate =useNavigate()

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const handleNavigate=()=>{
        navigate("/StationStatus")
    }
    const dashboardNavigate=()=>{
        navigate ("/Dashboard")
    }
    const AlarmNavigate=()=>{
        navigate ("/AlarmPage")
}
    const HistoryNavigate=()=>{
        navigate ("/HistoryPage")
    }
    const AdminNavigate=()=>{
        navigate("/AdminUser")
    }

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <div className="logo"><img src={logo} alt="" />
                <button className="toggle-btn" onClick={toggleSidebar}>
                    ☰
                </button>
                
                </div>
                
              
            </div>
            <ul className="sidebar-items">
                <li onClick={dashboardNavigate}><img src={Image1} alt="test" /></li>
                <li onClick={handleNavigate}><img src={Image2} alt="test" /></li>
                <li onClick={AlarmNavigate}><img src={Image3} alt="test" /></li>
                <li onClick={HistoryNavigate}><img src={Image4} alt="test" /></li>
                <li><img src={Image5} alt="test" /></li>
                <li onClick={AdminNavigate}><img src={Image6} alt="test" /></li>
                <li><img src={Image7} alt="test" /></li>
                <li><img src={Image8} alt="test" /></li>
                <li><img src={Image9} alt="test" /></li>
                <li><img src={Image10} alt="test" /></li>
               
                
            </ul>
        </div>
    );
};

export default Sidebar;
