'use client'
import ProofOfConceptBar from '../components/ProofOfConceptBar'
import DevSidebar from '../components/DevSidebar'
import Dock from '../components/Dock'
import BitcoinMap from '../components/BitcoinMap'
import Taskbar from '../components/Taskbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Taskbar />
      <ProofOfConceptBar />
      <DevSidebar />
      <div className="transition-all duration-300 h-screen relative" style={{ marginLeft: '60px', marginTop: '62px', height: 'calc(100vh - 62px)', zIndex: 1 }}>
        <BitcoinMap />
      </div>
      <Dock />
    </div>
  )
}