import React from 'react'
import '../Styles/navbar.css';

function NavBar() {
  return (
    <>
      <div class="navContainer">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Square Pixel</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">Home <span class="sr-only"></span></a>
            <a class="nav-item nav-link" href="/portfolio">Portfolio</a>
            <a class="nav-item nav-link" href="/Sams-Collection">Sam's Collection</a>
            <a class="nav-item nav-link" href="/upload">testPage</a>
            <a class="nav-item nav-link" href="/uploaditem">Upload Image</a>
          </div>
        </div>
      </nav>


      </div>


    </>
  )
}

export default NavBar