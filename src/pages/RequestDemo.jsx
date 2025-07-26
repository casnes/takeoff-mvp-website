import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    companySize: '',
    currentTakeoffMethod: '',
    averageProjects: '',
    timelineInterest: '',
    specificNeeds: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Demo request submitted:', formData)
    alert('Thank you for your demo request! We will contact you within 24 hours to schedule your personalized demonstration.')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              See ChronoBid in Action with
              <span className="highlight"> Your Own Blueprints</span>
            </h1>
            <p className="hero-subtitle">
              Experience 10x faster takeoffs in a live 15-minute demonstration. 
              Upload your blueprint and see immediate AI-powered results.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Minute Demo</span>
              </div>
              <div className="stat">
                <span className="stat-number">24hr</span>
                <span className="stat-label">Response Time</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Free & No Obligation</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <span>Live Demo in Progress - AI Analyzing Blueprint</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Information */}
      <section className="demo-info" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What to Expect in Your Demo</h2>
            <p className="section-subtitle">
              A personalized demonstration tailored to your specific needs and projects
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">📤</div>
              <div className="benefit-content">
                <h3>Bring Your Own Blueprint</h3>
                <p>
                  Upload a real project blueprint and watch ChronoBid analyze it live. 
                  See actual results with your specific type of construction work.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🤖</div>
              <div className="benefit-content">
                <h3>Live AI Analysis</h3>
                <p>
                  Watch our AI detect structures, calculate quantities, and generate 
                  detailed takeoffs in real-time. See the technology in action.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <div className="benefit-content">
                <h3>Custom ROI Calculation</h3>
                <p>
                  Get personalized savings calculations based on your current takeoff 
                  volume, costs, and business size. See your specific benefits.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🔧</div>
              <div className="benefit-content">
                <h3>Integration Discussion</h3>
                <p>
                  Learn how ChronoBid integrates with your existing software and 
                  workflows. Get a custom implementation plan for your business.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">❓</div>
              <div className="benefit-content">
                <h3>Technical Q&A Session</h3>
                <p>
                  Ask questions about accuracy, security, training, and any technical 
                  concerns. Get expert answers from our construction technology team.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📋</div>
              <div className="benefit-content">
                <h3>Next Steps Planning</h3>
                <p>
                  Discuss trial options, pricing, and implementation timeline. 
                  Get a clear path forward with no pressure or obligations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="demo-section">
        <div className="container">
          <div className="demo-content">
            <div className="demo-info">
              <h2 className="section-title">Schedule Your Free Demo</h2>
              <p className="demo-description">
                Complete the form below and we'll contact you within 24 hours to schedule 
                your personalized ChronoBid demonstration at your convenience.
              </p>
              
              <div className="demo-benefits">
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>No software installation required</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Screen sharing or in-person options</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Bring your entire team</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Flexible scheduling available</span>
                </div>
              </div>
              
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span className="contact-text">+1-555-CHRONO-1</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span className="contact-text">demo@chronobid.com</span>
                </div>
              </div>
            </div>
            
            <form className="demo-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Request Your Demo</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="jobTitle">Job Title *</label>
                  <input 
                    type="text" 
                    id="jobTitle" 
                    name="jobTitle" 
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="e.g., Project Manager, Estimator, Owner"
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companySize">Company Size *</label>
                  <select 
                    id="companySize" 
                    name="companySize" 
                    value={formData.companySize}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select company size</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-15">6-15 employees</option>
                    <option value="16-50">16-50 employees</option>
                    <option value="51-100">51-100 employees</option>
                    <option value="100+">100+ employees</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="currentTakeoffMethod">Current Takeoff Method</label>
                  <select 
                    id="currentTakeoffMethod" 
                    name="currentTakeoffMethod"
                    value={formData.currentTakeoffMethod}
                    onChange={handleInputChange}
                  >
                    <option value="">Select current method</option>
                    <option value="manual">Manual/Paper & Calculator</option>
                    <option value="excel">Excel Spreadsheets</option>
                    <option value="planswift">PlanSwift</option>
                    <option value="bluebeam">Bluebeam</option>
                    <option value="proest">ProEst</option>
                    <option value="sage">Sage Estimating</option>
                    <option value="other">Other Software</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="averageProjects">Average Bids Per Month</label>
                  <select 
                    id="averageProjects" 
                    name="averageProjects"
                    value={formData.averageProjects}
                    onChange={handleInputChange}
                  >
                    <option value="">Select range</option>
                    <option value="1-5">1-5 bids</option>
                    <option value="6-10">6-10 bids</option>
                    <option value="11-20">11-20 bids</option>
                    <option value="21-50">21-50 bids</option>
                    <option value="50+">50+ bids</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="timelineInterest">Implementation Timeline</label>
                  <select 
                    id="timelineInterest" 
                    name="timelineInterest"
                    value={formData.timelineInterest}
                    onChange={handleInputChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="specificNeeds">Specific Needs or Questions</label>
                <textarea 
                  id="specificNeeds" 
                  name="specificNeeds" 
                  rows="4"
                  value={formData.specificNeeds}
                  onChange={handleInputChange}
                  placeholder="Tell us about your biggest takeoff challenges, specific project types, or any questions you'd like addressed in the demo..."
                />
              </div>
              
              <button type="submit" className="btn btn-primary btn-large btn-full-width">
                Request Free Demo
              </button>
              
              <p className="form-disclaimer">
                * Required fields. Your information will be kept confidential and used only 
                to provide your demo and follow-up information. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose ChronoBid */}
      <section className="why-choose" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Contractors Choose ChronoBid</h2>
            <p className="section-subtitle">
              Join the construction companies already transforming their bidding process
            </p>
          </div>
          
          <div className="problem-grid">
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>🏆</div>
              <h3 className="problem-title">Proven Results</h3>
              <p className="problem-description">
                300+ successful implementations with average 15:1 ROI in first year. 
                Real results from real construction companies.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>🔒</div>
              <h3 className="problem-title">Enterprise Security</h3>
              <p className="problem-description">
                Bank-level encryption and GDPR compliance. Your blueprints and data 
                are completely secure with industry-leading protection.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>🛠️</div>
              <h3 className="problem-title">Built for Construction</h3>
              <p className="problem-description">
                Designed specifically for construction takeoffs by industry experts. 
                Understands construction workflows and terminology.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>📞</div>
              <h3 className="problem-title">Expert Support</h3>
              <p className="problem-description">
                Dedicated customer success team with construction industry experience. 
                Get help when you need it from people who understand your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="testimonial-preview">
        <div className="container">
          <div style={{ 
            background: 'white', 
            padding: 'var(--spacing-xl)', 
            borderRadius: 'var(--border-radius-lg)', 
            boxShadow: 'var(--shadow-lg)',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: '1.3rem', 
              fontStyle: 'italic', 
              color: 'var(--dark-gray)', 
              marginBottom: 'var(--spacing-lg)', 
              lineHeight: '1.7' 
            }}>
              "The demo sold itself. Seeing our actual blueprint analyzed in 15 minutes 
              versus the 8 hours it normally takes was incredible. We signed up immediately 
              and have increased our bid volume by 400% in just 3 months."
            </p>
            <div>
              <h4 style={{ color: 'var(--secondary-color)', marginBottom: 'var(--spacing-xs)' }}>
                Michael Rodriguez
              </h4>
              <p style={{ color: 'var(--medium-gray)', fontSize: '0.9rem', margin: 0 }}>
                Project Manager, Southwest Construction Group
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta" style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
              Ready to See ChronoBid Transform Your Takeoffs?
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'rgba(255,255,255,0.9)', 
              marginBottom: 'var(--spacing-xl)' 
            }}>
              Every day you wait is another day competitors pull ahead with AI-powered takeoffs. 
              Schedule your demo today and see immediate results.
            </p>
            <div className="hero-cta">
              <a href="#demo-form" className="btn btn-primary btn-large">
                Schedule Demo Now
              </a>
              <Link to="/benefits" className="btn" style={{ 
                backgroundColor: 'transparent', 
                border: '2px solid white', 
                color: 'white' 
              }}>
                Learn More About Benefits
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RequestDemo