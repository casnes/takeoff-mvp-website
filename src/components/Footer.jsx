import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">ChronoBid</span>
              <span className="logo-tagline">AI-Powered Takeoffs</span>
            </div>
            <p className="footer-description">
              Revolutionizing construction bidding with AI-powered takeoff solutions. 
              Eliminate bottlenecks, win more bids, and boost profitability.
            </p>
            <div className="footer-certifications">
              <span className="cert">AI-Powered</span>
              <span className="cert">Secure</span>
              <span className="cert">Accurate</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Solutions</h4>
            <ul className="footer-links">
              <li><Link to="/problem">The Problem</Link></li>
              <li><Link to="/solution">AI Solution</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/benefits">Benefits</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/">About ChronoBid</Link></li>
              <li><Link to="/request-demo">Request Demo</Link></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <p>📞 +1-555-CHRONO-1</p>
              <p>✉️ info@chronobid.com</p>
              <p>📍 123 Construction Way<br />Builder City, BC 12345</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 ChronoBid AI Solutions. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#security">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer