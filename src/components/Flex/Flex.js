import {jsx} from '@emotion/react';

import type {Node} from 'react';

type Props = {
  basis: string,
  children: Node,
  direction: string,
  grow: number,
  halign: string,
  shrink: number,
  type: string,
  valign: string,
  // eslint-disable-next-line flowtype/no-weak-types
  rest: Array<any>,
};

/**
 * Declares a flexbox layout
 */
const Flex = ({
  children,
  direction = 'row',
  grow = 0,
  shrink = 1,
  basis = 'auto',
  type = 'div',
  align = 'flex-start',
  verticalAlign = 'flex-start',
  ...rest
}: Props) =>
  jsx(
    type,
    {
      css: {
        display: 'flex',
        flexDirection: direction,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        justifyContent: direction === 'row' ? align : verticalAlign,
        alignItems: direction === 'row' ? verticalAlign : align,
      },
      ...rest,
    },
    children,
  );

export default Flex;
