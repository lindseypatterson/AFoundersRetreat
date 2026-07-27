import React from 'react';

/**
 * NavBar — editorial bordered top nav. Centered script wordmark with a boxed,
 * divider-separated link row beneath (the "Late Checkout" masthead pattern).
 * `layout='inline'` puts the wordmark left and links right instead.
 */
export function NavBar({
  brand = 'Founders Retreat',
  links = ['Home', 'About', 'Retreats', 'Journal', 'Contact'],
  active,
  cta,
  layout = 'stacked',
  onNavigate,
  style,
  ...rest
}) {
  const wordmark = (
    <span style={{ fontFamily: 'var(--font-script)', fontSize: layout === 'stacked' ? '38px' : '30px',
      lineHeight: 1, color: 'var(--ink)', whiteSpace: 'nowrap' }}>{brand}</span>
  );
  const linkStyle = (isActive) => ({
    fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px', letterSpacing: '0.2em',
    textTransform: 'uppercase', color: isActive ? 'var(--terracotta)' : 'var(--ink)',
    textDecoration: 'none', cursor: 'pointer', transition: 'color var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap',
  });
  const linkRow = (
    <nav style={{ display: 'flex', alignItems: 'stretch',
      border: layout === 'stacked' ? '1px solid var(--ink)' : 'none' }}>
      {links.map((l, i) => {
        const label = typeof l === 'string' ? l : l.label;
        const isActive = active ? active === label : i === 0;
        return (
          <a key={i} href={typeof l === 'string' ? '#' : (l.href || '#')}
            onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(label); } }}
            style={{ ...linkStyle(isActive),
              padding: layout === 'stacked' ? '13px 26px' : '8px 0',
              marginLeft: layout === 'inline' ? (i ? '30px' : 0) : 0,
              borderRight: layout === 'stacked' && i < links.length - 1 ? '1px solid var(--ink)' : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--terracotta)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? 'var(--terracotta)' : 'var(--ink)')}>
            {label}
          </a>
        );
      })}
    </nav>
  );

  if (layout === 'inline') {
    return (
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '24px', padding: '20px 40px', background: 'var(--paper)',
        borderBottom: '1px solid var(--border)', ...style }} {...rest}>
        {wordmark}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          {linkRow}
          {cta}
        </div>
      </header>
    );
  }
  return (
    <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
      padding: '22px 40px 18px', background: 'var(--paper)', borderBottom: '1px solid var(--border)', ...style }} {...rest}>
      {wordmark}
      {linkRow}
    </header>
  );
}
