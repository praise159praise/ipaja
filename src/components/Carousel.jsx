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
    className: 'slider',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode:true,
    responsive: [
     
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <div>

      <Slider {...settings}>
        <div className='carItem'>
          <div className="content">
            <img src={car1} alt="" />
          </div>
        </div>
        <div className='carItem'>
          <div className="content">
            <img src={car2} alt="" />
          </div>
        </div>
        <div className='carItem'>
          <div className="content">
            <img src={car3} alt="" />
          </div>
        </div>

      </Slider>
    </div>
  )
}

export default Carousel