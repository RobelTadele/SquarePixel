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
              <a class="nav-link" href="/upload">Test Page</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/uploaditem">Upload Image</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar