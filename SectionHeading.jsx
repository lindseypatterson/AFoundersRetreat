import React from 'react';
import { Eyebrow } from '../primitives/Eyebrow.jsx';

/**
 * SectionHeading — eyebrow + display headline (+ optional lede). The core
 * editorial title block. Set `display` for the oversized Bodoni masthead look.
 */
export function SectionHeading({
  eyebrow, title, lede, align = 'left', size = 'lg', tone = 'ink', style, ...rest
}) {
  const sizes = {
    md: 'var(--fs-h1)', lg: 'var(--fs-display-md)', xl: 'var(--fs-display-lg)', display: 'var(--fs-display-xl)',
  };
  const tones = { ink: 'var(--ink)', paper: 'var(--paper-2)', teal: 'var(--teal-deep)', terracotta: 'var(--terracotta)' };
  const isCenter = align === 'center';
  return (
    <div style={{ textAlign: align, maxWidth: isCenter ? '760px' : 'none', marginInline: isCenter ? 'auto' : 0, ...style }} {...rest}>
      {eyebrow && (
        <div style={{ marginBottom: '18px' }}>
          <Eyebrow color={tone === 'paper' ? 'paper' : 'ink'} rule={isCenter} align={align}>{eyebrow}</Eyebrow>
        </div>
      )}
      {title && (
        <h2 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500,
          fontSize: sizes[size] || sizes.lg, lineHeight: 'var(--lh-snug)',
          letterSpacing: 'var(--ls-tight)', color: tones[tone] || tones.ink, textWrap: 'balance',
        }}>{title}</h2>
      )}
      {lede && (
        <p style={{
          margin: '20px 0 0', fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-h4)',
          lineHeight: 'var(--lh-relaxed)', color: tone === 'paper' ? 'rgba(251,245,233,.85)' : 'var(--ink-2)',
          maxWidth: '640px', marginInline: isCenter ? 'auto' : 0, fontStyle: 'italic',
        }}>{lede}</p>
      )}
    </div>
  );
}
