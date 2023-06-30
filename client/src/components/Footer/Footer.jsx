import React from 'react'
import './Footer.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link className='link' to="/products/1">
            <span>Speed Cubes</span>
          </Link>
          <Link className='link' to="/products/3">
            <span>Cards</span>
          </Link>
          <Link className='link' to="/products/2">
            <span>Chess</span>
          </Link>
          <Link className='link' to="/products/4">
            <span>Accessories</span>
          </Link>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Welcome to Eli's Corner, a site with all the things that I hold dear and true to my heart.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Feel free to reach out through the means below!
          </span>
          <span className='icons'>
            <Link to='https://www.linkedin.com/in/elias-hazboun-5b6a0717a/' target='_blank'>
              <LinkedInIcon/>
            </Link>
            <Link to='https://github.com/eliashazboun' target='_blank'>
              <GitHubIcon/>
            </Link>
            <Link to='https://eliashazboun.github.io/' target='_blank'>

              <LanguageIcon/>
            </Link>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Eli's Corner</span>
          <span className='copyright'>© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer