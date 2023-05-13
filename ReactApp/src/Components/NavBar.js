import React from 'react'
import '../Styles/homeindex.css';

function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <a class="navbar-brand" href="/">Square Pixel</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home<span class="sr-only"></span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/portfolio">Portfolio<span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Sams-Collection">Sam's Collection</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://sqpxauthentication.auth.us-east-1.amazoncognito.com/login?client_id=47n3nt2if93bn844quiekv1b5v&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fupload">Upload</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/api">API</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar