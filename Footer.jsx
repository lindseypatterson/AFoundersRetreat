import React from 'react';

/**
 * Footer — dark teal editorial footer: oversized script wordmark, link columns,
 * a small newsletter line, and a bottom legal rule.
 */
export function Footer({
  brand = 'Founders Retreat',
  tagline = 'A collaborative weekend for women building businesses.',
  columns = [],
  note = '\u00A9 Founders Retreat \u00b7 October 2\u20135, 2026 \u00b7 By invitation only.',
  style, ...rest
}) {
  return (
    <footer style={{ background: 'var(--teal-deep)', color: 'var(--paper-2)', padding: '72px 40px 32px', ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid',
        gridTemplateColumns: '1.4fr repeat(auto-fit, minmax(120px, 1fr))', gap: '48px', alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-script)', fontSize: '46px', lineHeight: 1 }}>{brand}</div>
          <p style={{ margin: '16px 0 0', fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: 'var(--fs-h4)', color: 'rgba(251,245,233,.82)', maxWidth: '30ch' }}>{tagline}</p>
        </div>
        {columns.map((col, i) => (
          <div key={i}>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px',
              letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terracotta-soft)', marginBottom: '18px' }}>{col.title}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {col.links.map((l, j) => (
                <li key={j}><a href={typeof l === 'string' ? '#' : (l.href || '#')} style={{
                  fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(251,245,233,.86)',
                  textDecoration: 'none' }}>{typeof l === 'string' ? l : l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '52px auto 0', paddingTop: '22px',
        borderTop: '1px solid rgba(251,245,233,.22)', display: 'flex', flexWrap: 'wrap', gap: '12px',
        justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: '12px',
        letterSpacing: '0.08em', color: 'rgba(251,245,233,.6)' }}>
        <span>{note}</span>
        <span style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>Instagram &middot; Journal &middot; Contact</span>
      </div>
    </footer>
  );
}
