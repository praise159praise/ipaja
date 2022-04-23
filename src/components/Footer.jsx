import React from 'react'
import '../style/footer.css'
import {FaFacebookF, FaInstagram, FaYoutube, FaYoutubeSquare} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='footer'>
            <p>ipaja@2022</p>
            <div className="contactus">
                <p>Contact us</p>
                <div className="icons">
                    <div><FaFacebookF/></div>
                    <div><FaInstagram/></div>
                    <div><FaYoutube/></div>
                </div>
            </div>
            </div>

    )
}

export default Footer