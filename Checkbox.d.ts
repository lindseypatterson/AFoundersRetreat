import * as React from 'react';

export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  style?: React.CSSProperties;
}

/** Square editorial checkbox with terracotta fill + white check when selected. */
export function Checkbox(props: CheckboxProps): JSX.Element;
