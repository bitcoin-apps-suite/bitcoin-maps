'use client'

import { useState } from 'react'
import ProofOfConceptBar from '../components/ProofOfConceptBar'
import DevSidebar from '../components/DevSidebar'
import Dock from '../components/Dock'
import BitcoinMap from '../components/BitcoinMap'
import Taskbar from '../components/Taskbar'

export default function Home() {
  const [showMap, setShowMap] = useState(false)

  if (showMap) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Taskbar onShowMap={() => setShowMap(true)} />
        <ProofOfConceptBar />
        <DevSidebar />
        <div className="transition-all duration-300 h-screen" style={{ marginLeft: '60px', marginTop: '62px', height: 'calc(100vh - 62px)' }}>
          {/* Toggle button */}
          <button
            onClick={() => setShowMap(false)}
            className="absolute top-16 right-4 z-50 px-4 py-2 bg-bitcoin-orange text-black font-medium rounded-lg hover:bg-orange-600 transition-colors"
          >
            ← Back to Home
          </button>
          <BitcoinMap />
        </div>
        <Dock />
      </div>
    )
  }

  return (
    <>
      <Taskbar onShowMap={() => setShowMap(true)} />
      <ProofOfConceptBar />
      <DevSidebar />
      <div style={{
        minHeight: 'calc(100vh - 62px)',
        background: 'linear-gradient(135deg, #f7931a 0%, #ff9500 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginLeft: '60px',
        marginTop: '22px'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            ₿ Bitcoin Maps Protocol
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            marginBottom: '40px',
            opacity: 0.95,
            lineHeight: 1.6
          }}>
            Tokenized mapping infrastructure generating revenue from premium access to geospatial data
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginBottom: '50px'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '30px',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>💰 Tokenized Access</h3>
              <p style={{ opacity: 0.9 }}>Premium map data access via $BMAPS tokens with tiered pricing models</p>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '30px',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>📊 Revenue Streams</h3>
              <p style={{ opacity: 0.9 }}>API calls, premium features, and enterprise licenses generate sustainable income</p>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '30px',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>🌐 Global Infrastructure</h3>
              <p style={{ opacity: 0.9 }}>Decentralized mapping protocol with Bitcoin-native monetization</p>
            </div>
          </div>

          {/* Map Preview */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            marginBottom: '30px'
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', textAlign: 'center' }}>🗺️ Live Map Preview</h3>
            <div style={{ 
              height: '300px', 
              borderRadius: '10px', 
              overflow: 'hidden',
              border: '2px solid rgba(255,255,255,0.3)'
            }}>
              <BitcoinMap />
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => setShowMap(true)}
              style={{
                background: 'white',
                color: '#f7931a',
                border: 'none',
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Access Protocol
            </button>

            <button 
              onClick={() => setShowMap(true)}
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backdropFilter: 'blur(10px)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.color = '#f7931a'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'white'
              }}
            >
              Contribute Data
            </button>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '20px',
          fontSize: '0.9rem',
          opacity: 0.8
        }}>
  Monetizing geospatial intelligence through tokenized infrastructure
        </div>
      </div>
      <Dock />
    </>
  )
}