import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import car1 from '../images/carousel1.jpg'
import car2 from '../images/carousel2.jpg'
import car3 from '../images/carousel3.jpg'

import '../style/carousel.css'

const Carousel = () => {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>
    
    <Slider {...settings}>
      <div className='carItem'>
        <div className="content">
            <img src={car1} alt="" />
            praise
        </div>
      </div>
      <div className='carItem'>
        <div className="content">
            <img src={car2} alt="" />
            bamiyo
        </div>
      </div>
      <div className='carItem'>
        <div className="content">
            <img src={car3} alt="" />
            bamiyo
        </div>
      </div>
     
    </Slider>
  </div>
  )
}

export default Carousel