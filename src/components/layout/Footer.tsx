export function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid var(--border)',
      padding: '32px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
      maxWidth: 1280,
      margin: '0 auto',
    }}>

      {/* Logo mark + wordmark */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 24,
          height: 24,
          border: '1.5px solid var(--accent)',
          borderRadius: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          flexShrink: 0,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'block' }} />
          <span style={{
            position: 'absolute',
            bottom: 3, left: 3,
            width: 3, height: 3,
            borderRadius: '50%',
            background: 'var(--green)',
            display: 'block',
          }} />
        </div>
        <span style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '0.9rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          color: 'var(--cream)',
        }}>
          ENECE
        </span>
      </div>

      {/* Copyright */}
      <div style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '0.62rem',
        color: 'var(--muted)',
        letterSpacing: '0.06em',
      }}>
        © {new Date().getFullYear()} ENECE · enece.cl · Neftali Carrillo
      </div>

      {/* Footer links */}
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        {['./gestión', './ia', './desarrollo'].map(l => (
          <a
            key={l}
            href="#"
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '0.62rem',
              color: 'var(--muted)',
              textDecoration: 'none',
              letterSpacing: '0.06em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {l}
          </a>
        ))}
      </div>

    </footer>
  );
}
