import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap'
import { Link } from 'react-scroll'
import Splash from './Splash'


import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar fixedTop>
          <Navbar.Header>
            <NavbarBrand>
              <Link activeClass="active" to="home" smooth spy duration={500}>
                <img src="./logo-light.png" className="logo" alt="logo" />
              </Link>
            </NavbarBrand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
                <NavItem href="#" target="_blank">Whitepaper</NavItem>
                <NavItem href="#" target="_blank">Team</NavItem>
                <NavItem href="#" target="_blank">Advisors</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Splash/>
      </div>
    );
  }
}

export default App;
