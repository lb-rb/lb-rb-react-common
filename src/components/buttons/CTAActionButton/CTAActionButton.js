import React from 'react';
import ButtonItem from '../ButtonItem';
import ButtonDiv from '../ButtonDiv';

type Props = {
  children: Node,
  action: Function,
  type: string,
  className: string,
};

const CTAActionButton = ({children, action, type, className}: Props) => {
  return (
    <ButtonItem className={className}>
      <ButtonDiv action={action} type={type} className={className + "-content"}>
        {children}
      </ButtonDiv>
    </ButtonItem>
  );
};

export default CTAActionButton;
