import React from 'react';
import ButtonItem from '../ButtonItem';
import ButtonDiv from '../ButtonDiv';

type Props = {
  children: Node,
  action: Function,
  type: string,
};

const CTAActionButton = ({children, action, type}: Props) => {
  return (
    <ButtonItem>
      <ButtonDiv action={action} type={type}>
        {children}
      </ButtonDiv>
    </ButtonItem>
  );
};

export default CTAActionButton;
