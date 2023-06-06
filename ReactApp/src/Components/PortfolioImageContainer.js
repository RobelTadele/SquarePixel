import React from 'react'
import '../Styles/homeindex.css';
import { ApiFetch } from './ApiFetch';
import { LightboxComp } from './LightboxComp';

export const PortfolioImageContainer = (src, limit) => {
  const imageObj = ApiFetch(src, limit)  
  
    // React photo album views based on screen size defaults are 
    // 1, 2, 7 images depending on screen size
  return <>
   
   <div className="parentGalleryContiner">
    <div id="galleryContainer">
      <LightboxComp imageObj={imageObj} layout={"rows"}/>
    </div>

    <div id="galleryContainerMobile">
      <LightboxComp imageObj={imageObj} layout={"columns"} columns={1}/>
    </div>

    <div id="galleryContainerTablet">
      <LightboxComp imageObj={imageObj} layout={"columns"} columns={2}/>
    </div>

    <div id="galleryContainerMax">
      <LightboxComp imageObj={imageObj} layout={"columns"} columns={7}/>
    </div>
   </div>
  </>
}