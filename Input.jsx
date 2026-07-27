import React from 'react';

/**
 * Input — text field with a floating uppercase label. Underline style by
 * default (editorial forms), or `box` for a bordered field.
 */
export function Input({
  label, type = 'text', value, defaultValue, placeholder, name, variant = 'underline',
  hint, error, disabled = false, style, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--teal-deep)' : 'var(--border)';
  const box = variant === 'box';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
      {label && (
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px',
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>{label}</span>
      )}
      <input
        type={type} name={name} value={value} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--ink)',
          background: box ? 'var(--paper-3)' : 'transparent',
          border: box ? `1px solid ${borderColor}` : 'none',
          borderBottom: `1.5px solid ${borderColor}`,
          borderRadius: box ? 'var(--radius-sm)' : 0,
          padding: box ? '13px 15px' : '10px 2px', outline: 'none',
          transition: 'border-color var(--dur-base) var(--ease-out)',
          opacity: disabled ? 0.5 : 1, width: '100%', boxSizing: 'border-box',
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px',
          color: error ? 'var(--danger)' : 'var(--ink-3)' }}>{error || hint}</span>
      )}
    </label>
  );
}
