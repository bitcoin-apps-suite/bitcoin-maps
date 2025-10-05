'use client'

import React, { useState, useEffect } from 'react'
import ProofOfConceptBar from '../../../components/ProofOfConceptBar'
import DevSidebar from '../../../components/DevSidebar'
import Dock from '../../../components/Dock'
import Taskbar from '../../../components/Taskbar'
import '../../page-styles.css'

export default function BusinessAnalyticsPage() {
  const [devSidebarCollapsed, setDevSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed')
      return saved === 'true'
    }
    return false
  })
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [timeRange, setTimeRange] = useState('30d')

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
            <div className="hero-badge">BUSINESS ANALYTICS</div>
            <h1 className="hero-title">
              Business <br />
              <span className="gradient-text">Analytics Dashboard</span>
            </h1>
            <p className="hero-description">
              Track your mapping usage, monitor performance, and optimize your business operations with detailed analytics
            </p>
            <div className="hero-buttons">
              <div className="time-selector">
                <button 
                  className={timeRange === '7d' ? 'active' : ''}
                  onClick={() => setTimeRange('7d')}
                >
                  7 Days
                </button>
                <button 
                  className={timeRange === '30d' ? 'active' : ''}
                  onClick={() => setTimeRange('30d')}
                >
                  30 Days
                </button>
                <button 
                  className={timeRange === '90d' ? 'active' : ''}
                  onClick={() => setTimeRange('90d')}
                >
                  90 Days
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="how-it-works">
          <div className="container">
            <h2>Key Performance Metrics</h2>
            <div className="steps-grid">
              <div className="metric-card">
                <div className="metric-icon">📊</div>
                <div className="metric-value">2.4M</div>
                <div className="metric-label">API Calls</div>
                <div className="metric-change positive">+12.5% vs last month</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">🗺️</div>
                <div className="metric-value">48,392</div>
                <div className="metric-label">Maps Created</div>
                <div className="metric-change positive">+8.2% vs last month</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">💰</div>
                <div className="metric-value">$12,847</div>
                <div className="metric-label">Revenue</div>
                <div className="metric-change positive">+15.7% vs last month</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">👥</div>
                <div className="metric-value">1,247</div>
                <div className="metric-label">Active Users</div>
                <div className="metric-change positive">+5.3% vs last month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="core-features">
          <div className="container">
            <div className="section-header">
              <h2>Usage Analytics</h2>
              <p>Detailed insights into your mapping platform usage</p>
            </div>
            
            <div className="analytics-grid">
              <div className="chart-card large">
                <h3>API Usage Over Time</h3>
                <div className="chart-placeholder">
                  <div className="chart-bars">
                    <div className="bar" style={{height: '60%'}}></div>
                    <div className="bar" style={{height: '80%'}}></div>
                    <div className="bar" style={{height: '45%'}}></div>
                    <div className="bar" style={{height: '90%'}}></div>
                    <div className="bar" style={{height: '70%'}}></div>
                    <div className="bar" style={{height: '85%'}}></div>
                    <div className="bar" style={{height: '95%'}}></div>
                  </div>
                  <div className="chart-labels">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
              <div className="chart-card">
                <h3>Geographic Distribution</h3>
                <div className="geo-stats">
                  <div className="geo-item">
                    <span className="geo-flag">🇺🇸</span>
                    <span className="geo-country">United States</span>
                    <span className="geo-percentage">45.2%</span>
                  </div>
                  <div className="geo-item">
                    <span className="geo-flag">🇬🇧</span>
                    <span className="geo-country">United Kingdom</span>
                    <span className="geo-percentage">18.7%</span>
                  </div>
                  <div className="geo-item">
                    <span className="geo-flag">🇨🇦</span>
                    <span className="geo-country">Canada</span>
                    <span className="geo-percentage">12.3%</span>
                  </div>
                  <div className="geo-item">
                    <span className="geo-flag">🇦🇺</span>
                    <span className="geo-country">Australia</span>
                    <span className="geo-percentage">8.9%</span>
                  </div>
                  <div className="geo-item">
                    <span className="geo-flag">🌍</span>
                    <span className="geo-country">Others</span>
                    <span className="geo-percentage">14.9%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="token-economics">
          <div className="container">
            <h2>Performance Insights</h2>
            <div className="performance-grid">
              <div className="performance-card">
                <div className="performance-header">
                  <h4>Response Time</h4>
                  <span className="performance-trend">↓ 15ms</span>
                </div>
                <div className="performance-value">127ms</div>
                <div className="performance-subtitle">Average API response time</div>
                <div className="performance-bar">
                  <div className="performance-fill" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="performance-card">
                <div className="performance-header">
                  <h4>Uptime</h4>
                  <span className="performance-trend positive">↑ 0.1%</span>
                </div>
                <div className="performance-value">99.9%</div>
                <div className="performance-subtitle">Service availability</div>
                <div className="performance-bar">
                  <div className="performance-fill" style={{width: '99%'}}></div>
                </div>
              </div>
              <div className="performance-card">
                <div className="performance-header">
                  <h4>Error Rate</h4>
                  <span className="performance-trend">↓ 0.05%</span>
                </div>
                <div className="performance-value">0.12%</div>
                <div className="performance-subtitle">Failed requests</div>
                <div className="performance-bar error">
                  <div className="performance-fill" style={{width: '12%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="core-features">
          <div className="container">
            <div className="section-header">
              <h2>Recent Activity</h2>
              <p>Latest events and transactions</p>
            </div>
            
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">🗺️</div>
                <div className="activity-content">
                  <h4>New map created: Downtown Traffic Analysis</h4>
                  <p>Map ID: MAP_892734 • Created by: John Smith</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
                <div className="activity-value">+150 BMAPS</div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💰</div>
                <div className="activity-content">
                  <h4>Payment received</h4>
                  <p>Invoice #INV-2024-0321 • Client: TechCorp Ltd</p>
                  <span className="activity-time">5 hours ago</span>
                </div>
                <div className="activity-value">$2,450</div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">📊</div>
                <div className="activity-content">
                  <h4>API limit increased</h4>
                  <p>Monthly limit upgraded to 5M calls</p>
                  <span className="activity-time">1 day ago</span>
                </div>
                <div className="activity-value">Upgraded</div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🔄</div>
                <div className="activity-content">
                  <h4>Data export completed</h4>
                  <p>Regional traffic data • Format: GeoJSON</p>
                  <span className="activity-time">2 days ago</span>
                </div>
                <div className="activity-value">Completed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Export Options */}
        <section className="hero-section">
          <div className="container">
            <div className="export-section">
              <h2>Export Your Data</h2>
              <p>Download detailed reports and analytics data</p>
              <div className="hero-buttons">
                <button className="btn-primary">
                  <span>📊 Export Analytics</span>
                </button>
                <button className="btn-secondary">
                  📄 Generate Report
                </button>
                <button className="btn-secondary">
                  📈 Download Charts
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