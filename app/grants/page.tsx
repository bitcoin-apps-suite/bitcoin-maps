'use client'

import React, { useState, useEffect } from 'react'
import ProofOfConceptBar from '../../components/ProofOfConceptBar'
import DevSidebar from '../../components/DevSidebar'
import Dock from '../../components/Dock'
import Taskbar from '../../components/Taskbar'
import './grants-page.css'

export default function GrantsPage() {
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

  return (
    <div className="min-h-screen bg-gray-900">
      <Taskbar />
      <ProofOfConceptBar />
      <DevSidebar />
      <div className={`grants-page ${!isMobile && !devSidebarCollapsed ? 'with-sidebar-expanded' : ''} ${!isMobile && devSidebarCollapsed ? 'with-sidebar-collapsed' : ''}`}>
        <div className="grants-container">
          {/* Hero Section */}
          <section className="grants-hero">
            <div className="grants-hero-icon">
              🗺️
            </div>
            <h1>Bitcoin Maps <span className="text-primary">Grants</span></h1>
            <p className="grants-tagline">
              $BMAPS token awards for quality mapping submissions, plus public discovery platform for independent funding
            </p>
            <div className="grants-badge">DUAL FUNDING PLATFORM</div>
          </section>

          {/* Dual System Section */}
          <section className="mission-section">
            <h2>Two Paths to Funding</h2>
            <div className="mission-content">
              <p className="mission-statement">
                Bitcoin Maps creates <strong>a unique funding ecosystem</strong> where quality mapping work gets recognized through 
                $BMAPS token awards and becomes discoverable for potential independent funding:
              </p>
              
              <div className="mission-pillars">
                <div className="pillar">
                  <div className="pillar-icon">💰</div>
                  <h3>Bitcoin Maps Curation</h3>
                  <p><strong>$BMAPS token awards for quality work</strong><br/>
                  We review mapping submissions and award $BMAPS tokens to exceptional proposals, signaling their quality to the broader ecosystem.</p>
                </div>
                <div className="pillar">
                  <div className="pillar-icon">🌍</div>
                  <h3>Public Discovery Platform</h3>
                  <p><strong>Independent funding through public discovery</strong><br/>
                  All submissions become publicly viewable with funding addresses, enabling direct discovery and independent funding.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Focus Areas */}
          <section className="focus-section">
            <h2>Focus Areas for Both Programs</h2>
            <div className="focus-content">
              <p className="focus-intro">
                Our platform showcases exceptional mapping work across key innovation areas. Bitcoin Maps awards $BMAPS tokens 
                to signal quality, while independent funders can discover and support projects that align with their values:
              </p>
              
              <div className="focus-areas">
                <div className="focus-area">
                  <div className="focus-area-icon">🔧</div>
                  <h4>Bitcoin Maps Platform Development</h4>
                  <ul>
                    <li>Enhance mapping functionality and user experience</li>
                    <li>Create innovative geospatial data monetization features</li>
                    <li>Develop mapping tools and resources</li>
                    <li>Build integrations with other BSV applications</li>
                  </ul>
                  <div style={{marginTop: '10px', fontSize: '12px'}} className="text-primary">
                    Funded: Feature development, infrastructure, integrations
                  </div>
                </div>

                <div className="focus-area">
                  <div className="focus-area-icon">🎓</div>
                  <h4>Mapping Education & Training</h4>
                  <ul>
                    <li>Create tutorials for GIS and mapping tools</li>
                    <li>Develop certification programs for mappers</li>
                    <li>Build educational content about tokenized mapping</li>
                    <li>Host workshops and training sessions</li>
                  </ul>
                  <div style={{marginTop: '10px', fontSize: '12px'}} className="text-primary">
                    Funded: Course development, instructional design, certification systems
                  </div>
                </div>

                <div className="focus-area">
                  <div className="focus-area-icon">🚀</div>
                  <h4>Innovative Mapping Applications</h4>
                  <ul>
                    <li>Develop new use cases for blockchain-verified mapping</li>
                    <li>Create AR/VR mapping experiences</li>
                    <li>Build autonomous vehicle mapping solutions</li>
                    <li>Design smart city mapping infrastructure</li>
                  </ul>
                  <div style={{marginTop: '10px', fontSize: '12px'}} className="text-primary">
                    Funded: Research, prototyping, pilot programs
                  </div>
                </div>

                <div className="focus-area">
                  <div className="focus-area-icon">👥</div>
                  <h4>Community Building & Outreach</h4>
                  <ul>
                    <li>Organize mapping communities and events</li>
                    <li>Create advocacy programs for decentralized mapping</li>
                    <li>Build partnerships with mapping organizations</li>
                    <li>Develop mapper recruitment and retention programs</li>
                  </ul>
                  <div style={{marginTop: '10px', fontSize: '12px'}} className="text-primary">
                    Funded: Event organization, community management, partnerships
                  </div>
                </div>

                <div className="focus-area">
                  <div className="focus-area-icon">⚡</div>
                  <h4>Infrastructure & Performance</h4>
                  <ul>
                    <li>Optimize mapping data storage and retrieval</li>
                    <li>Enhance real-time mapping capabilities</li>
                    <li>Improve scalability for global deployment</li>
                    <li>Develop edge computing solutions for mapping</li>
                  </ul>
                  <div style={{marginTop: '10px', fontSize: '12px'}} className="text-primary">
                    Funded: Performance optimization, infrastructure development
                  </div>
                </div>

                <div className="focus-area">
                  <div className="focus-area-icon">💻</div>
                  <h4>Data Quality & Verification</h4>
                  <ul>
                    <li>Build automated data verification systems</li>
                    <li>Create quality assurance tools for mappers</li>
                    <li>Develop crowdsourced validation mechanisms</li>
                    <li>Design incentive systems for accurate mapping</li>
                  </ul>
                  <div style={{marginTop: '10px', fontSize: '12px'}} className="text-primary">
                    Funded: Algorithm development, quality systems, validation tools
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section className="process-section">
            <h2>Application Process</h2>
            
            <div className="track-selector">
              <div className="track active">
                <h3>🗺️ Mapping Innovation Track</h3>
                <p>For technical mapping projects, platform improvements, and infrastructure development</p>
              </div>
            </div>

            <div className="application-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Submit Proposal</h4>
                  <p>Submit your mapping project proposal with detailed technical specifications, timeline, and budget</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Community Review</h4>
                  <p>Proposals become publicly viewable for community feedback and independent funding opportunities</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Bitcoin Maps Evaluation</h4>
                  <p>Our team evaluates technical merit, innovation potential, and alignment with platform goals</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Funding & Recognition</h4>
                  <p>Exceptional proposals receive $BMAPS token awards and public recognition as quality work</p>
                </div>
              </div>
            </div>
          </section>

          {/* Apply Section */}
          <section className="apply-section">
            <h2>Ready to Apply?</h2>
            <div className="apply-content">
              <p>Submit your mapping innovation proposal to join our ecosystem of funded developers and researchers.</p>
              
              <div className="apply-buttons">
                <a href="/contracts" className="apply-btn primary">
                  🗺️ Submit Mapping Proposal
                </a>
                <a href="/api" className="apply-btn secondary">
                  📚 Read Guidelines
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Dock />
    </div>
  )
}