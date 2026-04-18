'use client';

const NEWS = [
  {
    date: 'abr 2026',
    category: 'gestión',
    title: 'Agentes autónomos en la gestión de procesos empresariales',
    excerpt: 'Los agentes de IA transforman cómo las empresas automatizan decisiones repetitivas, liberando equipos para trabajo de mayor valor.',
    href: '#',
  },
  {
    date: 'mar 2026',
    category: 'desarrollo',
    title: 'Google Antigravity redefine el desarrollo de software con IA',
    excerpt: 'El nuevo IDE agéntico permite que múltiples agentes trabajen en paralelo, multiplicando la productividad de equipos pequeños.',
    href: '#',
  },
  {
    date: 'mar 2026',
    category: 'IA & trabajo',
    title: 'El perfil del desarrollador en 2026: estratega más que programador',
    excerpt: 'La IA asume la implementación técnica. El diferencial humano es la visión de negocio y la capacidad de orquestar agentes.',
    href: '#',
  },
];

export function NewsSection() {
  return (
    <section id="ia-noticias">
      <span className="section-label">blog</span>
      <h2 className="section-title">IA para la Gestión</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 16,
      }}>
        {NEWS.map((n, i) => (
          <article
            key={i}
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'border-color 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.35)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            {/* Top row: date + tag */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 16,
            }}>
              <span style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '0.6rem',
                color: 'var(--muted)',
                letterSpacing: '0.1em',
              }}>
                {n.date}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '0.55rem',
                color: 'var(--accent)',
                border: '1px solid rgba(59,130,246,0.2)',
                padding: '2px 7px',
                borderRadius: 2,
                letterSpacing: '0.06em',
              }}>
                {n.category}
              </span>
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--cream)',
              lineHeight: 1.4,
              marginBottom: 10,
            }}>
              {n.title}
            </h3>

            {/* Excerpt */}
            <p style={{
              fontSize: '0.82rem',
              color: 'var(--muted)',
              lineHeight: 1.65,
              flex: 1,
            }}>
              {n.excerpt}
            </p>

            {/* CTA */}
            <a
              href={n.href}
              aria-label={`Leer más: ${n.title}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 20,
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '0.65rem',
                color: 'var(--accent)',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                transition: 'gap 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
              onMouseLeave={e => (e.currentTarget.style.gap = '6px')}
            >
              leer más →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
