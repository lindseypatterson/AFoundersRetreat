import * as React from 'react';

export interface BlogCardProps {
  image?: string;
  imageAlt?: string;
  title?: React.ReactNode;
  excerpt?: React.ReactNode;
  date?: React.ReactNode;
  href?: string;
  style?: React.CSSProperties;
}

/** Compact horizontal blog row (thumbnail + title + teaser + date) for sidebars/lists. */
export function BlogCard(props: BlogCardProps): JSX.Element;
