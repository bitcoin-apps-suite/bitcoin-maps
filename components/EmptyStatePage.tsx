'use client'
import ProofOfConceptBar from './ProofOfConceptBar'
import DevSidebar from './DevSidebar'
import Dock from './Dock'
import Taskbar from './Taskbar'

/** Honest placeholder for pages that need real data we do not have yet (no invented numbers). */
export default function EmptyStatePage({ title, message }: { title: string; message: string }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Taskbar />
      <ProofOfConceptBar />
      <DevSidebar />
      <main style={{ marginLeft: '60px', paddingTop: '120px', paddingBottom: '120px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '12px' }}>{title}</h1>
        <p style={{ color: '#9ca3af', maxWidth: 520, margin: '0 auto' }}>{message}</p>
      </main>
      <Dock />
    </div>
  )
}
