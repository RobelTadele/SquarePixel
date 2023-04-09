import React from 'react'
import '../Styles/apiPage.css'
import { ImageCards } from '../Components/HomePage'
import ApidocComponent from '../Components/ApidocComponent'

// API Resources Page 
const ConsumeAPI = () => {
  return (
    <>
    <div className='parContainer'>
      
        <div className="designContainer">
            <div className="sideImage">
              <ImageCards src={"https://images.unsplash.com/photo-1678599694191-0bd740f04065?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}/>
              </div>
        </div>
        <div className="docContainer">
            <h1>Square Pixel API<br/>
            <h3>Documentation</h3></h1>

            <p>
              What has an eye but can't see,<br/>
              a shutter but can't blink,<br/>
              and captures memories that will never fade away?
            </p>

           <div className="apiIntro">
            Welcome I'm thrilled that you choose to visit Square Pixel<br/>
            Feel free to access my Photography collection using the API endpoints<br/>
            listed in the table below. The API is still in beta and I'll be adding <br/>
            more fine tuned queries soon. <br/>
           </div>
            
            <div className="apiEndpoints">
              <ApidocComponent />
              </div> 
        </div>
    </div>
    </>
  )
}

export default ConsumeAPI