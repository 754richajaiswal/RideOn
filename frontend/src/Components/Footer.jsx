import React from 'react'
import '../Style/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='first_footer'>
          <h2>Quick Links</h2>
           <a href="/legal">Legal</a>
           <a href="/terms_conditions">Terms & Conditions</a>
           <a href="/work">How it Works</a>
           <a href="/safety">Trust, Safety & Insurance</a>
           <a href="/privacy">Privacy Policy</a>
           <a href="/about">About Us</a>
      </div>

      <div className="second_footer">
          <h2>Register</h2>
          {/* <li>Reister as a Rider</li> */}
          {/* <li>Register as a Driver</li> */}
          <a href="/usersignup">Register as a Rider</a>
          <a href="/captainsignup">Register as a Driver</a>
      </div>

      <div className="third_footer">
          <h2>Support</h2>
          {/* <li>Help Center</li>
          <li>Faq</li>
          <li>Contact Us</li> */}
          <a href="/help_center">Help Center</a>
          <a href="/faq">FAQ</a>
          <a href="/contact_us">Contact Us</a>
      </div>

      <div className="fourth_footer">
        <h2>Be Social</h2>
        
      </div>
    </div>
  )
}

export default Footer