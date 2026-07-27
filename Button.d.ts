import * as React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost' | 'teal' | 'signal' | 'sky';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Show a trailing → arrow. @default false */
  arrow?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as another element (e.g. 'a'). @default 'button' */
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Primary action control — an editorial letterspaced pill. Terracotta is the
 * signal color; use `secondary` (ink outline) for lower emphasis and `teal`
 * on cream sections that already carry terracotta.
 *
 * @startingPoint section="Primitives" subtitle="Editorial pill buttons" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
