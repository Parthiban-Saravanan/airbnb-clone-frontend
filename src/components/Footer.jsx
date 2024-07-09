import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Airbnb Clone is a platform for finding and booking unique accommodations around the world. We aim to provide the best travel experiences for our users.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-light">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-light">Contact Us</a>
              </li>
              <li>
                <a href="/terms" className="text-light">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy" className="text-light">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-home mr-2"></i>123 Main Street, Anytown, USA
              </li>
              <li>
                <i className="fas fa-envelope mr-2"></i>info@airbnbclone.com
              </li>
              <li>
                <i className="fas fa-phone mr-2"></i>+ 01 234 567 88
              </li>
              <li>
                <i className="fas fa-print mr-2"></i>+ 01 234 567 89
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center p-3 bg-secondary">
        <a href="https://www.linkedin.com" className="text-light me-4">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a href="https://www.twitter.com" className="text-light me-4">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="https://www.facebook.com" className="text-light me-4">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="https://www.instagram.com" className="text-light me-4">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
      </div>
      
      <div className="text-center p-3 bg-dark">
        © 2024 Airbnb Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
