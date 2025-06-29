import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer'>
        <img src={logo} alt='logo' className='logo'/>
        <ul>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Privacy Policy</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
        <div className="footer_social">
            <a href='#'><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href='#'><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
        <hr/>
        <div className="copy_right">
          <p>© All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer