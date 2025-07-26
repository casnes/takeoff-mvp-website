import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="logo-container" style={{ marginBottom: 'var(--spacing-xl)' }}>
              <img 
                src="/ChronoBid Logo.png" 
                alt="ChronoBid Logo" 
                style={{ 
                  height: '120px', 
                  width: 'auto',
                  filter: 'drop-shadow(0 4px 8px rgba(255, 107, 53, 0.3))'
                }}
              />
            </div>
            <h1 className="hero-title">
              AI-Powered Construction Takeoffs
              <br />
              <span className="highlight">10x Faster, 95% Accurate</span>
            </h1>
            <p className="hero-subtitle">
              Transform blueprint analysis from hours to minutes. Upload, analyze, estimate – 
              eliminate takeoff bottlenecks and win more bids with ChronoBid's cutting-edge AI.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10x</span>
                <span className="stat-label">Faster Takeoffs</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Accuracy Rate</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
            <div className="hero-cta">
              <Link to="/request-demo" className="btn btn-primary btn-large">Get Free Demo</Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder" style={{ 
              background: 'linear-gradient(45deg, rgba(255, 107, 53, 0.8), rgba(255, 140, 90, 0.8))',
              color: 'white',
              backdropFilter: 'blur(10px)'
            }}>
              <span>AI-Powered Blueprint Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Preview */}
      <section className="problem-preview" style={{ 
        background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 50%, #2d2d2d 100%)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>
              The Takeoff Bottleneck is Killing Your Business
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Manual takeoffs waste time, create errors, and limit your bidding capacity
            </p>
          </div>
          
          <div className="problem-grid">
            <div className="problem-item" style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 107, 53, 0.2)'
            }}>
              <div className="problem-icon" style={{ color: '#ff6b35' }}>⏱️</div>
              <h3 className="problem-title" style={{ color: 'white' }}>Time Pressure</h3>
              <p className="problem-description" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                8-20 hours per takeoff while competitors submit bids in minutes. 
                Miss deadlines, miss opportunities.
              </p>
            </div>
            
            <div className="problem-item" style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 107, 53, 0.2)'
            }}>
              <div className="problem-icon" style={{ color: '#ff6b35' }}>❌</div>
              <h3 className="problem-title" style={{ color: 'white' }}>Human Error</h3>
              <p className="problem-description" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Manual calculations lead to 28% cost overruns. One mistake 
                can destroy project profitability.
              </p>
            </div>
            
            <div className="problem-item" style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 107, 53, 0.2)'
            }}>
              <div className="problem-icon" style={{ color: '#ff6b35' }}>📊</div>
              <h3 className="problem-title" style={{ color: 'white' }}>Limited Capacity</h3>
              <p className="problem-description" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Most contractors bid only 5-10 projects monthly. 
                Scale limitations prevent business growth.
              </p>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
            <Link to="/problem" className="btn btn-primary">Explore the Full Problem</Link>
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="solution-preview" style={{ 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>
              ChronoBid: Your AI-Powered Solution
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Revolutionary artificial intelligence transforms takeoffs from hours to minutes
            </p>
          </div>
          
          <div className="solution-features">
            <div className="feature-item">
              <div className="feature-icon" style={{ 
                background: 'linear-gradient(45deg, #ff6b35, #ff8c5a)',
                color: 'white'
              }}>🤖</div>
              <h3 className="feature-title" style={{ color: 'white' }}>AI Recognition</h3>
              <p className="feature-description" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Advanced computer vision automatically detects structures, 
                materials, and quantities from any blueprint format.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon" style={{ 
                background: 'linear-gradient(45deg, #ff6b35, #ff8c5a)',
                color: 'white'
              }}>💰</div>
              <h3 className="feature-title" style={{ color: 'white' }}>Custom Pricing</h3>
              <p className="feature-description" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Upload your cost sheets once. AI applies your pricing 
                to deliver personalized, accurate estimates.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon" style={{ 
                background: 'linear-gradient(45deg, #ff6b35, #ff8c5a)',
                color: 'white'
              }}>⚡</div>
              <h3 className="feature-title" style={{ color: 'white' }}>Instant Results</h3>
              <p className="feature-description" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Get detailed takeoffs in 15-30 minutes instead of 8-20 hours. 
                Submit more bids, win more projects.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon" style={{ 
                background: 'linear-gradient(45deg, #ff6b35, #ff8c5a)',
                color: 'white'
              }}>🎯</div>
              <h3 className="feature-title" style={{ color: 'white' }}>95% Accuracy</h3>
              <p className="feature-description" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Guaranteed precision with built-in quality checks. 
                Reduce estimation errors and protect profit margins.
              </p>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
            <Link to="/solution" className="btn btn-primary">Learn More About Our AI</Link>
          </div>
        </div>
      </section>

      {/* Benefits Preview */}
      <section className="benefits-preview" style={{ 
        background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 50%, #2d2d2d 100%)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>
              Transform Your Business Results
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Real ROI that contractors see from day one
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item" style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 107, 53, 0.2)'
            }}>
              <div className="benefit-icon" style={{ 
                background: 'linear-gradient(45deg, #ff6b35, #ff8c5a)'
              }}>⚡</div>
              <div className="benefit-content">
                <h3 style={{ color: 'white' }}>10x Faster Takeoffs</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Complete takeoffs in 15-30 minutes instead of 8-20 hours. 
                  Submit more bids than ever before.
                </p>
              </div>
            </div>
            
            <div className="benefit-item" style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 107, 53, 0.2)'
            }}>
              <div className="benefit-icon" style={{ 
                background: 'linear-gradient(45deg, #ff6b35, #ff8c5a)'
              }}>📈</div>
              <div className="benefit-content">
                <h3 style={{ color: 'white' }}>5x More Bids</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Increase from 5-10 bids to 25-50 bids per month. 
                  More opportunities mean more revenue.
                </p>
              </div>
            </div>
            
            <div className="benefit-item" style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 107, 53, 0.2)'
            }}>
              <div className="benefit-icon" style={{ 
                background: 'linear-gradient(45deg, #ff6b35, #ff8c5a)'
              }}>💰</div>
              <div className="benefit-content">
                <h3 style={{ color: 'white' }}>70% Cost Reduction</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Slash takeoff labor costs while improving quality. 
                  Typical ROI of 15:1 in first year.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
            <Link to="/benefits" className="btn btn-primary">Calculate Your ROI</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="demo-section" style={{ 
        background: 'linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="demo-content">
            <div className="demo-info">
              <h2 className="section-title" style={{ color: 'white' }}>
                Ready to Transform Your Takeoffs?
              </h2>
              <p className="demo-description" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                Join contractors already using ChronoBid to win more bids with AI-powered takeoffs. 
                See the difference in your first 15-minute demo.
              </p>
              
              <div className="demo-benefits">
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>15-minute live demonstration</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Use your own blueprints</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Custom ROI calculation</span>
                </div>
                <div className="demo-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>No commitment required</span>
                </div>
              </div>
            </div>
            
            <div className="demo-cta" style={{ textAlign: 'center' }}>
              <Link to="/request-demo" className="btn btn-large" style={{ 
                backgroundColor: 'white', 
                color: '#ff6b35',
                marginBottom: 'var(--spacing-md)',
                fontWeight: 'bold',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
              }}>
                Get Free Demo Now
              </Link>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: 0, fontSize: '1.1rem' }}>
                See results in 15 minutes or less
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home