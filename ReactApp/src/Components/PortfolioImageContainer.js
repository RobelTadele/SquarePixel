import React from 'react'
import '../Styles/homeindex.css';
import { ApiFetch } from './ApiFetch';
import { LightboxComp } from './LightboxComp';


export const PortfolioImageContainer = (src, limit) => {
  const imageSrc = ApiFetch(src, limit)
  
    // React photo album views based on screen size
  return <>
   
   <div id="galleryContainer">
    <LightboxComp imageSrc={imageSrc} layout={"rows"}/>
   </div>

   <div id="galleryContainerMobile">
    <LightboxComp imageSrc={imageSrc} layout={"columns"} columns={1}/>
   </div>

   <div id="galleryContainerTablet">
    <LightboxComp imageSrc={imageSrc} layout={"columns"} columns={2}/>
   </div>
  </>
}


