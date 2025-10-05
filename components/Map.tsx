'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin, Zap, Store, Coffee, ShoppingBag, Utensils } from 'lucide-react'

interface MapLocation {
  id: string
  name: string
  address: string
  lat: number
  lng: number
  type: 'business' | 'restaurant' | 'hotel' | 'gas_station' | 'hospital' | 'school' | 'park' | 'bank' | 'pharmacy' | 'shopping' | 'entertainment' | 'transport' | 'government' | 'landmark' | 'crypto' | 'other'
  category: 'amenity' | 'tourism' | 'healthcare' | 'education' | 'finance' | 'retail' | 'public' | 'recreation' | 'infrastructure'
  verified: boolean
  description?: string
  website?: string
  phone?: string
  hours?: string
  amenities?: string[]
  rating?: number
  priceLevel?: 1 | 2 | 3 | 4
}

interface MapProps {
  locations: MapLocation[]
}

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

export default function Map({ locations }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const markersRef = useRef<L.Marker[]>([])

  const getIconForType = (type: string, category: string, verified: boolean) => {
    const color = verified ? '#f7931a' : '#6b7280'
    
    // Icons based on category and type
    const categoryIcons: { [key: string]: string } = {
      amenity: '🍽️',
      tourism: '🏨', 
      healthcare: '🏥',
      education: '🏫',
      finance: '🏦',
      retail: '🛍️',
      public: '🏛️',
      recreation: '🌳',
      infrastructure: '⛽'
    }

    const typeIcons: { [key: string]: string } = {
      restaurant: '🍽️',
      hotel: '🏨',
      hospital: '🏥',
      school: '🏫',
      bank: '🏦',
      park: '🌳',
      shopping: '🛍️',
      gas_station: '⛽',
      government: '🏛️',
      landmark: '🗽',
      crypto: '₿',
      business: '🏢',
      entertainment: '🎭',
      transport: '🚌',
      pharmacy: '💊',
      other: '📍'
    }
    
    const icon = typeIcons[type] || categoryIcons[category] || '📍'
    
    // Create custom icon based on type
    const iconHtml = `
      <div style="
        background: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ">
        <span style="color: white; font-size: 16px;">${icon}</span>
      </div>
    `

    return L.divIcon({
      html: iconHtml,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16],
      className: 'custom-map-marker'
    })
  }

  const createPopupContent = (location: MapLocation) => {
    const typeIcons: { [key: string]: string } = {
      restaurant: '🍽️',
      hotel: '🏨',
      hospital: '🏥',
      school: '🏫',
      bank: '🏦',
      park: '🌳',
      shopping: '🛍️',
      gas_station: '⛽',
      government: '🏛️',
      landmark: '🗽',
      crypto: '₿',
      business: '🏢',
      entertainment: '🎭',
      transport: '🚌',
      pharmacy: '💊',
      other: '📍'
    }

    const categoryColors: { [key: string]: string } = {
      amenity: '#f97316',
      tourism: '#8b5cf6',
      healthcare: '#ef4444',
      education: '#3b82f6',
      finance: '#10b981',
      retail: '#ec4899',
      public: '#6b7280',
      recreation: '#22c55e',
      infrastructure: '#f59e0b'
    }

    const getPriceLevelDisplay = (level?: number) => {
      if (!level) return ''
      return '💰'.repeat(level) + '💰'.repeat(4 - level).replace(/💰/g, '○')
    }

    const getRatingDisplay = (rating?: number) => {
      if (!rating) return ''
      const fullStars = Math.floor(rating)
      const hasHalfStar = rating % 1 >= 0.5
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
      return '⭐'.repeat(fullStars) + (hasHalfStar ? '✨' : '') + '☆'.repeat(emptyStars)
    }

    return `
      <div style="font-family: system-ui, sans-serif; min-width: 220px; max-width: 300px;">
        <div style="margin-bottom: 8px;">
          <h3 style="margin: 0 0 4px 0; color: #1f2937; font-size: 16px; font-weight: 600;">
            ${typeIcons[location.type] || '📍'} ${location.name}
          </h3>
          <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 4px; flex-wrap: wrap;">
            <span style="
              background: ${location.verified ? '#10b981' : '#6b7280'};
              color: white;
              padding: 2px 6px;
              border-radius: 12px;
              font-size: 10px;
              font-weight: 600;
              text-transform: uppercase;
            ">
              ${location.verified ? 'Verified' : 'Unverified'}
            </span>
            <span style="
              background: ${categoryColors[location.category] || '#6b7280'};
              color: white;
              padding: 2px 6px;
              border-radius: 12px;
              font-size: 10px;
              font-weight: 600;
              text-transform: uppercase;
            ">
              ${location.category}
            </span>
            <span style="
              background: #f7931a;
              color: white;
              padding: 2px 6px;
              border-radius: 12px;
              font-size: 10px;
              font-weight: 600;
              text-transform: uppercase;
            ">
              ${location.type.replace('_', ' ')}
            </span>
          </div>
        </div>
        
        <p style="margin: 0 0 8px 0; color: #4b5563; font-size: 13px;">
          📍 ${location.address}
        </p>
        
        ${location.description ? `
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; font-style: italic;">
            ${location.description}
          </p>
        ` : ''}

        ${location.phone || location.hours ? `
          <div style="margin: 8px 0; padding: 8px; background: #f9fafb; border-radius: 6px;">
            ${location.phone ? `
              <div style="font-size: 12px; color: #374151; margin-bottom: 2px;">
                📞 ${location.phone}
              </div>
            ` : ''}
            ${location.hours ? `
              <div style="font-size: 12px; color: #374151;">
                🕒 ${location.hours}
              </div>
            ` : ''}
          </div>
        ` : ''}
        
        ${location.rating || location.priceLevel ? `
          <div style="margin: 8px 0; display: flex; align-items: center; gap: 8px;">
            ${location.rating ? `
              <div style="font-size: 12px;">
                ${getRatingDisplay(location.rating)} <span style="color: #6b7280;">(${location.rating})</span>
              </div>
            ` : ''}
            ${location.priceLevel ? `
              <div style="font-size: 12px;">
                ${getPriceLevelDisplay(location.priceLevel)}
              </div>
            ` : ''}
          </div>
        ` : ''}

        ${location.amenities && location.amenities.length > 0 ? `
          <div style="margin: 8px 0; padding: 8px; background: #f0f9ff; border-radius: 6px;">
            <div style="font-size: 11px; font-weight: 600; color: #374151; margin-bottom: 4px;">
              Amenities:
            </div>
            ${location.amenities.map(amenity => 
              `<span style="display: inline-block; background: #3b82f6; color: white; padding: 2px 6px; border-radius: 8px; font-size: 10px; margin: 1px 2px;">${amenity.replace('_', ' ')}</span>`
            ).join('')}
          </div>
        ` : ''}
        
        ${location.website ? `
          <a href="${location.website}" target="_blank" style="
            display: inline-block;
            background: #3b82f6;
            color: white;
            padding: 6px 12px;
            border-radius: 6px;
            text-decoration: none;
            font-size: 12px;
            font-weight: 500;
            margin-top: 8px;
          ">
            Visit Website →
          </a>
        ` : ''}
      </div>
    `
  }

  useEffect(() => {
    if (!mapRef.current) return

    // Initialize map with default center
    const map = L.map(mapRef.current, {
      preferCanvas: true,
      zoomControl: false
    }).setView([39.8283, -98.5795], 4) // Default center on USA

    // Add zoom control to top right
    L.control.zoom({
      position: 'topright'
    }).addTo(map)

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Bitcoin Maps',
      maxZoom: 19,
    }).addTo(map)

    // Alternative dark theme (uncomment if you prefer dark maps)
    /*
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a> | Bitcoin Maps',
      maxZoom: 19,
    }).addTo(map)
    */

    mapInstanceRef.current = map

    // Add event listener for manual re-centering
    const handleRecenter = (event: any) => {
      const { lat, lng } = event.detail
      map.setView([lat, lng], 12)
    }
    window.addEventListener('recenterMap', handleRecenter)

    // Try to get user's location and center map on it
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          // Center map on user's location with good zoom level
          map.setView([latitude, longitude], 12)
          
          // Add a marker for user's location
          const userIcon = L.divIcon({
            html: `
              <div style="
                background: #3b82f6;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 3px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                animation: pulse 2s infinite;
              ">
                <div style="
                  width: 8px;
                  height: 8px;
                  background: white;
                  border-radius: 50%;
                "></div>
              </div>
              <style>
                @keyframes pulse {
                  0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
                  70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
                  100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
                }
              </style>
            `,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
            className: 'user-location-marker'
          })
          
          L.marker([latitude, longitude], { icon: userIcon })
            .addTo(map)
            .bindPopup(`
              <div style="font-family: system-ui, sans-serif; text-align: center;">
                <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 14px; font-weight: 600;">
                  📍 Your Location
                </h3>
                <p style="margin: 0; color: #6b7280; font-size: 12px;">
                  Lat: ${latitude.toFixed(6)}<br>
                  Lng: ${longitude.toFixed(6)}
                </p>
              </div>
            `)
        },
        (error) => {
          console.log('Geolocation error:', error.message)
          // If geolocation fails, keep default center
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      )
    }

    return () => {
      window.removeEventListener('recenterMap', handleRecenter)
      map.remove()
      mapInstanceRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!mapInstanceRef.current) return

    // Clear existing markers
    markersRef.current.forEach(marker => {
      mapInstanceRef.current?.removeLayer(marker)
    })
    markersRef.current = []

    // Add new markers
    locations.forEach(location => {
      const marker = L.marker(
        [location.lat, location.lng],
        { 
          icon: getIconForType(location.type, location.category, location.verified),
          title: location.name
        }
      )
      
      marker.bindPopup(createPopupContent(location), {
        maxWidth: 300,
        className: 'bitcoin-popup'
      })
      
      marker.addTo(mapInstanceRef.current!)
      markersRef.current.push(marker)
    })

    // Fit map to show all markers if there are any
    if (locations.length > 0) {
      const group = new L.FeatureGroup(markersRef.current)
      mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1))
    }
  }, [locations])

  return (
    <>
      <div ref={mapRef} className="w-full h-full" />
      <style jsx global>{`
        .custom-map-marker {
          background: transparent !important;
          border: none !important;
        }
        
        .user-location-marker {
          background: transparent !important;
          border: none !important;
        }
        
        .bitcoin-popup .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        .bitcoin-popup .leaflet-popup-content {
          margin: 0;
          padding: 12px;
          line-height: 1.4;
        }
        
        .bitcoin-popup .leaflet-popup-tip {
          background: white;
        }
        
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2) !important;
        }
        
        .leaflet-control-zoom a {
          background: rgba(0, 0, 0, 0.8) !important;
          color: white !important;
          border: none !important;
          width: 40px !important;
          height: 40px !important;
          line-height: 40px !important;
          font-size: 18px !important;
          font-weight: bold !important;
        }
        
        .leaflet-control-zoom a:hover {
          background: rgba(247, 147, 26, 0.9) !important;
          color: black !important;
        }
        
        .leaflet-control-attribution {
          background: rgba(0, 0, 0, 0.7) !important;
          color: white !important;
        }
        
        .leaflet-control-attribution a {
          color: #f7931a !important;
        }
      `}</style>
    </>
  )
}