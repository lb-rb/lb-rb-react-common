import React, {Component, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import styled from '@emotion/styled';

import DefaultLayout from 'components/layouts/DefaultLayout';
import Title from 'components/Title';
import createUrl from 'utils/createUrl';
import navigation from '../../data/navigation/primary.yml';

type Props = {};

const TitleRow = styled(Row)`
  text-align: center;
  margin: auto;
`;

const ContentRow = styled(Row)`
  width: 80vw;
  margin: auto;
`;

class PageNotFound extends Component<Props> {
  render() {
    return (
      <DefaultLayout navigation={navigation}>
        <Title title="Page not found!" url={createUrl('/404')} />
        <TitleRow>
          <Col>
            <h1>Page not found!</h1>
            <p>Page does not exist!</p>
          </Col>
        </TitleRow>
      </DefaultLayout>
    );
  }
}

export default PageNotFound;
