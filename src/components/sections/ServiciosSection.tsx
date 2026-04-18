'use client';

const SERVICIOS = [
  {
    id: 'gestion',
    num: '01',
    title: 'Gestión con IA',
    desc: 'Automatización de procesos, análisis de datos y flujos de trabajo inteligentes. Integración de IA en la operación diaria sin fricciones.',
    tags: ['procesos', 'automatización', 'IA aplicada'],
  },
  {
    id: 'dev',
    num: '02',
    title: 'Desarrollo de Apps',
    desc: 'Aplicaciones web y herramientas digitales a medida. MVPs rápidos o sistemas completos, con tecnologías modernas y enfoque práctico.',
    tags: ['web apps', 'APIs', 'full stack'],
  },
  {
    id: 'consultoria',
    num: '03',
    title: 'Consultoría Digital',
    desc: 'Diagnóstico y hoja de ruta para la transformación digital. Estrategia clara, herramientas adecuadas, implementación real.',
    tags: ['estrategia', 'diagnóstico', 'roadmap'],
  },
  {
    id: 'ia',
    num: '04',
    title: 'Integración IA',
    desc: 'Claude, GPT, Gemini y más, integrados en tus sistemas existentes. Agentes, automatización y LLMs trabajando para tu negocio.',
    tags: ['LLMs', 'agentes', 'API'],
  },
];

export function ServiciosSection() {
  return (
    <section id="servicios">
      <span className="section-label">servicios</span>
      <h2 className="section-title">Lo que construyo</h2>

      <div className="services-grid">
        {SERVICIOS.map(s => (
          <div key={s.id} className="service-card">
            {/* Number with line */}
            <div style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '0.65rem',
              color: 'var(--accent)',
              letterSpacing: '0.2em',
              marginBottom: 20,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              {s.num}
              <span style={{ flex: 1, height: 1, background: 'var(--border)', display: 'block' }} />
            </div>

            <div style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'var(--cream)',
              marginBottom: 12,
              letterSpacing: '-0.01em',
            }}>
              {s.title}
            </div>

            <p style={{
              fontSize: '0.88rem',
              color: 'var(--muted)',
              lineHeight: 1.75,
              marginBottom: 24,
              flex: 1,
            }}>
              {s.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {s.tags.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
        }
        .service-card {
          background: var(--bg);
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }
        .service-card:hover {
          background: var(--bg2);
        }
        .service-card:hover::before {
          transform: scaleX(1);
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
