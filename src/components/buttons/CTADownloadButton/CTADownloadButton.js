import React from 'react';
import ButtonItem from '../ButtonItem';
import ButtonDownloadLink from '../ButtonDownloadLink';

type Props = {
  children: Node,
  to: string,
  type: string,
  className: string,
};

const CTADownloadButton = ({children, to, type, className}: Props) => {
  return (
    <ButtonItem className={className}>
      <ButtonDownloadLink
        to={to}
        type={type}
        className={className + '-content'}>
        {children}
      </ButtonDownloadLink>
    </ButtonItem>
  );
};

export default CTADownloadButton;
