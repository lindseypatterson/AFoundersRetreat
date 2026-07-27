import * as React from 'react';

export interface CardProps {
  /** Image URL for the framed 4:3 photo. */
  image?: string;
  imageAlt?: string;
  /** Category label shown above the title. */
  tag?: React.ReactNode;
  tagTone?: 'terracotta' | 'teal' | 'olive' | 'ink' | 'cobalt';
  title?: React.ReactNode;
  /** Body copy (children). */
  children?: React.ReactNode;
  /** Uppercase metadata line under the body (e.g. a date). */
  meta?: React.ReactNode;
  href?: string;
  /** @default 'Read more' */
  linkLabel?: string;
  /** @default 'left' */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

/**
 * Editorial image card — boxy framed 4:3 photo, tag, serif title, body, and an
 * uppercase "read more" link. Hover slowly zooms the photo.
 *
 * @startingPoint section="Content" subtitle="Editorial image card" viewport="700x150"
 */
export function Card(props: CardProps): JSX.Element;
