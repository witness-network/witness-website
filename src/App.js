import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap'
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
          </Navbar.Header>
        </Navbar>
        <Splash/>
      </div>
    );
  }
}

export default App;
