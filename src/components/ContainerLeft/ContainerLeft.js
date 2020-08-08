import type {React, Node} from 'react';

import {media} from '../../utils/media';

const ContainerLeft = ({children}: {children: Node}) => (
  <div
    css={{
      [media.greaterThan('medium')]: {
        width: '90%',
      },

      [media.size('xxlarge')]: {
        maxWidth: 1260,
      },

      marginRight: 'auto',
      paddingLeft: 20,
      paddingRight: 20,
    }}>
    {children}
  </div>
);

export default ContainerLeft;
