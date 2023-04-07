import React from 'react'
import '../Styles/imageHeader.css';

export const ImageHeader = (props) => {
   
    //const backgroundImage = props.bannerImage.map(img => img.src)
    //const randomURL = backgroundImage[Math.floor(Math.random()*backgroundImage.length)]
    // const divStyle = {backgroundImage : `url(${randomURL})`}

  return (
   <>
    <div class='headingContainer' >
        <div class='heading'>{props.text}</div>
        <div class='description'>{props.description}</div>
    </div>
   </>
  )
}



