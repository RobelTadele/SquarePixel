import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PhotoAlbum from "react-photo-album";
import '../Styles/homeindex.css';

export const PortfolioImageContainer = (props) => {
  const [imageObjects, setimageObjects] = useState([])
  // Fetch images from api, reload when new image added
  useEffect(() =>{ 
    axios
    .get(props.src)
    .then(response =>setimageObjects(response.data))
    .catch(err=>console.log(err))
  }, [])
  
  const imageSrc = []
  imageObjects.map(item=>{
    // converting objects to photoalbum specified objects
    const value = {
      src : item.imageURL, 
      width: 400, 
      height:600
    }
    imageSrc.push(value)
  })

  // React photo album lib
  return <>
    <div id="galleryContainer">
      <PhotoAlbum layout="rows" photos={imageSrc}/>
    </div>

    <div id="galleryContainerMobile">
      <PhotoAlbum columns={1} layout="columns" photos={imageSrc}/>
    </div>
  </>
}