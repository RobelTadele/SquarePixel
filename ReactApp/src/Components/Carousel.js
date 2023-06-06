import React from 'react'
import '../Styles/homeindex.css'
import { ImageCards } from './HomePage'
import { ApiFetch } from './ApiFetch'
import API_endpoint from './APIendpoints'

export const Carousel = () => {
    
    const homeImgs = ApiFetch(API_endpoint.portfolio, 3)
    
    const images = {
        1: "https://squarepixelbucket1.s3.us-east-1.amazonaws.com/MainPortfolio/DSC_0850.jpg",
        2: "https://squarepixelbucket1.s3.us-east-1.amazonaws.com/MainPortfolio/IMG_0887.jpg",
        3: "https://squarepixelbucket1.s3.us-east-1.amazonaws.com/MainPortfolio/Snapseed-53.jpg"
    }

    return (
        <>
        {/* Small Carousel Images for small displays */}
        <div id="smallImageContainer">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={images[1]} alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={images[2]} alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={images[3]} alt="Third slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </div>
        
        {/* Large Images for bigger screens */}
        <div className='largeImages'>
            <ImageCards src={images[1]}/>
            <ImageCards src={images[2]}/>
            <ImageCards src={images[3]}/>
          </div>
        </>
    )
}
