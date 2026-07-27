import * as React from 'react';

export interface StatProps {
  value?: React.ReactNode;
  label?: React.ReactNode;
  /** @default 'ink' */
  tone?: 'ink' | 'terracotta' | 'teal' | 'olive' | 'paper';
  /** @default 'left' */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

/** Oversized display figure + uppercase caption, for stat rows. */
export function Stat(props: StatProps): JSX.Element;
