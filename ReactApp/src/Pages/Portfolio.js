import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import PhotoAlbum from "react-photo-album";
import { Footer } from '../Components/Footer';
import AWS from 'aws-sdk';
import {ImageHeader} from '../Components/imageHeaders'
import axios from 'axios';

export const Portfolio = () => {
   
  // API Endpoints for Image Classifications
  const APIendpoints = {
    imageAPI : "http://ec2-3-21-248-157.us-east-2.compute.amazonaws.com:8081/api/v1/images/",
  }
  const [imageObjects, setimageObjects] = useState([])
  useEffect(() =>{
   
    axios
    .get(APIendpoints.imageAPI)
    .then(response =>setimageObjects(response.data))
    .catch(err=>console.log(err))
    
    
  }, [imageObjects])
  const imageSrc = []
  
  imageObjects.map(item=>{
    const value = {
      src : item.imageURL, 
      width: 500, 
      height:700
    }
    imageSrc.push(value)
    
  })
  
  return (
    <>
    
    <NavBar />
    <ImageHeader 
      description="Personal Collection" 
      text ="Gallery"
      backgroundImage="image" 
      // bannerImage = {imageUrl}
     />
    <PhotoAlbum layout="columns" photos={imageSrc}/>
    <Footer />
    </>
  )
};

export default Portfolio;
