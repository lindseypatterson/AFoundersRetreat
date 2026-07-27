import React from 'react';

/**
 * Select — styled native dropdown matching Input's editorial forms.
 */
export function Select({ label, options = [], value, defaultValue, name, variant = 'underline', hint, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const box = variant === 'box';
  const borderColor = focus ? 'var(--teal-deep)' : 'var(--border)';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
      {label && (
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px',
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>{label}</span>
      )}
      <div style={{ position: 'relative' }}>
        <select
          name={name} value={value} defaultValue={defaultValue} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            appearance: 'none', WebkitAppearance: 'none', width: '100%', cursor: 'pointer',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--ink)',
            background: box ? 'var(--paper-3)' : 'transparent',
            border: box ? `1px solid ${borderColor}` : 'none',
            borderBottom: `1.5px solid ${borderColor}`,
            borderRadius: box ? 'var(--radius-sm)' : 0,
            padding: box ? '13px 40px 13px 15px' : '10px 26px 10px 2px', outline: 'none',
            transition: 'border-color var(--dur-base) var(--ease-out)', opacity: disabled ? 0.5 : 1,
          }}
          {...rest}
        >
          {options.map((o, i) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return <option key={i} value={val}>{lbl}</option>;
          })}
        </select>
        <span aria-hidden style={{ position: 'absolute', right: box ? '15px' : '2px', top: '50%',
          transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--teal-deep)', fontSize: '11px' }}>&#9660;</span>
      </div>
      {hint && <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--ink-3)' }}>{hint}</span>}
    </label>
  );
}
