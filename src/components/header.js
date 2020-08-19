import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import { connect } from 'react-redux'
import Image from 'react-bootstrap/Image'

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faMicrophone, faSun, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import FavoriteIcon from '../components/icons/Favorite'
import DollarIcon from '../components/icons/Dollar'

fontawesome.library.add(faVolumeUp, faMicrophone, faSun, faChevronRight);

const UserPill = React.forwardRef(({ children, onClick }, ref) => (
  <span
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </span>
));

const Header = ({ user }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Logotype</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="d-flex align-items-center">
            <FavoriteIcon/>
            <span className="ml-2">{user.stars}</span>
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center">
            <DollarIcon/>
            <span className="ml-2">{user.amount}</span>
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle as={UserPill}>
              <Nav.Link className="d-flex align-items-center">
                <strong className="mr-2">{user.name}</strong>
                <Image roundedCircle src="https://loremflickr.com/40/40" />
              </Nav.Link>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="d-flex justify-content-between">
                Profile
                <FontAwesomeIcon icon="chevron-right" />
              </Dropdown.Item>
              <Dropdown.Item className="d-flex justify-content-between">
                Preference
                <FontAwesomeIcon icon="chevron-right" />
              </Dropdown.Item>
              <Dropdown.Item className="d-flex justify-content-between">
                Signout
                <FontAwesomeIcon icon="chevron-right" />
              </Dropdown.Item>
              <Dropdown.Divider />
              <div className="d-flex my-3 mx-4">
                <FontAwesomeIcon icon="volume-up" className="mr-2"/>
                <Form.Control type="range" custom />
              </div>
              <div className="d-flex my-3 mx-4">
                <FontAwesomeIcon icon="microphone" className="mr-2"/>
                <Form.Control type="range" custom />
              </div>
              <div className="d-flex my-3 mx-4">
                <FontAwesomeIcon icon="sun" className="mr-2"/>
                <Form.Control type="range" custom />
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default connect (state => ({
  user: state.App.user
}), null)(Header)
