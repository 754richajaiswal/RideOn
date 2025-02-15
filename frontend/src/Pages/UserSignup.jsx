import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../Style/usersignup.css'
import reg from '../assets/1.jpg'

const UserSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();

    const formData ={
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      password: password,
      role: role,
    };

    setLoading(true);

    axios
    .post('http://localhost:3000/submit', formData)
    .then((response) => {
      setResponseMessage('Successfull..');
      setLoading(false);

      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setRole('');

      console.log('Form Submitted Successfully');
      

      setTimeout(() => {
        setResponseMessage('');
        console.log('Response Message cleared');
      },3000);
    })
    
    .catch((error) =>{
      setResponseMessage('Error!!!');
      setLoading(false);
      console.log('Error submitting form:',error)

      setTimeout(() =>{
        setResponseMessage('');
        console.log('Error message cleared');
        
      },3000);
      // console.error('Error:', error);
    });


  };
   
  return (
    <form onSubmit={handleSubmit}>
    <div className='user_signup'>
      <div className="register">
        <h2>Register</h2>
      </div>
      <div className="Userinfo">
      <div className="image">
        <img src={reg} alt="" />
      </div>
      <div className="user_info">
      <h2>Basic Information</h2>
        <div className="captain_name">
          <input type="text" id='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name*' required />
          <input type="text" id='lastname' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name*' required />
        </div>
         <div className="number">
          <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email*' required />
          <input type="text" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number'/>
         </div>
         <div className="password">
          <input type="Password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
          <input type="Password" placeholder='Confirm Password' />
         </div>
         <div className="role"> 
          <label htmlFor="">Role :</label>
          <input  type="radio" value='rider'  checked={role === 'rider'} onChange={(e) => setRole(e.target.value)} /> Rider
          <input  type="radio" value='driver' checked={role === 'driver'} onChange={(e) => setRole(e.target.value)}/> Driver
         </div>
         <button type='submit' disabled={loading}>
          {loading ? 'Submitting' : 'Submit'}
          </button>
          <div className="signedup">
          <Link to={'/userlogin'} className='link'><h5>Already have an account? <span>Login</span></h5></Link>
          </div>
      </div>
      </div>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
    </form>
  )
}

export default UserSignup