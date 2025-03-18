import React from 'react'
import Navbarlatest from '../../SecondPage/Navbarlatest'
import Sidebar from '../../Components/SideBar/Sidebar'
import Nav from '../Nav'
import StationCard from "./StationCard"
import CardRight   from  "./CardRight"

function SationId() {
  // return (
  //   <div>
  //     <Navbarlatest/>
  //     <Sidebar/>
  //     <Nav/>
  //     <StationCard/>
  //     <CardRight/>
  //   </div>
  // )
  return (
    <div>
      <Navbarlatest />
      <Sidebar />
      <Nav />
      <div className="station-container-id">
        <StationCard />
        <CardRight />
      </div>
    </div>
  );
}

export default SationId