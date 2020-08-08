import React from 'react';
import styled from '@emotion/styled';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContainerLeft from 'components/ContainerLeft';
import createUrl from 'utils/createUrl';

const BrandingRow = styled(Row)`
  margin-bottom: 1em;
  height: 15vw;
`;

const LeftBox = styled(Col)`
  background-color: #07ff31;
  border-right: white;
  border-style: solid;
`;

const RightBox = styled(Col)`
  background-color: #ff2626;
  color: black;
`;

const Branding = () => (
  <BrandingRow>
    <LeftBox xs={3} md={3}></LeftBox>
    <RightBox xs={9} md={9}>
      <ContainerLeft>
        <div
          css={{
            textAlign: 'center',
            letterSpacing: '0.01em',
            height: '8vw',
            marginTop: 15,
            fontSize: 60,
          }}
        />
      </ContainerLeft>
    </RightBox>
  </BrandingRow>
);

export default Branding;
