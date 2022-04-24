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
                    <a href=""><div><FaFacebookF/></div></a>
                    <a href="https://instagram.com/ipaja.ayd?igshid=YmMyMTA2M2Y="><div><FaInstagram/></div></a>
                    <a href=""><div><FaYoutube/></div></a>
                </div>
            </div>
            </div>

    )
}

export default Footer