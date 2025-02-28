import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import LoginPage from './screens/LoginPage'
import Dashboard from './SecondPage/Dasboard';  

//import Side from "./Components/side-bar/Side"
function App() {
  return (
    
      <Router>
       <Routes>
         {/* <NavBar /> */}
         <Route index  path="/" element={<LoginPage />} />
         <Route path="/Dashboard" element={<Dashboard />}/>
        
       </Routes>
     </Router>
    

    
  )
}

export default App