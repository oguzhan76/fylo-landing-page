import logo from '/images/logo.svg';
import icon_location from '/images/icon-location.svg';
import icon_phone from '/images/icon-phone.svg';
import icon_email from '/images/icon-email.svg';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className='footer-logo'>
                    <img src={logo} />
                </div>
                <div className='footer-grid'>
                    <div className='footer-grid__location'>
                        <img src={icon_location} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className='footer-contact'>
                        <p><span><img src={icon_phone}/></span>+1-543-123-4567</p>
                        <p><span><img src={icon_email}/></span>example@fylo.com</p>
                    </div>
                    <div className='footer-links'>
                        <div>
                            <button className='text-button'>About Us</button>
                            <button className='text-button'>Jobs</button>
                            <button className='text-button'>Press</button>
                            <button className='text-button'>Blog</button>
                        </div>
                        <div>
                            <button className='text-button'>Contact Us</button>
                            <button className='text-button'>Terms</button>
                            <button className='text-button'>Privacy</button>
                        </div>
                    </div>
                    <div className='footer-socialmedia-links'>
                    <button className='text-button'> <FaFacebookF /> </button>
                    <button className='text-button'> <FaTwitter /> </button>
                    <button className='text-button'> <FaInstagram /> </button>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;