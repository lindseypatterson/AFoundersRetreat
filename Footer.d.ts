import * as React from 'react';

export interface FooterColumn { title: string; links: (string | { label: string; href?: string })[]; }

export interface FooterProps {
  brand?: string;
  tagline?: string;
  columns?: FooterColumn[];
  note?: string;
  style?: React.CSSProperties;
}

/** Dark teal editorial footer: script wordmark, link columns, legal rule. */
export function Footer(props: FooterProps): JSX.Element;
