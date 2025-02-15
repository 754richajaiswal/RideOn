import React from 'react'
import Header from '../Components/Header'
import AboutSection from '../Components/AboutSection'
import Footer from '../Components/Footer'
import Services from '../Components/Services'
import Section2 from '../Components/Section2'
// import Section1 from '../Components/Section1'

const Home = () => {
  return (
    <div>
        <Header/>
        <Section2/>
        {/* <Section1/> */}
        <AboutSection />
        <Services/>
        <Footer />
    </div>
  )
}

export default Home