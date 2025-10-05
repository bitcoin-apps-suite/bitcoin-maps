'use client'

import React from 'react'
import '../page-styles.css'

export default function FeaturesPage() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">DECENTRALIZED MAPPING PLATFORM</div>
          <h1 className="hero-title">
            Map, Tokenize, <br />
            <span className="gradient-text">Earn on Bitcoin</span>
          </h1>
          <p className="hero-description">
            Transform geographic data into permanent digital assets. Create mapping contracts, 
            collaborate with data providers, and get paid instantly through Bitcoin micropayments.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href = '/'}>
              <span>Start Mapping</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = '/contracts'}>
              Browse Contracts
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">10M+</span>
              <span className="stat-label">BMAPS Tokens</span>
            </div>
            <div className="stat">
              <span className="stat-value">150+</span>
              <span className="stat-label">Active Contracts</span>
            </div>
            <div className="stat">
              <span className="stat-value">$500K+</span>
              <span className="stat-label">Paid to Mappers</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How Bitcoin Maps Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Map & Hash</h3>
              <p>Create geospatial data and automatically hash it to Bitcoin for permanent proof of ownership</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Smart Contracts</h3>
              <p>Data buyers create contracts, mappers fulfill them, payments release automatically</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Instant Payments</h3>
              <p>Receive micropayments instantly through HandCash or Bitcoin wallets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="core-features">
        <div className="container">
          <div className="section-header">
            <h2>Everything Mappers Need</h2>
            <p>Professional tools powered by blockchain technology</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Real-Time Mapping</h3>
              <p>Create and edit maps with real-time collaboration and instant blockchain verification</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Blockchain Integration</h3>
              <p>Every map update is permanently recorded on Bitcoin for immutable proof of work</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Instant Payments</h3>
              <p>Get paid immediately when your mapping work is approved through automated contracts</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Data Exchange</h3>
              <p>Buy and sell premium geospatial data in the world's first mapping marketplace</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Ready</h3>
              <p>Map anywhere with our responsive web app that works on any device</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Data Security</h3>
              <p>Your mapping data is encrypted and stored securely on the blockchain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Economics */}
      <section className="token-economics">
        <div className="container">
          <h2>BMAPS Token Economics</h2>
          <div className="token-grid">
            <div className="token-card">
              <h4>Earn Tokens</h4>
              <p>Create high-quality maps, verify existing data, and complete mapping contracts to earn BMAPS tokens</p>
            </div>
            <div className="token-card">
              <h4>Stake for Access</h4>
              <p>Stake BMAPS tokens to access premium mapping data and advanced platform features</p>
            </div>
            <div className="token-card">
              <h4>Governance Rights</h4>
              <p>Token holders vote on platform updates, new features, and data quality standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}