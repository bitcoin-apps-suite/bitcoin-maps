'use client'

import React from 'react'
import '../page-styles.css'

export default function TokenPage() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">BMAPS TOKEN ECONOMICS</div>
          <h1 className="hero-title">
            Power the <br />
            <span className="gradient-text">Mapping Economy</span>
          </h1>
          <p className="hero-description">
            BMAPS tokens fuel the world's first decentralized mapping platform. 
            Earn by creating maps, stake for premium access, and participate in platform governance.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href = '/'}>
              <span>Start Earning</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = '/marketplace'}>
              Token Marketplace
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">1B</span>
              <span className="stat-label">Total Supply</span>
            </div>
            <div className="stat">
              <span className="stat-value">100M</span>
              <span className="stat-label">Circulating</span>
            </div>
            <div className="stat">
              <span className="stat-value">$0.50</span>
              <span className="stat-label">Current Price</span>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="core-features">
        <div className="container">
          <div className="section-header">
            <h2>Token Utility</h2>
            <p>Multiple ways to earn and use BMAPS tokens</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Mapping Rewards</h3>
              <p>Earn BMAPS tokens for creating accurate maps, verifying data, and completing mapping contracts</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Staking Benefits</h3>
              <p>Stake tokens to access premium datasets, advanced features, and earn passive rewards</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗳️</div>
              <h3>Governance Rights</h3>
              <p>Vote on platform updates, data standards, and treasury allocation with your token holdings</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Premium Access</h3>
              <p>Use tokens to unlock premium geospatial datasets and commercial licensing options</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Payments</h3>
              <p>Send and receive micropayments for map data with near-zero fees</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Yield Farming</h3>
              <p>Provide liquidity and participate in yield farming programs for additional rewards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="how-it-works">
        <div className="container">
          <h2>BMAPS Tokenomics</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">40%</div>
              <h3>Community Rewards</h3>
              <p>Distributed to mappers, data validators, and active community members over 10 years</p>
            </div>
            <div className="step-card">
              <div className="step-number">25%</div>
              <h3>Development Fund</h3>
              <p>Reserved for platform development, partnerships, and ecosystem growth initiatives</p>
            </div>
            <div className="step-card">
              <div className="step-number">20%</div>
              <h3>Strategic Reserve</h3>
              <p>Held in treasury for future development, grants, and platform sustainability</p>
            </div>
            <div className="step-card">
              <div className="step-number">10%</div>
              <h3>Team Allocation</h3>
              <p>Team tokens with 4-year vesting schedule to ensure long-term commitment</p>
            </div>
            <div className="step-card">
              <div className="step-number">3%</div>
              <h3>Early Supporters</h3>
              <p>Allocated to early contributors and advisors with vesting periods</p>
            </div>
            <div className="step-card">
              <div className="step-number">2%</div>
              <h3>Liquidity Provision</h3>
              <p>Initial liquidity for decentralized exchanges and market making</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earning Mechanisms */}
      <section className="token-economics">
        <div className="container">
          <h2>How to Earn BMAPS</h2>
          <div className="token-grid">
            <div className="token-card">
              <h4>Quality Mapping</h4>
              <p>Create detailed, accurate maps and earn tokens based on quality scores and community validation. Higher accuracy = higher rewards.</p>
            </div>
            <div className="token-card">
              <h4>Data Verification</h4>
              <p>Verify existing map data for accuracy and completeness. Help maintain data quality and earn verification rewards.</p>
            </div>
            <div className="token-card">
              <h4>Contract Completion</h4>
              <p>Complete mapping contracts posted by businesses and organizations. Get paid in BMAPS for specific mapping tasks.</p>
            </div>
            <div className="token-card">
              <h4>Referral Program</h4>
              <p>Invite new mappers to the platform and earn a percentage of their mapping rewards for the first year.</p>
            </div>
            <div className="token-card">
              <h4>Staking Rewards</h4>
              <p>Stake your BMAPS tokens to earn passive rewards while helping secure the network and governance.</p>
            </div>
            <div className="token-card">
              <h4>Bug Bounties</h4>
              <p>Find and report bugs, suggest improvements, or contribute to platform development for bounty rewards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Metrics */}
      <section className="core-features">
        <div className="container">
          <div className="section-header">
            <h2>Token Metrics & Distribution</h2>
            <p>Transparent and sustainable token economics</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Total Supply</h3>
              <p>Fixed supply of 1 billion BMAPS tokens with no inflation. Scarcity increases value over time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>Deflationary Model</h3>
              <p>0.5% of all transaction fees are burned, reducing total supply and increasing token value.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Vesting Schedule</h3>
              <p>Team and advisor tokens vest over 48 months to ensure long-term platform commitment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}