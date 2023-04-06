import React from 'react'
import { ImageCards } from './HomePage'

export const Carousel = () => {
    const images = {
        1: "https://squarepixelbucket.s3.us-east-2.amazonaws.com/MainPortfolio/DSC_0340.jpg",
        2: "https://squarepixelbucket.s3.us-east-2.amazonaws.com/MainPortfolio/DSC_0682.jpg",
        3: "https://squarepixelbucket.s3.us-east-2.amazonaws.com/MainPortfolio/DSC_0457.jpg"
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
