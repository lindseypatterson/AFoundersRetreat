import React from 'react';

/**
 * Divider — editorial rule. `plain` hairline, or `ornament` with a centered
 * glyph breaking the line (used between stories / footer sections).
 */
export function Divider({ variant = 'plain', ornament = '\u273B', tone = 'ink', spacing = 32, style, ...rest }) {
  const tones = { ink: 'var(--border-strong)', sand: 'var(--border)', terracotta: 'var(--terracotta)', teal: 'var(--teal)' };
  const c = tones[tone] || tones.ink;
  if (variant === 'ornament') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px', margin: `${spacing}px 0`, ...style }} {...rest}>
        <span style={{ flex: 1, height: '1px', background: c, opacity: 0.5 }} />
        <span style={{ color: c, fontSize: '14px', lineHeight: 1 }} aria-hidden>{ornament}</span>
        <span style={{ flex: 1, height: '1px', background: c, opacity: 0.5 }} />
      </div>
    );
  }
  return <hr style={{ border: 0, height: '1px', background: c, opacity: variant === 'rule' ? 1 : 0.4,
    margin: `${spacing}px 0`, ...style }} {...rest} />;
}
