'use client';
import { useState } from 'react';

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
    // TODO: conectar con endpoint de contacto (Resend / Formspree)
    await new Promise(r => setTimeout(r, 800));
    setStatus('sent');
  };

  const inputStyle: React.CSSProperties = {
    background: 'var(--glass)',
    border: '1px solid var(--border)',
    borderRadius: 6,
    padding: '12px 16px',
    color: 'var(--cream)',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    outline: 'none',
    width: '100%',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    marginBottom: 6,
    display: 'block',
  };

  return (
    <section id="contacto">
      <span className="section-label">Hablemos</span>
      <h2 className="section-title">Contacto</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

        <div>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 32 }}>
            ¿Tienes un proyecto, una idea o una necesidad concreta? Me interesa escucharte. Trabajo con empresas y personas que quieren hacer algo real con tecnología e IA.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: '✉', label: 'contacto@enece.cl', href: 'mailto:contacto@enece.cl' },
              { icon: '⌥', label: 'GitHub · EneCe', href: 'https://github.com/neftalicr', target: '_blank' },
              { icon: '⬡', label: 'LinkedIn · Neftali Carrillo', href: 'https://linkedin.com/in/neftalicr', target: '_blank' },
            ].map(link => (
              <a key={link.label} href={link.href} target={(link as { target?: string }).target}
                rel={(link as { target?: string }).target === '_blank' ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  color: 'var(--cream)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  padding: '14px 18px',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  background: 'var(--glass)',
                  backdropFilter: 'blur(10px)',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--orange)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateX(0)';
                }}
              >
                <span style={{ color: 'var(--orange)', fontSize: '1rem', width: 20 }}>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { key: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
            { key: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com' },
          ].map(f => (
            <div key={f.key}>
              <label htmlFor={f.key} style={labelStyle}>{f.label}</label>
              <input
                id={f.key}
                type={f.type}
                placeholder={f.placeholder}
                style={inputStyle}
                value={form[f.key as keyof typeof form]}
                onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
              />
            </div>
          ))}
          <div>
            <label htmlFor="servicio" style={labelStyle}>¿En qué puedo ayudarte?</label>
            <select
              id="servicio"
              style={{ ...inputStyle, appearance: 'none' as const }}
              value={form.servicio}
              onChange={e => setForm(p => ({ ...p, servicio: e.target.value }))}
            >
              <option value="">Selecciona una opción</option>
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
              style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }}
              placeholder="Cuéntame sobre tu proyecto o necesidad..."
              value={form.mensaje}
              onChange={e => setForm(p => ({ ...p, mensaje: e.target.value }))}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            style={{
              background: 'var(--orange)',
              color: '#000',
              border: 'none',
              padding: '14px 32px',
              borderRadius: 4,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              cursor: status === 'sending' ? 'wait' : 'pointer',
              alignSelf: 'flex-start',
              opacity: status === 'sent' ? 0.7 : 1,
            }}
          >
            {status === 'idle' && 'Enviar mensaje'}
            {status === 'sending' && 'Enviando...'}
            {status === 'sent' && '¡Mensaje enviado!'}
            {status === 'error' && 'Error — reintentar'}
          </button>
          {status === 'error' && (
            <p style={{ color: 'var(--orange)', fontSize: '0.78rem' }}>
              Por favor completa todos los campos con un email válido.
            </p>
          )}
        </form>

      </div>
    </section>
  );
}
