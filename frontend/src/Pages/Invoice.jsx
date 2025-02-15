import React from 'react'
import Navbar from '../Components/Navbar'
import '../Style/Invoice.css'
import { Link } from 'react-router-dom'
import Map from '../assets/map.png'

const Invoice = () => {
  return (
    <div className="invoice">
      <div className="nav">
      <Navbar />
      </div>
      <div className="upper_invoice">
        <h2><Link to={'/riderpanel'}><i class="fa-solid fa-arrow-left"></i></Link>Invoice</h2>
        <hr />
        <div className="in_details">
          <div className="rideno">
            <label htmlFor="">Ride No.</label><br/>
            <input type="text" />
          </div>
          <div className="inVehicle">
            <label htmlFor="">Vehicle</label><br/>
            <input type="text" />
          </div>
          <div className="Trip_time">
            <label htmlFor="">Trip Time</label><br/>
            <input type="text" />
          </div>
          <div className="Distance">
            <label htmlFor="">Distance</label><br/>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="lower_invoice">
        <div className="in_map">
          {/* <img src={Map} alt="" /> */}
        </div>
        <div className="full_detail">
           <label htmlFor=""><i class="fa-solid fa-user"></i>Driver Name:</label>
           <input type="text" value='Smith Davis' />
           <label htmlFor=""><i class="fa-solid fa-calendar-days"></i>Trip Date:</label>
           <input type="text" value='14 Dec 2024'/>
           <label htmlFor=""><i class="fa-solid fa-clock"></i>Pickup Time</label>
           <input type="text" />
           <label htmlFor=""><i class="fa-solid fa-clock"></i>Dropoff Time</label>
           <input type="text" />
           <label htmlFor=""><i class="fa-solid fa-location-dot"></i>Pickup Location</label>
           <input type="text" />
           <label htmlFor=""><i class="fa-solid fa-location-dot"></i>Dropoff Location</label>
           <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Invoice