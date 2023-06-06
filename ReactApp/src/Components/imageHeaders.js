import React from 'react'
import '../Styles/imageHeader.css';

// Information Banner Card 
// Props.text -> Header Text to display
// Props.description -> Header Description 
export const ImageHeader = (props) => {
  return (
   <>
    <div class='headingContainer' >
        <div class='heading'>{props.text}</div>
        <div class='description'>{props.description}</div>
    </div>
   </>
  )
}



