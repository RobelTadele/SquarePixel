import React from 'react'
import PhotoAlbum from "react-photo-album";
import '../Styles/homeindex.css';
import { ApiFetch } from './ApiFetch';

export const PortfolioImageContainer = (src, limit) => {
  const imageSrc = ApiFetch(src, limit)
  
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