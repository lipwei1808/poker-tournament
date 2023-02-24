import { FC, HTMLAttributes } from 'react';

import { BaseProps, generateBaseProps } from './constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputProps extends BaseProps {}

export const Input: FC<InputProps & HTMLAttributes<HTMLInputElement>> = ({
  style,
  ...restProps
}) => <input {...restProps} {...generateBaseProps(restProps)} style={{ ...style }} />;
