import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import {Location} from '@reach/router';

import {colors} from 'styles/theme';
import NavLink from '../Header/NavLink';

import {linksShape, sectionShape} from '../../../navigation/Primary';

class NavSections extends React.Component {
  static get propTypes() {
    return {
      sections: PropTypes.objectOf(sectionShape).isRequired,
    };
  }

  render() {
    return Object.entries(this.props.sections).map(([key, link]) => {
      return (
        <NavLink
          key={key}
          isActive={false}
          title={link.title}
          to={Object.values(link.items)[0].to}
        />
      );
    });
  }
}

class FooterNavigation extends React.Component {
  static get propTypes() {
    return {
      navigation: linksShape.isRequired,
    };
  }

  render() {
    return Object.entries(this.props.navigation.links)
      .filter(([key, link]) => {
        return !link.hasOwnProperty('footer') || link.footer;
      })
      .map(([key, link]) => {
        return (
          <div key={key}>
            <NavLink
              key={key}
              isActive={false}
              title={link.title}
              to={link.to}
            />
            {link.sections && <NavSections sections={link.sections} />}
          </div>
        );
      });
  }
}

type Props = {
  // eslint-disable-next-line flowtype/no-weak-types
  navigation: Object,
};

class Footer extends Component<Props> {
  render() {
    const {navigation} = this.props;
    return (
      <Col>
        <footer
          className="page-footer font-small blue pt-4"
          css={{
            paddingTop: 30,
            backgroundColor: colors.light.backgroundColor,
            color: colors.light.color,
          }}>
          <Navbar expand="lg">
            <Container>
              <Location>
                {({navigate, location}) => (
                  <Nav
                    defaultActiveKey="/"
                    className="mr-auto"
                    activeKey={decodeURI(
                      location.pathname.replace(/([^\/])$/, '$1/'),
                    )}>
                    <FooterNavigation navigation={navigation} />
                  </Nav>
                )}
              </Location>
            </Container>
          </Navbar>
          <br />
        </footer>
      </Col>
    );
  }
}

export default Footer;
