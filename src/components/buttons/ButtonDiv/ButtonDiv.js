import React from 'react';
import {media} from '../../../utils/media';
import {colors} from 'styles/theme';

type Props = {
  children: Node,
  type: string,
  // eslint-disable-next-line flowtype/no-weak-types
  rest: Array<any>,
};

const ButtonDiv = ({children, action, type}: Props) => {
  if (!colors.buttons.hasOwnProperty(type)) {
    throw new Error(`Unknown ButtonLink type "${type}"`);
  }

  return (
    <div onClick={action} css={[baseStyle, styleFor(type)]}>
      {children}
    </div>
  );
};

const baseStyle = {
  display: 'inline-block',
  padding: '10px 25px',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.2s ease-out',
  fontSize: 16,
  fontWeight: 600,

  [media.greaterThan('xlarge')]: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 20,
  },
};

const styleFor = (type) => ({
  backgroundColor: colors.buttons[type].default.background,
  color: colors.buttons[type].default.text,
  ':hover': {
    color: colors.buttons[type].hover.text,
    backgroundColor: colors.buttons[type].hover.background,
  },
});

export default ButtonDiv;
