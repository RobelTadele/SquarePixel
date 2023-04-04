
import React from 'react';
import '../Styles/homeindex.css'; 
import NavBar from './NavBar';


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

export const ImageCards = () => {
  return(
  <img
      src='https://images.unsplash.com/photo-1664229904182-9ea3f8413aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
      className='img-thumbnail'
      alt='...'
  />
  );
}



export const AboutMe = () => {
  
  return (
    <div className='aboutContainer'>
      <div className='mainAbout'>
        <div class='AboutMeContainer' >
        <h2>Hi there, I'm Robel Tadele</h2>
          <p>
            Photography is the only profession where you can shoot people and cut their heads off, 
            and it's not considered a crime. Just kidding! But seriously, if you want to be a photographer, 
            you better have a good eye for detail, and a backup plan in case your subjects start chasing you with pitchforks.
          </p>

        </div>
      
      
      
    </div>
    </div>
  )
}



