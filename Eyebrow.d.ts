import * as React from 'react';

export interface EyebrowProps {
  children?: React.ReactNode;
  /** @default 'terracotta' */
  color?: 'terracotta' | 'ink' | 'teal' | 'olive' | 'paper';
  /** Flank the label with hairline rules. @default false */
  rule?: boolean;
  /** @default 'left' */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

/**
 * Letterspaced uppercase kicker placed above a heading — the brand's
 * section-marker device. Pair with SectionHeading.
 */
export function Eyebrow(props: EyebrowProps): JSX.Element;
