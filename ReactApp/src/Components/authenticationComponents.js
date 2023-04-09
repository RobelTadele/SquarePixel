import React from 'react'

export const AuthenticationComponents = () => {
    const redirect = "https://squarepixel.auth.us-east-2.amazoncognito.com/login?client_id=4sjgebmkjeesbgfsdjjovje1rf&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fupload"
  return (
    <div>
        <h1>Welcome Please log in below</h1>
        <a href={redirect}>Login</a>








    </div>
  )
}



