'use client'

import React, { useState, useEffect } from 'react'
import ProofOfConceptBar from '../../../components/ProofOfConceptBar'
import DevSidebar from '../../../components/DevSidebar'
import Dock from '../../../components/Dock'
import Taskbar from '../../../components/Taskbar'
import '../../page-styles.css'

export default function BusinessVerifyPage() {
  const [devSidebarCollapsed, setDevSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed')
      return saved === 'true'
    }
    return false
  })
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [verificationStep, setVerificationStep] = useState('documents')

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
            <div className="hero-badge">BUSINESS VERIFICATION</div>
            <h1 className="hero-title">
              Verify Your <br />
              <span className="gradient-text">Business Account</span>
            </h1>
            <p className="hero-description">
              Complete the verification process to unlock premium features and higher transaction limits
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">24-48h</span>
                <span className="stat-label">Verification Time</span>
              </div>
              <div className="stat">
                <span className="stat-value">99.8%</span>
                <span className="stat-label">Approval Rate</span>
              </div>
              <div className="stat">
                <span className="stat-value">256-bit</span>
                <span className="stat-label">SSL Encryption</span>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Progress */}
        <section className="how-it-works">
          <div className="container">
            <h2>Verification Progress</h2>
            <div className="steps-grid">
              <div className={`step-card ${verificationStep === 'documents' ? 'active' : verificationStep === 'review' || verificationStep === 'complete' ? 'completed' : ''}`}>
                <div className="step-number">01</div>
                <h3>Document Upload</h3>
                <p>Upload required business documents and identification</p>
                <div className="step-status">
                  {verificationStep === 'documents' && <span className="status-current">Current Step</span>}
                  {(verificationStep === 'review' || verificationStep === 'complete') && <span className="status-completed">✓ Completed</span>}
                </div>
              </div>
              <div className={`step-card ${verificationStep === 'review' ? 'active' : verificationStep === 'complete' ? 'completed' : ''}`}>
                <div className="step-number">02</div>
                <h3>Review Process</h3>
                <p>Our team reviews your documents for authenticity</p>
                <div className="step-status">
                  {verificationStep === 'review' && <span className="status-current">Current Step</span>}
                  {verificationStep === 'complete' && <span className="status-completed">✓ Completed</span>}
                </div>
              </div>
              <div className={`step-card ${verificationStep === 'complete' ? 'completed' : ''}`}>
                <div className="step-number">03</div>
                <h3>Account Activation</h3>
                <p>Verification complete - premium features unlocked</p>
                <div className="step-status">
                  {verificationStep === 'complete' && <span className="status-completed">✓ Completed</span>}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Document Upload Section */}
        <section className="core-features">
          <div className="container">
            <div className="section-header">
              <h2>Required Documents</h2>
              <p>Upload the following documents to verify your business</p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card upload-card">
                <div className="feature-icon">📄</div>
                <h3>Business Registration</h3>
                <p>Certificate of incorporation, business license, or equivalent registration document</p>
                <div className="upload-area">
                  <input type="file" id="business-reg" hidden accept=".pdf,.jpg,.png" />
                  <label htmlFor="business-reg" className="upload-btn">
                    📎 Upload Document
                  </label>
                  <p className="upload-hint">PDF, JPG, PNG (Max 10MB)</p>
                </div>
              </div>
              <div className="feature-card upload-card">
                <div className="feature-icon">🆔</div>
                <h3>Director Identification</h3>
                <p>Government-issued ID of company director or authorized representative</p>
                <div className="upload-area">
                  <input type="file" id="director-id" hidden accept=".pdf,.jpg,.png" />
                  <label htmlFor="director-id" className="upload-btn">
                    📎 Upload ID
                  </label>
                  <p className="upload-hint">PDF, JPG, PNG (Max 10MB)</p>
                </div>
              </div>
              <div className="feature-card upload-card">
                <div className="feature-icon">🏦</div>
                <h3>Banking Information</h3>
                <p>Bank statement or letter confirming business banking relationship</p>
                <div className="upload-area">
                  <input type="file" id="bank-info" hidden accept=".pdf,.jpg,.png" />
                  <label htmlFor="bank-info" className="upload-btn">
                    📎 Upload Statement
                  </label>
                  <p className="upload-hint">PDF, JPG, PNG (Max 10MB)</p>
                </div>
              </div>
              <div className="feature-card upload-card">
                <div className="feature-icon">📍</div>
                <h3>Address Verification</h3>
                <p>Utility bill or official document confirming business address</p>
                <div className="upload-area">
                  <input type="file" id="address-proof" hidden accept=".pdf,.jpg,.png" />
                  <label htmlFor="address-proof" className="upload-btn">
                    📎 Upload Proof
                  </label>
                  <p className="upload-hint">PDF, JPG, PNG (Max 10MB)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Benefits */}
        <section className="token-economics">
          <div className="container">
            <h2>Verification Benefits</h2>
            <div className="token-grid">
              <div className="token-card">
                <div className="benefit-icon">🚀</div>
                <h4>Higher Limits</h4>
                <p>Increased transaction limits and premium API access for verified businesses</p>
              </div>
              <div className="token-card">
                <div className="benefit-icon">🔒</div>
                <h4>Enhanced Security</h4>
                <p>Additional security features and priority support for verified accounts</p>
              </div>
              <div className="token-card">
                <div className="benefit-icon">⭐</div>
                <h4>Trust Badge</h4>
                <p>Display verified business badge to build trust with clients and partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Notice */}
        <section className="hero-section">
          <div className="container">
            <div className="security-notice">
              <div className="security-icon">🔐</div>
              <h3>Your Security is Our Priority</h3>
              <p>All documents are encrypted and stored securely. We comply with international data protection standards and never share your information with third parties.</p>
              <div className="security-features">
                <div className="security-feature">
                  <span>🛡️ End-to-End Encryption</span>
                </div>
                <div className="security-feature">
                  <span>📋 GDPR Compliant</span>
                </div>
                <div className="security-feature">
                  <span>🔒 SOC 2 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Submit Section */}
        <section className="hero-section">
          <div className="container">
            <div className="submit-section">
              <h2>Ready to Submit?</h2>
              <p>Once you've uploaded all required documents, submit your verification request</p>
              <div className="hero-buttons">
                <button className="btn-primary">
                  <span>Submit for Verification</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                <button className="btn-secondary">
                  Save as Draft
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Dock />
    </div>
  )
}