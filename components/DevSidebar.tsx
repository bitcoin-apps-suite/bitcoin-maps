'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { 
  ChevronLeft,
  ChevronRight,
  Zap,
  MapPin,
  Users,
  FileText,
  DollarSign,
  Briefcase,
  Terminal,
  Package,
  BookOpen,
  Github,
  GitPullRequest,
  Activity,
  History,
  CheckCircle,
  Store,
  Coins,
  Building2,
  Wrench,
  Search,
  Plus,
  Star,
  TrendingUp,
  Globe,
  Shield
} from 'lucide-react'
import './DevSidebar.css'

export default function DevSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed')
      return saved !== null ? saved === 'true' : true
    }
    return true
  })
  const [issueCount, setIssueCount] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('devSidebarCollapsed', isCollapsed.toString())
    }
  }, [isCollapsed])

  // Fetch GitHub issues count
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/bitcoin-corp/bitcoin-maps/issues?state=open')
        const data = await response.json()
        setIssueCount(Array.isArray(data) ? data.length : 0)
      } catch (error) {
        console.error('Error fetching issues:', error)
        setIssueCount(0)
      }
    }
    fetchIssues()
  }, [])

  const menuItems: Array<{
    path?: string
    icon?: any
    label?: string
    badge?: string
    divider?: boolean
    section?: string
    external?: boolean
  }> = [
    // Token & Core Features at top
    { path: '/token', icon: DollarSign, label: '$BMAPS Token', badge: 'NEW' },
    { path: '/grants', icon: Coins, label: 'Map Grants', badge: 'HOT' },
    { path: '/bounties', icon: Star, label: 'Location Bounties' },
    
    // Business Owners Section
    { divider: true },
    { section: 'BUSINESS OWNERS' },
    { path: '/business/register', icon: Store, label: 'Register Business' },
    { path: '/business/verify', icon: Shield, label: 'Verify Listing', badge: '12' },
    { path: '/business/analytics', icon: TrendingUp, label: 'Location Analytics' },
    { path: '/business/premium', icon: Building2, label: 'Premium Features' },
    
    // Map Contributors Section
    { divider: true },
    { section: 'CONTRIBUTORS' },
    { path: '/contribute/add', icon: Plus, label: 'Add Location' },
    { path: '/contribute/verify', icon: CheckCircle, label: 'Verify Locations', badge: '45' },
    { path: '/contribute/rewards', icon: Coins, label: 'Earn Rewards' },
    { path: '/leaderboard', icon: Users, label: 'Contributors', badge: '128' },
    
    // Developers Section
    { divider: true },
    { section: 'DEVELOPERS' },
    { path: '/developer/api', icon: Terminal, label: 'Maps API' },
    { path: '/contracts', icon: Briefcase, label: 'Dev Contracts', badge: issueCount > 0 ? String(issueCount) : '0' },
    { path: '/developer/widgets', icon: Package, label: 'Map Widgets' },
    { path: '/developer/integrations', icon: Wrench, label: 'Integrations' },
    
    // Resources
    { divider: true },
    { section: 'RESOURCES' },
    { path: '/docs', icon: BookOpen, label: 'Documentation' },
    { path: '/api', icon: Package, label: 'API Reference' },
    { path: 'https://github.com/bitcoin-corp/bitcoin-maps', icon: Github, label: 'GitHub Repository', external: true },
    { path: 'https://github.com/bitcoin-corp/bitcoin-maps/issues', icon: GitPullRequest, label: 'Issues', badge: issueCount > 0 ? String(issueCount) : '0', external: true },
    
    // System
    { divider: true },
    { path: '/changelog', icon: History, label: 'Changelog' },
    { path: '/status', icon: Activity, label: 'System Status', badge: 'OK' },
    { path: '/global-stats', icon: Globe, label: 'Global Stats' }
  ]

  const stats = {
    totalLocations: '2,847',
    pendingVerification: '156',
    contributors: '128',
    openBounties: issueCount || 12,
    countries: '67'
  }

  return (
    <div className={`dev-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="dev-sidebar-header">
        {!isCollapsed && (
          <div className="dev-sidebar-title">
            <Zap className="dev-sidebar-logo" />
            <span>Maps Hub</span>
          </div>
        )}
        <button 
          className="dev-sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="dev-sidebar-nav">
        {menuItems.map((item, index) => {
          if (item.divider) {
            return <div key={index} className="dev-sidebar-divider" />
          }

          if (item.section) {
            return !isCollapsed ? (
              <div key={index} className="dev-sidebar-section">
                {item.section}
              </div>
            ) : null
          }

          const Icon = item.icon
          const isActive = pathname === item.path

          if (item.external) {
            return (
              <a
                key={`${item.path}-${index}`}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`dev-sidebar-item ${isActive ? 'active' : ''}`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon size={20} />
                {!isCollapsed && (
                  <>
                    <span className="dev-sidebar-label">{item.label}</span>
                    {item.badge && <span className="dev-sidebar-badge">{item.badge}</span>}
                  </>
                )}
              </a>
            )
          }

          return (
            <a
              key={`${item.path}-${index}`}
              href={item.path || '/'}
              className={`dev-sidebar-item ${isActive ? 'active' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon size={20} />
              {!isCollapsed && (
                <>
                  <span className="dev-sidebar-label">{item.label}</span>
                  {item.badge && <span className="dev-sidebar-badge">{item.badge}</span>}
                </>
              )}
            </a>
          )
        })}
      </nav>

      {/* Stats section */}
      {!isCollapsed && (
        <div className="dev-sidebar-stats">
          <h4>Platform Stats</h4>
          <div className="dev-stat">
            <span className="dev-stat-label">Total Locations</span>
            <span className="dev-stat-value">{stats.totalLocations}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Pending Review</span>
            <span className="dev-stat-value">{stats.pendingVerification}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Contributors</span>
            <span className="dev-stat-value">{stats.contributors}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Open Bounties</span>
            <span className="dev-stat-value">{stats.openBounties}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Countries</span>
            <span className="dev-stat-value">{stats.countries}</span>
          </div>
        </div>
      )}

    </div>
  )
}