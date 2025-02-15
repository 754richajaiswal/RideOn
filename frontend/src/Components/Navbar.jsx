import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Style/Navbar.css'


const Navbar = () => {
const navigate = useNavigate();

const handleLogout = () =>{
  const confirmLogout = window.confirm("Are you sure to Logout");
  if (confirmLogout){
     localStorage.removeItem('userEmail')
     navigate('/userlogin')
  }
}
  return (
    
    <div className='nav'>
        <nav className='pro_nav'>
          
        <div id='ride2'>Ride<span id='on2'>On</span></div>
            <ul>
                <li> <a href="/">Home</a></li>
                <li> <a href="About">About Us</a></li>
                <li> <a className='contact' href="Contact">Contact Us</a></li>
                </ul>
                <div className="btn">
                <button className="btn1" onClick={handleLogout}><i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"></i>Logout</button>
                </div>
        </nav>
    </div>
  )
}

export default Navbar