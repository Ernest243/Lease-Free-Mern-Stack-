import React from 'react';
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap';
import {  Link } from 'react-router-dom';

const NavBarMenu = () => {
    return (
        
        <Navbar bg="light" expand="lg">
            <Link to="/"><Navbar.Brand href="#home">LEASE FREE</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">AMENTIES</Nav.Link>
                    <Nav.Link href="#link">FLOOR</Nav.Link>
                    <Nav.Link href="#link">PLANS</Nav.Link>
                    <Nav.Link href="#link">LEASE / PURCHASE</Nav.Link>
                    <Nav.Link href="#link">CONTACT US</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange="onChange()"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{marginRight: 15}} onSubmit="onSubmitSearch()">Submit</button>
                    <Link to="/residentPortal"><Button variant="outline-info">RESIDENT PORTAL</Button></Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarMenu;