import React from 'react';
import '../Styles/homeindex.css';

// Landing Page Title Component
export const LandingPage = () => {
  return (
    <>
      <div className="parentContainer">
        <div className='logoBox'>
          <div className='intro'>Square Pixel</div>
        </div>
      </div>
    </>
  );
};

// Home Page exit Image Card
// Todo: Add rotating Image
export const ImageCards = (props) => {
  return (
    <img
      src={props.src}
      className='img-thumbnail'
      alt='Landing Page Image 2'
    />
  );
}

export const AboutMe = () => {
  return (
    <div className='aboutContainer'>
      <div className='mainAbout'>
        <div class='AboutMeContainer' >
          

          <div class="list-group">
          <h2>Hi there, I'm <a href='https://www.linkedin.com/in/robeltadele'>Robel Tadele</a></h2>
          
          
          <p>
            I'm a Software Engineer who has a strong passion for developing efficient,
            high quality Software solutions impacting peoples lives for the good.
          </p>
            <a href="https://github.com/RobelTadele?tab=repositories" class="list-group-item list-group-item-action flex-column align-items-start active">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Some of my Skills include</h5>
                <small>Today</small>
              </div>
              <p class="mb-1">Python, Java, C++, HTML, CSS, JavaScript</p>
            </a>
            <a href="https://github.com/RobelTadele?tab=repositories" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Frameworks</h5>
                <small class="text-muted">also Today</small>
              </div>
              <p class="mb-1">Spring Boot, React, Bootstrap, Rest API</p>
            </a>
            <a href="https://github.com/RobelTadele?tab=repositories" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Other Skills</h5>
                <small class="text-muted">you guessed it, also today!</small>
              </div>
              <p class="mb-1">AWS, Git, Agile, Automation, Data Structures and Algorithms, Networks and Data Communications.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
