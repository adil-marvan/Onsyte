import React from 'react'
import Nav from '../Nav'
import Navbarlatest from '../../SecondPage/Navbarlatest'
import Sidebar from '../../Components/SideBar/Sidebar'
import StationCard from "../Station-Info/station-info-card/StationCard"

function StatioInfo() {
  return (
    <div>
      
      <Sidebar/>
      <Navbarlatest/>
      <Nav/>
      <StationCard/>
    </div>
  )
}

export default StatioInfo