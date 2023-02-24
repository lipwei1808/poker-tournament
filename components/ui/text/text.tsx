import {
  forwardRef,
  Ref,
  createElement,
  ForwardRefExoticComponent,
  RefAttributes,
  HTMLProps,
} from 'react';

import { BaseProps, generateBaseProps, TextVariants } from '../constants';

import classes from './text.module.scss';

type Theme = 'default' | 'primary' | 'secondary' | 'black' | 'red';

type TextTags = Extract<TextVariants, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
interface TextProps extends BaseProps {
  variant?: TextVariants;
  theme?: Theme;
  alignment?: 'left' | 'center' | 'right';
  underline?: boolean;
  themeless?: boolean;
}

interface DivTextProps extends TextProps, HTMLProps<HTMLDivElement> {}
interface HeadingTextProps extends TextProps, HTMLProps<HTMLHeadingElement> {}
interface ParagraphTextProps extends TextProps, HTMLProps<HTMLParagraphElement> {}
interface SpanTextProps extends TextProps, HTMLProps<HTMLSpanElement> {}

const textTags: TextTags[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const _Text = forwardRef(
  (
    {
      children,
      variant = 'body1',
      theme = 'default',
      alignment = 'left',
      underline,
      themeless,
      ...restProps
    }: DivTextProps,
    ref: Ref<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      {...restProps}
      {...generateBaseProps(restProps, {
        className: `${classes[variant]} ${themeless ? '' : classes[theme]} ${
          classes[`alignment-${alignment}`]
        } ${underline ? classes.underline : ''}`,
      })}
    >
      {children}
    </div>
  )
);

const headingTags: Record<
  TextTags,
  ForwardRefExoticComponent<HeadingTextProps & RefAttributes<HTMLHeadingElement>>
> = {} as Record<
  TextTags,
  ForwardRefExoticComponent<HeadingTextProps & RefAttributes<HTMLHeadingElement>>
>;
textTags.forEach((tag: TextTags) => {
  Object.assign(headingTags, {
    [tag]: forwardRef(
      (
        {
          children,
          variant = tag,
          theme = 'default',
          alignment = 'left',
          underline,
          themeless,
          ...restProps
        }: HeadingTextProps,
        ref: Ref<HTMLHeadingElement>
      ) => {
        const props = {
          ref,
          ...restProps,
          ...generateBaseProps(restProps, {
            className: `
            ${classes[variant]}
            ${themeless ? '' : classes[theme]}
            ${classes[`alignment-${alignment}`]}
            ${underline ? classes.underline : ''}
            `,
          }),
        };
        return createElement(tag, props, children);
      }
    ),
  });
});

const paragraph = forwardRef(
  (
    {
      children,
      variant = 'body1',
      theme = 'default',
      alignment = 'left',
      underline,
      themeless,
      ...restProps
    }: ParagraphTextProps,
    ref: Ref<HTMLParagraphElement>
  ) => (
    <p
      ref={ref}
      {...restProps}
      {...generateBaseProps(restProps, {
        className: `${classes[variant]} ${themeless ? '' : classes[theme]}  ${
          classes[`alignment-${alignment}`]
        } ${underline ? classes.underline : ''} `,
      })}
    >
      {children}
    </p>
  )
);

const span = forwardRef(
  (
    {
      children,
      variant = 'body1',
      theme = 'default',
      alignment = 'left',
      underline,
      themeless,
      ...restProps
    }: SpanTextProps,
    ref: Ref<HTMLSpanElement>
  ) => (
    <span
      ref={ref}
      {...restProps}
      {...generateBaseProps(restProps, {
        className: `${classes[variant]} ${themeless ? '' : classes[theme]}  ${
          classes[`alignment-${alignment}`]
        } ${underline ? classes.underline : ''} `,
      })}
    >
      {children}
    </span>
  )
);

const Text = Object.assign(_Text, { ...headingTags, paragraph, span });

export { Text };
