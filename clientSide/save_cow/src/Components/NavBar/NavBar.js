import React from 'react';
import './NavBar.css';
function Navbar(){
    return(
        <div className='nav-bar'>
            <div className='GORAKSHA'>GORAKSHA</div>
            <div className='Home'>Home</div>
            <div className='Carecow'>Carecow</div>
            <div className='Maladies'>Maladies</div>
            <div className='Vets'>Vets</div>
            <div className='Signup'>Signup</div>
            <div className='profile'><img src='/resources/profilees.png' className="profile-image"/></div>
        </div>
    )
}
export default Navbar;