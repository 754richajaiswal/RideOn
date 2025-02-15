import React from 'react'
import '../Style/Services.css'
import bike from '../assets/Bike.webp'
import auto  from '../assets/Auto.webp'
import cab from '../assets/Cab.webp'

const Services = () => {
  return (
    <section className='service_section'>
        <div className="services">
            <h2>What's in it for you</h2>
            <button className='service_rider'>Riders</button>
            <button className="service_driver">Drivers</button>
            <div className="service_vehicle">
                <div className="bike">
                    <img src={bike} alt="" />
                    <h3>India's Bike-Taxi</h3>
                    <p>Cut through traffic, reach on time and save <br/>money.With RideOn Bike-Taxi, It's that simple.</p>
                </div>
                <div className="auto">
                    <img src={auto} alt="" />
                    <h3>5-minute Auto</h3>
                    <p>Never wait for an auto ride again! Get a <br/>RideOn Auto within just 5 minutes!<br/>Anythime, Anywere.</p>
                </div>
                <div className="car">
                    <img src={cab} alt="" />
                    <h3>Lowest Priced Cabs</h3>
                    <p>More wheels. More comfort. And lower price <br/> than any other cab out there.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services