import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Navbar.css'


const Navbar = () => {
  return (
    
    <div className='nav'>
        <nav className='pro_nav'>
          
        <div className='home_logo' id='ride2'>Ride<span id='on2'>On</span></div>
            <ul>
                <li> <a href="/">Home</a></li>
                {/* <li><a href="Ride">Ride</a></li>
                <li><a href="Drive">Drive</a></li> */}
                <li> <a href="About">About</a></li>
                <li> <a className='contact' href="Contact">Contact Us</a></li>
                </ul>
                <div className="home_btn">
                <Link to='/userlogin'><button className="login_btn">Login</button></Link>
                <Link to='/usersignup'><button className="register_btn">Register</button></Link>
                </div>
        </nav>
    </div>
  )
}

export default Navbar