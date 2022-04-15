import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import { ShoppingCartIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={40} src={logo} alt="" />
          </Navbar.Brand>

          <Nav>
            <Nav.Link as={Link} to="about">
              <ShoppingCartIcon height={30} width={30} />
            </Nav.Link>

            <Nav.Link as={Link} to="login" className="me-1 h5">
              Login
            </Nav.Link>

            <Nav.Link as={Link} to="register" className="btn btn-danger text-white rounded-pill px-4">
              Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
