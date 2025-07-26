import React from 'react'
import { Link } from 'react-router-dom'

const Benefits = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Business with
              <span className="highlight"> Measurable Results</span>
            </h1>
            <p className="hero-subtitle">
              ChronoBid delivers quantifiable benefits that directly impact your bottom line. 
              Increase revenue, reduce costs, and gain competitive advantage.
            </p>
            <div className="hero-cta">
              <Link to="/request-demo" className="btn btn-primary btn-large">Calculate My ROI</Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <span>Business Growth Chart and Success Metrics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Overview */}
      <section className="key-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Immediate Business Impact</h2>
            <p className="section-subtitle">
              Real results that contractors see from day one of using ChronoBid
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <div className="benefit-content">
                <h3>10x Faster Takeoffs</h3>
                <p>
                  <strong>15-30 minutes vs 8-20 hours</strong> - Complete takeoffs in a fraction of the time. 
                  Submit bids faster than competitors and respond to last-minute opportunities.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <div className="benefit-content">
                <h3>95% Accuracy Guarantee</h3>
                <p>
                  <strong>Eliminate human error</strong> - AI doesn't get tired, distracted, or make 
                  calculation mistakes. Protect margins with consistently accurate estimates.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <div className="benefit-content">
                <h3>5x More Bids Per Month</h3>
                <p>
                  <strong>25-50 bids vs 5-10 bids</strong> - Dramatically increase bid volume without 
                  hiring additional staff. More opportunities mean more revenue.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <div className="benefit-content">
                <h3>70% Cost Reduction</h3>
                <p>
                  <strong>Slash takeoff expenses</strong> - Reduce labor costs while improving quality. 
                  Redirect estimators to high-value client relationship activities.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🏆</div>
              <div className="benefit-content">
                <h3>Higher Win Rates</h3>
                <p>
                  <strong>Competitive advantage</strong> - Submit more professional bids faster than 
                  competitors. Quality and speed combination wins more projects.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">😌</div>
              <div className="benefit-content">
                <h3>Eliminate Stress</h3>
                <p>
                  <strong>No more deadline pressure</strong> - End all-nighters and rushed estimates. 
                  Reduce team stress and improve work-life balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Benefits */}
      <section className="financial-benefits" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Financial Impact by Company Size</h2>
            <p className="section-subtitle">
              See specific ROI calculations based on your business size
            </p>
          </div>
          
          <div className="problem-grid">
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>🏢</div>
              <h3 className="problem-title">Small Contractor (1-10 employees)</h3>
              <p className="problem-description">
                <strong>Annual Savings: $85,000</strong><br/>
                • $45K labor cost reduction<br/>
                • $40K additional revenue from 3x more bids<br/>
                • ROI: 850% in first year
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>🏗️</div>
              <h3 className="problem-title">Mid-Size Contractor (10-50 employees)</h3>
              <p className="problem-description">
                <strong>Annual Savings: $485,000</strong><br/>
                • $180K labor cost reduction<br/>
                • $305K additional revenue from 5x more bids<br/>
                • ROI: 1,520% in first year
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>🏭</div>
              <h3 className="problem-title">Large Contractor (50+ employees)</h3>
              <p className="problem-description">
                <strong>Annual Savings: $1,250,000</strong><br/>
                • $450K labor cost reduction<br/>
                • $800K additional revenue from volume scaling<br/>
                • ROI: 2,100% in first year
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Benefits */}
      <section className="operational-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Operational Advantages</h2>
            <p className="section-subtitle">
              Streamline operations and build a more efficient, profitable business
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">📊</div>
              <div className="benefit-content">
                <h3>Standardized Process</h3>
                <p>
                  Eliminate variance between estimators. Same accurate results every time, 
                  building consistency and reliability in your bidding process.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🔄</div>
              <div className="benefit-content">
                <h3>Scalable Growth</h3>
                <p>
                  Handle 5x more projects without proportional staff increases. Scale your 
                  business efficiently while maintaining quality standards.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">👥</div>
              <div className="benefit-content">
                <h3>Team Productivity</h3>
                <p>
                  Redirect estimators to high-value activities like client relationships, 
                  project management, and business development instead of manual calculations.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📱</div>
              <div className="benefit-content">
                <h3>Remote Capabilities</h3>
                <p>
                  Cloud-based platform enables remote work and instant collaboration. 
                  Access takeoffs from anywhere, anytime, on any device.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🔒</div>
              <div className="benefit-content">
                <h3>Risk Reduction</h3>
                <p>
                  Minimize estimation errors that lead to cost overruns. Protect profit 
                  margins with AI-verified accuracy and built-in quality checks.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <div className="benefit-content">
                <h3>Data-Driven Insights</h3>
                <p>
                  Gain valuable analytics on bidding patterns, win rates, and market trends. 
                  Make informed business decisions based on concrete data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="competitive-advantages" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Competitive Market Advantages</h2>
            <p className="section-subtitle">
              Stay ahead of competitors with AI-powered capabilities
            </p>
          </div>
          
          <div className="solution-features">
            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">First-Mover Advantage</h3>
              <p className="feature-description">
                Be among the first in your market to adopt AI takeoffs. Establish reputation 
                as innovative, technology-forward company that clients trust.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Speed to Market</h3>
              <p className="feature-description">
                Submit bids faster than any competitor. Early submission often influences 
                project owners and demonstrates commitment to their timeline.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">💎</div>
              <h3 className="feature-title">Professional Quality</h3>
              <p className="feature-description">
                Deliver consistently professional, detailed estimates that showcase your 
                capabilities and attention to detail better than handwritten competitors.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Precision Pricing</h3>
              <p className="feature-description">
                Optimize bid pricing with AI-verified accuracy. Win more projects with 
                competitive pricing that protects your margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Preview */}
      <section className="success-stories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Real Results from Real Contractors</h2>
            <p className="section-subtitle">
              See how ChronoBid is transforming construction businesses
            </p>
          </div>
          
          <div className="problem-grid">
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>📈</div>
              <h3 className="problem-title">"300% Increase in Bid Volume"</h3>
              <p className="problem-description">
                "We went from 8 bids per month to 25 bids per month. Our win rate improved 
                because we could be more selective and submit higher quality estimates."
                <br/><strong>- Mike Chen, Pacific Construction</strong>
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>💰</div>
              <h3 className="problem-title">"$200K Saved in First Year"</h3>
              <p className="problem-description">
                "Between labor savings and additional revenue from more bids, ChronoBid 
                paid for itself in 6 weeks. Best investment we've ever made."
                <br/><strong>- Sarah Rodriguez, BuildRight LLC</strong>
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon" style={{ color: 'var(--accent-green)' }}>😌</div>
              <h3 className="problem-title">"No More All-Nighters"</h3>
              <p className="problem-description">
                "My estimators used to work weekends and late nights to meet deadlines. 
                Now they have work-life balance and we're more productive than ever."
                <br/><strong>- David Kim, Metro Builders</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="roi-calculator">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Calculate Your Specific ROI</h2>
            <p className="section-subtitle">
              See exactly how much ChronoBid will save and earn for your business
            </p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: 'var(--spacing-xl)', 
            borderRadius: 'var(--border-radius-lg)', 
            boxShadow: 'var(--shadow-lg)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div className="hero-stats" style={{ justifyContent: 'center', marginBottom: 'var(--spacing-xl)' }}>
              <div className="stat">
                <span className="stat-number">15:1</span>
                <span className="stat-label">Average ROI</span>
              </div>
              <div className="stat">
                <span className="stat-number">6</span>
                <span className="stat-label">Weeks to Payback</span>
              </div>
              <div className="stat">
                <span className="stat-number">$485K</span>
                <span className="stat-label">Average Annual Savings</span>
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-md)' }}>
                Get a personalized ROI calculation based on your current takeoff volume and costs
              </p>
              <Link to="/request-demo" className="btn btn-primary btn-large">
                Calculate My ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Benefits */}
      <section className="implementation-benefits" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Easy Implementation, Immediate Results</h2>
            <p className="section-subtitle">
              Start seeing benefits from day one with minimal setup required
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <div className="benefit-content">
                <h3>Instant Access</h3>
                <p>
                  Cloud-based platform means no software installation or IT setup. 
                  Start using ChronoBid minutes after signing up.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">👨‍🏫</div>
              <div className="benefit-content">
                <h3>15-Minute Training</h3>
                <p>
                  Intuitive interface requires minimal learning. Your team will be 
                  productive immediately with our quick onboarding process.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🔗</div>
              <div className="benefit-content">
                <h3>Seamless Integration</h3>
                <p>
                  Works with your existing estimating software and workflows. 
                  No disruption to current processes or client relationships.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <div className="benefit-content">
                <h3>Risk-Free Trial</h3>
                <p>
                  30-day money-back guarantee means you can try ChronoBid completely 
                  risk-free. See results before committing long-term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="demo-section">
        <div className="container">
          <div className="demo-content">
            <div className="demo-info">
              <h2 className="section-title">Ready to Transform Your Business?</h2>
              <p className="demo-description">
                Join the contractors already using ChronoBid to win more bids, save time, 
                and boost profitability. See the benefits for yourself in a 15-minute demo.
              </p>
              
              <div className="demo-benefits">
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Personalized ROI calculation</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Live demonstration with your blueprints</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Custom implementation plan</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Risk-free trial options</span>
                </div>
              </div>
            </div>
            
            <div className="demo-cta" style={{ textAlign: 'center' }}>
              <Link to="/request-demo" className="btn btn-primary btn-large" style={{ marginBottom: 'var(--spacing-md)' }}>
                Calculate My ROI & Request Demo
              </Link>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
                See your specific benefits in 15 minutes
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Benefits