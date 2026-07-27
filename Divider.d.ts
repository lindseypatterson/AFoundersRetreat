import * as React from 'react';

export interface DividerProps {
  /** 'plain' faint hairline, 'rule' solid ink rule, 'ornament' glyph-broken. @default 'plain' */
  variant?: 'plain' | 'rule' | 'ornament';
  /** Center glyph when variant='ornament'. @default "✻" */
  ornament?: string;
  /** @default 'ink' */
  tone?: 'ink' | 'sand' | 'terracotta' | 'teal';
  /** Vertical margin in px. @default 32 */
  spacing?: number;
  style?: React.CSSProperties;
}

/** Editorial dividing rule, optionally broken by a centered ornament glyph. */
export function Divider(props: DividerProps): JSX.Element;
