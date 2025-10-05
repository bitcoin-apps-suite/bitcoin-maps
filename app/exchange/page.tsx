'use client'

import React, { useState, useEffect } from 'react'
import ProofOfConceptBar from '../../components/ProofOfConceptBar'
import DevSidebar from '../../components/DevSidebar'
import Dock from '../../components/Dock'
import Taskbar from '../../components/Taskbar'
import './exchange.css'

interface MapListing {
  rank: number
  title: string
  description: string
  author: string
  authorHandle: string
  authorType: 'business' | 'individual' | 'enterprise'
  publishDate: string
  dataPoints: number
  views: number
  purchases: number
  sharesAvailable: number
  totalShares: number
  revenue: number
  dividendPerShare: number
  volume24h: number
  currentPrice: number
  priceChange24h: number
  marketCap: number
  dataType: 'premium' | 'verified' | 'real-time'
  category: string
  tags: string[]
  txId: string
  trending?: boolean
  verified: boolean
}

interface ProviderListing {
  rank: number
  name: string
  handle: string
  providerType: 'business' | 'individual' | 'enterprise'
  category?: 'all' | 'businesses' | 'individuals' | 'enterprises' | 'developers' | 'surveyors' | 'government'
  joinDate: string
  totalDatasets: number
  totalUsers: number
  totalRevenue: number
  avgRating: number
  sharesAvailable: number
  totalShares: number
  currentPrice: number
  priceChange24h: number
  marketCap: number
  verified: boolean
  trending?: boolean
}

export default function ExchangePage() {
  const [devSidebarCollapsed, setDevSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed')
      return saved === 'true'
    }
    return false
  })
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [providerType, setProviderType] = useState<'business' | 'individual' | 'enterprise'>('business')
  const [activeView, setActiveView] = useState<'premium' | 'verified' | 'real-time' | 'providers'>('premium')
  const [activeMarket, setActiveMarket] = useState<string>('All')
  const [providerCategory, setProviderCategory] = useState<'all' | 'businesses' | 'individuals' | 'enterprises' | 'developers' | 'surveyors' | 'government'>('all')
  const [sortBy, setSortBy] = useState<'rank' | 'revenue' | 'volume' | 'price' | 'views'>('rank')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMap, setSelectedMap] = useState<MapListing | null>(null)
  const [selectedProvider, setSelectedProvider] = useState<ProviderListing | null>(null)
  const [maps, setMaps] = useState<MapListing[]>([])
  const [providers, setProviders] = useState<ProviderListing[]>([])

  const premiumCategories = ['All', 'Business Intelligence', 'Real Estate', 'Transportation', 'Tourism', 'Emergency Services', 'Urban Planning']
  const verifiedCategories = ['All', 'Government', 'Municipal', 'Commercial', 'Residential', 'Public Services', 'Infrastructure']
  const realTimeCategories = ['All', 'Traffic', 'Weather', 'Events', 'Construction', 'Emergency', 'Transit']
  const providerCategories = [
    { value: 'all', label: 'All', emoji: '🌍' },
    { value: 'businesses', label: 'Businesses', emoji: '🏢' },
    { value: 'individuals', label: 'Individuals', emoji: '👤' },
    { value: 'enterprises', label: 'Enterprises', emoji: '🏛️' },
    { value: 'developers', label: 'Developers', emoji: '💻' },
    { value: 'surveyors', label: 'Surveyors', emoji: '📐' },
    { value: 'government', label: 'Government', emoji: '🏛️' }
  ] as const

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

  // Mock data
  useEffect(() => {
    const mockMaps: MapListing[] = [
      {
        rank: 1,
        title: "Premium NYC Real Estate Data",
        description: "Comprehensive property values, transaction history, and market trends for Manhattan",
        author: "NYC Property Analytics",
        authorHandle: "$nycproperty",
        authorType: "business",
        publishDate: "2025-01-15",
        dataPoints: 450000,
        views: 125000,
        purchases: 8200,
        sharesAvailable: 300,
        totalShares: 500,
        revenue: 410000.00,
        dividendPerShare: 41.00,
        volume24h: 580000,
        currentPrice: 1250.00,
        priceChange24h: 12.5,
        marketCap: 625000,
        dataType: "premium",
        category: "Real Estate",
        tags: ["real estate", "NYC", "analytics"],
        trending: true,
        txId: "map1prem...",
        verified: true
      },
      {
        rank: 2,
        title: "Global Transportation Networks",
        description: "Real-time public transit schedules, routes, and performance data for 50+ cities",
        author: "TransitData Corp",
        authorHandle: "$transitdata",
        authorType: "enterprise",
        publishDate: "2025-01-14",
        dataPoints: 890000,
        views: 98000,
        purchases: 6100,
        sharesAvailable: 420,
        totalShares: 600,
        revenue: 305000.00,
        dividendPerShare: 30.50,
        volume24h: 445000,
        currentPrice: 950.00,
        priceChange24h: 8.3,
        marketCap: 570000,
        dataType: "verified",
        category: "Transportation",
        tags: ["transit", "global", "real-time"],
        txId: "map2ver...",
        verified: true
      },
      {
        rank: 3,
        title: "Emergency Response Zones",
        description: "Critical infrastructure mapping for emergency services and disaster response",
        author: "Emergency Systems Inc",
        authorHandle: "$emergency",
        authorType: "business",
        publishDate: "2025-01-13",
        dataPoints: 230000,
        views: 156000,
        purchases: 9500,
        sharesAvailable: 180,
        totalShares: 800,
        revenue: 475000.00,
        dividendPerShare: 47.50,
        volume24h: 720000,
        currentPrice: 1580.00,
        priceChange24h: 18.7,
        marketCap: 1264000,
        dataType: "real-time",
        category: "Emergency Services",
        tags: ["emergency", "infrastructure", "response"],
        trending: true,
        txId: "map3real...",
        verified: true
      }
    ]

    const mockProviders: ProviderListing[] = [
      {
        rank: 1,
        name: "GeoSpatial Analytics Corp",
        handle: "$geospatial",
        providerType: "enterprise",
        category: "enterprises",
        joinDate: "2024-01-15",
        totalDatasets: 45,
        totalUsers: 125000,
        totalRevenue: 2800000.00,
        avgRating: 4.9,
        sharesAvailable: 45,
        totalShares: 2500,
        currentPrice: 2485.00,
        priceChange24h: 38.2,
        marketCap: 6212500,
        verified: true,
        trending: true
      },
      {
        rank: 2,
        name: "Urban Planning Solutions",
        handle: "$urbanplanning",
        providerType: "business",
        category: "businesses",
        joinDate: "2023-11-20",
        totalDatasets: 32,
        totalUsers: 89000,
        totalRevenue: 1850000.00,
        avgRating: 4.8,
        sharesAvailable: 120,
        totalShares: 2200,
        currentPrice: 1425.00,
        priceChange24h: 22.8,
        marketCap: 3135000,
        verified: true,
        trending: true
      }
    ]

    if (activeView === 'providers') {
      let filteredProviders = mockProviders.filter(p => p.providerType === providerType)
      if (providerCategory !== 'all') {
        filteredProviders = filteredProviders.filter(p => p.category === providerCategory)
      }
      setProviders(filteredProviders)
    } else {
      let contentData = mockMaps.filter(m => m.dataType === activeView)
      if (activeMarket !== 'All') {
        contentData = contentData.filter(item => item.category === activeMarket)
      }
      setMaps(contentData)
    }
  }, [activeView, providerType, activeMarket, providerCategory])

  const filteredMaps = maps
    .filter(map => 
      searchQuery === '' || 
      map.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      map.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch(sortBy) {
        case 'revenue': return b.revenue - a.revenue
        case 'volume': return b.volume24h - a.volume24h
        case 'price': return b.currentPrice - a.currentPrice
        case 'views': return b.views - a.views
        default: return a.rank - b.rank
      }
    })

  const filteredProviders = providers
    .filter(provider => 
      searchQuery === '' || 
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.handle.toLowerCase().includes(searchQuery.toLowerCase())
    )

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Taskbar />
      <ProofOfConceptBar />
      <DevSidebar />
      <div className={`page-container ${!isMobile && !devSidebarCollapsed ? 'with-sidebar-expanded' : ''} ${!isMobile && devSidebarCollapsed ? 'with-sidebar-collapsed' : ''}`}>
        <div className="exchange-view">
          <div className="exchange-view-header">
            <h1>📈 <span className="title-bitcoin-maps">Bitcoin Maps</span> <span className="title-exchange">Exchange</span></h1>
            <div className="author-type-toggle">
              <button
                className={`toggle-btn ${providerType === 'business' ? 'active' : ''}`}
                onClick={() => setProviderType('business')}
                title="Business Providers"
              >
                🏢
              </button>
              <button
                className={`toggle-btn ${providerType === 'individual' ? 'active' : ''}`}
                onClick={() => setProviderType('individual')}
                title="Individual Providers"
              >
                👤
              </button>
              <button
                className={`toggle-btn ${providerType === 'enterprise' ? 'active' : ''}`}
                onClick={() => setProviderType('enterprise')}
                title="Enterprise Providers"
              >
                🏛️
              </button>
            </div>
          </div>

          {/* View Tabs */}
          <div className="view-tabs">
            <button 
              className={`view-tab ${activeView === 'premium' ? 'active' : ''}`}
              onClick={() => {
                setActiveView('premium')
                setActiveMarket('All')
              }}
            >
              Premium Data
            </button>
            <button 
              className={`view-tab ${activeView === 'verified' ? 'active' : ''}`}
              onClick={() => {
                setActiveView('verified')
                setActiveMarket('All')
              }}
            >
              Verified Data
            </button>
            <button 
              className={`view-tab ${activeView === 'real-time' ? 'active' : ''}`}
              onClick={() => {
                setActiveView('real-time')
                setActiveMarket('All')
              }}
            >
              Real-Time Data
            </button>
            <button 
              className={`view-tab ${activeView === 'providers' ? 'active' : ''}`}
              onClick={() => setActiveView('providers')}
            >
              Data Providers
            </button>
          </div>

          {/* Market Category Tabs */}
          {activeView !== 'providers' && (
            <div className="market-tabs">
              {(activeView === 'premium' ? premiumCategories : 
                activeView === 'verified' ? verifiedCategories : 
                realTimeCategories).map(category => (
                <button
                  key={category}
                  className={`market-tab ${activeMarket === category ? 'active' : ''}`}
                  onClick={() => setActiveMarket(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
          
          {/* Provider Category Tabs */}
          {activeView === 'providers' && (
            <div className="market-tabs author-category-tabs">
              {providerCategories.map(category => (
                <button
                  key={category.value}
                  className={`market-tab author-tab ${providerCategory === category.value ? 'active' : ''}`}
                  onClick={() => setProviderCategory(category.value)}
                >
                  <span className="category-emoji">{category.emoji}</span>
                  <span className="category-label">{category.label}</span>
                </button>
              ))}
            </div>
          )}

          <div className="exchange-controls">
            <input
              type="text"
              placeholder={activeView === 'providers' ? "Search providers..." : `Search ${activeView} data...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="exchange-search"
            />
            {activeView !== 'providers' && (
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as any)}
                className="exchange-sort"
              >
                <option value="rank">Rank</option>
                <option value="revenue">Revenue</option>
                <option value="volume">24h Volume</option>
                <option value="price">Price</option>
                <option value="views">Views</option>
              </select>
            )}
          </div>

          <div className="exchange-table-wrapper">
            {activeView !== 'providers' ? (
              <table className="exchange-table">
                <thead>
                  <tr>
                    <th className="col-rank">#</th>
                    <th className="col-title">Data Title</th>
                    <th className="col-description">Description</th>
                    <th className="col-author">Provider</th>
                    <th className="col-stats">Views/Buys</th>
                    <th className="col-shares">Shares</th>
                    <th className="col-revenue">Revenue</th>
                    <th className="col-price">Price</th>
                    <th className="col-market">Market Cap</th>
                    <th className="col-actions">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMaps.map((map) => (
                    <tr 
                      key={map.txId}
                      className={`${selectedMap?.txId === map.txId ? 'selected' : ''}`}
                      onClick={() => setSelectedMap(map)}
                    >
                      <td className="col-rank">
                        <div className="rank-badge">
                          {map.rank}
                        </div>
                      </td>
                      <td className="col-title">
                        <div className="title-cell">
                          <div className="doc-title">
                            {map.title}
                            {map.trending && <span className="trending-badge">🔥</span>}
                            {map.verified && <span className="verified-badge">✓</span>}
                          </div>
                        </div>
                      </td>
                      <td className="col-description">
                        <div className="description-cell">
                          {map.description}
                        </div>
                      </td>
                      <td className="col-author">
                        <div className="author-cell">
                          <div className="author-name">{map.author}</div>
                          <div className="author-handle">{map.authorHandle}</div>
                        </div>
                      </td>
                      <td className="col-stats">
                        <div className="stats-cell">
                          <div>👁 {(map.views / 1000).toFixed(1)}k</div>
                          <div>💰 {map.purchases.toLocaleString()}</div>
                        </div>
                      </td>
                      <td className="col-shares">
                        <div className="shares-cell">
                          <div className="shares-available">{map.sharesAvailable}</div>
                          <div className="shares-total">/ {map.totalShares}</div>
                        </div>
                      </td>
                      <td className="col-revenue">
                        ${map.revenue.toLocaleString()}
                      </td>
                      <td className="col-price">
                        <div className="price-cell">
                          <div className="price-current">${map.currentPrice.toFixed(2)}</div>
                          <div className={`price-change ${map.priceChange24h >= 0 ? 'positive' : 'negative'}`}>
                            {map.priceChange24h >= 0 ? '↑' : '↓'} {Math.abs(map.priceChange24h).toFixed(1)}%
                          </div>
                        </div>
                      </td>
                      <td className="col-market">
                        ${(map.marketCap / 1000).toFixed(1)}k
                      </td>
                      <td className="col-actions">
                        <div className="action-buttons">
                          <button className="btn-buy">Buy</button>
                          <button className="btn-read">Access</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="exchange-table">
                <thead>
                  <tr>
                    <th className="col-rank">#</th>
                    <th className="col-writer">Provider</th>
                    <th className="col-stats">Datasets</th>
                    <th className="col-readers">Total Users</th>
                    <th className="col-revenue">Total Revenue</th>
                    <th className="col-rating">Avg Rating</th>
                    <th className="col-shares">Shares</th>
                    <th className="col-price">Price</th>
                    <th className="col-market">Market Cap</th>
                    <th className="col-actions">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProviders.map((provider) => (
                    <tr 
                      key={provider.handle}
                      className={`${selectedProvider?.handle === provider.handle ? 'selected' : ''}`}
                      onClick={() => setSelectedProvider(provider)}
                    >
                      <td className="col-rank">
                        <div className="rank-badge">{provider.rank}</div>
                      </td>
                      <td className="col-writer">
                        <div className="writer-cell">
                          <div className="writer-name">
                            {provider.name}
                            {provider.verified && <span className="verified-badge">✓</span>}
                          </div>
                          <div className="writer-handle">{provider.handle}</div>
                        </div>
                      </td>
                      <td className="col-stats">{provider.totalDatasets}</td>
                      <td className="col-readers">{(provider.totalUsers / 1000).toFixed(1)}k</td>
                      <td className="col-revenue">${provider.totalRevenue.toLocaleString()}</td>
                      <td className="col-rating">⭐ {provider.avgRating}/5.0</td>
                      <td className="col-shares">
                        <div className="shares-cell">
                          <div className="shares-available">{provider.sharesAvailable}</div>
                          <div className="shares-total">/ {provider.totalShares}</div>
                        </div>
                      </td>
                      <td className="col-price">
                        <div className="price-cell">
                          <div className="price-current">${provider.currentPrice.toFixed(2)}</div>
                          <div className={`price-change ${provider.priceChange24h >= 0 ? 'positive' : 'negative'}`}>
                            {provider.priceChange24h >= 0 ? '↑' : '↓'} {Math.abs(provider.priceChange24h).toFixed(1)}%
                          </div>
                        </div>
                      </td>
                      <td className="col-market">${(provider.marketCap / 1000).toFixed(1)}k</td>
                      <td className="col-actions">
                        <div className="action-buttons">
                          <button className="btn-buy">Invest</button>
                          <button className="btn-read">View</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Dock />
    </div>
  )
}