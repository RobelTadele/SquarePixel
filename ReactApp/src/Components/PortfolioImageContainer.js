import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PhotoAlbum from "react-photo-album";
import '../Styles/homeindex.css';

//Todo: pass api endpoint as props
export const PortfolioImageContainer = (props) => {
  const [imageObjects, setimageObjects] = useState([])
  
  const vals = props.imageAPIsrc
  
  // Fetch images from api, reload when new image added
  useEffect(() =>{ 
    axios
    .get("http://ec2-18-219-215-231.us-east-2.compute.amazonaws.com:8081/api/v1/images/")
    .then(response =>setimageObjects(response.data))
    .catch(err=>console.log(err))
  }, [imageObjects])
  
  const imageSrc = []
  imageObjects.map(item=>{
    // converting objects to photoalbum specified objects
    const value = {
      src : item.imageURL, 
      width: 500, 
      height:700
    }
    imageSrc.push(value)
  })

  // React photo album lib
  return <div id="galleryContainer">
    <PhotoAlbum columns = {2} layout="columns" photos={imageSrc}/>
  </div>
}