import React from 'react'
import { Link } from 'react-router-dom'

const Solution = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              AI-Powered Takeoffs:
              <span className="highlight"> The Future is Now</span>
            </h1>
            <p className="hero-subtitle">
              ChronoBid's artificial intelligence eliminates manual takeoff bottlenecks, 
              delivering 10x faster results with 95% accuracy guaranteed.
            </p>
            <div className="hero-cta">
              <Link to="/request-demo" className="btn btn-primary btn-large">Get Free Demo</Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <span>AI Analyzing Construction Blueprint</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology */}
      <section className="core-technology">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Revolutionary AI Technology</h2>
            <p className="section-subtitle">
              Advanced computer vision and machine learning trained on millions of construction blueprints
            </p>
          </div>
          
          <div className="solution-features">
            <div className="feature-item">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">Computer Vision AI</h3>
              <p className="feature-description">
                Our proprietary AI recognizes structures, materials, and dimensions across 
                any blueprint format - PDF, CAD, or hand-drawn plans.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🧠</div>
              <h3 className="feature-title">Machine Learning Engine</h3>
              <p className="feature-description">
                Continuously learns from every project to improve accuracy and adapt 
                to your specific construction methods and preferences.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Intelligent Analysis</h3>
              <p className="feature-description">
                Goes beyond simple measurements to understand context, identifying 
                complex structural relationships and material requirements.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <h3 className="feature-title">Custom Integration</h3>
              <p className="feature-description">
                Seamlessly integrates with your existing cost databases and 
                estimating workflows for personalized, accurate pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Solves Each Problem */}
      <section className="problem-solutions" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How ChronoBid Solves Every Takeoff Problem</h2>
            <p className="section-subtitle">
              Our AI directly addresses each pain point that's holding your business back
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <div className="benefit-content">
                <h3>Speed: 8-20 Hours → 15-30 Minutes</h3>
                <p>
                  <strong>10x faster processing</strong> means you can submit more bids, respond to 
                  last-minute opportunities, and beat competitors to the punch every time.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <div className="benefit-content">
                <h3>Accuracy: 95% Precision Guaranteed</h3>
                <p>
                  <strong>Eliminate human error</strong> with AI that doesn't get tired, distracted, 
                  or make calculation mistakes. Protect your margins with reliable estimates.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📏</div>
              <div className="benefit-content">
                <h3>Consistency: Standardized Process</h3>
                <p>
                  <strong>Same results every time</strong> regardless of who initiates the takeoff. 
                  Build confidence with predictable, professional estimates.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <div className="benefit-content">
                <h3>Scale: 5-10 Bids → 25-50 Bids/Month</h3>
                <p>
                  <strong>5x increase in bid capacity</strong> means more opportunities, more revenue, 
                  and faster business growth without hiring additional staff.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <div className="benefit-content">
                <h3>Cost: 70% Reduction in Takeoff Costs</h3>
                <p>
                  <strong>Slash labor expenses</strong> while improving quality. Redirect your 
                  estimators to high-value activities like client relationships.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">😌</div>
              <div className="benefit-content">
                <h3>Stress: Eliminate Deadline Pressure</h3>
                <p>
                  <strong>No more all-nighters</strong> or rushed estimates. Deliver quality takeoffs 
                  with time to spare, reducing team stress and turnover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="competitive-advantage">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Your New Competitive Advantage</h2>
            <p className="section-subtitle">
              While competitors struggle with manual processes, you'll dominate with AI
            </p>
          </div>
          
          <div className="problem-grid">
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>🏆</div>
              <h3 className="problem-title">Win More Bids</h3>
              <p className="problem-description">
                Submit 5x more bids with consistent accuracy. Higher volume + better quality = 
                more wins and increased market share.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>⚡</div>
              <h3 className="problem-title">Respond Faster</h3>
              <p className="problem-description">
                Be the first to submit professional estimates. Early submission often 
                influences project owners and sets you apart from the competition.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>💎</div>
              <h3 className="problem-title">Higher Quality Bids</h3>
              <p className="problem-description">
                Detailed, accurate takeoffs demonstrate professionalism and build 
                client confidence in your ability to deliver projects successfully.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>📊</div>
              <h3 className="problem-title">Better Margins</h3>
              <p className="problem-description">
                Eliminate costly estimation errors and optimize pricing strategies. 
                Protect and improve profit margins on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="technical-specs" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technical Capabilities</h2>
            <p className="section-subtitle">
              Enterprise-grade AI built specifically for construction takeoffs
            </p>
          </div>
          
          <div className="solution-features">
            <div className="feature-item">
              <div className="feature-icon">📁</div>
              <h3 className="feature-title">Universal File Support</h3>
              <p className="feature-description">
                PDF, AutoCAD, Revit, SketchUp, hand-drawn plans, and more. 
                Works with any blueprint format you receive.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Enterprise Security</h3>
              <p className="feature-description">
                Bank-level encryption, GDPR compliance, and secure cloud infrastructure. 
                Your data and client blueprints are completely protected.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🔗</div>
              <h3 className="feature-title">API Integration</h3>
              <p className="feature-description">
                Seamlessly integrates with popular estimating software like ProEst, 
                PlanSwift, and Sage Estimating.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Multi-Platform Access</h3>
              <p className="feature-description">
                Web, mobile, and desktop applications. Access your takeoffs anywhere, 
                anytime, from any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="roi-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Calculate Your ROI</h2>
            <p className="section-subtitle">
              See how much ChronoBid will save and earn for your business
            </p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: 'var(--spacing-xl)', 
            borderRadius: 'var(--border-radius-lg)', 
            boxShadow: 'var(--shadow-lg)',
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>Typical Mid-Size Contractor Savings</h3>
            
            <div className="hero-stats" style={{ justifyContent: 'center', marginBottom: 'var(--spacing-lg)' }}>
              <div className="stat">
                <span className="stat-number">$180K</span>
                <span className="stat-label">Annual Labor Savings</span>
              </div>
              <div className="stat">
                <span className="stat-number">$2.3M</span>
                <span className="stat-label">Additional Revenue</span>
              </div>
              <div className="stat">
                <span className="stat-number">15:1</span>
                <span className="stat-label">Return on Investment</span>
              </div>
            </div>
            
            <Link to="/request-demo" className="btn btn-primary btn-large">
              Calculate Your Specific ROI
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="demo-section">
        <div className="container">
          <div className="demo-content">
            <div className="demo-info">
              <h2 className="section-title">Ready to See ChronoBid in Action?</h2>
              <p className="demo-description">
                Experience the power of AI-driven takeoffs with your own blueprints. 
                See immediate results in our 15-minute demo.
              </p>
              
              <div className="demo-benefits">
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Live AI demonstration</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Upload your blueprints</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Custom ROI calculation</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Technical Q&A session</span>
                </div>
              </div>
            </div>
            
            <div className="demo-cta" style={{ textAlign: 'center' }}>
              <Link to="/request-demo" className="btn btn-primary btn-large" style={{ marginBottom: 'var(--spacing-md)' }}>
                Schedule Demo Now
              </Link>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
                See results with your own blueprints
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Solution