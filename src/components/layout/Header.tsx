'use client';
import { Logo } from './Logo';

export function Header() {
  return (
    <nav aria-label="Navegación principal" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '20px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      background: 'rgba(10,11,9,0.7)',
      borderBottom: '1px solid var(--border)',
    }}>
      <Logo />
      <ul style={{ display: 'flex', gap: 32, listStyle: 'none' }}>
        {[
          { href: '#servicios', label: 'Servicios' },
          { href: '#sobre-mi', label: 'Sobre mí' },
          { href: '#ia-noticias', label: 'IA & Gestión' },
        ].map(({ href, label }) => (
          <li key={href}>
            <a href={href} style={{
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
            }}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contacto" style={{
            background: 'var(--orange)',
            color: '#000',
            padding: '8px 20px',
            borderRadius: 4,
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
          }}>
            Conversemos
          </a>
        </li>
      </ul>
    </nav>
  );
}
