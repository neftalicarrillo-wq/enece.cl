export function Logo() {
  return (
    <a
      href="/"
      aria-label="ENECE — inicio"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        textDecoration: 'none',
      }}
    >
      {/* Símbolo N oficial */}
      <svg
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: 38,
          height: 38,
          filter: 'drop-shadow(0 0 6px rgba(255,107,0,0.4))',
          flexShrink: 0,
        }}
      >
        {/* N trazos */}
        <line x1="14" y1="1"  x2="14" y2="61" stroke="#FF6B00" strokeWidth="7" strokeLinecap="round"/>
        <line x1="48" y1="1"  x2="48" y2="61" stroke="#FF6B00" strokeWidth="7" strokeLinecap="round"/>
        <line x1="14" y1="1"  x2="48" y2="61" stroke="#FF6B00" strokeWidth="7" strokeLinecap="round"/>
        {/* Órbitas */}
        <circle cx="31" cy="31" r="30" stroke="#FF6B00" strokeWidth="1.8" fill="none" opacity="0.55"/>
        <circle cx="31" cy="31" r="18" stroke="#FF6B00" strokeWidth="1.2" fill="none" opacity="0.35" strokeDasharray="4 5"/>
        {/* Líneas irradiantes */}
        <line x1="31" y1="31" x2="31" y2="1"  stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
        <line x1="31" y1="31" x2="31" y2="61" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
        <line x1="31" y1="31" x2="48" y2="31" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
        {/* Nodo central hueco */}
        <circle cx="31" cy="31" r="7" fill="#0a0b09"/>
        <circle cx="31" cy="31" r="7" stroke="#FF6B00" strokeWidth="2.5" fill="none"/>
        {/* Nodos satélite */}
        <circle cx="31" cy="1"  r="5.5" fill="#FF6B00"/>
        <circle cx="31" cy="61" r="5.5" fill="#FF6B00"/>
        <circle cx="48" cy="31" r="5.5" fill="#FF6B00"/>
      </svg>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: '1.6rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          color: 'var(--cream)',
          lineHeight: 1,
        }}
      >
        EN<span style={{ color: 'var(--orange)' }}>E</span>CE
      </span>
    </a>
  );
}
