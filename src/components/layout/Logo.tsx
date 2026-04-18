export function Logo() {
  return (
    <a
      href="/"
      aria-label="ENECE — inicio"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      {/* V1 logo mark: square border + blue center dot + green corner dot */}
      <div style={{
        width: 28,
        height: 28,
        border: '1.5px solid var(--accent)',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexShrink: 0,
      }}>
        <span style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--accent)',
          display: 'block',
        }} />
        <span style={{
          position: 'absolute',
          bottom: 4,
          left: 4,
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'var(--green)',
          display: 'block',
        }} />
      </div>

      {/* Wordmark */}
      <span style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '0.95rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        color: 'var(--cream)',
        lineHeight: 1,
      }}>
        ENECE
      </span>
      <span style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '0.6rem',
        color: 'var(--muted)',
        letterSpacing: '0.06em',
        marginLeft: 2,
      }}>
        v2.1
      </span>
    </a>
  );
}
