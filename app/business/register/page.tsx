'use client'

import React, { useState, useEffect } from 'react'
import ProofOfConceptBar from '../../../components/ProofOfConceptBar'
import DevSidebar from '../../../components/DevSidebar'
import Dock from '../../../components/Dock'
import Taskbar from '../../../components/Taskbar'
import '../../page-styles.css'
import './business-register.css'

export default function BusinessRegisterPage() {
  const [devSidebarCollapsed, setDevSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed')
      return saved === 'true'
    }
    return false
  })
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

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
      <div className={`business-register-page ${!isMobile && !devSidebarCollapsed ? 'with-sidebar-expanded' : ''} ${!isMobile && devSidebarCollapsed ? 'with-sidebar-collapsed' : ''}`}>
        <div className="business-register-container">
          {/* Hero Section */}
          <section className="business-hero">
            <div className="business-hero-icon">
              🏢
            </div>
            <h1>Business <span className="text-primary">Registration</span></h1>
            <p className="business-tagline">
              Join the Bitcoin Maps ecosystem as a business partner and unlock premium mapping services
            </p>
            <div className="business-badge">ENTERPRISE SOLUTIONS</div>
          </section>

          {/* Registration Steps */}
          <section className="registration-steps">
            <h2>Registration Process</h2>
            <div className="steps-progress">
              <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                <div className="step-number">1</div>
                <span>Business Info</span>
              </div>
              <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                <div className="step-number">2</div>
                <span>Verification</span>
              </div>
              <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                <div className="step-number">3</div>
                <span>Payment Setup</span>
              </div>
              <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
                <div className="step-number">4</div>
                <span>Complete</span>
              </div>
            </div>
          </section>

          {/* Registration Form */}
          <section className="registration-form-section">
            <div className="form-container">
              <h2>Business Information</h2>
              <form className="business-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input type="text" placeholder="Enter your company name" required />
                  </div>
                  <div className="form-group">
                    <label>Business Type *</label>
                    <select required>
                      <option value="">Select business type</option>
                      <option value="logistics">Logistics & Transportation</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="government">Government Agency</option>
                      <option value="consulting">Consulting</option>
                      <option value="technology">Technology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Company Email *</label>
                    <input type="email" placeholder="business@company.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="+1 (555) 123-4567" required />
                  </div>
                  <div className="form-group full-width">
                    <label>Business Address *</label>
                    <input type="text" placeholder="Enter your business address" required />
                  </div>
                  <div className="form-group">
                    <label>City *</label>
                    <input type="text" placeholder="City" required />
                  </div>
                  <div className="form-group">
                    <label>Country *</label>
                    <select required>
                      <option value="">Select country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label>Business Registration Number</label>
                    <input type="text" placeholder="Optional: Your business registration number" />
                  </div>
                  <div className="form-group full-width">
                    <label>Website</label>
                    <input type="url" placeholder="https://yourcompany.com" />
                  </div>
                </div>

                <div className="services-section">
                  <h3>Services Needed</h3>
                  <div className="services-grid">
                    <label className="service-checkbox">
                      <input type="checkbox" />
                      <span>Custom Mapping Solutions</span>
                    </label>
                    <label className="service-checkbox">
                      <input type="checkbox" />
                      <span>Enterprise API Access</span>
                    </label>
                    <label className="service-checkbox">
                      <input type="checkbox" />
                      <span>Bulk Data Licensing</span>
                    </label>
                    <label className="service-checkbox">
                      <input type="checkbox" />
                      <span>White-label Solutions</span>
                    </label>
                    <label className="service-checkbox">
                      <input type="checkbox" />
                      <span>Dedicated Support</span>
                    </label>
                    <label className="service-checkbox">
                      <input type="checkbox" />
                      <span>Training & Consultation</span>
                    </label>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Project Description</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your mapping needs and how you plan to use Bitcoin Maps services"
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary">
                    Continue to Verification
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Business Benefits */}
          <section className="business-benefits">
            <h2>Why Register Your Business?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h3>Priority Support</h3>
                <p>Get dedicated support from our enterprise team with guaranteed response times</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3>Volume Discounts</h3>
                <p>Access special pricing for bulk data purchases and enterprise-level usage</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🔧</div>
                <h3>Custom Solutions</h3>
                <p>Get tailored mapping solutions designed specifically for your business needs</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📊</div>
                <h3>Advanced Analytics</h3>
                <p>Access detailed usage analytics and reporting tools for your mapping data</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🔒</div>
                <h3>Enhanced Security</h3>
                <p>Enterprise-grade security features and compliance options for sensitive data</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🚀</div>
                <h3>API Priority</h3>
                <p>Higher rate limits and priority access to our mapping APIs and services</p>
              </div>
            </div>
          </section>

          {/* Pricing Tiers */}
          <section className="pricing-section">
            <h2>Enterprise Pricing Plans</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Starter</h3>
                <div className="price">$299<span>/month</span></div>
                <ul>
                  <li>Up to 100K API calls/month</li>
                  <li>Basic mapping data access</li>
                  <li>Email support</li>
                  <li>Standard rate limits</li>
                </ul>
                <button className="pricing-btn secondary">Get Started</button>
              </div>
              <div className="pricing-card featured">
                <div className="featured-badge">Most Popular</div>
                <h3>Professional</h3>
                <div className="price">$799<span>/month</span></div>
                <ul>
                  <li>Up to 1M API calls/month</li>
                  <li>Premium mapping data</li>
                  <li>Priority phone support</li>
                  <li>Custom integrations</li>
                  <li>Advanced analytics</li>
                </ul>
                <button className="pricing-btn primary">Choose Plan</button>
              </div>
              <div className="pricing-card">
                <h3>Enterprise</h3>
                <div className="price">Custom</div>
                <ul>
                  <li>Unlimited API calls</li>
                  <li>Full data access</li>
                  <li>Dedicated account manager</li>
                  <li>White-label solutions</li>
                  <li>Custom SLA</li>
                </ul>
                <button className="pricing-btn secondary">Contact Sales</button>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
            <h2>Need Help Getting Started?</h2>
            <div className="contact-content">
              <p>Our enterprise team is here to help you find the perfect solution for your business needs.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <h4>Email Support</h4>
                  <p>enterprise@bitcoin-maps.com</p>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">📞</div>
                  <h4>Phone Support</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">💬</div>
                  <h4>Schedule Demo</h4>
                  <p>Book a personalized demo</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Dock />
    </div>
  )
}