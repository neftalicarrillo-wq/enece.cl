'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const WELCOME: Message = {
  role: 'assistant',
  content: '¡Hola! Soy el asistente de ENECE. ¿En qué puedo ayudarte hoy?',
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => textareaRef.current?.focus(), 50);
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg]
            .filter(m => m.role === 'user' || m.role === 'assistant')
            .slice(-10)
            .map(m => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok || !res.body) throw new Error('Error del servidor');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      setLoading(false);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: assistantText };
          return updated;
        });
      }
    } catch {
      setLoading(false);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Hubo un error. Intenta nuevamente.' },
      ]);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const canSend = input.trim() && !loading;

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat con ENECE"
          aria-modal="true"
          style={{
            position: 'fixed',
            bottom: 84,
            right: 24,
            width: 'min(360px, calc(100vw - 32px))',
            height: 500,
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--bg2)',
            border: '1px solid rgba(59,130,246,0.25)',
            borderRadius: 10,
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
          }}
        >
          {/* Header */}
          <div style={{
            padding: '14px 16px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            background: 'var(--bg3)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* V1 logo mark mini */}
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
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', display: 'block' }} />
              </div>
              <div>
                <span style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                  color: 'var(--cream)',
                  display: 'block',
                  lineHeight: 1.2,
                }}>
                  ENECE.assistant
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                  <span style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: 'var(--green)',
                    animation: 'pulse-dot 2s ease infinite',
                    display: 'inline-block',
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '0.55rem',
                    color: 'var(--green2)',
                    letterSpacing: '0.08em',
                  }}>
                    online
                  </span>
                </span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--muted)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                padding: '6px',
                borderRadius: 3,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            role="log"
            aria-live="polite"
            aria-label="Mensajes del chat"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {messages.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '80%',
                  padding: '9px 13px',
                  borderRadius: m.role === 'user'
                    ? '8px 8px 2px 8px'
                    : '8px 8px 8px 2px',
                  background: m.role === 'user'
                    ? 'rgba(59,130,246,0.15)'
                    : 'var(--bg3)',
                  border: m.role === 'user'
                    ? '1px solid rgba(59,130,246,0.3)'
                    : '1px solid var(--border)',
                  color: m.role === 'user' ? 'var(--cream)' : 'var(--muted)',
                  fontSize: '0.82rem',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-wrap',
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                }}>
                  {m.content || (m.role === 'assistant' && (
                    <span style={{ opacity: 0.5 }}>▋</span>
                  ))}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '10px 14px',
                  borderRadius: '8px 8px 8px 2px',
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                }}>
                  <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                    {[0, 1, 2].map(j => (
                      <span key={j} style={{
                        width: 5, height: 5, borderRadius: '50%',
                        background: 'var(--accent)',
                        opacity: 0.7,
                        animation: `bounce 1s ease ${j * 0.15}s infinite`,
                        display: 'inline-block',
                      }} />
                    ))}
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '10px 12px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            gap: 8,
            flexShrink: 0,
          }}>
            <textarea
              ref={textareaRef}
              rows={1}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="$ escribe un mensaje..."
              disabled={loading}
              aria-label="Mensaje para el asistente"
              style={{
                flex: 1,
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: 4,
                padding: '8px 11px',
                color: 'var(--cream)',
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontSize: '0.82rem',
                outline: 'none',
                resize: 'none',
                lineHeight: 1.5,
                transition: 'border-color 0.2s',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
            <button
              onClick={send}
              disabled={!canSend}
              aria-label="Enviar mensaje"
              style={{
                background: canSend ? 'var(--accent)' : 'rgba(59,130,246,0.1)',
                border: 'none',
                borderRadius: 4,
                width: 36,
                height: 36,
                cursor: canSend ? 'pointer' : 'default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                alignSelf: 'flex-end',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { if (canSend) (e.currentTarget as HTMLButtonElement).style.background = 'var(--accent2)'; }}
              onMouseLeave={e => { if (canSend) (e.currentTarget as HTMLButtonElement).style.background = 'var(--accent)'; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"
                  stroke={canSend ? '#000' : 'var(--accent)'}
                  strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Cerrar chat' : 'Abrir asistente ENECE'}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 48,
          height: 48,
          borderRadius: 6,
          background: open ? 'var(--bg3)' : 'var(--accent)',
          border: open ? '1px solid var(--border)' : 'none',
          cursor: 'pointer',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: open
            ? '0 4px 20px rgba(0,0,0,0.4)'
            : '0 4px 20px rgba(59,130,246,0.4)',
          transition: 'transform 0.2s, background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {open ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="var(--cream)" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </>
  );
}
