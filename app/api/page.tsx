'use client'

import React, { useState } from 'react'
import '../page-styles.css'
import './api-page.css'

export default function ApiPage() {
  const [activeSection, setActiveSection] = useState('authentication')

  return (
    <div className="page-container">
      <div className="api-container">
        {/* Hero Section */}
        <section className="api-hero">
          <h1>Bitcoin Maps <span style={{color: '#ffffff'}}>API</span></h1>
          <p className="api-tagline">
            Complete API reference for integrating Bitcoin Maps
          </p>
          <div className="api-badge">API v1.0</div>
        </section>

        {/* API Navigation */}
        <section className="api-nav-section">
          <div className="api-nav">
            <button 
              className={activeSection === 'authentication' ? 'active' : ''}
              onClick={() => setActiveSection('authentication')}
            >
              Authentication
            </button>
            <button 
              className={activeSection === 'maps' ? 'active' : ''}
              onClick={() => setActiveSection('maps')}
            >
              Maps
            </button>
            <button 
              className={activeSection === 'blockchain' ? 'active' : ''}
              onClick={() => setActiveSection('blockchain')}
            >
              Blockchain
            </button>
            <button 
              className={activeSection === 'payments' ? 'active' : ''}
              onClick={() => setActiveSection('payments')}
            >
              Payments
            </button>
            <button 
              className={activeSection === 'data' ? 'active' : ''}
              onClick={() => setActiveSection('data')}
            >
              Geospatial Data
            </button>
          </div>
        </section>

        {/* API Content */}
        <section className="api-content">
          {activeSection === 'authentication' && (
            <div className="api-section">
              <h2>Authentication</h2>
              <p>Authenticate with Bitcoin Maps API using your API key or HandCash account.</p>
              
              <div className="code-block">
                <pre>{`curl -X GET "https://api.bitcoin-maps.com/v1/user/profile" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</pre>
              </div>

              <h3>API Key Authentication</h3>
              <p>Include your API key in the Authorization header for all requests.</p>

              <h3>HandCash Authentication</h3>
              <p>Use HandCash OAuth for user authentication and payments.</p>
            </div>
          )}

          {activeSection === 'maps' && (
            <div className="api-section">
              <h2>Maps API</h2>
              <p>Create, read, update, and delete geospatial data and maps.</p>
              
              <h3>Create Map Data</h3>
              <div className="code-block">
                <pre>{`POST /v1/maps
{
  "name": "Traffic Route Analysis",
  "type": "route",
  "coordinates": [
    {"lat": 37.7749, "lng": -122.4194},
    {"lat": 37.7849, "lng": -122.4094}
  ],
  "metadata": {
    "traffic_data": true,
    "commercial_use": true
  }
}`}</pre>
              </div>

              <h3>Get Map Data</h3>
              <div className="code-block">
                <pre>{`GET /v1/maps/{map_id}
GET /v1/maps?bounds=37.7,-122.5,37.8,-122.4`}</pre>
              </div>
            </div>
          )}

          {activeSection === 'blockchain' && (
            <div className="api-section">
              <h2>Blockchain API</h2>
              <p>Hash map data to Bitcoin blockchain for permanent verification.</p>
              
              <h3>Hash Map to Blockchain</h3>
              <div className="code-block">
                <pre>{`POST /v1/blockchain/hash
{
  "map_id": "map_12345",
  "data_hash": "sha256_hash",
  "metadata": {
    "creator": "user_address",
    "timestamp": "2025-01-01T00:00:00Z"
  }
}`}</pre>
              </div>

              <h3>Verify Map Hash</h3>
              <div className="code-block">
                <pre>{`GET /v1/blockchain/verify/{map_id}`}</pre>
              </div>
            </div>
          )}

          {activeSection === 'payments' && (
            <div className="api-section">
              <h2>Payments API</h2>
              <p>Handle BMAPS token transactions and micropayments.</p>
              
              <h3>Create Payment</h3>
              <div className="code-block">
                <pre>{`POST /v1/payments
{
  "recipient": "handcash_handle",
  "amount": 1000,
  "currency": "BMAPS",
  "reference": "map_purchase_12345"
}`}</pre>
              </div>

              <h3>Payment Status</h3>
              <div className="code-block">
                <pre>{`GET /v1/payments/{payment_id}`}</pre>
              </div>
            </div>
          )}

          {activeSection === 'data' && (
            <div className="api-section">
              <h2>Geospatial Data API</h2>
              <p>Access premium geospatial datasets and marketplace.</p>
              
              <h3>Browse Data Marketplace</h3>
              <div className="code-block">
                <pre>{`GET /v1/data/marketplace
GET /v1/data/marketplace?category=traffic&location=san_francisco`}</pre>
              </div>

              <h3>Purchase Data</h3>
              <div className="code-block">
                <pre>{`POST /v1/data/purchase
{
  "dataset_id": "traffic_sf_2025",
  "license_type": "commercial",
  "payment_method": "bmaps_tokens"
}`}</pre>
              </div>
            </div>
          )}
        </section>

        {/* SDK Section */}
        <section className="sdk-section">
          <h2>SDKs & Libraries</h2>
          <div className="sdk-grid">
            <div className="sdk-card">
              <h3>JavaScript SDK</h3>
              <p>npm install @bitcoin-maps/sdk</p>
              <div className="code-block">
                <pre>{`import { BitcoinMaps } from '@bitcoin-maps/sdk';

const maps = new BitcoinMaps({
  apiKey: 'your-api-key'
});

const mapData = await maps.getMap('map_id');`}</pre>
              </div>
            </div>
            <div className="sdk-card">
              <h3>Python SDK</h3>
              <p>pip install bitcoin-maps</p>
              <div className="code-block">
                <pre>{`from bitcoin_maps import BitcoinMaps

client = BitcoinMaps(api_key='your-api-key')
map_data = client.get_map('map_id')`}</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}