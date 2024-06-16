import React from 'react'
import './footer.css'
import Link from 'next/link'

export default function page() {
  return (
    
    <div className='footer'>
    <div className='footer-top'>
      <img src="/footer-logo.svg" />
      <p>Welcome to <span>SKY FINANCIAL</span>, where we prioritize protecting your future above all else. Our About Us section offers a glimpse into who we are, our values, and why we're dedicated to ensuring your peace of mind. Meet our experienced team, learn about our history, and discover how our personalized approach to life insurance can safeguard your loved ones' financial security. At [Agency Name], we're here to guide you toward a future of confidence and security.</p>
      <div className='footer-details'>
        <div className='footer-phone'>
          <img src="/footer-phone.svg" alt="" />
          <p>586-907-8700</p>
        </div>
        <div className='footer-mail'>
          <img src="/footer-mail.svg" alt=""/>
          <p>sam@sky.financial</p>
        </div>
        <div className='footer-map'>
          <img src="/footer-map.svg" alt="" />
          <p>455 E Maple Rd Troy, Michigan 48083, USA.</p>
        </div>
      </div>
    </div>
    <div className='footer-bottom'>
      <div className='footer-copyright'>
        <p>© 2024 SKY FINANCIAL, New York, NY. All Rights Reserved</p>
      </div>
      <div className='footer-navigate'>
        <ul>
          <li>
            <Link href='/Components/Terms' id='terms-link'>Terms of use</Link>
          </li>
          <li>
            <Link href='/Components/Privacypolicy' id='privacy-link'>Privacy & Other policies</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}



