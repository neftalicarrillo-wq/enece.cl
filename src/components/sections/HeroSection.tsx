'use client';

export function HeroSection() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 48px 60px',
        maxWidth: 1280,
        margin: '0 auto',
        gap: 60,
      }} className="hero-layout">

        {/* Left column */}
        <div style={{ flex: 1 }}>
          {/* Status chip */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(34,197,94,0.06)',
            border: '1px solid rgba(34,197,94,0.2)',
            padding: '6px 14px',
            borderRadius: 4,
            marginBottom: 28,
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--green)',
              display: 'block',
              animation: 'pulse-dot 2s ease infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '0.65rem',
              color: 'var(--green2)',
              letterSpacing: '0.12em',
            }}>
              disponible para proyectos · 2026
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--cream)',
            marginBottom: 24,
            opacity: 0,
            animation: 'fadeUp 0.8s ease 0.15s forwards',
          }}>
            Sistemas que<br />
            <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>piensan</em><br />
            y ejecutan.
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1rem',
            fontWeight: 300,
            color: 'var(--muted)',
            maxWidth: 480,
            lineHeight: 1.8,
            marginBottom: 44,
            opacity: 0,
            animation: 'fadeUp 0.8s ease 0.3s forwards',
          }}>
            Combino{' '}
            <strong style={{ color: 'var(--cream)', fontWeight: 400 }}>gestión de procesos</strong>,{' '}
            <strong style={{ color: 'var(--cream)', fontWeight: 400 }}>inteligencia artificial</strong> y{' '}
            <strong style={{ color: 'var(--cream)', fontWeight: 400 }}>desarrollo</strong>{' '}
            para construir herramientas que realmente funcionan en tu negocio.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            marginBottom: 56,
            opacity: 0,
            animation: 'fadeUp 0.8s ease 0.45s forwards',
          }}>
            <a
              href="#servicios"
              style={{
                background: 'var(--accent)',
                color: '#000',
                padding: '12px 28px',
                borderRadius: 4,
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                transition: 'background 0.2s, transform 0.15s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent2)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              Ver servicios
            </a>
            <a
              href="#contacto"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--muted)',
                padding: '12px 28px',
                borderRadius: 4,
                textDecoration: 'none',
                fontSize: '0.82rem',
                letterSpacing: '0.04em',
                background: 'var(--glass)',
                transition: 'border-color 0.2s, color 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(59,130,246,0.4)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--cream)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)';
              }}
            >
              Conversemos
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            gap: 24,
            alignItems: 'center',
            opacity: 0,
            animation: 'fadeUp 0.8s ease 0.6s forwards',
          }}>
            {[
              { num: 'IA',   label: 'Stack 2026',      color: 'var(--accent)' },
              null,
              { num: '+5',   label: 'Herramientas',    color: 'var(--green)' },
              null,
              { num: 'CL',   label: 'Chile',           color: 'var(--cream)' },
            ].map((s, i) =>
              s === null ? (
                <div key={i} style={{ width: 1, height: 36, background: 'var(--border)' }} />
              ) : (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: s.color,
                    lineHeight: 1,
                  }}>{s.num}</span>
                  <span style={{
                    fontSize: '0.65rem',
                    color: 'var(--muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>{s.label}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right column — Orbital rings */}
        <div className="hero-orbital" style={{ flexShrink: 0 }}>
          <div style={{
            width: 380,
            height: 380,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* Orbit 1 — outer */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '1px solid rgba(59,130,246,0.2)',
              animation: 'spin 20s linear infinite',
            }}>
              <span style={{
                position: 'absolute',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--accent)',
                top: -4,
                left: '50%',
                transform: 'translateX(-50%)',
              }} />
            </div>

            {/* Orbit 2 — mid (reverse) */}
            <div style={{
              position: 'absolute',
              width: '72%',
              height: '72%',
              borderRadius: '50%',
              border: '1px solid rgba(59,130,246,0.2)',
              animation: 'spin 14s linear infinite reverse',
            }}>
              <span style={{
                position: 'absolute',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--green)',
                top: -4,
                left: '50%',
                transform: 'translateX(-50%)',
              }} />
            </div>

            {/* Orbit 3 — inner */}
            <div style={{
              position: 'absolute',
              width: '46%',
              height: '46%',
              borderRadius: '50%',
              border: '1px solid rgba(59,130,246,0.2)',
              animation: 'spin 8s linear infinite',
            }}>
              <span style={{
                position: 'absolute',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#F59E0B',
                top: -4,
                left: '50%',
                transform: 'translateX(-50%)',
              }} />
            </div>

            {/* Center */}
            <div style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono), monospace',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.1em',
              color: 'var(--accent)',
              position: 'relative',
              zIndex: 2,
            }}>
              ENECE
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-layout { flex-direction: row; }
        .hero-orbital { display: flex; }
        @media (max-width: 900px) {
          .hero-layout { flex-direction: column; padding: 100px 20px 60px !important; gap: 40px !important; }
          .hero-orbital { display: none; }
        }
      `}</style>
    </div>
  );
}
