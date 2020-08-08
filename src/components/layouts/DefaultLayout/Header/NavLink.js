import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';

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
        <Nav.Link
          href={this.props.to}
          eventKey={(this.props.to + '/').replace('//', '/')}>
          {this.props.title}
        </Nav.Link>
      </Nav.Item>
    );
  }
}

export default NavLink;
