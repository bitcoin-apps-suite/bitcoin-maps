'use client'

import React, { useState, useEffect } from 'react'
import ProofOfConceptBar from '../../../components/ProofOfConceptBar'
import DevSidebar from '../../../components/DevSidebar'
import Dock from '../../../components/Dock'
import Taskbar from '../../../components/Taskbar'
import '../../page-styles.css'

export default function BusinessPremiumPage() {
  const [devSidebarCollapsed, setDevSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed')
      return saved === 'true'
    }
    return false
  })
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('professional')

  useEffect(() => {
    setIsClient(true)
    setIsMobile(window.innerWidth <= 768)
    
    const handleStorageChange = () => {
      const saved = localStorage.getItem('devSidebarCollapsed')
      setDevSidebarCollapsed(saved === 'true')
    }
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('resize', handleResize)
    
    const checkSidebarState = setInterval(() => {
      const saved = localStorage.getItem('devSidebarCollapsed')
      setDevSidebarCollapsed(saved === 'true')
    }, 100)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('resize', handleResize)
      clearInterval(checkSidebarState)
    }
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Taskbar />
      <ProofOfConceptBar />
      <DevSidebar />
      <div className={`page-container ${!isMobile && !devSidebarCollapsed ? 'with-sidebar-expanded' : ''} ${!isMobile && devSidebarCollapsed ? 'with-sidebar-collapsed' : ''}`}>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-badge">PREMIUM BUSINESS PLANS</div>
            <h1 className="hero-title">
              Enterprise <br />
              <span className="gradient-text">Mapping Solutions</span>
            </h1>
            <p className="hero-description">
              Unlock the full potential of Bitcoin Maps with enterprise-grade features, dedicated support, and custom solutions
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">99.99%</span>
                <span className="stat-label">Uptime SLA</span>
              </div>
              <div className="stat">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat">
                <span className="stat-value">Unlimited</span>
                <span className="stat-label">API Calls</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="how-it-works">
          <div className="container">
            <h2>Choose Your Plan</h2>
            <div className="pricing-toggle">
              <span>Monthly</span>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <span>Annual <span className="save-badge">Save 20%</span></span>
            </div>
            
            <div className="premium-pricing-grid">
              <div className={`premium-pricing-card ${selectedPlan === 'starter' ? 'selected' : ''}`} onClick={() => setSelectedPlan('starter')}>
                <h3>Starter Pro</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">299</span>
                  <span className="period">/month</span>
                </div>
                <div className="plan-description">Perfect for growing businesses</div>
                <ul className="features-list">
                  <li>✓ Up to 500K API calls/month</li>
                  <li>✓ Premium mapping data access</li>
                  <li>✓ Advanced analytics dashboard</li>
                  <li>✓ Email & chat support</li>
                  <li>✓ Custom branding options</li>
                  <li>✓ Data export capabilities</li>
                  <li>✓ 99.9% uptime SLA</li>
                </ul>
                <button className="plan-button">Choose Starter Pro</button>
              </div>

              <div className={`premium-pricing-card featured ${selectedPlan === 'professional' ? 'selected' : ''}`} onClick={() => setSelectedPlan('professional')}>
                <div className="popular-badge">Most Popular</div>
                <h3>Professional</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">799</span>
                  <span className="period">/month</span>
                </div>
                <div className="plan-description">Ideal for established enterprises</div>
                <ul className="features-list">
                  <li>✓ Up to 2M API calls/month</li>
                  <li>✓ Full mapping data suite</li>
                  <li>✓ Real-time analytics & reporting</li>
                  <li>✓ Priority phone support</li>
                  <li>✓ White-label solutions</li>
                  <li>✓ Custom integrations</li>
                  <li>✓ 99.95% uptime SLA</li>
                  <li>✓ Dedicated account manager</li>
                </ul>
                <button className="plan-button primary">Choose Professional</button>
              </div>

              <div className={`premium-pricing-card ${selectedPlan === 'enterprise' ? 'selected' : ''}`} onClick={() => setSelectedPlan('enterprise')}>
                <h3>Enterprise</h3>
                <div className="price">
                  <span className="custom">Custom Pricing</span>
                </div>
                <div className="plan-description">Tailored for large organizations</div>
                <ul className="features-list">
                  <li>✓ Unlimited API calls</li>
                  <li>✓ Complete data access</li>
                  <li>✓ Custom analytics platform</li>
                  <li>✓ 24/7 dedicated support</li>
                  <li>✓ Full white-label deployment</li>
                  <li>✓ Custom feature development</li>
                  <li>✓ 99.99% uptime SLA</li>
                  <li>✓ On-premise deployment options</li>
                </ul>
                <button className="plan-button">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features */}
        <section className="core-features">
          <div className="container">
            <div className="section-header">
              <h2>Premium Features</h2>
              <p>Advanced capabilities for enterprise-level mapping operations</p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card premium">
                <div className="feature-icon">🚀</div>
                <h3>High-Performance APIs</h3>
                <p>Lightning-fast response times with dedicated infrastructure and priority processing</p>
                <div className="feature-details">
                  <span>⚡ Sub-100ms response time</span>
                  <span>🔧 Dedicated servers</span>
                </div>
              </div>
              <div className="feature-card premium">
                <div className="feature-icon">🎨</div>
                <h3>White-Label Solutions</h3>
                <p>Fully customizable platform with your branding, custom domains, and tailored UI</p>
                <div className="feature-details">
                  <span>🏷️ Custom branding</span>
                  <span>🌐 Custom domains</span>
                </div>
              </div>
              <div className="feature-card premium">
                <div className="feature-icon">📊</div>
                <h3>Advanced Analytics</h3>
                <p>Deep insights with custom dashboards, real-time monitoring, and predictive analytics</p>
                <div className="feature-details">
                  <span>📈 Real-time monitoring</span>
                  <span>🔮 Predictive analytics</span>
                </div>
              </div>
              <div className="feature-card premium">
                <div className="feature-icon">🔒</div>
                <h3>Enterprise Security</h3>
                <p>Bank-level security with SOC 2 compliance, private cloud options, and audit logs</p>
                <div className="feature-details">
                  <span>🛡️ SOC 2 compliant</span>
                  <span>☁️ Private cloud</span>
                </div>
              </div>
              <div className="feature-card premium">
                <div className="feature-icon">🔧</div>
                <h3>Custom Integrations</h3>
                <p>Seamless integration with your existing systems and custom API development</p>
                <div className="feature-details">
                  <span>🔌 API customization</span>
                  <span>⚙️ System integration</span>
                </div>
              </div>
              <div className="feature-card premium">
                <div className="feature-icon">👥</div>
                <h3>Dedicated Support</h3>
                <p>24/7 expert support with dedicated account managers and priority assistance</p>
                <div className="feature-details">
                  <span>📞 24/7 support</span>
                  <span>👤 Account manager</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="token-economics">
          <div className="container">
            <h2>Success Stories</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="company-logo">🏢</div>
                <h4>LogiTech Corp</h4>
                <p>"Bitcoin Maps premium features helped us optimize our delivery routes, reducing costs by 30% and improving customer satisfaction significantly."</p>
                <div className="testimonial-author">
                  <strong>Sarah Johnson</strong>
                  <span>CTO, LogiTech Corp</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="company-logo">🏛️</div>
                <h4>City Planning Dept</h4>
                <p>"The enterprise analytics and custom integrations allowed us to make data-driven urban planning decisions with unprecedented accuracy."</p>
                <div className="testimonial-author">
                  <strong>Michael Chen</strong>
                  <span>Director, City Planning</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="company-logo">🚚</div>
                <h4>Global Shipping Inc</h4>
                <p>"With unlimited API calls and white-label solutions, we built a complete logistics platform that serves millions of customers worldwide."</p>
                <div className="testimonial-author">
                  <strong>Emma Rodriguez</strong>
                  <span>VP Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="core-features">
          <div className="container">
            <div className="section-header">
              <h2>Calculate Your ROI</h2>
              <p>See how much you can save with Bitcoin Maps premium features</p>
            </div>
            
            <div className="roi-calculator">
              <div className="calculator-inputs">
                <div className="input-group">
                  <label>Monthly API Calls</label>
                  <input type="number" placeholder="1,000,000" />
                </div>
                <div className="input-group">
                  <label>Current Provider Cost</label>
                  <input type="number" placeholder="$2,500" />
                </div>
                <div className="input-group">
                  <label>Team Size</label>
                  <input type="number" placeholder="10" />
                </div>
              </div>
              <div className="calculator-results">
                <div className="savings-card">
                  <h4>Estimated Monthly Savings</h4>
                  <div className="savings-amount">$1,247</div>
                  <div className="savings-details">
                    <span>46% cost reduction</span>
                    <span>2.5x faster development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="hero-section">
          <div className="container">
            <div className="cta-premium">
              <h2>Ready to Upgrade?</h2>
              <p>Join leading enterprises who trust Bitcoin Maps for their mapping infrastructure</p>
              <div className="hero-buttons">
                <button className="btn-primary">
                  <span>Start Free Trial</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                <button className="btn-secondary">
                  Schedule Demo
                </button>
                <button className="btn-secondary">
                  Contact Sales
                </button>
              </div>
              <div className="trust-indicators">
                <span>✓ 14-day free trial</span>
                <span>✓ No setup fees</span>
                <span>✓ Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Dock />
    </div>
  )
}