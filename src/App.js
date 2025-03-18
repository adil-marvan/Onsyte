import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import LoginPage from './screens/LoginPage'
import Dashboard from './SecondPage/Dasboard'; 
import  StationStatus from "./ThirPage/StationStatus"
import AlarmPage from './FourthPage/AlarmPage';
import HistoryPage from './FifthPage.jsx/HistoryPage/HistoryPage';
import AdminUser from './SixthPage.jsx/AdminUser';
import StationPage from './SixthPage.jsx/StationPage/StationPage';
import StationInfo from "./ThirPage/Station-Info/StatioInfo"
import StatationId from "./ThirPage/Station-id/SationId"

import Test from '../src/ThirPage/Test';


//import Side from "./Components/side-bar/Side"
function App() {
  return (
    
      <Router>
       <Routes>
         {/* <NavBar /> */}
         <Route index  path="/" element={<LoginPage />} />
         <Route path="/Dashboard" element={<Dashboard />}/>
         <Route path="/StationStatus" element={<StationStatus/>}/>
         <Route path="/AlarmPage" element={<AlarmPage/>}/>
         <Route path ="/HistoryPage" element={<HistoryPage/>}/>
         <Route path='/AdminUser' element={<AdminUser/>}/>
         <Route path='/StationPage' element={<StationPage/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/station-info" element={<StationInfo/>}/>
        <Route path="/station-id"   element={<StatationId/>}/>
       </Routes>
     </Router>
    

    
  )
}

export default App