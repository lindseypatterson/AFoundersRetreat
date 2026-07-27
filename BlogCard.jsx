import React from 'react';

/**
 * BlogCard — compact horizontal post row: small square thumbnail, title,
 * one-line teaser, uppercase read-more + date. Matches the "Check-In Time: The
 * Blog" list from the brand.
 */
export function BlogCard({ image, imageAlt = '', title, excerpt, date, href, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href || undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: '18px', alignItems: 'center',
        textDecoration: 'none', color: 'inherit', padding: '16px 0',
        borderBottom: '1px solid var(--border-muted)', ...style }} {...rest}>
      {image && (
        <div style={{ width: '96px', height: '84px', overflow: 'hidden', borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-muted)' }}>
          <img src={image} alt={imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover',
            display: 'block', filter: 'saturate(0.92)', transform: hover ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform var(--dur-slow) var(--ease-out)' }} />
        </div>
      )}
      <div>
        <h4 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-h4)',
          lineHeight: 'var(--lh-heading)', color: 'var(--ink)' }}>{title}</h4>
        {excerpt && <p style={{ margin: '5px 0 0', fontFamily: 'var(--font-sans)', fontSize: '13px',
          color: 'var(--ink-2)', lineHeight: 1.5 }}>{excerpt}</p>}
        <div style={{ marginTop: '9px', display: 'flex', alignItems: 'center', gap: '12px',
          fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          <span style={{ color: 'var(--ink)', display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
            Read more <span aria-hidden style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}>&rarr;</span>
          </span>
          {date && <span style={{ color: 'var(--ink-3)' }}>{date}</span>}
        </div>
      </div>
    </a>
  );
}
