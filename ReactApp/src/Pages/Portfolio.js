import React from 'react'
import NavBar from '../Components/NavBar'
import { Footer } from '../Components/Footer';
import {ImageHeader} from '../Components/imageHeaders'
import { PortfolioImageContainer } from '../Components/PortfolioImageContainer';
import API_endpoint from '../Components/APIendpoints';

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
    <PortfolioImageContainer src={API_endpoint.portfolio}/>
    <Footer />
    </>
  )
};
export default Portfolio;