import React from 'react'
import Navbarlatest from '../SecondPage/Navbarlatest'
import Sidebar from '../Components/SideBar/Sidebar'
import Nav from "./Nav"
// import Sma
import Card from '../ThirPage/Card/Card'
import DeviceOperations from './SmallCard/Smallcard'


function StationStatus() {
  return (
    <div>
        <Navbarlatest/>
        <Sidebar/>
        <Nav/>
        {/* <DeviceOperations/> */}
        <Card/>
        
    </div>
  )
}

export default StationStatus