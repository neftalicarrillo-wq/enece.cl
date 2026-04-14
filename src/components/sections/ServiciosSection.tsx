'use client';

const SERVICIOS = [
  {
    num: '01',
    title: 'Gestión con IA',
    desc: 'Automatización de procesos, análisis de datos y flujos de trabajo inteligentes. Integración de IA en la operación diaria de tu empresa sin fricciones.',
    tags: ['Procesos', 'Automatización', 'IA Aplicada'],
  },
  {
    num: '02',
    title: 'Desarrollo de Apps',
    desc: 'Aplicaciones web y herramientas digitales a medida. Desde MVPs rápidos hasta sistemas completos, construidos con tecnologías modernas y enfoque práctico.',
    tags: ['Web Apps', 'APIs', 'Full Stack'],
  },
  {
    num: '03',
    title: 'Consultoría Digital',
    desc: 'Diagnóstico y hoja de ruta para la transformación digital de tu negocio. Estrategia clara, herramientas adecuadas, implementación real.',
    tags: ['Estrategia', 'Diagnóstico', 'Roadmap'],
  },
  {
    num: '04',
    title: 'Integración IA',
    desc: 'Incorporación de modelos de lenguaje y agentes de IA en tus sistemas existentes. Claude, GPT, Gemini y más, trabajando para tu negocio.',
    tags: ['LLMs', 'Agentes', 'API'],
  },
];

export function ServiciosSection() {
  return (
    <section id="servicios">
      <span className="section-label">Lo que hago</span>
      <h2 className="section-title">Servicios</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 16,
      }}>
        {SERVICIOS.map((s) => (
          <div key={s.num} style={{
            background: 'var(--glass)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: '36px 28px',
            backdropFilter: 'blur(10px)',
            transition: 'border-color 0.3s, transform 0.3s, background 0.3s',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,107,0,0.4)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '3rem',
              color: 'rgba(255,107,0,0.15)',
              lineHeight: 1,
              marginBottom: 20,
            }}>
              {s.num}
            </div>
            <div style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: '1.3rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--cream)',
              marginBottom: 12,
              textTransform: 'uppercase' as const,
            }}>
              {s.title}
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>
              {s.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6, marginTop: 20 }}>
              {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
