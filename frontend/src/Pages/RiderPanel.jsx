import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import bike from '../assets/Bike.webp';
import auto from '../assets/Auto.webp';
import cab from '../assets/Cab.webp';
import '../Style/riderpanel.css';
import haversine from 'haversine-distance';
import Payment from '../Components/Payment';

// Static dataset for converting locations to lat-long
const locations = {
  "Patna Junction": { lat: 25.5941, lon: 85.1376 },
  "Kankarbagh": { lat: 25.6057, lon: 85.1681 },
  "Bailey Road": { lat: 25.6127, lon: 85.0896 },
  "Boring Road": { lat: 25.6174, lon: 85.0993 },
  "Gandhi Maidan": { lat: 25.6207, lon: 85.1443 },
};

// Fare rates per km
const fares = {
  bike: 20,
  auto: 40,
  cab: 60,
};

const RiderPanel = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Bike, auto, or cab
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [distance, setDistance] = useState(0);
  const [fare, setFare] = useState({ bike: 0, auto: 0, cab: 0 });
  const [showPayment, setShowPayment] = useState(false)

  // Calculate Distance and Fare
  const calculateDistance = () => {
    if (!locations[pickup] || !locations[dropoff]) {
      alert("Invalid location! Please enter predefined locations.");
      return;
    }

    const pickupCoords = locations[pickup];
    const dropoffCoords = locations[dropoff];

    // Haversine distance calculation (meters → km)
    const dist = haversine(pickupCoords, dropoffCoords) / 1000;
    setDistance(dist);

    // Calculate fares dynamically
    setFare({
      bike: dist * fares.bike,
      auto: dist * fares.auto,
      cab: dist * fares.cab,
    });
  };

  const handleBooking = () =>{
   if(!selectedOption){
    alert('please select a vehicle type')
    return;
   }
   setShowPayment(true);
  }

  return (
    <div className='riderpanel'>
      <Navbar />
      <div className="map">
        <div className="sidebar">
          <Sidebar />
        </div>
        {!showPayment ? (
        <div className="book">
          <div className="book_location">
            <h3>Book a Ride</h3>
            <input 
              type="text" 
              placeholder="Pickup Location (e.g., Patna Junction)" 
              value={pickup} 
              onChange={(e) => setPickup(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Drop-off Location (e.g., Kankarbagh)" 
              value={dropoff} 
              onChange={(e) => setDropoff(e.target.value)} 
            />
            {/* <button onClick={calculateDistance}>Calculate Fare</button> */}
          </div>

          <div className="vehicle_type">
            <h4>Select Vehicle Type</h4>

            <label>  
              <input type="radio" name="option" value="bike" onChange={() => setSelectedOption("Bike")} onClick={calculateDistance}/> 
              <img className='veh' src={bike} alt="Bike" /> 
              Bike  <span>₹{fare.bike.toFixed(2)}</span>
            </label>

            <label>
              <input type="radio" name="option" value="auto" onChange={() => setSelectedOption("Auto")} onClick={calculateDistance}/> 
              <img className='veh' src={auto} alt="Auto" /> 
              Auto  <span>₹{fare.auto.toFixed(2)}</span>
            </label>

            <label>
              <input type="radio" name="option" value="cab" onChange={() => setSelectedOption("Cab")} onClick={calculateDistance}/> 
              <img  className='veh' src={cab} alt="Car" />  
              Car  <span id='car_span'>₹{fare.cab.toFixed(2)}</span>
            </label>
          </div>
          <div className="book_button">
            <button disabled={!selectedOption} onClick={handleBooking} >Book {selectedOption}</button>
          </div>
        </div>
        ):(
            <Payment/>
        )}
      </div>
    
     
    </div>
  );
};

export default RiderPanel;
