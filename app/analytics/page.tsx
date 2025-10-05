'use client'

import React, { useState, useEffect } from 'react'
import ProofOfConceptBar from '../../components/ProofOfConceptBar'
import DevSidebar from '../../components/DevSidebar'
import Dock from '../../components/Dock'
import Taskbar from '../../components/Taskbar'

export default function AnalyticsPage() {
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
            <div className="hero-badge">BLOCKCHAIN ANALYTICS</div>
            <h1 className="hero-title">
              Bitcoin Maps <span className="text-primary">Analytics</span>
            </h1>
            <p className="hero-description">
              Deep insights into the Bitcoin Maps protocol, token economics, and network activity
            </p>
          </section>

          {/* Key Metrics */}
          <section style={{ padding: '60px 0' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--color-text)', textAlign: 'center', marginBottom: '40px' }}>
              Protocol Metrics
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', 
              gap: '24px',
              marginBottom: '60px'
            }}>
              <div className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '12px' }}>
                  Total Value Locked
                </h3>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '8px' }}>
                  $2.4M
                </div>
                <div style={{ fontSize: '0.875rem', color: '#22c55e' }}>
                  +12.5% (24h)
                </div>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '12px' }}>
                  Daily Active Users
                </h3>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '8px' }}>
                  15.2K
                </div>
                <div style={{ fontSize: '0.875rem', color: '#22c55e' }}>
                  +3.2% (24h)
                </div>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '12px' }}>
                  Transactions/Day
                </h3>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '8px' }}>
                  89.6K
                </div>
                <div style={{ fontSize: '0.875rem', color: '#22c55e' }}>
                  +7.1% (24h)
                </div>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '12px' }}>
                  Circulating Supply
                </h3>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '8px' }}>
                  18.5M
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  88.1% of total
                </div>
              </div>
            </div>
          </section>

          {/* Charts Section */}
          <section style={{ padding: '60px 0' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
              gap: '40px',
              marginBottom: '60px'
            }}>
              {/* Token Price Chart */}
              <div className="card">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-text)', marginBottom: '24px' }}>
                  $BMAPS Price (7 Days)
                </h3>
                <div style={{ 
                  height: '200px', 
                  background: 'var(--bg-secondary)', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <div style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '8px' }}>📈</div>
                    <div>Interactive chart coming soon</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  <span>7d Low: $0.085</span>
                  <span>7d High: $0.124</span>
                </div>
              </div>

              {/* Transaction Volume Chart */}
              <div className="card">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-text)', marginBottom: '24px' }}>
                  Transaction Volume
                </h3>
                <div style={{ 
                  height: '200px', 
                  background: 'var(--bg-secondary)', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <div style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '8px' }}>📊</div>
                    <div>Volume analytics coming soon</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  <span>Today: $184K</span>
                  <span>24h Change: +15.3%</span>
                </div>
              </div>
            </div>
          </section>

          {/* Network Activity */}
          <section style={{ padding: '60px 0' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--color-text)', textAlign: 'center', marginBottom: '40px' }}>
              Network Activity
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
              gap: '24px'
            }}>
              <div className="card">
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '16px' }}>
                  📍 Location Data
                </h3>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Total Locations</span>
                    <span style={{ color: 'var(--color-text)', fontWeight: '600' }}>12.4M</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Verified</span>
                    <span style={{ color: '#22c55e', fontWeight: '600' }}>8.7M</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Premium</span>
                    <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>2.1M</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '16px' }}>
                  🏢 Business Listings
                </h3>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Registered</span>
                    <span style={{ color: 'var(--color-text)', fontWeight: '600' }}>45.2K</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Verified</span>
                    <span style={{ color: '#22c55e', fontWeight: '600' }}>38.9K</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Premium</span>
                    <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>12.3K</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '16px' }}>
                  ⛽ Gas & Fees
                </h3>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Avg Gas Price</span>
                    <span style={{ color: 'var(--color-text)', fontWeight: '600' }}>15 gwei</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Avg Tx Fee</span>
                    <span style={{ color: 'var(--color-text)', fontWeight: '600' }}>$0.12</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Network Load</span>
                    <span style={{ color: '#22c55e', fontWeight: '600' }}>68%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Top Performers */}
          <section style={{ padding: '60px 0' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--color-text)', textAlign: 'center', marginBottom: '40px' }}>
              Top Contributors
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="card">
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-text)', marginBottom: '24px' }}>
                  🏆 Leaderboard (This Month)
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.5rem' }}>🥇</span>
                      <div>
                        <div style={{ fontWeight: '600', color: 'var(--color-text)' }}>MapMaster</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>1,247 locations added</div>
                      </div>
                    </div>
                    <span style={{ fontWeight: '600', color: 'var(--color-primary)' }}>12,470 $BMAPS</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.5rem' }}>🥈</span>
                      <div>
                        <div style={{ fontWeight: '600', color: 'var(--color-text)' }}>DataHunter</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>892 locations verified</div>
                      </div>
                    </div>
                    <span style={{ fontWeight: '600', color: 'var(--color-primary)' }}>8,920 $BMAPS</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.5rem' }}>🥉</span>
                      <div>
                        <div style={{ fontWeight: '600', color: 'var(--color-text)' }}>GeoExplorer</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>634 premium updates</div>
                      </div>
                    </div>
                    <span style={{ fontWeight: '600', color: 'var(--color-primary)' }}>6,340 $BMAPS</span>
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