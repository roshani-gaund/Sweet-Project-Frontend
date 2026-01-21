import React from 'react'
import './footer.css'
const footer = () => {
  return (<>
    <div className="container" >
      <div className="row" id='range'>
        <div className="col-md-2" id='footer'>
          <h3>Our Range</h3>
          <ul>
            <li>Sweets</li> 
            <li>Dry Fruits</li>
            <li>Snacks</li>
            <li>Gifting</li>
            <li>Catrings</li>
            <li>Biscuits</li>
          </ul>
        </div>
        <div className="col-md-2"id='footer'>
          <h3>About-Us</h3>
          <ul>
            <li>Company</li>
            <li>Our Brands</li>
            <li>Global Footprint</li>
            <li>Contact Us</li>
            <li>Login</li>
            <li>Track Your Order</li>
          </ul>
        </div>
        <div className="col-md-2" id='footer'>
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Shipping Policy</li>
            <li>Return & Exchange Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-12" id='Assist' >
          <h1 id='happy'>We'd Be Happy To Assist You</h1>
          <h4>Timing:
            <li>Monday To Saturday</li>
            <li>10:00 AM to 5:30 PM IST</li>
          </h4>
          <h4>Email:
            <li>ShivShakti@gmail.com</li>
          </h4>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className="row">
      <div className='col-md-12' id='bottom-footer'>
      <h5>@2025 Copyright.ShivShakti Sweets &Dry Fruits</h5>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-facebook-f"></i>
      <i className="fa-brands fa-linkedin"></i>
      <i className="fa-brands fa-whatsapp"></i>
      </div>
     </div>
    </div>
 
    </> )
}

export default footer