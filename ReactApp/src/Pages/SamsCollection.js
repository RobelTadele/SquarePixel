import React from 'react'
import { Footer } from '../Components/Footer'
import NavBar from '../Components/NavBar'
import {PortfolioImageContainer} from '../Components/PortfolioImageContainer'
import {ImageHeader} from '../Components/imageHeaders'
import API_endpoint from '../Components/APIendpoints'

export const SamsCollection = () => {
  const pageVariables = {
    description:"Description",
    text :"Sam's Collection",
  }
  
  return (
    <>
    <NavBar />
    <ImageHeader 
        description={pageVariables.description} 
        text = {pageVariables.text}
        backgroundImage={pageVariables.backgroundImage}
     />
    <PortfolioImageContainer src={API_endpoint.SamsCollection} limit={-1}/>
    <Footer />
    </>
  )
};
export default SamsCollection;
