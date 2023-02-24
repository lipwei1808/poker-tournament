import {
  forwardRef,
  Ref,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';
import Link from 'next/link';

import { BaseProps, generateBaseProps, TextVariants } from '../constants';
import textClasses from '../text/text.module.scss';

import classes from './button.module.scss';

type ButtonThemes = 'default' | 'primary' | 'success' | 'warning';
type ButtonVariants = 'solid' | 'outline' | 'ghost';
type SIZES = 'sm' | 'md' | 'lg';

interface ComponentButtonProps extends BaseProps {
  theme?: ButtonThemes;
  variant?: ButtonVariants;
  size?: SIZES;
}
interface ButtonProps
  extends ComponentButtonProps,
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

interface ButtonLinkProps
  extends ComponentButtonProps,
    DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {}

interface LinkProps
  extends ComponentButtonProps,
    DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {}

const sizeMap: Record<SIZES, TextVariants> = {
  sm: 'subtitle2',
  md: 'subtitle2',
  lg: 'body1',
};

const _Button = forwardRef(
  (
    { children, theme = 'default', variant = 'solid', size = 'md', ...restProps }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      type="submit"
      {...restProps}
      {...generateBaseProps(restProps, {
        className: `
        ${classes.base}
        ${textClasses[sizeMap[size]]}
        ${classes[size]}
        ${classes[`${theme}-${variant}`]}
         `,
      })}
    >
      {children}
    </button>
  )
);

const _Link = forwardRef(
  (
    {
      children,
      theme = 'default',
      variant = 'solid',
      size = 'md',
      href = '#',
      ...restProps
    }: ButtonLinkProps,
    ref: Ref<HTMLAnchorElement>
  ) => (
    <Link href={href} passHref>
      <a
        href="dummy"
        ref={ref}
        {...restProps}
        {...generateBaseProps(restProps, {
          className: `
            ${classes.base}
            ${textClasses[sizeMap[size]]}
            ${classes[size]}
            ${classes[`${theme}-${variant}`]}
            `,
        })}
      >
        <button type="button">{children}</button>
      </a>
    </Link>
  )
);

const _ExternalLink = forwardRef(
  (
    { children, theme = 'default', variant = 'solid', size = 'md', ...restProps }: LinkProps,
    ref: Ref<HTMLAnchorElement>
  ) => (
    <a
      target="_blank"
      rel="noreferrer"
      ref={ref}
      {...restProps}
      {...generateBaseProps(restProps, {
        className: `
    ${classes.base}
    ${textClasses[sizeMap[size]]}
    ${classes[size]}
    ${classes[`${theme}-${variant}`]}
     `,
      })}
    >
      {children}
    </a>
  )
);

const Button = Object.assign(_Button, {
  Link: _Link,
  ExternalLink: _ExternalLink,
});

export { Button };
