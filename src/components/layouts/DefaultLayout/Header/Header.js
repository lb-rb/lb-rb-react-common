import React, {Component} from 'react';
import NavLink from './NavLink';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import {Location} from '@reach/router';
import {SocialIcon} from 'react-social-icons';
import styled from '@emotion/styled';

import {linksShape} from '../../../navigation/Primary';

import {colors} from 'styles/theme';
import {socialLinks} from 'config';

const SocialIconStyled = styled(SocialIcon)`
  margin-right: 1em;
`;

class HeaderNavigation extends React.Component {
  static get propTypes() {
    return {
      navigation: linksShape.isRequired,
    };
  }

  render() {
    return Object.entries(this.props.navigation.links)
      .filter(([key, link]) => {
        return !link.hasOwnProperty('header') || link.header;
      })
      .map(([key, link]) => {
        return (
          <NavLink key={key} isActive={false} title={link.title} to={link.to} />
        );
      });
  }
}

type Props = {
  // eslint-disable-next-line flowtype/no-weak-types
  navigation: Object,
};

class SocialIcons extends React.Component {
  render() {
    const {urls} = this.props;
    return urls.map(url => {
      return <SocialIconStyled url={url} />;
    });
  }
}

class Header extends Component<Props> {
  render() {
    const {navigation} = this.props;
    return (
      <Col>
        <header
          css={{
            paddingTop: 10,
            backgroundColor: colors.light.backgroundColor,
            color: colors.light.color,
          }}>
          <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="header-navbar-nav" />
              <Navbar.Collapse id="header-navbar-nav">
                <Location>
                  {({navigate, location}) => (
                    <Nav
                      defaultActiveKey="/"
                      className="mr-auto"
                      activeKey={decodeURI(
                        location.pathname.replace(/([^\/])$/, '$1/'),
                      )}>
                      <HeaderNavigation navigation={navigation} />
                    </Nav>
                  )}
                </Location>
                <SocialIcons urls={socialLinks} />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </Col>
    );
  }
}

export default Header;
