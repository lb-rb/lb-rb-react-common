import React, {Component,useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DefaultLayout from 'components/layouts/DefaultLayout';
import Title from 'components/Title';
import createUrl from 'utils/createUrl';

import navigation from '../../data/navigation/primary.yml'

type Props = {
};

class Home extends Component<Props> {
  render() {
    return (
      <DefaultLayout navigation={navigation}>
        <Title title="Example" url={createUrl('/')} />
        <Row>
          <Col>
            This is the main page.
          </Col>
        </Row>
      </DefaultLayout>
    );
  }
}

export default Home;
