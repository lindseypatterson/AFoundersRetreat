import React from 'react';
import { Tag } from '../primitives/Tag.jsx';

/**
 * Card — editorial image card. Boxy framed photo on top, then optional tag,
 * serif title, body copy, and a link. Hover gently lifts and warms the image.
 */
export function Card({
  image, imageAlt = '', tag, tagTone = 'teal', title, children, meta, href, linkLabel = 'Read more',
  align = 'left', style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href || undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit',
        background: 'transparent', textAlign: align, cursor: href ? 'pointer' : 'default', ...style,
      }} {...rest}
    >
      {image && (
        <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-sm)', marginBottom: '20px',
          aspectRatio: '4 / 3', border: '1px solid var(--border-muted)' }}>
          <img src={image} alt={imageAlt} style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            filter: 'saturate(0.92) contrast(1.02)',
            transform: hover ? 'scale(1.045)' : 'scale(1)',
            transition: 'transform var(--dur-slow) var(--ease-out)',
          }} />
        </div>
      )}
      {tag && <div style={{ marginBottom: '12px' }}><Tag tone={tagTone}>{tag}</Tag></div>}
      {title && (
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500,
          fontSize: 'var(--fs-h3)', lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--ls-tight)',
          color: 'var(--ink)' }}>{title}</h3>
      )}
      {children && (
        <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)',
          lineHeight: 'var(--lh-body)', color: 'var(--ink-2)' }}>{children}</p>
      )}
      {meta && (
        <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-sans)', fontSize: '12px',
          letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{meta}</p>
      )}
      {href && (
        <span style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px',
          fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '12px', letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'var(--ink)', alignSelf: align === 'center' ? 'center' : 'flex-start' }}>
          {linkLabel}
          <span aria-hidden style={{ transform: hover ? 'translateX(4px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}>&rarr;</span>
        </span>
      )}
    </a>
  );
}
