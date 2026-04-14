export function Logo() {
  return (
    <a href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
      <svg
        viewBox="0 0 60 60"
        fill="none"
        style={{ width: 42, height: 42, filter: 'drop-shadow(0 0 6px rgba(255,107,0,0.35))' }}
      >
        <path d="M36 6 Q56 30 36 54" stroke="#FF6B00" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
        <circle cx="20" cy="30" r="6.5" fill="#FF6B00"/>
        <circle cx="20" cy="30" r="14" stroke="#FF6B00" strokeWidth="1.6" fill="none" opacity="0.55"/>
        <circle cx="20" cy="30" r="22" stroke="#FF6B00" strokeWidth="1.0" fill="none" opacity="0.28"/>
      </svg>
      <span style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: '1.6rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        color: 'var(--cream)',
      }}>
        EN<span style={{ color: 'var(--orange)' }}>E</span>CE
      </span>
    </a>
  );
}
