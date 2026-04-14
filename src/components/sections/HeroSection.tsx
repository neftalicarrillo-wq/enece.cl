export function HeroSection() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <section className="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 40px 80px',
        maxWidth: 1200,
        margin: '0 auto',
        position: 'relative',
      }}>
        <p style={{
          fontSize: '0.65rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--orange)',
          marginBottom: 24,
          opacity: 0,
          animation: 'fadeUp 0.8s ease 0.2s forwards',
        }}>
          Gestión · IA · Desarrollo — enece.cl
        </p>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(4rem, 12vw, 10rem)',
          lineHeight: 0.92,
          letterSpacing: '0.02em',
          color: 'var(--cream)',
          marginBottom: 32,
          opacity: 0,
          animation: 'fadeUp 0.8s ease 0.35s forwards',
        }}>
          Soluciones que<br />
          <span style={{ color: 'var(--orange)', display: 'block' }}>piensan</span>
          y ejecutan
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          fontWeight: 300,
          color: 'var(--muted)',
          maxWidth: 520,
          lineHeight: 1.7,
          marginBottom: 48,
          opacity: 0,
          animation: 'fadeUp 0.8s ease 0.5s forwards',
        }}>
          Combino{' '}
          <strong style={{ color: 'var(--cream)', fontWeight: 400 }}>gestión de procesos</strong>,{' '}
          <strong style={{ color: 'var(--cream)', fontWeight: 400 }}>inteligencia artificial</strong> y{' '}
          <strong style={{ color: 'var(--cream)', fontWeight: 400 }}>desarrollo de aplicaciones</strong>{' '}
          para crear herramientas que realmente funcionan en tu negocio.
        </p>

        <div style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap' as const,
          opacity: 0,
          animation: 'fadeUp 0.8s ease 0.65s forwards',
        }}>
          <a href="#servicios" style={{
            background: 'var(--orange)',
            color: '#000',
            padding: '14px 32px',
            borderRadius: 4,
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
          }}>
            Ver servicios
          </a>
          <a href="#contacto" style={{
            border: '1px solid var(--border)',
            color: 'var(--cream)',
            padding: '14px 32px',
            borderRadius: 4,
            textDecoration: 'none',
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            background: 'var(--glass)',
            backdropFilter: 'blur(10px)',
          }}>
            Conversemos
          </a>
        </div>

        <div style={{
          position: 'absolute',
          bottom: 40,
          left: 40,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          opacity: 0,
          animation: 'fadeUp 0.8s ease 0.9s forwards',
        }}>
          <div style={{
            width: 40,
            height: 1,
            background: 'var(--muted)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <span style={{
              position: 'absolute',
              left: '-100%',
              top: 0,
              width: '100%',
              height: '100%',
              background: 'var(--orange)',
              animation: 'scanline 2s ease infinite',
            }} />
          </div>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: 'var(--muted)' }}>
            Scroll
          </span>
        </div>
      </section>
    </div>
  );
}
