import React, {useState, useEffect, Fragment} from 'react'
import NavBar from '../Components/NavBar'
import axios from 'axios';
import { Footer } from '../Components/Footer';
import PhotoAlbum from "react-photo-album";


function Uploads() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('https://picsum.photos/v2/list?page=2&limit=100')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
 
  }, [])
  
  const photos = [];

  data.forEach((data) => {

    const urls = data.download_url
    const h = data.height
    const w = data.width
   
    const objects = {
      src: urls,
      height:h,
      width:w
   }

   photos.push(objects)

  });

  return (
    <>
    <NavBar />
    <PhotoAlbum layout="columns" photos={photos} />
    <Footer />
    
    </>

  )
}

export default Uploads
