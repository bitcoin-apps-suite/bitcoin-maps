'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { MapPin, Plus, Search, Crosshair } from 'lucide-react'

// Dynamically import the Map component to avoid SSR issues
const Map = dynamic(() => import('./Map'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-gray-900 rounded-lg">
      <div className="text-white">Loading Map...</div>
    </div>
  )
})

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

export default function BitcoinMap() {
  const [locations, setLocations] = useState<MapLocation[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showAddForm, setShowAddForm] = useState(false)

  // No sample places: the map starts empty until real places are published.
  useEffect(() => {
    const sampleLocations: MapLocation[] = []
    setLocations(sampleLocations)
  }, [])

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || location.type === selectedType
    const matchesCategory = selectedCategory === 'all' || location.category === selectedCategory
    return matchesSearch && matchesType && matchesCategory
  })

  const locationTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'restaurant', label: 'Restaurants' },
    { value: 'hotel', label: 'Hotels' },
    { value: 'hospital', label: 'Hospitals' },
    { value: 'school', label: 'Schools' },
    { value: 'bank', label: 'Banks' },
    { value: 'park', label: 'Parks' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'gas_station', label: 'Gas Stations' },
    { value: 'government', label: 'Government' },
    { value: 'landmark', label: 'Landmarks' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'transport', label: 'Transportation' },
    { value: 'pharmacy', label: 'Pharmacy' },
    { value: 'crypto', label: 'Crypto/Bitcoin' },
    { value: 'other', label: 'Other' }
  ]

  const locationCategories = [
    { value: 'all', label: 'All Categories' },
    { value: 'amenity', label: 'Amenities' },
    { value: 'tourism', label: 'Tourism' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'finance', label: 'Finance' },
    { value: 'retail', label: 'Retail' },
    { value: 'public', label: 'Public Services' },
    { value: 'recreation', label: 'Recreation' },
    { value: 'infrastructure', label: 'Infrastructure' }
  ]

  return (
    <div className="h-screen w-full bg-gray-900 text-white relative">
      {/* Search and Filter Controls */}
      <div className="absolute top-4 left-4 right-4 z-50 flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search all locations, businesses, landmarks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-black/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
          />
        </div>
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 bg-black/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary text-sm"
        >
          {locationCategories.map(category => (
            <option key={category.value} value={category.value} className="bg-gray-800">
              {category.label}
            </option>
          ))}
        </select>
        
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-3 py-2 bg-black/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary text-sm"
        >
          {locationTypes.map(type => (
            <option key={type.value} value={type.value} className="bg-gray-800">
              {type.label}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const { latitude, longitude } = position.coords
                  // Re-center map on user's location
                  const event = new CustomEvent('recenterMap', {
                    detail: { lat: latitude, lng: longitude }
                  })
                  window.dispatchEvent(event)
                },
                (error) => {
                  console.log('Geolocation error:', error.message)
                }
              )
            }
          }}
          className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
        >
          <Crosshair className="w-4 h-4" />
        </button>

        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-primary hover:bg-primary text-black font-medium rounded-lg transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Location
        </button>
      </div>

      {/* Map Component */}
      <div className="h-full w-full">
        <Map locations={filteredLocations} />
      </div>

      {/* Location Stats */}
      <div className="absolute bottom-20 left-4 bg-black/50 backdrop-blur-sm border border-gray-600 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Global Map Data
        </h3>
        <div className="space-y-1 text-sm">
          <div>Total Locations: <span className="text-primary font-medium">{locations.length}</span></div>
          <div>Showing: <span className="text-primary font-medium">{filteredLocations.length}</span></div>
          <div>Verified: <span className="text-green-400 font-medium">{locations.filter(l => l.verified).length}</span></div>
          <div>Categories: <span className="text-blue-400 font-medium">{new Set(locations.map(l => l.category)).size}</span></div>
        </div>
      </div>

      {/* Add Location Modal */}
      {showAddForm && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Contribute Location Data</h2>
            <p className="text-gray-400 mb-4">Add premium location data to earn $BMAPS tokens!</p>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Business name"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-primary">
                <option value="">Select type</option>
                <option value="merchant">Merchant</option>
                <option value="restaurant">Restaurant</option>
                <option value="cafe">Cafe</option>
                <option value="shop">Shop</option>
                <option value="atm">ATM</option>
                <option value="exchange">Exchange</option>
              </select>
              <textarea
                placeholder="Description (optional)"
                rows={3}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-primary resize-none"
              />
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // TODO: Implement add location functionality
                  setShowAddForm(false)
                }}
                className="flex-1 px-4 py-2 bg-primary hover:bg-primary text-black font-medium rounded transition-colors"
              >
                Contribute Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}