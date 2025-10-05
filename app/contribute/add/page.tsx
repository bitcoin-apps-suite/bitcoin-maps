'use client'

import React, { useState, useEffect } from 'react'
import ProofOfConceptBar from '../../../components/ProofOfConceptBar'
import DevSidebar from '../../../components/DevSidebar'
import Dock from '../../../components/Dock'
import Taskbar from '../../../components/Taskbar'
import '../../page-styles.css'

export default function ContributeAddPage() {
  const [devSidebarCollapsed, setDevSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed')
      return saved === 'true'
    }
    return false
  })
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [mapType, setMapType] = useState('point')
  const [uploadMethod, setUploadMethod] = useState('manual')

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
            <div className="hero-badge">CONTRIBUTE TO THE MAP</div>
            <h1 className="hero-title">
              Add Your <br />
              <span className="gradient-text">Mapping Data</span>
            </h1>
            <p className="hero-description">
              Contribute to the Bitcoin Maps ecosystem by adding new locations, updating existing data, and earning BMAPS tokens for quality submissions
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">500+</span>
                <span className="stat-label">BMAPS per submission</span>
              </div>
              <div className="stat">
                <span className="stat-value">24h</span>
                <span className="stat-label">Review time</span>
              </div>
              <div className="stat">
                <span className="stat-value">95%</span>
                <span className="stat-label">Approval rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Map Type Selection */}
        <section className="how-it-works">
          <div className="container">
            <h2>What Would You Like to Add?</h2>
            <div className="map-type-grid">
              <div 
                className={`map-type-card ${mapType === 'point' ? 'selected' : ''}`}
                onClick={() => setMapType('point')}
              >
                <div className="map-type-icon">📍</div>
                <h3>Point of Interest</h3>
                <p>Add a specific location like a store, restaurant, or landmark</p>
                <div className="reward-badge">+500 BMAPS</div>
              </div>
              <div 
                className={`map-type-card ${mapType === 'area' ? 'selected' : ''}`}
                onClick={() => setMapType('area')}
              >
                <div className="map-type-icon">🗺️</div>
                <h3>Area Mapping</h3>
                <p>Map a larger area like a neighborhood, park, or commercial district</p>
                <div className="reward-badge">+1,200 BMAPS</div>
              </div>
              <div 
                className={`map-type-card ${mapType === 'route' ? 'selected' : ''}`}
                onClick={() => setMapType('route')}
              >
                <div className="map-type-icon">🛣️</div>
                <h3>Route/Path</h3>
                <p>Add roads, walking paths, or transportation routes</p>
                <div className="reward-badge">+800 BMAPS</div>
              </div>
              <div 
                className={`map-type-card ${mapType === 'update' ? 'selected' : ''}`}
                onClick={() => setMapType('update')}
              >
                <div className="map-type-icon">🔄</div>
                <h3>Update Existing</h3>
                <p>Update or correct information for existing map data</p>
                <div className="reward-badge">+200 BMAPS</div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Entry Form */}
        <section className="core-features">
          <div className="container">
            <div className="section-header">
              <h2>Add Map Data</h2>
              <p>Provide detailed information about your mapping contribution</p>
            </div>
            
            <div className="data-entry-form">
              <div className="form-section">
                <h3>Basic Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Name/Title *</label>
                    <input type="text" placeholder="Enter location or feature name" required />
                  </div>
                  <div className="form-group">
                    <label>Category *</label>
                    <select required>
                      <option value="">Select category</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="store">Store/Shop</option>
                      <option value="service">Service</option>
                      <option value="transport">Transportation</option>
                      <option value="recreation">Recreation</option>
                      <option value="landmark">Landmark</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label>Description *</label>
                    <textarea rows={3} placeholder="Provide a detailed description" required></textarea>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Location Details</h3>
                <div className="location-methods">
                  <button 
                    className={`method-btn ${uploadMethod === 'manual' ? 'active' : ''}`}
                    onClick={() => setUploadMethod('manual')}
                  >
                    📍 Manual Entry
                  </button>
                  <button 
                    className={`method-btn ${uploadMethod === 'map' ? 'active' : ''}`}
                    onClick={() => setUploadMethod('map')}
                  >
                    🗺️ Map Selection
                  </button>
                  <button 
                    className={`method-btn ${uploadMethod === 'file' ? 'active' : ''}`}
                    onClick={() => setUploadMethod('file')}
                  >
                    📂 File Upload
                  </button>
                </div>

                {uploadMethod === 'manual' && (
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Latitude *</label>
                      <input type="number" step="any" placeholder="37.7749" required />
                    </div>
                    <div className="form-group">
                      <label>Longitude *</label>
                      <input type="number" step="any" placeholder="-122.4194" required />
                    </div>
                    <div className="form-group full-width">
                      <label>Address</label>
                      <input type="text" placeholder="Street address (optional)" />
                    </div>
                  </div>
                )}

                {uploadMethod === 'map' && (
                  <div className="map-selector">
                    <div className="map-placeholder">
                      <p>🗺️ Interactive map will appear here</p>
                      <p>Click on the map to select coordinates</p>
                    </div>
                  </div>
                )}

                {uploadMethod === 'file' && (
                  <div className="file-upload-area">
                    <input type="file" id="geo-file" hidden accept=".gpx,.kml,.geojson,.csv" />
                    <label htmlFor="geo-file" className="upload-zone">
                      <div className="upload-icon">📂</div>
                      <h4>Upload Geographic Data</h4>
                      <p>Drag and drop or click to select files</p>
                      <span className="file-types">Supports GPX, KML, GeoJSON, CSV</span>
                    </label>
                  </div>
                )}
              </div>

              <div className="form-section">
                <h3>Additional Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Contact Info</label>
                    <input type="text" placeholder="Website, phone, or email (optional)" />
                  </div>
                  <div className="form-group">
                    <label>Operating Hours</label>
                    <input type="text" placeholder="e.g., Mon-Fri 9AM-5PM" />
                  </div>
                  <div className="form-group full-width">
                    <label>Tags</label>
                    <input type="text" placeholder="Add relevant tags separated by commas" />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Supporting Media</h3>
                <div className="media-upload-grid">
                  <div className="media-upload">
                    <input type="file" id="photos" hidden accept="image/*" multiple />
                    <label htmlFor="photos" className="media-upload-btn">
                      📷 Add Photos
                    </label>
                    <p>JPG, PNG (Max 5MB each)</p>
                  </div>
                  <div className="media-upload">
                    <input type="file" id="documents" hidden accept=".pdf,.doc,.docx" />
                    <label htmlFor="documents" className="media-upload-btn">
                      📄 Add Documents
                    </label>
                    <p>PDF, DOC (Max 10MB)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Guidelines */}
        <section className="token-economics">
          <div className="container">
            <h2>Quality Guidelines</h2>
            <div className="guidelines-grid">
              <div className="guideline-card">
                <div className="guideline-icon">✅</div>
                <h4>Accurate Information</h4>
                <p>Ensure all data is current, accurate, and verified. Double-check coordinates and details.</p>
              </div>
              <div className="guideline-card">
                <div className="guideline-icon">📸</div>
                <h4>Quality Photos</h4>
                <p>Provide clear, recent photos that accurately represent the location or feature.</p>
              </div>
              <div className="guideline-card">
                <div className="guideline-icon">📝</div>
                <h4>Detailed Descriptions</h4>
                <p>Write comprehensive descriptions that help others understand and find the location.</p>
              </div>
              <div className="guideline-card">
                <div className="guideline-icon">🏷️</div>
                <h4>Proper Categorization</h4>
                <p>Choose appropriate categories and tags to make your data easily discoverable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reward Information */}
        <section className="core-features">
          <div className="container">
            <div className="section-header">
              <h2>Earn BMAPS Tokens</h2>
              <p>Get rewarded for quality mapping contributions</p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card reward">
                <div className="feature-icon">🎯</div>
                <h3>Base Rewards</h3>
                <p>Earn tokens based on the type and quality of your contribution</p>
                <div className="reward-details">
                  <span>📍 Points: 500 BMAPS</span>
                  <span>🗺️ Areas: 1,200 BMAPS</span>
                  <span>🛣️ Routes: 800 BMAPS</span>
                </div>
              </div>
              <div className="feature-card reward">
                <div className="feature-icon">⭐</div>
                <h3>Quality Bonuses</h3>
                <p>Exceptional submissions receive additional rewards</p>
                <div className="reward-details">
                  <span>🏆 Perfect rating: +50%</span>
                  <span>📷 Great photos: +25%</span>
                  <span>📝 Detailed info: +25%</span>
                </div>
              </div>
              <div className="feature-card reward">
                <div className="feature-icon">🔄</div>
                <h3>Regular Contributor</h3>
                <p>Build your reputation and unlock higher rewards</p>
                <div className="reward-details">
                  <span>🌟 Verified mapper: +20%</span>
                  <span>🎖️ Expert status: +40%</span>
                  <span>👑 Elite tier: +60%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Submit Section */}
        <section className="hero-section">
          <div className="container">
            <div className="submit-contribution">
              <h2>Ready to Contribute?</h2>
              <p>Submit your mapping data and earn BMAPS tokens for approved contributions</p>
              <div className="hero-buttons">
                <button className="btn-primary">
                  <span>Submit Contribution</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                <button className="btn-secondary">
                  Save as Draft
                </button>
              </div>
              <div className="submission-note">
                <p>📋 Your submission will be reviewed within 24 hours. You'll receive BMAPS tokens once approved.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Dock />
    </div>
  )
}