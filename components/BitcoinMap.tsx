'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { MapPin, Plus, Search } from 'lucide-react'

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

  // Comprehensive sample locations data for all map types
  useEffect(() => {
    const sampleLocations: MapLocation[] = [
      // Restaurants & Food
      {
        id: '1',
        name: 'Golden Gate Diner',
        address: '123 Mission Street, San Francisco, CA',
        lat: 37.7749,
        lng: -122.4194,
        type: 'restaurant',
        category: 'amenity',
        verified: true,
        description: 'Classic American diner with panoramic city views',
        website: 'https://goldengatediner.com',
        phone: '(415) 555-0123',
        hours: '6:00 AM - 11:00 PM',
        amenities: ['wifi', 'parking', 'outdoor_seating'],
        rating: 4.2,
        priceLevel: 2
      },
      // Hotels & Lodging
      {
        id: '2',
        name: 'Austin Tech Hotel',
        address: '456 Congress Avenue, Austin, TX',
        lat: 30.2672,
        lng: -97.7431,
        type: 'hotel',
        category: 'tourism',
        verified: true,
        description: 'Modern hotel in downtown Austin with conference facilities',
        website: 'https://austintechhotel.com',
        phone: '(512) 555-0456',
        hours: '24/7',
        amenities: ['wifi', 'pool', 'gym', 'business_center', 'restaurant'],
        rating: 4.5,
        priceLevel: 3
      },
      // Healthcare
      {
        id: '3',
        name: 'Central Medical Center',
        address: '789 Broadway, New York, NY',
        lat: 40.7128,
        lng: -74.0060,
        type: 'hospital',
        category: 'healthcare',
        verified: true,
        description: 'Full-service medical center with emergency care',
        phone: '(212) 555-0789',
        hours: '24/7 Emergency',
        amenities: ['emergency', 'parking', 'pharmacy']
      },
      // Education
      {
        id: '4',
        name: 'Miami International School',
        address: '321 Ocean Drive, Miami, FL',
        lat: 25.7617,
        lng: -80.1918,
        type: 'school',
        category: 'education',
        verified: true,
        description: 'International school with diverse curriculum',
        website: 'https://miamiintlschool.edu',
        phone: '(305) 555-0321',
        hours: '7:00 AM - 6:00 PM',
        amenities: ['parking', 'playground', 'library']
      },
      // Banks & Finance
      {
        id: '5',
        name: 'Seattle Community Bank',
        address: '654 Pine Street, Seattle, WA',
        lat: 47.6062,
        lng: -122.3321,
        type: 'bank',
        category: 'finance',
        verified: true,
        description: 'Local community bank with personal service',
        website: 'https://seattlecommunitybank.com',
        phone: '(206) 555-0654',
        hours: '9:00 AM - 5:00 PM',
        amenities: ['atm', 'parking', 'drive_through']
      },
      // Parks & Recreation
      {
        id: '6',
        name: 'Central Park',
        address: 'Central Park West, New York, NY',
        lat: 40.7829,
        lng: -73.9654,
        type: 'park',
        category: 'recreation',
        verified: true,
        description: 'Iconic urban park with lakes, trails, and recreational facilities',
        hours: '6:00 AM - 1:00 AM',
        amenities: ['trails', 'playground', 'lake', 'zoo', 'museum'],
        rating: 4.8
      },
      // Shopping
      {
        id: '7',
        name: 'Tech Valley Mall',
        address: '987 Innovation Blvd, San Jose, CA',
        lat: 37.3382,
        lng: -121.8863,
        type: 'shopping',
        category: 'retail',
        verified: true,
        description: 'Large shopping center with 200+ stores and restaurants',
        website: 'https://techvalleymall.com',
        phone: '(408) 555-0987',
        hours: '10:00 AM - 10:00 PM',
        amenities: ['parking', 'food_court', 'wifi', 'family_restroom'],
        rating: 4.1
      },
      // Gas Stations
      {
        id: '8',
        name: 'Highway 101 Gas',
        address: '111 Highway 101, Los Angeles, CA',
        lat: 34.0522,
        lng: -118.2437,
        type: 'gas_station',
        category: 'infrastructure',
        verified: true,
        description: '24-hour gas station with convenience store',
        phone: '(323) 555-0111',
        hours: '24/7',
        amenities: ['convenience_store', 'car_wash', 'atm', 'restrooms']
      },
      // Government
      {
        id: '9',
        name: 'City Hall',
        address: '500 Government Plaza, Denver, CO',
        lat: 39.7392,
        lng: -104.9903,
        type: 'government',
        category: 'public',
        verified: true,
        description: 'Municipal government offices and public services',
        website: 'https://denvergov.org',
        phone: '(303) 555-0500',
        hours: '8:00 AM - 5:00 PM',
        amenities: ['parking', 'public_wifi', 'accessibility']
      },
      // Landmarks
      {
        id: '10',
        name: 'Golden Gate Bridge',
        address: 'Golden Gate Bridge, San Francisco, CA',
        lat: 37.8199,
        lng: -122.4783,
        type: 'landmark',
        category: 'tourism',
        verified: true,
        description: 'Iconic suspension bridge and San Francisco landmark',
        website: 'https://goldengatebridge.org',
        hours: 'Always visible',
        amenities: ['parking', 'visitor_center', 'views'],
        rating: 4.9
      }
    ]
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
            className="w-full pl-10 pr-4 py-2 bg-black/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-bitcoin-orange"
          />
        </div>
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 bg-black/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white focus:outline-none focus:border-bitcoin-orange text-sm"
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
          className="px-3 py-2 bg-black/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white focus:outline-none focus:border-bitcoin-orange text-sm"
        >
          {locationTypes.map(type => (
            <option key={type.value} value={type.value} className="bg-gray-800">
              {type.label}
            </option>
          ))}
        </select>

        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-bitcoin-orange hover:bg-orange-600 text-black font-medium rounded-lg transition-colors flex items-center gap-2"
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
          <MapPin className="w-5 h-5 text-bitcoin-orange" />
          Global Map Data
        </h3>
        <div className="space-y-1 text-sm">
          <div>Total Locations: <span className="text-bitcoin-orange font-medium">{locations.length}</span></div>
          <div>Showing: <span className="text-bitcoin-orange font-medium">{filteredLocations.length}</span></div>
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
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-bitcoin-orange"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-bitcoin-orange"
              />
              <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-bitcoin-orange">
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
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-bitcoin-orange resize-none"
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
                className="flex-1 px-4 py-2 bg-bitcoin-orange hover:bg-orange-600 text-black font-medium rounded transition-colors"
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