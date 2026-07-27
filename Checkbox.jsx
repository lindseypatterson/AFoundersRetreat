import React from 'react';

/**
 * Checkbox — square editorial check with terracotta fill when selected.
 * Uncontrolled unless `checked` + `onChange` are supplied.
 */
export function Checkbox({ label, checked, defaultChecked, onChange, disabled = false, name, style, ...rest }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isChecked = checked != null ? checked : internal;
  const handle = (e) => { if (checked == null) setInternal(e.target.checked); onChange && onChange(e); };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span style={{ position: 'relative', flexShrink: 0, width: '20px', height: '20px', marginTop: '1px',
        border: `1.5px solid ${isChecked ? 'var(--terracotta)' : 'var(--ink-3)'}`,
        background: isChecked ? 'var(--terracotta)' : 'transparent', borderRadius: 'var(--radius-xs)',
        transition: 'all var(--dur-base) var(--ease-out)' }}>
        {isChecked && (
          <svg viewBox="0 0 16 16" width="14" height="14" style={{ position: 'absolute', top: '2px', left: '2px' }} aria-hidden>
            <path d="M3 8.5l3 3 7-7.5" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        <input type="checkbox" name={name} checked={isChecked} disabled={disabled} onChange={handle}
          style={{ position: 'absolute', opacity: 0, inset: 0, margin: 0, cursor: 'inherit' }} {...rest} />
      </span>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)',
        lineHeight: 1.45, color: 'var(--ink)' }}>{label}</span>}
    </label>
  );
}
