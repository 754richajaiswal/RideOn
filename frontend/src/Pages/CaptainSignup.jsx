import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/captainsignup.css'
import reg from '../assets/1.jpg'

const CaptainSignup = () => {
  return (
    <div className='captain_signup'>
      <div className="register">
        <h2>Register</h2>
        <div className="buttons">
          <Link to='/usersignup'><button>Rider</button></Link>
          <Link to='/captainsignup'><button>Driver</button></Link>
        </div>
      </div>
      <div className="captaininfo">
      <div className="image">
        <img src={reg} alt="" />
      </div>
      <h2 id='driver'>Register as a Driver</h2>
      {/* <div className="info">
        <h2>Basic Information</h2>
          <input type="text" placeholder='First Name*' required />
          <input type="text" placeholder='Last Name*' required />
          <input type="text" placeholder='India' readOnly />
          <input type="text" placeholder='Email Id' required/>
          <input type="text" placeholder='Phone Number' required/>
          <button>Submit</button>
      </div> */}
      <div className="captain_info">
      <h2>Basic Information</h2>
        <div className="captain_name">
          <input type="text" placeholder='First Name*' required />
          <input type="text" placeholder='Last Name*' required />
        </div>
         <div className="number">
          <input type="text" placeholder='Phone Number*' required />
          <input type="text" placeholder='Email-Id'/>
         </div>
         <div className="password">
          <input type="Password" placeholder='*********' required />
          <input type="Confirm Password" placeholder='*********' />
         </div>
         <button>Submit</button>
      </div>
      </div>
    </div>
  )
}

export default CaptainSignup