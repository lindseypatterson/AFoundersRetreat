import * as React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  /** @default 'terracotta' */
  tone?: 'terracotta' | 'teal' | 'olive' | 'ink' | 'cobalt';
  /** 'outline' = hairline chip, 'pill' = filled. @default 'outline' */
  variant?: 'outline' | 'pill';
  style?: React.CSSProperties;
}

/** Small uppercase category / metadata label. */
export function Tag(props: TagProps): JSX.Element;
