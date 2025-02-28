import React, { useState } from 'react';
import './Sidebar.css';
import logo from "../Assets/loginpage/logo 1 .png"
import Image1 from "../Assets/Dashbord/image.1.png"
import Image2 from "../Assets/Dashbord/image.2.png";
import Image3 from "../Assets/Dashbord/image.3.png" ;
import Image4 from "../Assets/Dashbord/image.4.png"  ;
import Image5 from "../Assets/Dashbord/image.5.png"  ;
import  Image6  from "../Assets/Dashbord/image6.png";
import  Image7  from "../Assets/Dashbord/image.7.png";
import  Image8  from "../Assets/Dashbord/image.8.png";
import  Image9  from "../Assets/Dashbord/image.9.png";
import  Image10  from "../Assets/Dashbord/image.10.png";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

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
                <li><img src={Image5} alt="test" /></li>
                <li><img src={Image2} alt="test" /></li>
                <li><img src={Image3} alt="test" /></li>
                <li><img src={Image4} alt="test" /></li>
                <li><img src={Image5} alt="test" /></li>
                <li><img src={Image6} alt="test" /></li>
                <li><img src={Image7} alt="test" /></li>
                <li><img src={Image8} alt="test" /></li>
                <li><img src={Image9} alt="test" /></li>
                <li><img src={Image10} alt="test" /></li>
               
                
            </ul>
        </div>
    );
};

export default Sidebar;
