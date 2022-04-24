import React from 'react'
import Slider from 'react-slick';
import img1 from '../images/gallery/1.png'
import img2 from '../images/gallery/2.png'
import img3 from '../images/gallery/3.png'
import img4 from '../images/gallery/4.png'
import img5 from '../images/gallery/5.png'
import img6 from '../images/gallery/6.png'
import img7 from '../images/gallery/7.png'
import img8 from '../images/gallery/8.png'
import img9 from '../images/gallery/9.jpg'
import img10 from '../images/gallery/10.jpg'
import img11 from '../images/gallery/11.jpg'
import '../style/gallery.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        variableWidth: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>
            <div className="header">Gallery</div>
            <Slider {...settings}>
                <div className='galItem'>
                    <div className="content">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className='galItem'>
                    <div className="content">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className='galItem'>
                    <div className="content">
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className='galItem'>
                    <div className="content">
                        <img src={img4} alt="" />
                    </div>
                   </div>
                    <div className='galItem'>
                        <div className="content">
                            <img src={img5} alt="" />
                        </div>
                    </div>
                    <div className='galItem'>
                        <div className="content">
                            <img src={img6} alt="" />
                        </div>
                    </div>
                    <div className='galItem'>
                        <div className="content">
                            <img src={img7} alt="" />
                        </div>
                    </div>
                    <div className='galItem'>
                        <div className="content">
                            <img src={img8} alt="" />
                        </div>
                    </div>

                    <div className='galItem'>
                        <div className="content">
                            <img src={img9} alt="" />
                        </div>
                    </div> <div className='galItem'>
                        <div className="content">
                            <img src={img10} alt="" />
                        </div>
                    </div> <div className='galItem'>
                        <div className="content">
                            <img src={img11} alt="" />
                        </div>
                    </div>


            </Slider>
        </div>
    )
}

export default Gallery