import React from 'react';
import ButtonItem from '../ButtonItem';
import ButtonLink from '../ButtonLink';

type Props = {
  children: Node,
  to: string,
  type: string,
  className: string,
};

const CTAButton = ({children, to, type, className}: Props) => {
  return (
    <ButtonItem className={className}>
      <ButtonLink to={to} type={type} className={className + '-content'}>
        {children}
      </ButtonLink>
    </ButtonItem>
  );
};

export default CTAButton;
