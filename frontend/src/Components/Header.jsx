import React from 'react';
import '../Style/Header.css'
import { Link } from 'react-router-dom';
import Navbar from './Navbar2';


const Header = () => {
  return (
     <div className='main'>
        <Navbar/>
        <div className="nav">
        <div className="home_img"></div>
        <div className="section1">
            <h2>Request a Ride</h2>
            <input className='location' type="text" placeholder='Pickup location '/>
            <input className='location' type="text" placeholder='Dropoff location' />
            <button>Book Now</button> 
        </div>
        <div className="work">
            <div className="content1"></div>
            <h2>How It Works</h2>
            <p>User Friendly System that will allow you to Book Services with just few steps and simple flow.</p>
            <div className="content2">
                <div className="one"><i class="fa-solid fa-car"></i>
                <h3>Tap to book one</h3>
                <p>just pick up your phone and put <br/>in where you want to go. The app<br/> will get you a driver in no time.</p></div>
                <div className="one"><i class="fa-solid fa-user-secret"></i>
                <h3>Get Driver Details</h3>
                <p>Once your Ride request is<br/>accepted, the app automatically<br/>informs you of all the details of<br/>the driver and ride.</p>
                </div>
                <div className="one"><i class="fa-solid fa-map-location-dot"></i>
                <h3>Track and Guide</h3>
                <p>Take a look at the route the driver<br/> is taking to reach you.Trace his<br/>exact location and guide him if<br/>necessary</p>
                </div>
                <div className="one"><i class="fa-solid fa-car-on"></i>
                <h3>Hop in and Ride on</h3>
                <p>Once the driver reaches you, just<br/>hop in and enjoy the trip. The app<br/>will calculate the fare and give you<br/>an invoice at the end of the trip.</p>
                </div>
            </div>
        </div>
            {/* <div className="start">
                <h1>Let's Ride</h1>
                <Link to='/captainsignup'><button className='drive'>Apply to drive</button></Link>
             <Link to='/signup'>  <button className='ride'>Signup to ride</button></Link>
            </div> */}
        
        </div>
    </div>
  )
}

export default Header