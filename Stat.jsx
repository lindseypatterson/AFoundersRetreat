import React from 'react';

/**
 * Stat — oversized Bodoni figure with an uppercase caption. Used in row groups
 * to convey retreat facts (days, women, cities).
 */
export function Stat({ value, label, tone = 'ink', align = 'left', style, ...rest }) {
  const tones = { ink: 'var(--ink)', terracotta: 'var(--terracotta)', teal: 'var(--teal-deep)', olive: 'var(--olive-deep)', paper: 'var(--paper-2)' };
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-display-md)',
        lineHeight: 1, letterSpacing: 'var(--ls-tight)', color: tones[tone] || tones.ink }}>{value}</div>
      <div style={{ marginTop: '10px', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '12px',
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: tone === 'paper' ? 'rgba(251,245,233,.75)' : 'var(--ink-3)' }}>{label}</div>
    </div>
  );
}
