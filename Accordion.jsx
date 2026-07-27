import React from 'react';

/**
 * Accordion — FAQ disclosure list with editorial ink rules. Uncontrolled;
 * one panel open at a time by default (set `multi` to allow several).
 */
export function Accordion({ items = [], defaultOpen = 0, multi = false, style, ...rest }) {
  const [open, setOpen] = React.useState(() => (multi ? (defaultOpen != null ? [defaultOpen] : []) : defaultOpen));
  const isOpen = (i) => (multi ? open.includes(i) : open === i);
  const toggle = (i) => {
    if (multi) setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));
    else setOpen((o) => (o === i ? -1 : i));
  };
  return (
    <div style={{ borderTop: '1.5px solid var(--border-strong)', ...style }} {...rest}>
      {items.map((it, i) => {
        const openState = isOpen(i);
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--border-muted)' }}>
            <button onClick={() => toggle(i)} aria-expanded={openState} style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '20px', padding: '22px 0', background: 'transparent', border: 0, cursor: 'pointer',
              textAlign: 'left', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-h4)',
              color: openState ? 'var(--terracotta)' : 'var(--ink)', transition: 'color var(--dur-base) var(--ease-out)',
            }}>
              <span>{it.q}</span>
              <span aria-hidden style={{ flexShrink: 0, fontFamily: 'var(--font-sans)', fontSize: '22px',
                fontWeight: 300, lineHeight: 1, transform: openState ? 'rotate(45deg)' : 'none',
                transition: 'transform var(--dur-base) var(--ease-out)', color: 'var(--ink)' }}>+</span>
            </button>
            <div style={{ overflow: 'hidden', maxHeight: openState ? '340px' : '0',
              transition: 'max-height var(--dur-slow) var(--ease-in-out)' }}>
              <p style={{ margin: 0, padding: '0 0 24px', fontFamily: 'var(--font-sans)',
                fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--ink-2)', maxWidth: '62ch' }}>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
