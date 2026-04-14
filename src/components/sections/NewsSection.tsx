'use client';

const NEWS = [
  {
    date: 'Abril 2026',
    title: 'Agentes autónomos en la gestión de procesos empresariales',
    excerpt: 'Los agentes de IA están transformando cómo las empresas automatizan decisiones repetitivas, liberando equipos para trabajo de mayor valor.',
    category: 'Gestión',
  },
  {
    date: 'Marzo 2026',
    title: 'Google Antigravity redefine el desarrollo de software con IA',
    excerpt: 'El nuevo IDE agéntico de Google permite que múltiples agentes trabajen en paralelo, multiplicando la productividad de equipos pequeños.',
    category: 'Desarrollo',
  },
  {
    date: 'Marzo 2026',
    title: 'El perfil del desarrollador en 2026: estratega más que programador',
    excerpt: 'La IA asume la implementación técnica. El diferencial humano es ahora la visión de negocio, el criterio y la capacidad de orquestar agentes.',
    category: 'IA & Trabajo',
  },
];

export function NewsSection() {
  return (
    <section id="ia-noticias">
      <span className="section-label">Actualidad</span>
      <h2 className="section-title">IA para la Gestión</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 16,
      }}>
        {NEWS.map((n, i) => (
          <div key={i} style={{
            background: 'var(--glass)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '28px 24px',
            backdropFilter: 'blur(10px)',
            cursor: 'pointer',
            transition: 'border-color 0.3s, transform 0.3s',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,107,0,0.35)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
            }}
          >
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--orange)', marginBottom: 12, opacity: 0.7 }}>
              {n.date}
            </div>
            <div style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--cream)',
              lineHeight: 1.4,
              marginBottom: 10,
              letterSpacing: '0.04em',
            }}>
              {n.title}
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65 }}>
              {n.excerpt}
            </p>
            <span style={{
              display: 'inline-block',
              marginTop: 16,
              fontSize: '0.58rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase' as const,
              color: 'var(--orange)',
              border: '1px solid rgba(255,107,0,0.2)',
              padding: '2px 8px',
              borderRadius: 2,
            }}>
              {n.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
