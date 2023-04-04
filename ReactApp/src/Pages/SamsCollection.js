import React from 'react'
import { Footer } from '../Components/Footer'
import NavBar from '../Components/NavBar'
import {PortfolioImageContainer} from '../Components/PortfolioImageContainer'
import Uploads from '../Pages/GalleryTest'


export const SamsCollection = () => {
  const heading = "Sams Collection"
  const gateway = '/SquarePixelAPI/Sams-Collection'
  
  return (
    <div>
      <NavBar />
     
      {/* <PortfolioImageContainer heading={heading} source= {gateway}/> */}
      
      <Footer />
     
    </div>
  )
}

export default SamsCollection
