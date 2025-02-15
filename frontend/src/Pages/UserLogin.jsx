import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/userlogin.css';
import log from '../assets/2.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/user/login', {
        email,
        password,
      });

      const { success, message, user } = response.data;

      if (success) {
        localStorage.setItem('userEmail', user.email);
        console.log(user);
        

        // Redirect based on role
        if (user.role === 'rider') {
          navigate('/riderpanel');
        } else if (user.role === 'driver') {
          navigate('/driverpanel');
        } else {
          alert('Invalid role. Please select rider or driver.');
        }
      } else {
        alert(message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="user_login">
      <div className="userlogin">
        <h2>Login</h2>
      </div>
      <div className="userinfo">
        <div className="image">
          <img src={log} alt="" />
        </div>

        <form onSubmit={handleLogin}>
          <div className="info">
            <input
              type="text"
              placeholder="Email Or Mobile Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="link">
              <Link to="/usersignup" className="underline" id="line">
                <h5>
                  Don't have an account? <span>Register</span>
                </h5>
              </Link>
              <Link to="/forgotpassword" className="underline">
                <h5>
                  <span>Forgot Password?</span>
                </h5>
              </Link>
            </div>
            <button type="submit" className="user_login">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
