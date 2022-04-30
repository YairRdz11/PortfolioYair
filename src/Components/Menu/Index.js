import React from "react";

import 'bootstrap/dist/css/bootstrap.css';

import { Navbar, Container, Nav } from 'react-bootstrap';

function Menu(){
    return(
        <Navbar bg="dark" variant='dark' expand="sm">
        <Container>
        <Navbar.Brand href="#home">&lt;Yair/&gt;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">My Skills</Nav.Link>
            <Nav.Link href="#home">Work</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export { Menu };