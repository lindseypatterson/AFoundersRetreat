import * as React from 'react';

export interface InputProps {
  label?: React.ReactNode;
  type?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  name?: string;
  /** 'underline' (editorial) or 'box'. @default 'underline' */
  variant?: 'underline' | 'box';
  hint?: React.ReactNode;
  error?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Text field with uppercase label; underline style by default, box optional. */
export function Input(props: InputProps): JSX.Element;
