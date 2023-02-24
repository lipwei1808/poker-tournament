import { forwardRef, Ref } from 'react';

import { BaseProps, generateBaseProps } from '../constants';

import classes from './divider.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DividerProps extends BaseProps {
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = forwardRef(
  ({ orientation = 'horizontal', ...restProps }: DividerProps, ref: Ref<HTMLHRElement>) => (
    <hr
      ref={ref}
      {...restProps}
      {...generateBaseProps(restProps, { className: `${classes[orientation]}` })}
    />
  )
);
