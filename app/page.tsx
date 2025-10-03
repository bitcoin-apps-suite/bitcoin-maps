export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f7931a 0%, #ff9500 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
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
          ₿ Bitcoin Maps
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
          marginBottom: '40px',
          opacity: 0.95,
          lineHeight: 1.6
        }}>
          Discover Bitcoin-accepting businesses, ATMs, and services around the world
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
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>🏪 Businesses</h3>
            <p style={{ opacity: 0.9 }}>Find restaurants, shops, and services that accept Bitcoin payments</p>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '30px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>🏧 ATMs</h3>
            <p style={{ opacity: 0.9 }}>Locate Bitcoin ATMs for easy buying and selling</p>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '30px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>🌍 Global</h3>
            <p style={{ opacity: 0.9 }}>Explore Bitcoin adoption worldwide</p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
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
          }}>
            Explore Map
          </button>

          <button style={{
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
          }}>
            Add Location
          </button>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        fontSize: '0.9rem',
        opacity: 0.8
      }}>
        Building the future of Bitcoin adoption, one location at a time
      </div>
    </div>
  )
}