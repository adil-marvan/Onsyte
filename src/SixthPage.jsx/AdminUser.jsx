import React from 'react'
import Navbarlatest from '../SecondPage/Navbarlatest'
import  Sidebar from "../Components/SideBar/Sidebar"
import NavBarSix from "../Components/navBar/NavBarSix"
import Table from './Table/table'


function AdminUser() {
  return (
    <div>
        <Navbarlatest/>
        <Sidebar/>
        <NavBarSix/>
        <Table/>

    </div>
  )
}

export default AdminUser