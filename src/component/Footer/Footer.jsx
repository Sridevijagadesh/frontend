import React from 'react'
import './Fotter.css'
import logo_big from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import whatApp from '../Assets/whatsapp_icon.png'
import ping from '../Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-img">
        <div className="footer-imgs">
        <img src={logo_big} alt=''></img>
       
        <p>SHOPPER</p>
        </div>
        <div className='fotter-link'>
          <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          </div>
          <div className="footer-icons">
            <img src={insta} alt=''></img>
            <img src={ping} alt=''></img>
            <img src={whatApp} alt=''></img>
          </div>
        <hr></hr>
        <div className="copyright">
          <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
