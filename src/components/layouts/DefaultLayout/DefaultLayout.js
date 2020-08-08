import React, {Component} from 'react';
import styled from '@emotion/styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from './Footer';
import Header from './Header';
import Branding from 'components/layouts/DefaultLayout/Branding';

const DefaultContainer = styled(Container)`
  min-width: 300px;
`;

type Props = {
  // eslint-disable-next-line flowtype/no-weak-types
  navigation: Object,
  children: Function,
};

class DefaultLayout extends Component<Props> {
  render() {
    const {navigation, children} = this.props;

    return (
      <DefaultContainer fluid>
        <Header navigation={navigation} />
        <div />
        <Branding />
        {children}
        <Row>
          <Footer navigation={navigation} />
        </Row>
      </DefaultContainer>
    );
  }
}

export default DefaultLayout;
