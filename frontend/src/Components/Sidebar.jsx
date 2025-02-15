import React, { useState } from 'react'
// import '../Style/Sidebar.css'
import '../Style/sidebar.css'


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <div className={`wrapper ${isOpen ? 'open' : ''}`}>
    <div className='hamburger-menu' onClick={toggleSidebar}>
      {isOpen ? (
       <i id='arrow' class="fa-solid fa-arrow-left"></i>
      ) : (
        <i className="fa-solid fa-bars"></i>
      )}
    
    </div>
    <div className={`sidebar ${isOpen ? 'show' : ''}`}>
      <div className="name">
        <div className="profile_img">
        {/* <input id="file-input" type="file" accept="image/*"/> */}
        </div>
      </div>
        <nav id='sidebar'>
            <a href="/myprofile"><i class="fa-solid fa-address-card"></i>My Profile</a>
            <a href="/mytrips"><i class="fa-solid fa-car"></i>My Trips</a>
            <a href="/invoice"><i class="fa-solid fa-file-invoice"></i>  Invoice</a>
            {/* <a href="/logout"><i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"></i> LogOut</a> */}
        </nav>
    </div>
    </div>
  )
}

export default Sidebar;