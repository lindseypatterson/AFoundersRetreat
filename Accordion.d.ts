import * as React from 'react';

export interface AccordionItem { q: React.ReactNode; a: React.ReactNode; }

export interface AccordionProps {
  items: AccordionItem[];
  /** Index open on mount. @default 0 */
  defaultOpen?: number;
  /** Allow multiple open at once. @default false */
  multi?: boolean;
  style?: React.CSSProperties;
}

/** FAQ disclosure list with editorial ink rules and a rotating + toggle. */
export function Accordion(props: AccordionProps): JSX.Element;
