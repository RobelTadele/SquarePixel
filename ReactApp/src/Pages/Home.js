import React from 'react'
import {Footer} from '../Components/Footer';
import {AboutMe, LandingPage } from '../Components/HomePage';
import NavBar from '../Components/NavBar';
import { Carousel } from '../Components/Carousel';

export const Home = () => {
  return (
    <div className="App">
       <NavBar />
       <LandingPage />
        <AboutMe />
        <div className = "HomeImage1">
          <Carousel />
        </div>
        <Footer/>
    </div>
    
  )
}

