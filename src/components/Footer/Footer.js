import React from 'react';
import './Footer.css';
// import logo1 from '../../images/logo.jpg';
// import logo2 from '../../images/logo2.jpg';

const Footer = () => {
    return (
       

        <div>
     
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Company<span>
                {/* <img src={logo2} alt=''/> */}
            </span>
          </h3>

          <p className="footer-links">
           
          </p>

          <p className="footer-company-name">Company  © 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>638 Bangla motor</span> Dhaka, Bangladesh
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+88019200000000</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:gazi@gazi.com">gazi@gazi.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About our company</span>
           It is one of the best IT firm to solve bug immedicately and support client as fast as possible.
          </p>

          <div className="footer-icons">
           
          </div>
        </div>
      </footer>
    </div>

    );
};

export default Footer;