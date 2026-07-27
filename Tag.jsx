import React from 'react';

/**
 * Tag / Badge — small editorial label. `pill` (default) for filled chips,
 * `outline` for hairline chips. Used for categories, dates, "New" flags.
 */
export function Tag({ children, tone = 'terracotta', variant = 'outline', style, ...rest }) {
  const tones = {
    terracotta: { fg: 'var(--terracotta-deep)', bg: 'var(--terracotta-wash)', bd: 'var(--terracotta)' },
    teal: { fg: 'var(--teal-deep)', bg: 'var(--teal-wash)', bd: 'var(--teal)' },
    olive: { fg: 'var(--olive-deep)', bg: 'rgba(140,138,80,.16)', bd: 'var(--olive)' },
    ink: { fg: 'var(--ink)', bg: 'var(--sand)', bd: 'var(--ink)' },
    cobalt: { fg: 'var(--paper-2)', bg: 'var(--cobalt)', bd: 'var(--cobalt)' },
  };
  const t = tones[tone] || tones.terracotta;
  const filled = variant === 'pill';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px',
      letterSpacing: '0.16em', textTransform: 'uppercase',
      padding: '5px 12px', borderRadius: 'var(--radius-pill)',
      color: filled ? (tone === 'cobalt' ? t.fg : 'var(--paper-2)') : t.fg,
      background: filled ? t.bd : t.bg,
      border: `1px solid ${filled ? t.bd : t.bd}`,
      ...style,
    }} {...rest}>{children}</span>
  );
}
