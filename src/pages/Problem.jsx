import React from 'react'
import { Link } from 'react-router-dom'

const Problem = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              The Takeoff Bottleneck is
              <span className="highlight"> Destroying Profits</span>
            </h1>
            <p className="hero-subtitle">
              Manual takeoffs are the #1 barrier preventing construction companies from 
              winning more bids and maximizing profitability in today's competitive market.
            </p>
            <div className="hero-cta">
              <Link to="/solution" className="btn btn-primary btn-large">See Our Solution</Link>
              <Link to="/request-demo" className="btn btn-secondary btn-large">Request Demo</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <span>Frustrated Contractor Struggling with Blueprints</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Current Reality */}
      <section className="current-reality">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Current Reality: Takeoffs are Broken</h2>
            <p className="section-subtitle">
              Every day, contractors lose money and opportunities due to outdated takeoff processes
            </p>
          </div>
          
          <div className="problem-grid">
            <div className="problem-item">
              <div className="problem-icon">⏰</div>
              <h3 className="problem-title">Extreme Time Pressure</h3>
              <p className="problem-description">
                <strong>8-20 hours per takeoff</strong> while bid windows shrink to 24-72 hours. 
                Contractors are forced to choose: rush the takeoff and risk errors, or miss the deadline entirely.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon">💸</div>
              <h3 className="problem-title">Costly Human Errors</h3>
              <p className="problem-description">
                <strong>28% average cost overruns</strong> directly traced to estimation mistakes. 
                One missed measurement or calculation error can eliminate entire project profits.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon">📊</div>
              <h3 className="problem-title">Inconsistent Results</h3>
              <p className="problem-description">
                Different estimators produce <strong>15-30% variance</strong> on identical projects. 
                Without standardization, bidding becomes unpredictable and unreliable.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon">🏃‍♂️</div>
              <h3 className="problem-title">Limited Bid Capacity</h3>
              <p className="problem-description">
                Most contractors can only bid <strong>5-10 projects per month</strong> due to takeoff 
                limitations. Meanwhile, opportunities pass to faster competitors.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon">😰</div>
              <h3 className="problem-title">Estimator Burnout</h3>
              <p className="problem-description">
                <strong>80% of estimators report high stress</strong> from constant deadline pressure. 
                Experienced staff leave, taking valuable knowledge with them.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon">📉</div>
              <h3 className="problem-title">Missed Opportunities</h3>
              <p className="problem-description">
                <strong>60% of contractors</strong> regularly decline bid invitations due to workload. 
                Every declined opportunity is potential revenue lost to competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Financial Impact */}
      <section className="financial-impact" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The True Cost of Manual Takeoffs</h2>
            <p className="section-subtitle">
              Hidden costs that are silently destroying your bottom line
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon" style={{ background: 'var(--accent-red)' }}>💰</div>
              <div className="benefit-content">
                <h3>Lost Revenue</h3>
                <p>
                  <strong>$2.3M annual opportunity cost</strong> for mid-sized contractors who can't bid 
                  on projects due to takeoff bottlenecks. Every missed bid is money left on the table.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon" style={{ background: 'var(--accent-red)' }}>📊</div>
              <div className="benefit-content">
                <h3>Profit Erosion</h3>
                <p>
                  <strong>16-28% budget overruns</strong> caused by estimation errors eat directly into 
                  margins. What should be 15% profit becomes 2% or even losses.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon" style={{ background: 'var(--accent-red)' }}>⏱️</div>
              <div className="benefit-content">
                <h3>Labor Inefficiency</h3>
                <p>
                  <strong>$150-300/hour</strong> in estimator costs for 8-20 hour takeoffs. Plus overtime 
                  costs when rushing to meet deadlines under pressure.
                </p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon" style={{ background: 'var(--accent-red)' }}>🔄</div>
              <div className="benefit-content">
                <h3>Rework Costs</h3>
              <p>
                  <strong>25% of takeoffs require revision</strong> due to errors or oversights. 
                  Double the work, double the cost, half the time to submit competitive bids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="industry-challenges">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why the Problem is Getting Worse</h2>
            <p className="section-subtitle">
              Market forces are making manual takeoffs increasingly unsustainable
            </p>
          </div>
          
          <div className="problem-grid">
            <div className="problem-item">
              <div className="problem-icon">📈</div>
              <h3 className="problem-title">Increasing Competition</h3>
              <p className="problem-description">
                More contractors competing for the same projects. Bid success rates have dropped 
                from 25% to 10-15% as markets become oversaturated.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon">⚡</div>
              <h3 className="problem-title">Faster Bid Cycles</h3>
              <p className="problem-description">
                Project owners demand quicker responses. Bid windows have shortened from weeks 
                to days, putting impossible pressure on manual processes.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon">👥</div>
              <h3 className="problem-title">Labor Shortage</h3>
              <p className="problem-description">
                430,000 construction worker shortage includes experienced estimators. 
                Finding and retaining qualified takeoff professionals is increasingly difficult.
              </p>
            </div>
            
            <div className="problem-item">
              <div className="problem-icon">📱</div>
              <h3 className="problem-title">Digital Disruption</h3>
              <p className="problem-description">
                Tech-savvy competitors using AI tools are submitting bids faster and more 
                accurately, leaving manual processes behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Breaking Point */}
      <section className="breaking-point" style={{ backgroundColor: 'var(--accent-red)', color: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>
              You Can't Afford to Wait Any Longer
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Every day you stick with manual takeoffs, competitors pull further ahead
            </p>
          </div>
          
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.3rem', marginBottom: 'var(--spacing-xl)', color: 'rgba(255,255,255,0.95)' }}>
              While you spend 8-20 hours on a single takeoff, AI-powered competitors are 
              submitting 10x more bids with 95% accuracy. The gap is widening every day.
            </p>
            
            <div className="hero-cta">
              <Link to="/solution" className="btn btn-secondary btn-large" style={{ color: 'var(--accent-red)', backgroundColor: 'white' }}>
                See How AI Solves This
              </Link>
              <Link to="/request-demo" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}>
                Request Demo Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Problem