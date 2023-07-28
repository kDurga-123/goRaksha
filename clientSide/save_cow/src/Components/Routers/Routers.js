import React from 'react';
// import Navbar from '../NavBar/NavBar.js';
//  import Footer from '../Footer/Footer.js';
 import Home  from '../HomePage/homepage';
 import DoctorPage from '../DoctorPage/DoctorPage';
 import Effects from '../Effects/Effects';
 import Signup from '../Signup/Signup.js';
 import { Route,Routes } from 'react-router';
function Routers(){
    return(
        <div>
            {/* <Navbar/> */}
                <Routes>
                    {/* <Route path="/" Component={Home}/> */}
                    <Route path="/home" Component={Home}/>
                    <Route path="/Signup" Component={Signup}/>
                    <Route path="/DoctorPage" Component={DoctorPage}/>
                    <Route path="/Effects" Component={Effects}/>
                </Routes>
            {/* <Footer/> */}
        </div>
    )
}
export default Routers;