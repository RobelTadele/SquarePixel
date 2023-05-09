import React, { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import axios from 'axios';
import API_endpoint from '../Components/APIendpoints'


const AuthenticationPage = () => {
  const [presigned, setpresigned] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null);

  // Store Selected images
  const handleImageUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Fetch PresignedURL from API Gateway
  const fetchPresignedURL = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get(API_endpoint.presignedURLTrigger);
      setpresigned(res.data.body)
      const formData = new FormData();
      
      formData.append("image", selectedFile);
      const submitted = await axios.post(presigned.URL, formData).then((response) => {
        console.log(response);
      });

    } catch (err) {
      console.log(err, "Failed to Upload Image")
    }
  };


  return (
    <>
      <NavBar />
      <form>
        <input type="file" onChange={handleImageUpload} />
        <button type="submit" onClick={fetchPresignedURL}>Submit</button>
      </form>
    </>
  )
}

export default AuthenticationPage