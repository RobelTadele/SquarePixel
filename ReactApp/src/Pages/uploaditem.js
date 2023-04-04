import React from 'react'
import NavBar from '../Components/NavBar'
import Uploader from '../Components/uploader'

function uploaditem() {
  return (
    <>
      <NavBar />
      
      {/* Uploads items to s3, uploads metadata to squarepixelAPI */}
      <Uploader />
    </>
  )
}

export default uploaditem