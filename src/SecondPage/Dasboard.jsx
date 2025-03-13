import React from 'react'
import Sidebar from '../Components/SideBar/Sidebar'
import Navbarlatest from './Navbarlatest'
import Card from '../Components/card/Card'
import DataTable from "../SecondPage/DataTable"







function Dasboard() {
  return (
    <div>
      
      <Navbarlatest/>
        <Sidebar/>
      <div className='main'>
      <Card title="Users" value={100} colorScheme="blue" />
      <Card title="Revenue" value={5000} colorScheme="green" />
      <Card title="Errors" value={10} colorScheme="red" />
      <Card title="Warnings" value={50} colorScheme="yellow" />
      </div>
      <DataTable/>

     
      
        
    
    </div>
  )
}

export default Dasboard
