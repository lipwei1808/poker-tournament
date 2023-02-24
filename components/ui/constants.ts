import { CSSProperties, ReactNode } from 'react';

export type TextVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption';

export interface BaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export const generateBaseProps = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any,
  fromComponent?: { className?: string; style?: CSSProperties }
): { className?: string; style?: CSSProperties } => {
  const className: string = [fromComponent?.className, props.className]
    .filter((string: string | undefined) => string)
    .join(' ');
  return { className: className || undefined, style: props.style };
};
