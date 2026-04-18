'use client';
import { useState } from 'react';

const LINKS = [
  { icon: '@',  label: 'contacto@enece.cl',         href: 'mailto:contacto@enece.cl',             external: false },
  { icon: 'gh', label: 'GitHub · EneCe',             href: 'https://github.com/neftalicr',         external: true  },
  { icon: 'in', label: 'LinkedIn · Neftali Carrillo', href: 'https://linkedin.com/in/neftalicr', external: true  },
];

export function ContactSection() {
  const [form, setForm] = useState({ nombre: '', email: '', servicio: '', mensaje: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      setStatus('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    await new Promise(r => setTimeout(r, 800));
    setStatus('sent');
  };

  const inputStyle: React.CSSProperties = {
    background: 'var(--bg2)',
    border: '1px solid var(--border)',
    borderRadius: 4,
    padding: '11px 14px',
    color: 'var(--cream)',
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontSize: '0.88rem',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '0.6rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    marginBottom: 5,
    display: 'block',
  };

  return (
    <section id="contacto">
      <span className="section-label">contacto</span>
      <h2 className="section-title">Hablemos</h2>

      <div className="contact-grid">

        {/* Left: info */}
        <div>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 32 }}>
            ¿Tienes un proyecto, una idea o una necesidad concreta? Me interesa escucharte. Trabajo con empresas y personas que quieren hacer algo real con tecnología e IA.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  color: 'var(--cream)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  padding: '14px 18px',
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  background: 'var(--glass)',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '0.7rem',
                  color: 'var(--accent)',
                  width: 20,
                  textAlign: 'center',
                  fontWeight: 700,
                }}>
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { key: 'nombre', label: 'Nombre',  type: 'text',  placeholder: 'Tu nombre',    autocomplete: 'name' },
            { key: 'email',  label: 'Email',   type: 'email', placeholder: 'tu@email.com', autocomplete: 'email' },
          ].map(f => (
            <div key={f.key}>
              <label htmlFor={f.key} style={labelStyle}>{f.label}</label>
              <input
                id={f.key}
                type={f.type}
                placeholder={f.placeholder}
                autoComplete={f.autocomplete}
                aria-required="true"
                style={inputStyle}
                value={form[f.key as keyof typeof form]}
                onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
            </div>
          ))}

          <div>
            <label htmlFor="servicio" style={labelStyle}>¿En qué puedo ayudarte?</label>
            <select
              id="servicio"
              style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
              value={form.servicio}
              onChange={e => setForm(p => ({ ...p, servicio: e.target.value }))}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <option value="">Selecciona</option>
              <option>Gestión con IA</option>
              <option>Desarrollo de aplicación</option>
              <option>Consultoría digital</option>
              <option>Integración de IA</option>
              <option>Otro</option>
            </select>
          </div>

          <div>
            <label htmlFor="mensaje" style={labelStyle}>Mensaje</label>
            <textarea
              id="mensaje"
              aria-required="true"
              style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }}
              placeholder="Cuéntame sobre tu proyecto o necesidad…"
              value={form.mensaje}
              onChange={e => setForm(p => ({ ...p, mensaje: e.target.value }))}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            style={{
              background: status === 'sent' ? 'transparent' : 'var(--accent)',
              color: status === 'sent' ? 'var(--green)' : '#000',
              border: status === 'sent' ? '1px solid rgba(34,197,94,0.4)' : 'none',
              padding: '12px 28px',
              borderRadius: 4,
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              cursor: status === 'sending' || status === 'sent' ? 'default' : 'pointer',
              alignSelf: 'flex-start',
              transition: 'background 0.3s, color 0.3s',
            }}
            onMouseEnter={e => {
              if (status === 'idle') (e.currentTarget as HTMLButtonElement).style.background = 'var(--accent2)';
            }}
            onMouseLeave={e => {
              if (status === 'idle') (e.currentTarget as HTMLButtonElement).style.background = 'var(--accent)';
            }}
          >
            {status === 'idle'    && 'enviar_mensaje()'}
            {status === 'sending' && 'ejecutando...'}
            {status === 'sent'    && '✓ enviado'}
            {status === 'error'   && 'reintentar'}
          </button>

          <div role="status" aria-live="polite" aria-atomic="true">
            {status === 'error' && (
              <p style={{
                fontFamily: 'var(--font-mono), monospace',
                color: 'var(--amber)',
                fontSize: '0.7rem',
                marginTop: 4,
              }}>
                // completa nombre, email válido y mensaje.
              </p>
            )}
            {status === 'sent' && (
              <p style={{
                fontFamily: 'var(--font-mono), monospace',
                color: 'var(--green2)',
                fontSize: '0.7rem',
                marginTop: 4,
              }}>
                // mensaje recibido. respondo pronto.
              </p>
            )}
          </div>
        </form>

      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
