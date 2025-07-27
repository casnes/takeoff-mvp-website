import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => location.pathname === path

  return (
    <header className="header" id="header">
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <Link to="/" className="nav-logo logo-container" aria-label="ChronoBid Home">
            <div className="logo-content">
              <img src="/public/Chrono Bid Logo.png" alt="ChronoBid Logo" className="logo-image" />
              <span className="logo-text">ChronoBid</span>
            </div>
          </Link>
          
          <button 
            className="nav-toggle" 
            id="nav-toggle" 
            aria-label="Toggle navigation menu" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/problem" 
                className={`nav-link ${isActive('/problem') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Problem
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/solution" 
                className={`nav-link ${isActive('/solution') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Solution
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/how-it-works" 
                className={`nav-link ${isActive('/how-it-works') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/benefits" 
                className={`nav-link ${isActive('/benefits') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </Link>
            </li>
            <li className="nav-item nav-cta">
              <Link 
                to="/request-demo" 
                className="btn btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Demo
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header