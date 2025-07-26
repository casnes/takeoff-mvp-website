import React from 'react'
import { Link } from 'react-router-dom'

const HowItWorks = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Three Simple Steps to
              <span className="highlight"> 10x Faster Takeoffs</span>
            </h1>
            <p className="hero-subtitle">
              From blueprint upload to detailed estimate in 15-30 minutes. 
              No complex setup, no training required - just results.
            </p>
            <div className="hero-cta">
              <Link to="/request-demo" className="btn btn-primary btn-large">Try It Now</Link>
              <Link to="/benefits" className="btn btn-secondary btn-large">See Benefits</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <span>Step-by-Step AI Process Visualization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="main-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How ChronoBid Works</h2>
            <p className="section-subtitle">
              Revolutionary AI technology made simple - just three steps to accurate takeoffs
            </p>
          </div>
          
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3 className="step-title">Upload Your Blueprint</h3>
              <p className="step-description">
                <strong>Drag and drop any PDF blueprint</strong> into ChronoBid. Our system supports 
                all formats: AutoCAD, hand-drawn plans, architectural drawings, engineering schematics, 
                and more. Upload takes less than 30 seconds.
              </p>
              <div style={{ marginTop: 'var(--spacing-md)', padding: 'var(--spacing-md)', backgroundColor: 'var(--light-gray)', borderRadius: 'var(--border-radius-md)' }}>
                <strong>Supported Formats:</strong> PDF, DWG, DXF, JPG, PNG, TIFF
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">2</div>
              <h3 className="step-title">AI Analyzes & Detects</h3>
              <p className="step-description">
                <strong>Our AI instantly recognizes</strong> every structural element, material type, 
                and dimension. Advanced computer vision identifies walls, doors, windows, electrical, 
                plumbing, HVAC systems, and calculates precise quantities.
              </p>
              <div style={{ marginTop: 'var(--spacing-md)', padding: 'var(--spacing-md)', backgroundColor: 'var(--light-gray)', borderRadius: 'var(--border-radius-md)' }}>
                <strong>AI Detects:</strong> Structures, Materials, Dimensions, Systems, Quantities
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">3</div>
              <h3 className="step-title">Get Detailed Estimate</h3>
              <p className="step-description">
                <strong>Receive comprehensive takeoff</strong> with your custom pricing applied. 
                Detailed material lists, labor calculations, and total project costs - all formatted 
                for professional bid submission.
              </p>
              <div style={{ marginTop: 'var(--spacing-md)', padding: 'var(--spacing-md)', backgroundColor: 'var(--light-gray)', borderRadius: 'var(--border-radius-md)' }}>
                <strong>Output Includes:</strong> Material Lists, Labor Hours, Costs, Professional Reports
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Flow */}
      <section className="detailed-process" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Behind the Scenes: AI in Action</h2>
            <p className="section-subtitle">
              Advanced technology working seamlessly to deliver precise results
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">📤</div>
              <div className="benefit-content">
                <h3>Step 1: Upload & Processing</h3>
                <p>
                  Secure cloud upload with automatic file validation. AI pre-processes the blueprint, 
                  optimizing resolution and identifying scale for accurate measurements.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🔍</div>
              <div className="benefit-content">
                <h3>Step 2: Computer Vision Analysis</h3>
                <p>
                  Advanced neural networks scan every pixel, recognizing patterns trained on millions 
                  of construction drawings. Identifies structural elements with 95% accuracy.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📐</div>
              <div className="benefit-content">
                <h3>Step 3: Measurement & Quantification</h3>
                <p>
                  AI calculates precise measurements, areas, volumes, and quantities. Accounts for 
                  complex geometries and overlapping systems automatically.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <div className="benefit-content">
                <h3>Step 4: Cost Application</h3>
                <p>
                  Your custom cost database is applied to quantities. Labor rates, material costs, 
                  and regional pricing factors create accurate project estimates.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📊</div>
              <div className="benefit-content">
                <h3>Step 5: Quality Verification</h3>
                <p>
                  Built-in quality checks validate results against industry standards. Flags 
                  potential issues or unusual measurements for review.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📄</div>
              <div className="benefit-content">
                <h3>Step 6: Professional Output</h3>
                <p>
                  Generate detailed reports, material lists, and bid-ready documents. Export to 
                  Excel, PDF, or integrate directly with your estimating software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Comparison */}
      <section className="speed-comparison">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Speed Comparison: Manual vs AI</h2>
            <p className="section-subtitle">
              See exactly how ChronoBid transforms your takeoff timeline
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', maxWidth: '800px', margin: '0 auto' }}>
            {/* Manual Process */}
            <div style={{ background: 'var(--accent-red)', color: 'white', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)' }}>
              <h3 style={{ color: 'white', textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Manual Process</h3>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Hour 1-2:</strong> Print and review blueprints
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Hour 3-6:</strong> Manual measurements and calculations
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Hour 7-10:</strong> Material quantity calculations
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Hour 11-14:</strong> Cost application and pricing
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Hour 15-18:</strong> Double-checking and revisions
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Hour 19-20:</strong> Final report preparation
              </div>
              <div style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Total: 8-20 Hours
              </div>
            </div>
            
            {/* AI Process */}
            <div style={{ background: 'var(--accent-green)', color: 'white', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)' }}>
              <h3 style={{ color: 'white', textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>ChronoBid AI</h3>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Minute 1:</strong> Upload blueprint (30 seconds)
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Minute 2-10:</strong> AI analysis and detection
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Minute 11-20:</strong> Measurement and quantification
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Minute 21-25:</strong> Cost application
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Minute 26-30:</strong> Quality checks and report generation
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Done!</strong> Professional takeoff ready
              </div>
              <div style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Total: 15-30 Minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Setup */}
      <section className="integration-setup" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Easy Setup & Integration</h2>
            <p className="section-subtitle">
              Get started in minutes, not weeks - no complex training required
            </p>
          </div>
          
          <div className="solution-features">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Instant Access</h3>
              <p className="feature-description">
                Cloud-based platform means no software installation. Access ChronoBid from 
                any device with internet connection.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">💾</div>
              <h3 className="feature-title">Cost Database Import</h3>
              <p className="feature-description">
                Upload your existing cost sheets once. Our AI learns your pricing structure 
                and applies it consistently to all future projects.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🔗</div>
              <h3 className="feature-title">Software Integration</h3>
              <p className="feature-description">
                Direct integration with ProEst, PlanSwift, Sage, and other popular estimating 
                software. Export results in your preferred format.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">👨‍🏫</div>
              <h3 className="feature-title">Quick Training</h3>
              <p className="feature-description">
                15-minute onboarding session gets your team productive immediately. 
                Intuitive interface requires minimal learning curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="quality-assurance">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Built-in Quality Assurance</h2>
            <p className="section-subtitle">
              Multiple validation layers ensure accuracy you can trust
            </p>
          </div>
          
          <div className="problem-grid">
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>🔍</div>
              <h3 className="problem-title">AI Validation</h3>
              <p className="problem-description">
                Multiple AI models cross-check results for consistency. Automatic detection 
                of anomalies or unusual measurements requiring human review.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>📊</div>
              <h3 className="problem-title">Industry Standards</h3>
              <p className="problem-description">
                Results validated against construction industry standards and building codes. 
                Flags potential issues before they become costly problems.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>✅</div>
              <h3 className="problem-title">Human Review</h3>
              <p className="problem-description">
                Easy review interface highlights key measurements and calculations. 
                Quick approval process maintains human oversight and confidence.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>📈</div>
              <h3 className="problem-title">Continuous Learning</h3>
              <p className="problem-description">
                AI improves with every project, learning from corrections and feedback. 
                Your custom AI model becomes more accurate over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="demo-section">
        <div className="container">
          <div className="demo-content">
            <div className="demo-info">
              <h2 className="section-title">See It Work With Your Blueprints</h2>
              <p className="demo-description">
                Ready to experience 10x faster takeoffs? Upload your own blueprint 
                and see ChronoBid deliver professional results in minutes.
              </p>
              
              <div className="demo-benefits">
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Bring your own blueprint</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>See live AI analysis</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Get actual takeoff results</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>15-minute demonstration</span>
                </div>
              </div>
            </div>
            
            <div className="demo-cta" style={{ textAlign: 'center' }}>
              <Link to="/request-demo" className="btn btn-primary btn-large" style={{ marginBottom: 'var(--spacing-md)' }}>
                Request Live Demo
              </Link>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
                See ChronoBid work with your actual blueprints
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks