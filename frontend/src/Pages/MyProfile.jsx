import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import '../Style/Myprofile.css'
import { Link} from 'react-router-dom'
import axios from 'axios'

const MyProfile = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() =>{
    fetchDetails();
  }, []);

  const fetchDetails = () =>{
    const email = localStorage.getItem('userEmail'); 
    if (!email){
      setErrorMessage('No user logged in');
      setLoading(false);
      return;
    }

    axios
    .get(`http://localhost:3000/user/profile/${email}`)
    .then((response) =>{
      setDetails(response.data.user);
      setLoading(false);
    })
    .catch((error) =>{
      console.error('Error fetching details:', error.message);
      setErrorMessage('Error Fetching Details');
      setLoading(false);
    });
  }
  return (
    <div className="myprofile">
      <Navbar/>
     <div className="profileinfo">
      <div className="profile_heading">
        <h2><Link to={'/riderpanel'}><i class="fa-solid fa-arrow-left"></i></Link>My Profile</h2>
        <button>Edit</button>
        <hr/>
      </div>
      <div className="user_details">
        {loading ? (
          <p>Loading...</p>
        ) : errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
     <table border="1">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>{details.first_name} {details.last_name}</td>
                <td>{details.email}</td>
                <td>{details.phone}</td>
                </tr>
              </tbody>
            </table>
            )}
            </div>
            </div>
      <div className="foot">
        <Footer/>
      </div>
    </div>
  )
}

export default MyProfile