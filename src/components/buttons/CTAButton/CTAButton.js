import React from 'react';
import ButtonItem from '../ButtonItem';
import ButtonLink from '../ButtonLink';

type Props = {
  children: Node,
  to: string,
  type: string,
};

const CTAButton = ({children, to, type}: Props) => {
  return (
    <ButtonItem>
      <ButtonLink to={to} type={type}>
        {children}
      </ButtonLink>
    </ButtonItem>
  );
};

export default CTAButton;
