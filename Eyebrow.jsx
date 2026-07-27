import React from 'react';

/**
 * Eyebrow — letterspaced uppercase kicker that sits above headings.
 * Optionally flanked by short rules for the editorial "section marker" look.
 */
export function Eyebrow({ children, color = 'ink', rule = false, align = 'left', style, ...rest }) {
  const colors = {
    terracotta: 'var(--terracotta)',
    ink: 'var(--ink)',
    teal: 'var(--teal-deep)',
    olive: 'var(--olive-deep)',
    paper: 'var(--paper-2)',
  };
  const c = colors[color] || colors.ink;
  const label = (
    <span style={{
      fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: c, ...style,
    }} {...rest}>{children}</span>
  );
  if (!rule) return label;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '14px',
      justifyContent: align === 'center' ? 'center' : 'flex-start', width: align === 'center' ? '100%' : 'auto' }}>
      <span style={{ height: '1px', width: '34px', background: c, opacity: 0.6 }} />
      {label}
      {align === 'center' && <span style={{ height: '1px', width: '34px', background: c, opacity: 0.6 }} />}
    </span>
  );
}
