import * as React from 'react';

export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Italic serif lede beneath the title. */
  lede?: React.ReactNode;
  /** @default 'left' */
  align?: 'left' | 'center';
  /** Headline scale. @default 'lg' */
  size?: 'md' | 'lg' | 'xl' | 'display';
  /** Color context. @default 'ink' */
  tone?: 'ink' | 'paper' | 'teal' | 'terracotta';
  style?: React.CSSProperties;
}

/**
 * Eyebrow + Bodoni display headline + italic serif lede — the standard
 * section title block. `tone='paper'` for dark/photo backgrounds.
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
