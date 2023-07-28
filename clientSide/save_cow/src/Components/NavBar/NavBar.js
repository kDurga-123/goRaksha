import React from 'react';
import './NavBar.css';
import { HomePage, NavBarItems, NavbarElements } from '../constant/navbar';
// import HomePage from '../constant/navbar';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <div className='nav-bar'>
            {
                NavBarItems.map((item, index)=> <Link to="/home" ><div key={index} className='GORAKSHA'>{item}</div></Link>)
            }
            {
                HomePage.map((item,index)=>(
                    <Link to="/home" ><div key={index} className='Home'>{item}</div></Link>
                ))
            }
            {
                NavbarElements.map((element,i)=>(
                    <div key={i}  className='Carecow'>{element}</div>
                ))
            }
           
            <div className='profile'><img src='/resources/profilees.png' className="profile-image"/></div> 
        </div>
    )
}
export default Navbar;