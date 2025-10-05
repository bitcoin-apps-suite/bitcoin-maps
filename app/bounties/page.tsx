'use client'

import React, { useState, useEffect } from 'react'
import './bounties-page.css'

export default function BountiesPage() {
  const [devSidebarCollapsed, setDevSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed')
      return saved === 'true'
    }
    return false
  })
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

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

  const activeBounties = [
    {
      id: 1,
      title: "Improve Map Rendering Performance",
      description: "Optimize the map rendering pipeline to handle 10,000+ markers smoothly",
      reward: "2,500 BMAPS",
      difficulty: "Advanced",
      tags: ["Performance", "React", "WebGL"],
      deadline: "30 days"
    },
    {
      id: 2,
      title: "Add Offline Map Support",
      description: "Implement offline caching for map tiles and basic functionality without internet",
      reward: "5,000 BMAPS",
      difficulty: "Expert", 
      tags: ["PWA", "Caching", "Service Workers"],
      deadline: "45 days"
    },
    {
      id: 3,
      title: "Create Mobile AR Map View",
      description: "Develop augmented reality view for mobile users to overlay map data on camera feed",
      reward: "8,000 BMAPS",
      difficulty: "Expert",
      tags: ["AR", "Mobile", "Computer Vision"],
      deadline: "60 days"
    },
    {
      id: 4,
      title: "Fix Map Export Bug",
      description: "Resolve issue where exported maps lose coordinate precision in certain formats",
      reward: "500 BMAPS",
      difficulty: "Intermediate",
      tags: ["Bug Fix", "Export", "Coordinates"],
      deadline: "7 days"
    }
  ]

  return (
    <div className="App">
      <div className={`bounties-page ${!isMobile && !devSidebarCollapsed ? 'with-sidebar-expanded' : ''} ${!isMobile && devSidebarCollapsed ? 'with-sidebar-collapsed' : ''}`}>
        <div className="bounties-container">
          {/* Hero Section */}
          <section className="bounties-hero">
            <div className="bounties-hero-icon">
              🎯
            </div>
            <h1>Bitcoin Maps <span style={{color: '#f7931a'}}>Bounties</span></h1>
            <p className="bounties-tagline">
              Earn $BMAPS tokens by solving specific technical challenges and improving the platform
            </p>
            <div className="bounties-badge">ACTIVE BOUNTIES</div>
          </section>

          {/* How It Works */}
          <section className="how-it-works-section">
            <h2>How Bounties Work</h2>
            <div className="how-it-works-content">
              <p className="how-it-works-intro">
                Bitcoin Maps bounties are specific, well-defined tasks with clear rewards. 
                Complete the work, submit your solution, and earn $BMAPS tokens when approved.
              </p>
              
              <div className="how-it-works-steps">
                <div className="work-step">
                  <div className="work-step-icon">🔍</div>
                  <h3>Browse & Choose</h3>
                  <p>Review active bounties, check requirements, and choose one that matches your skills</p>
                </div>
                <div className="work-step">
                  <div className="work-step-icon">💻</div>
                  <h3>Work & Submit</h3>
                  <p>Complete the task according to specifications and submit your solution with documentation</p>
                </div>
                <div className="work-step">
                  <div className="work-step-icon">✅</div>
                  <h3>Review & Earn</h3>
                  <p>Our team reviews your submission and releases $BMAPS tokens upon approval</p>
                </div>
              </div>
            </div>
          </section>

          {/* Active Bounties */}
          <section className="active-bounties-section">
            <h2>Active Bounties</h2>
            <div className="bounties-grid">
              {activeBounties.map(bounty => (
                <div key={bounty.id} className="bounty-card">
                  <div className="bounty-header">
                    <h3>{bounty.title}</h3>
                    <div className="bounty-reward">{bounty.reward}</div>
                  </div>
                  <p className="bounty-description">{bounty.description}</p>
                  <div className="bounty-meta">
                    <span className={`bounty-difficulty ${bounty.difficulty.toLowerCase()}`}>
                      📊 {bounty.difficulty}
                    </span>
                    <span className="bounty-deadline">⏰ {bounty.deadline}</span>
                  </div>
                  <div className="bounty-tags">
                    {bounty.tags.map(tag => (
                      <span key={tag} className="bounty-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="bounty-actions">
                    <button className="btn-secondary">View Details</button>
                    <button className="btn-primary">Claim Bounty</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bounty Types */}
          <section className="bounty-types-section">
            <h2>Types of Bounties</h2>
            <div className="bounty-types-grid">
              <div className="bounty-type">
                <div className="bounty-type-icon">🐛</div>
                <h4>Bug Fixes</h4>
                <p>Resolve specific bugs and issues in the platform</p>
                <div className="bounty-type-reward">50 - 1,000 BMAPS</div>
              </div>
              <div className="bounty-type">
                <div className="bounty-type-icon">⚡</div>
                <h4>Performance</h4>
                <p>Optimize speed, memory usage, and rendering performance</p>
                <div className="bounty-type-reward">500 - 5,000 BMAPS</div>
              </div>
              <div className="bounty-type">
                <div className="bounty-type-icon">🎨</div>
                <h4>UI/UX</h4>
                <p>Improve user interface and user experience design</p>
                <div className="bounty-type-reward">200 - 2,000 BMAPS</div>
              </div>
              <div className="bounty-type">
                <div className="bounty-type-icon">🚀</div>
                <h4>New Features</h4>
                <p>Build new functionality and platform capabilities</p>
                <div className="bounty-type-reward">1,000 - 10,000 BMAPS</div>
              </div>
              <div className="bounty-type">
                <div className="bounty-type-icon">🔒</div>
                <h4>Security</h4>
                <p>Fix security vulnerabilities and enhance protection</p>
                <div className="bounty-type-reward">1,000 - 20,000 BMAPS</div>
              </div>
              <div className="bounty-type">
                <div className="bounty-type-icon">📱</div>
                <h4>Mobile</h4>
                <p>Improve mobile experience and native app features</p>
                <div className="bounty-type-reward">500 - 5,000 BMAPS</div>
              </div>
            </div>
          </section>

          {/* Guidelines */}
          <section className="guidelines-section">
            <h2>Submission Guidelines</h2>
            <div className="guidelines-content">
              <div className="guidelines-list">
                <div className="guideline">
                  <h4>✅ Quality Requirements</h4>
                  <ul>
                    <li>Code must follow our style guidelines</li>
                    <li>Include comprehensive tests</li>
                    <li>Add clear documentation</li>
                    <li>Ensure backward compatibility</li>
                  </ul>
                </div>
                <div className="guideline">
                  <h4>📋 Submission Process</h4>
                  <ul>
                    <li>Fork the repository and create a feature branch</li>
                    <li>Complete the work as specified</li>
                    <li>Submit a pull request with description</li>
                    <li>Respond to review feedback promptly</li>
                  </ul>
                </div>
                <div className="guideline">
                  <h4>⏰ Timeline & Claiming</h4>
                  <ul>
                    <li>Claim bounties before starting work</li>
                    <li>Submit within the specified deadline</li>
                    <li>Communicate progress if help is needed</li>
                    <li>Only one person can claim each bounty</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <h2>Ready to Start Earning?</h2>
            <div className="cta-content">
              <p>Join our community of developers earning $BMAPS tokens by improving Bitcoin Maps.</p>
              
              <div className="cta-buttons">
                <a href="https://github.com/bitcoin-apps-suite/bitcoin-maps" target="_blank" rel="noopener noreferrer" className="cta-btn primary">
                  🎯 View Active Bounties
                </a>
                <a href="/api" className="cta-btn secondary">
                  📚 Read Guidelines
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}