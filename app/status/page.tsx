'use client'

import React, { useState, useEffect } from 'react'
import ProofOfConceptBar from '../../components/ProofOfConceptBar'
import DevSidebar from '../../components/DevSidebar'
import Dock from '../../components/Dock'
import Taskbar from '../../components/Taskbar'

export default function StatusPage() {
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
      <div className={`page-container ${!isMobile && !devSidebarCollapsed ? 'with-sidebar-expanded' : ''} ${!isMobile && devSidebarCollapsed ? 'with-sidebar-collapsed' : ''}`}>
        <div className="container">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-badge">PLATFORM STATUS</div>
            <h1 className="hero-title">
              Bitcoin Maps <span className="text-primary">Status</span>
            </h1>
            <p className="hero-description">
              Real-time status of the Bitcoin Maps protocol, network health, and service availability
            </p>
          </section>

          {/* Overall Status */}
          <section style={{ padding: '60px 0' }}>
            <div style={{ 
              textAlign: 'center', 
              padding: '40px',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '16px',
              marginBottom: '60px'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🟢</div>
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#22c55e', marginBottom: '12px' }}>
                All Systems Operational
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>
                Bitcoin Maps protocol is running smoothly across all services
              </p>
            </div>

            {/* Service Status Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
              gap: '24px',
              marginBottom: '60px'
            }}>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-text)' }}>
                    Map Services
                  </h3>
                  <span style={{ color: '#22c55e', fontSize: '1.25rem' }}>●</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                  Core mapping functionality and data access
                </p>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  Uptime: 99.9% | Response: 142ms
                </div>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-text)' }}>
                    Blockchain Network
                  </h3>
                  <span style={{ color: '#22c55e', fontSize: '1.25rem' }}>●</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                  Token transactions and smart contracts
                </p>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  Block Height: 784,532 | Gas: 15 gwei
                </div>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-text)' }}>
                    API Services
                  </h3>
                  <span style={{ color: '#22c55e', fontSize: '1.25rem' }}>●</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                  REST API and GraphQL endpoints
                </p>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  Requests: 1.2M/day | Success: 99.8%
                </div>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-text)' }}>
                    Data Storage
                  </h3>
                  <span style={{ color: '#22c55e', fontSize: '1.25rem' }}>●</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                  Distributed data storage and backups
                </p>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  Locations: 12.4M | Verified: 8.7M
                </div>
              </div>
            </div>
          </section>

          {/* Network Statistics */}
          <section style={{ padding: '60px 0' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--color-text)', textAlign: 'center', marginBottom: '40px' }}>
              Network Statistics
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', 
              gap: '24px'
            }}>
              <div className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '12px' }}>
                  Active Nodes
                </h3>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '8px' }}>
                  247
                </div>
                <div style={{ fontSize: '0.875rem', color: '#22c55e' }}>
                  +12 this week
                </div>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '12px' }}>
                  Daily Transactions
                </h3>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '8px' }}>
                  45.2K
                </div>
                <div style={{ fontSize: '0.875rem', color: '#22c55e' }}>
                  +8.3% today
                </div>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '12px' }}>
                  Token Holders
                </h3>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '8px' }}>
                  8,942
                </div>
                <div style={{ fontSize: '0.875rem', color: '#22c55e' }}>
                  +156 this month
                </div>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '12px' }}>
                  Network Health
                </h3>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '8px' }}>
                  98.7%
                </div>
                <div style={{ fontSize: '0.875rem', color: '#22c55e' }}>
                  Excellent
                </div>
              </div>
            </div>
          </section>

          {/* Recent Incidents */}
          <section style={{ padding: '60px 0' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--color-text)', textAlign: 'center', marginBottom: '40px' }}>
              Recent Activity
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="card" style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span style={{ color: '#22c55e', fontSize: '1.25rem', marginTop: '4px' }}>●</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--color-text)' }}>
                        Network Upgrade Completed
                      </h3>
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                        2 hours ago
                      </span>
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                      Successfully deployed v2.1.3 with improved transaction throughput and enhanced security features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span style={{ color: '#3b82f6', fontSize: '1.25rem', marginTop: '4px' }}>●</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--color-text)' }}>
                        New Data Centers Online
                      </h3>
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                        1 day ago
                      </span>
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                      Added infrastructure in Asia-Pacific region for improved global latency and redundancy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span style={{ color: '#22c55e', fontSize: '1.25rem', marginTop: '4px' }}>●</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--color-text)' }}>
                        Scheduled Maintenance Completed
                      </h3>
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                        3 days ago
                      </span>
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                      Routine database optimization and security updates completed with zero downtime.
                    </p>
                  </div>
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