import React from 'react'
import {Footer} from '../Components/Footer';
import {AboutMe, LandingPage, ImageCards } from '../Components/HomePage';
import NavBar from '../Components/NavBar';

export const Home = () => {
  return (
    <div className="App">
        
       <NavBar />
       <LandingPage />
        <AboutMe />
        <div className = "HomeImage1">
          <ImageCards />
        </div>
        <Footer/>
    </div>
    
  )
}

