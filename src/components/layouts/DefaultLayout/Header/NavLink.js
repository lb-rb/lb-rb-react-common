import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';

import {media} from '../../../../utils/media';
import {colors} from 'styles/theme';

class NavLink extends React.Component {
  static get propTypes() {
    return {
      title: PropTypes.string.isRequired,
      to: PropTypes.string,
      isActive: PropTypes.bool.isRequired,
    };
  }

  render() {
    return (
      <Nav.Item>
        <Nav.Link href={this.props.to} eventKey={(this.props.to + "/").replace('//', '/')}>
          {this.props.title}
        </Nav.Link>
      </Nav.Item>
    )
  }
}

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 900,
  fontSize: 'x-large',

  [media.size('xsmall')]: {
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 'smaller',
  },

  [media.between('small', 'medium')]: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 'large',
  },

  [media.greaterThan('xlarge')]: {
    paddingLeft: 20,
    paddingRight: 20,
  },
};

const activeStyle = {
  color: colors.activeNavLink,

  [media.greaterThan('small')]: {
    position: 'relative',
  },
};

export default NavLink;
