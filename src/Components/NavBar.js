import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">OpenSky</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#">Flight Board</Nav.Link>
                    <Nav.Link href="#">Surprise Me</Nav.Link>
                    <Nav.Link href="#">Feedbacks</Nav.Link>
                    <Nav.Link href="#">My Flights</Nav.Link>
                    <Nav.Link href="#">My Favr💗its</Nav.Link>
                    <Nav.Link href="#">Wheather</Nav.Link>
                    {/* if manager */}
                    <NavDropdown title="Statistics" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Flights</NavDropdown.Item>
                        <NavDropdown.Item href="#">Feedbacks</NavDropdown.Item>
                    </NavDropdown> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    }
}
export default NavBar;