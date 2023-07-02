import React from 'react';
import {media} from '../../../utils/media';

type Props = {
  children: Node,
};

const ButtonItem = ({children}: Props) => (
  <div
    css={{
      [media.between('small', 'large')]: {
        paddingLeft: 20,
      },

      [media.greaterThan('xlarge')]: {
        paddingLeft: 40,
      },

      '&:first-of-type': {
        textAlign: 'right',
        paddingLeft: 7,
        paddingRight: 7,

        [media.lessThan('small')]: {
          marginBottom: 10,
        },
      },

      '&:nth-of-type(2)': {
        paddingLeft: 7,
        paddingRight: 7,

        [media.lessThan('small')]: {
          marginBottom: 10,
        },

        [media.greaterThan('small')]: {
          paddingLeft: 15,
        },
      },
    }}>
    {children}
  </div>
);

export default ButtonItem;
