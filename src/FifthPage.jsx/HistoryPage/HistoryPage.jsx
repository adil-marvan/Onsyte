import React from 'react'
import Navbarlatest from '../../SecondPage/Navbarlatest'
import Sidebar from '../../Components/SideBar/Sidebar'
import Card from '../../Components/card/Card'
import Table from "./table/Table"


function HistoryPage() {
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
      <Table/>
        
    </div>
  )
}

export default HistoryPage