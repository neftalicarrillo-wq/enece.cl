'use client';

const BIO = [
  <>Soy <strong style={{ color: 'var(--cream)', fontWeight: 500 }}>Neftali Carrillo</strong>, Ingeniero Industrial con profunda fascinación por la inteligencia artificial y el desarrollo de software.</>,
  <>ENECE nació como marca personal para canalizar proyectos en la intersección de <strong style={{ color: 'var(--cream)', fontWeight: 500 }}>gestión, IA y tecnología</strong>. No solo hablo de transformación digital — la construyo.</>,
  <>Trabajo con las herramientas más avanzadas disponibles hoy: <strong style={{ color: 'var(--cream)', fontWeight: 500 }}>Claude Code, Next.js 15, Python y GPT / Gemini</strong>, combinados con metodología de gestión y visión de negocio.</>,
];

const STATS = [
  { num: 'IA',   label: 'Stack Moderno',   color: 'var(--accent)' },
  { num: '+5',   label: 'Herramientas',    color: 'var(--green)' },
  { num: 'CL',   label: 'Base en Chile',   color: '#F59E0B' },
  { num: '360°', label: 'Gestión + Tech',  color: 'var(--accent2)' },
];

export function AboutSection() {
  return (
    <section id="sobre-mi">
      <span className="section-label">about</span>
      <h2 className="section-title">Quién está detrás</h2>

      <div className="about-layout">

        {/* Left: bio + stats */}
        <div>
          <div style={{ marginBottom: 40 }}>
            {BIO.map((text, i) => (
              <p key={i} style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.85, marginBottom: 22 }}>
                {text}
              </p>
            ))}
          </div>

          {/* Stat boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {STATS.map(s => (
              <div key={s.num} style={{
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '24px 20px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  color: s.color,
                  lineHeight: 1,
                  marginBottom: 6,
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontSize: '0.65rem',
                  color: 'var(--muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: terminal JSON card */}
        <div style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderRadius: 10,
          overflow: 'hidden',
          fontFamily: 'var(--font-mono), monospace',
          alignSelf: 'start',
        }}>
          {/* Terminal bar */}
          <div style={{
            background: 'var(--bg3)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            borderBottom: '1px solid var(--border)',
          }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E', display: 'block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840', display: 'block' }} />
            <span style={{
              marginLeft: 8,
              fontSize: '0.6rem',
              color: 'var(--muted)',
              letterSpacing: '0.1em',
            }}>
              profile.json
            </span>
          </div>

          {/* JSON body */}
          <div style={{
            padding: '24px 20px',
            fontSize: '0.78rem',
            lineHeight: 2,
          }}>
            {[
              { type: 'comment', content: '// Neftali Carrillo' },
              { type: 'kv',      key: '"nombre"',    val: '"Neftali Carrillo"' },
              { type: 'kv',      key: '"rol"',        val: '"Ing. Industrial + Dev"' },
              { type: 'kv',      key: '"ubicacion"',  val: '"Chile 🇨🇱"' },
              { type: 'open',    content: '"stack": [' },
              { type: 'item',    content: '"Claude Code"' },
              { type: 'item',    content: '"Next.js 15"' },
              { type: 'item',    content: '"Python"' },
              { type: 'item',    content: '"GPT / Gemini"' },
              { type: 'close',   content: '],' },
              { type: 'bool',    key: '"disponible"', val: 'true' },
            ].map((line, i) => {
              if (line.type === 'comment') {
                return <div key={i} style={{ color: 'var(--muted2)' }}>{line.content}</div>;
              }
              if (line.type === 'kv') {
                return (
                  <div key={i}>
                    <span style={{ color: 'var(--accent)' }}>{line.key}</span>
                    {': '}
                    <span style={{ color: 'var(--green2)' }}>{line.val}</span>,
                  </div>
                );
              }
              if (line.type === 'bool') {
                return (
                  <div key={i}>
                    <span style={{ color: 'var(--accent)' }}>{line.key}</span>
                    {': '}
                    <span style={{ color: 'var(--green)' }}>{line.val}</span>
                  </div>
                );
              }
              if (line.type === 'open') {
                return <div key={i}><span style={{ color: 'var(--accent)' }}>{line.content?.split(':')[0]}</span>{': ['}</div>;
              }
              if (line.type === 'item') {
                return <div key={i} style={{ paddingLeft: '1em' }}><span style={{ color: 'var(--green2)' }}>{line.content}</span>,</div>;
              }
              if (line.type === 'close') {
                return <div key={i}>{line.content}</div>;
              }
              return null;
            })}
            {/* Cursor */}
            <div>
              <span style={{
                color: 'var(--accent)',
                animation: 'blink 1s step-end infinite',
              }}>█</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .about-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .about-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
