import React from 'react'
import '../Style/aboutsection.css'

const Aboutsection = () => {
  return (
    <div>
       <section className='about_section'>
        <div className="earning">
        <h1>Drive with <span>RideOn</span></h1>
        <h2>Set your own hours. Earn on your own terms.</h2>
        <h4><i class="fa-solid fa-money-check-dollar"></i>Realiable Earnings :</h4>
        <p>make money, keep your tips and cash out when you want</p>
        <h4><i class="fa-regular fa-clock"></i>A flexible schedule :</h4>
        <p>Be your own boss and drive whenever it works for you</p>
        <h4><i class="fa-solid fa-bolt"></i>Get paid instantly :</h4>
        <p>Cash out your earnings whenever you want</p>
        <button className='apply'>Apply to Driver</button>
        <button className='pay_works'>How driver pay works<i class="fa-solid fa-arrow-right"></i></button>
        </div> 
            <img src="https://images.unsplash.com/photo-1516862523118-a3724eb136d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGNhciUyMGRyaXZlcnxlbnwwfDB8MHx8fDA%3D" alt="" />
        
       
       </section>
    </div>
  )
}

export default Aboutsection