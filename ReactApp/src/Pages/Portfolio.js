import React from 'react'
import NavBar from '../Components/NavBar'
import { Footer } from '../Components/Footer';
import {ImageHeader} from '../Components/imageHeaders'
import { PortfolioImageContainer } from '../Components/PortfolioImageContainer';

// Renders entire Portfolio Page using components
export const Portfolio = () => {
  const pageVariables = {
    description:"Personal Collection",
    text :"Gallery",
  }

  return (
    <>
    <NavBar />
    <ImageHeader 
        description={pageVariables.description} 
        text = {pageVariables.text}
        backgroundImage={pageVariables.backgroundImage}
     />
    <PortfolioImageContainer imageAPIsrc={process.env.REACT_APP_PORTFOLIO_API}/>
    <Footer />
    </>
  )
};
export default Portfolio;