import React from 'react'
import '../Style/section2.css'

const Section2 = () => {
  return (
    <div className="section2">
        <h1>Why Ride With Us?</h1>
        <div className="img1">
            <img src="https://media.istockphoto.com/id/1357069083/vector/online-taxi-booking-travel-service-flat-design-illustration-via-mobile-app-on-smartphone.jpg?s=612x612&w=0&k=20&c=HmdsTDUGR5sqkMDI0Bu1D5Olou06APAeOjUzkdu5vY4=" alt="" />
           
            <div className="section2_content">
            <h2 className='h2'>Budget-friendly Rides</h2>
            <p className='p'>Book your ride that's easy on your pocket. No hidden charges? Pay what you see.</p>
            <h2 className='h2'>Quickly find a Ride</h2>
            <p className='p'>No need to wait around for your taxi to come to your door. Find Riders <br/> quickly book them and be where you want to be on time.</p>
            </div>
        </div>
    </div>
  )
}

export default Section2