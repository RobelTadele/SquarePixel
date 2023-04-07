import React from 'react'
import { Footer } from '../Components/Footer'
import NavBar from '../Components/NavBar'
import {PortfolioImageContainer} from '../Components/PortfolioImageContainer'
import {ImageHeader} from '../Components/imageHeaders'

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
    <PortfolioImageContainer src={Samsportfolio}/>
    <Footer />
    </>
  )
}
export default SamsCollection
