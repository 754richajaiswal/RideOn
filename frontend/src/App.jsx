import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Ride from './Pages/Ride'
import Drive from './Pages/Drive'
import UserSignup from './Pages/UserSignup'
// import CaptainSignup from './Pages/CaptainSignup'
import UserLogin from './Pages/UserLogin'
// import CaptainLogin from './Pages/CaptainLogin'
import ForgotPassword from './Pages/ForgotPassword'
import RiderPanel from './Pages/RiderPanel'
import DriverPanel from './Pages/DriverPanel'
import Sidebar from './Components/Sidebar'
import MyProfile from './Pages/MyProfile'
import MyTrips from './Pages/MyTrips'
import LogOut from './Pages/LogOut'
import Invoice from './Pages/Invoice'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/ride' element={<Ride/>}/>
        <Route path='/drive' element={<Drive/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        {/* <Route path='/captainsignup' element={<CaptainSignup/>}/> */}
        <Route path='/usersignup' element={<UserSignup/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        {/* <Route path='/captainlogin' element={<CaptainLogin/>}/> */}
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/riderpanel' element={<RiderPanel/>}/>
        <Route path='/driverpanel' element={<DriverPanel/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
        <Route path='/mytrips' element={<MyTrips/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/logout' element={<LogOut/>}/>
        
      </Routes>
    </div>
  )
}

export default App