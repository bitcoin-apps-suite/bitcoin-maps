'use client'

import React, { useState } from 'react'
import '../page-styles.css'

export default function ContractsPage() {
  const [activeTab, setActiveTab] = useState('browse')

  const contracts = [
    {
      id: 1,
      title: "Traffic Flow Analysis - Downtown SF",
      description: "Map and analyze traffic patterns in downtown San Francisco during peak hours",
      budget: "5,000 BMAPS",
      deadline: "7 days",
      client: "SF Transportation Dept",
      difficulty: "Advanced",
      tags: ["Traffic", "Analysis", "Real-time"]
    },
    {
      id: 2,
      title: "Hiking Trail Mapping - Yosemite",
      description: "Create detailed trail maps with elevation data and point-of-interest markers",
      budget: "3,200 BMAPS",
      deadline: "14 days",
      client: "National Park Service",
      difficulty: "Intermediate",
      tags: ["Trails", "Recreation", "Outdoor"]
    },
    {
      id: 3,
      title: "Delivery Route Optimization",
      description: "Map optimal delivery routes for last-mile logistics in urban areas",
      budget: "8,500 BMAPS",
      deadline: "5 days",
      client: "LogiTech Corp",
      difficulty: "Expert",
      tags: ["Logistics", "Optimization", "Commercial"]
    }
  ]

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">MAPPING CONTRACTS</div>
          <h1 className="hero-title">
            Find Your Next <br />
            <span className="gradient-text">Mapping Project</span>
          </h1>
          <p className="hero-description">
            Browse available mapping contracts, bid on projects, and earn BMAPS tokens 
            for creating high-quality geospatial data.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setActiveTab('create')}>
              <span>Post Contract</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => setActiveTab('browse')}>
              Browse Contracts
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">245</span>
              <span className="stat-label">Active Contracts</span>
            </div>
            <div className="stat">
              <span className="stat-value">1.2M</span>
              <span className="stat-label">BMAPS Paid</span>
            </div>
            <div className="stat">
              <span className="stat-value">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Tabs */}
      <section className="how-it-works">
        <div className="container">
          <div className="contract-tabs">
            <button 
              className={activeTab === 'browse' ? 'tab-active' : 'tab-inactive'}
              onClick={() => setActiveTab('browse')}
            >
              Browse Contracts
            </button>
            <button 
              className={activeTab === 'create' ? 'tab-active' : 'tab-inactive'}
              onClick={() => setActiveTab('create')}
            >
              Create Contract
            </button>
            <button 
              className={activeTab === 'my-contracts' ? 'tab-active' : 'tab-inactive'}
              onClick={() => setActiveTab('my-contracts')}
            >
              My Contracts
            </button>
          </div>

          {activeTab === 'browse' && (
            <div className="contracts-grid">
              {contracts.map(contract => (
                <div key={contract.id} className="contract-card">
                  <div className="contract-header">
                    <h3>{contract.title}</h3>
                    <div className="contract-budget">{contract.budget}</div>
                  </div>
                  <p className="contract-description">{contract.description}</p>
                  <div className="contract-meta">
                    <span className="contract-client">👤 {contract.client}</span>
                    <span className="contract-deadline">⏰ {contract.deadline}</span>
                    <span className={`contract-difficulty ${contract.difficulty.toLowerCase()}`}>
                      📊 {contract.difficulty}
                    </span>
                  </div>
                  <div className="contract-tags">
                    {contract.tags.map(tag => (
                      <span key={tag} className="contract-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="contract-actions">
                    <button className="btn-secondary">View Details</button>
                    <button className="btn-primary">Submit Bid</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'create' && (
            <div className="create-contract-form">
              <h2>Create New Mapping Contract</h2>
              <form className="contract-form">
                <div className="form-group">
                  <label>Project Title</label>
                  <input type="text" placeholder="Describe your mapping project" />
                </div>
                <div className="form-group">
                  <label>Project Description</label>
                  <textarea rows={4} placeholder="Detailed description of the mapping work required"></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Budget (BMAPS)</label>
                    <input type="number" placeholder="5000" />
                  </div>
                  <div className="form-group">
                    <label>Deadline</label>
                    <select>
                      <option>1-3 days</option>
                      <option>1 week</option>
                      <option>2 weeks</option>
                      <option>1 month</option>
                      <option>Custom</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Required Skills</label>
                  <input type="text" placeholder="e.g., GIS, Traffic Analysis, GPS Surveying" />
                </div>
                <div className="form-group">
                  <label>Location/Area</label>
                  <input type="text" placeholder="Geographic area to be mapped" />
                </div>
                <button type="submit" className="btn-primary">Post Contract</button>
              </form>
            </div>
          )}

          {activeTab === 'my-contracts' && (
            <div className="my-contracts">
              <h2>Your Active Contracts</h2>
              <div className="contract-status-grid">
                <div className="status-card in-progress">
                  <h4>In Progress</h4>
                  <div className="status-number">3</div>
                  <p>Active mapping projects</p>
                </div>
                <div className="status-card pending">
                  <h4>Pending Review</h4>
                  <div className="status-number">2</div>
                  <p>Awaiting client approval</p>
                </div>
                <div className="status-card completed">
                  <h4>Completed</h4>
                  <div className="status-number">15</div>
                  <p>Successfully completed</p>
                </div>
                <div className="status-card earnings">
                  <h4>Total Earnings</h4>
                  <div className="status-number">45,230</div>
                  <p>BMAPS tokens earned</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How Contracts Work */}
      <section className="core-features">
        <div className="container">
          <div className="section-header">
            <h2>How Mapping Contracts Work</h2>
            <p>Transparent, secure, and automated contract execution</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Post Contract</h3>
              <p>Clients post mapping projects with clear requirements, budgets, and deadlines</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Submit Bids</h3>
              <p>Qualified mappers review requirements and submit competitive bids with portfolios</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Award & Execute</h3>
              <p>Client selects best bid, smart contract escrows payment, mapper begins work</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Quality Review</h3>
              <p>Submitted work undergoes quality review and verification by community validators</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Automatic Payment</h3>
              <p>Upon approval, payment releases automatically from escrow to mapper's wallet</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Reputation Building</h3>
              <p>Successful contracts build reputation scores for better future opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}