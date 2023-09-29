import React from 'react';
import ButtonItem from '../ButtonItem';
import ButtonDownloadLink from '../ButtonDownloadLink';

type Props = {
  children: Node,
  to: string,
  type: string,
};

const CTADownloadButton = ({children, to, type}: Props) => {
  return (
    <ButtonItem>
      <ButtonDownloadLink to={to} type={type}>
        {children}
      </ButtonDownloadLink>
    </ButtonItem>
  );
};

export default CTADownloadButton;
