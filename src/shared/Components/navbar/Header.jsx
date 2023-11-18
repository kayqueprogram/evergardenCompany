import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Slider from '../carousel/Slider';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Evergarden Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Gênero" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Romance</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Ação
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Horror
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Comédia</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Outro
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
}

export default Header