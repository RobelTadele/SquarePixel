import React from 'react'
import '../Styles/dropitem.css'
import NavBar from '../Components/NavBar'

function UploadPage() {
  return (
    <>
    <NavBar />
    <div className='parentContainer'>
      <h2>Welcome back, User Uploads coming soon</h2>
      <a href='https://sqpxauthentication.auth.us-east-1.amazoncognito.com/login?client_id=47n3nt2if93bn844quiekv1b5v&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fupload'>SignOut</a>
      
      </div>
      </>
  )
}

export default UploadPage