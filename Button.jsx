import React from 'react';

/**
 * Button — The Founders' Edit primary action control.
 * Editorial pill with letterspaced uppercase label; terracotta is the signal color.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  fullWidth = false,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { padding: '9px 20px', fontSize: '11px', letterSpacing: '0.2em' },
    md: { padding: '13px 30px', fontSize: '12px', letterSpacing: '0.2em' },
    lg: { padding: '17px 42px', fontSize: '13px', letterSpacing: '0.22em' },
  };

  const palettes = {
    primary: {
      base: { background: 'var(--ink)', color: 'var(--paper-2)', border: '1.5px solid var(--ink)' },
      hover: { background: '#000', borderColor: '#000' },
    },
    secondary: {
      base: { background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--ink)' },
      hover: { background: 'var(--ink)', color: 'var(--paper-2)' },
    },
    ghost: {
      base: { background: 'transparent', color: 'var(--ink)', border: '1.5px solid transparent' },
      hover: { background: 'rgba(35,32,28,.07)' },
    },
    teal: {
      base: { background: 'var(--teal-deep)', color: 'var(--paper-2)', border: '1.5px solid var(--teal-deep)' },
      hover: { background: 'var(--teal)', borderColor: 'var(--teal)' },
    },
    signal: {
      base: { background: 'var(--terracotta)', color: 'var(--paper-2)', border: '1.5px solid var(--terracotta)' },
      hover: { background: 'var(--terracotta-deep)', borderColor: 'var(--terracotta-deep)' },
    },
    sky: {
      base: { background: 'var(--olive)', color: 'var(--ink)', border: '1.5px solid var(--olive)' },
      hover: { background: 'var(--olive-deep)', color: 'var(--paper-2)', borderColor: 'var(--olive-deep)' },
    },
  };

  const pal = palettes[variant] || palettes.primary;
  const s = sizes[size] || sizes.md;

  const composed = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.6em',
    fontFamily: 'var(--font-sans)', fontWeight: 500, textTransform: 'uppercase',
    textDecoration: 'none', borderRadius: 'var(--radius-pill)', cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto', whiteSpace: 'nowrap',
    transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
    opacity: disabled ? 0.45 : 1,
    ...s, ...pal.base, ...(hover && !disabled ? pal.hover : null), ...style,
  };

  const Tag = href ? 'a' : as;
  return (
    <Tag
      href={href} onClick={disabled ? undefined : onClick}
      style={composed} aria-disabled={disabled || undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}
      {...rest}
    >
      {children}
      {arrow && <span aria-hidden style={{ fontSize: '1.15em', lineHeight: 0, transform: 'translateY(1px)' }}>&rarr;</span>}
    </Tag>
  );
}
