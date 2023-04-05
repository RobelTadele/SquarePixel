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
          <ImageCards src = "https://squarepixelbucket.s3.us-east-2.amazonaws.com/MainPortfolio/DSC_0340.jpg"/>
          <ImageCards src = "https://squarepixelbucket.s3.us-east-2.amazonaws.com/MainPortfolio/DSC_0682.jpg"/>
          <ImageCards src = "https://squarepixelbucket.s3.us-east-2.amazonaws.com/MainPortfolio/DSC_0457.jpg"/>
        </div>
        <Footer/>
    </div>
    
  )
}

