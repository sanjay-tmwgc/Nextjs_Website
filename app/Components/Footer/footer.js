import React from 'react'
import './footer.css'

export default function page() {
  return (
    <div className='footer'>
      <img src="/footer-logo.svg" />
      <p>Welcome to SKY FINANCIAL, where we prioritize protecting your future above all else. Our About Us section offers a glimpse into who we are, our values, and why we're dedicated to ensuring your peace of mind. Meet our experienced team, learn about our history, and discover how our personalized approach to life insurance can safeguard your loved ones' financial security. At [Agency Name], we're here to guide you toward a future of confidence and security.</p>
      <div className='footer-details'>
        <div>
          <img src="/footer-phone.svg" alt="" />
          <p>586-907-8700</p>
        </div>
        <div>
          <img src="/footer-mail.svg" alt=""/>
          <p>sam@sky.financial</p>
        </div>
        <div>
          <img src="/footer-map.svg" alt="" />
          <p>455 E Maple Rd Troy, Michigan 48083, USA.</p>
        </div>

      </div>

    </div>
  )
}



