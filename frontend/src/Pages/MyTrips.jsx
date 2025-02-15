import React from 'react'
import '../Style/MyTrips.css'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const MyTrips = () => {
  return (
    <div className="mytrips">
      <Navbar/>
      <div className="trip_date">
        <h3><Link to={'/riderpanel'}><i class="fa-solid fa-arrow-left"></i></Link>My Trips</h3>
        <hr />
        <div className="date">
          <div className="from_date">
          <label htmlFor="date">FROM DATE</label><br/>
          <input type="date" />
          </div>
          <div className="to_date">
          <label htmlFor="date">TO DATE</label><br/>
          <input type="date" />
          </div>
        </div>
        <div className="trip_buttons">
        <button id='search'>Search</button>
        <button id='reset'>Reset</button>
        </div>
      </div>
      
      <div className="trip_list">
        
        <div className="trip_table">
          <table>
            <thead>
              <h4>Show</h4>
              <input type="number" />
              <h4>entries</h4>
              <input type="search" id='list_search' />
            </thead>
            <tbody>
              <tr>
                <th>Booking No.</th>
                <th>Driver</th>
                <th>Booking Date</th>
                <th>Your Fare</th>
                <th>Vehicle Type</th>
                <th>View Invoice</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
  )
}

export default MyTrips