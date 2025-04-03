import './Footer.scss'
import { footerList } from '../../data'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import footerLogo from  './../../public/images/header-logo.png'

export default function Footer() {
  return (
    <footer className='footer' id="footer">
      <div className="container">
        <div className="footer__inner">
            <img src='/images/header-logo.png' alt="footer-logo" className="footer__logo" />
            <ul className="footer__list">
                {footerList.map((item) => (
                  <li key={item.title} className="footer__item">
                      <a href={item.link} className="footer__link">{item.title}</a>
                  </li>
                ))}
            </ul>
            <ul className="footer__social">
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <FaFacebookF className='footer__social-icon'/>
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <IoLogoYoutube className='footer__social-icon'/>
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <FaInstagram className='footer__social-icon'/>
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <FaTiktok className='footer__social-icon'/>
                </a>
              </li>
            </ul>
        </div>
        <p className='footer__copy'>&copy; 2022 My Website. All rights reserved.</p>
      </div>
    </footer>
  )
}



