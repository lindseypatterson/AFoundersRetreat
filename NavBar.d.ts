import * as React from 'react';

export interface NavLink { label: string; href?: string; }

export interface NavBarProps {
  /** Script wordmark text. @default "The Founders' Edit" */
  brand?: string;
  links?: (string | NavLink)[];
  /** Active link label. */
  active?: string;
  /** Optional element rendered on the right (inline layout), e.g. a Button. */
  cta?: React.ReactNode;
  /** 'stacked' = centered wordmark + boxed link row; 'inline' = left brand, right links. @default 'stacked' */
  layout?: 'stacked' | 'inline';
  onNavigate?: (label: string) => void;
  style?: React.CSSProperties;
}

/**
 * Editorial site header — centered script wordmark over a boxed, divider-ruled
 * link row (stacked), or a conventional left-brand / right-links bar (inline).
 *
 * @startingPoint section="Navigation" subtitle="Editorial masthead nav" viewport="700x150"
 */
export function NavBar(props: NavBarProps): JSX.Element;
