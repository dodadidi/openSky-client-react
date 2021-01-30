import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'

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
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    }
}
export default NavBar;