## Steps to set up a component

1. Copy this snippet and paste it as a template for the new component

```
import { forwardRef, Ref } from 'react';

import { BaseProps, generateBaseProps } from '../constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ComponentProps extends BaseProps {}

export const Cmponent = forwardRef(({ ...restProps }: ComponentProps, ref: Ref<HTMLDivElement>) => (
  <div ref={ref} {...restProps} {...generateBaseProps(restProps)}>
    Hello World
  </div>
));

```

2. Update Name, of component and any props the component requires.

3. Export the component in the index.ts file of this directory

4. Use the component by importing it from '@ui'

```
import { Component } from '@ui'

.
.
.

<Component />
```
