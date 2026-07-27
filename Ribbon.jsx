import React from 'react';

let _kf = false;
function ensureKeyframes() {
  if (_kf || typeof document === 'undefined') return;
  _kf = true;
  const el = document.createElement('style');
  el.textContent = '@keyframes fe-ribbon-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}';
  document.head.appendChild(el);
}

/**
 * Ribbon — the signature scrolling marquee band ("REAL ITALIAN LIVING · …").
 * A wide horizontal strip of repeating letterspaced text separated by a glyph.
 */
export function Ribbon({
  text = 'Founders Retreat',
  separator = '\u273B',
  tone = 'cobalt',
  speed = 32,
  count = 8,
  style,
  ...rest
}) {
  ensureKeyframes();
  const tones = {
    cobalt: { bg: 'var(--cobalt)', fg: 'var(--paper-2)' },
    terracotta: { bg: 'var(--terracotta)', fg: 'var(--paper-2)' },
    olive: { bg: 'var(--olive)', fg: 'var(--paper-2)' },
    teal: { bg: 'var(--teal-deep)', fg: 'var(--paper-2)' },
    ink: { bg: 'var(--ink)', fg: 'var(--paper-2)' },
  };
  const t = tones[tone] || tones.cobalt;
  const items = Array.from({ length: count });
  const strip = (
    <span style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }} aria-hidden>
      {items.map((_, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '12px',
            letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: t.fg,
            padding: '0 22px',
          }}>{text}</span>
          <span style={{ color: t.fg, opacity: 0.7, fontSize: '11px' }}>{separator}</span>
        </span>
      ))}
    </span>
  );
  return (
    <div style={{ background: t.bg, overflow: 'hidden', padding: '11px 0', width: '100%', ...style }} {...rest}>
      <div style={{ display: 'inline-flex', whiteSpace: 'nowrap', willChange: 'transform',
        animation: `fe-ribbon-scroll ${speed}s linear infinite` }}>
        {strip}{strip}
      </div>
    </div>
  );
}
