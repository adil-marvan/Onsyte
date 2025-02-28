import React from 'react'
import  "../SecondPage/Navbar.css"
import bell from "../Assets/Nav-image/alarm-bell.1.png"
import message from "../Assets/Nav-image/messages.png"
import oval from "../Assets/Nav-image/Oval.png"
const Navbarlatest = () => {
  return (
    <div className='navbar-container'>
      <div className='nav-items'>
      <div className='message'><img src={message} alt="" /></div>
         <div className='bell'><img src={bell} alt="" /></div>
         <div className='oval'><img src={oval} alt="" /></div>
         
      </div>

    </div>

  )
}

export default Navbarlatest