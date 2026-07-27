import * as React from 'react';

export interface SelectOption { label: React.ReactNode; value: string; }

export interface SelectProps {
  label?: React.ReactNode;
  options: (string | SelectOption)[];
  value?: string;
  defaultValue?: string;
  name?: string;
  /** @default 'underline' */
  variant?: 'underline' | 'box';
  hint?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Styled native dropdown matching Input; terracotta chevron. */
export function Select(props: SelectProps): JSX.Element;
