import * as React from 'react';

export interface RibbonProps {
  /** Repeated phrase. @default "The Founders' Edit" */
  text?: string;
  /** Glyph between repeats. @default "✻" */
  separator?: string;
  /** @default 'cobalt' */
  tone?: 'cobalt' | 'terracotta' | 'olive' | 'teal' | 'ink';
  /** Seconds per loop (higher = slower). @default 32 */
  speed?: number;
  /** Repeats per strip. @default 8 */
  count?: number;
  style?: React.CSSProperties;
}

/**
 * Signature scrolling marquee band — full-bleed strip of repeating letterspaced
 * text. Use between sections as a rhythm/brand device.
 *
 * @startingPoint section="Primitives" subtitle="Scrolling marquee band" viewport="700x60"
 */
export function Ribbon(props: RibbonProps): JSX.Element;
