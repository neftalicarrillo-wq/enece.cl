const STATS = [
  { num: 'IA', label: 'Stack Moderno 2026' },
  { num: '+5', label: 'Herramientas Agénticas' },
  { num: 'CL', label: 'Base en Chile' },
  { num: '360°', label: 'Gestión + Tech' },
];

export function AboutSection() {
  return (
    <section id="sobre-mi">
      <span className="section-label">Quién está detrás</span>
      <h2 className="section-title">Sobre mí</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
      }}>
        <div>
          {([
            <>Soy <strong style={{ color: 'var(--cream)', fontWeight: 400 }}>Neftali Carrillo</strong>, Ingeniero Industrial con profunda fascinación por la inteligencia artificial y el desarrollo de software.</>,
            <>EneCe nació como marca personal para canalizar proyectos en la intersección de <strong style={{ color: 'var(--cream)', fontWeight: 400 }}>gestión, IA y tecnología</strong>. No solo hablo de transformación digital — la construyo.</>,
            <>Trabajo con las herramientas más avanzadas disponibles hoy: <strong style={{ color: 'var(--cream)', fontWeight: 400 }}>Claude Code, Antigravity, Codex, Gemini y DeepSeek</strong>, combinados con metodología de gestión y visión de negocio.</>,
            <>Basado en Chile · <strong style={{ color: 'var(--cream)', fontWeight: 400 }}>enece.cl</strong></>,
          ] as React.ReactNode[]).map((text, i) => (
            <p key={i} style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 20 }}>
              {text}
            </p>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {STATS.map(s => (
            <div key={s.num} style={{
              background: 'var(--glass)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              padding: '24px 20px',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '3rem',
                color: 'var(--orange)',
                lineHeight: 1,
                marginBottom: 6,
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--muted)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
