'use client';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';

const NAV_LINKS = [
  { href: '#servicios',   label: './servicios' },
  { href: '#sobre-mi',    label: './about' },
  { href: '#ia-noticias', label: './blog' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        aria-label="Navegación principal"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '0 48px',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled
            ? 'rgba(1,1,8,0.95)'
            : 'rgba(1,1,8,0.85)',
          borderBottom: '1px solid var(--border)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          transition: 'background 0.3s',
        }}
      >
        <Logo />

        {/* Nav desktop — monospace links */}
        <ul style={{
          display: 'flex',
          gap: 28,
          listStyle: 'none',
          alignItems: 'center',
        }} className="nav-desktop">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  fontSize: '0.78rem',
                  letterSpacing: '0.06em',
                  fontFamily: 'var(--font-mono), monospace',
                  padding: '6px 0',
                  display: 'inline-block',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              style={{
                background: 'transparent',
                color: 'var(--accent)',
                border: '1px solid var(--accent)',
                padding: '8px 20px',
                borderRadius: 4,
                textDecoration: 'none',
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                fontWeight: 500,
                transition: 'background 0.2s, color 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--accent)';
              }}
            >
              contactar →
            </a>
          </li>
        </ul>

        {/* Hamburger — mobile */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: 'var(--cream)',
            borderRadius: 4,
            transition: 'color 0.2s',
          }}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(1,1,8,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            style={{
              color: 'var(--cream)',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 'clamp(1.2rem, 6vw, 1.8rem)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '12px 24px',
              borderRadius: 4,
              transition: 'color 0.2s, background 0.2s',
              textAlign: 'center',
              width: '100%',
              maxWidth: 320,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.background = 'var(--glass)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--cream)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={closeMenu}
          style={{
            background: 'transparent',
            color: 'var(--accent)',
            border: '1px solid var(--accent)',
            padding: '12px 36px',
            borderRadius: 4,
            textDecoration: 'none',
            fontFamily: 'var(--font-mono), monospace',
            fontWeight: 700,
            fontSize: '0.82rem',
            letterSpacing: '0.08em',
            marginTop: 16,
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = '#000';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--accent)';
          }}
        >
          contactar →
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop   { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  );
}
