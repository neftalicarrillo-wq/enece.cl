export function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid var(--border)',
      padding: '40px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap' as const,
      gap: 16,
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '1rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--cream)' }}>
        EN<span style={{ color: 'var(--orange)' }}>E</span>CE
      </div>
      <div style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
        © {new Date().getFullYear()} ENECE
      </div>
      <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: 'var(--muted)', opacity: 0.5 }}>
        Gestión · IA · Desarrollo
      </div>
    </footer>
  );
}
