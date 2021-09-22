import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';

import Logo from '../assets/images/logo.png';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/"><img src={Logo} alt="logo" /></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="active" href="/">Home</Nav.Link>
                        <Nav.Link href="/">Nft Marketplace</Nav.Link>
                        <Nav.Link href="/">DEFI</Nav.Link>
                        <Nav.Link href="/">CRICKET 360</Nav.Link>
                        <Nav.Link href="/">CoMMUNITY</Nav.Link>
                        <Nav.Link href="/">FAQ</Nav.Link>
                        <Nav.Link href="/">SUPPORT</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="btn btn-transparent" href="./">SIGN IN</Nav.Link>
                        <Nav.Link className="btn btn-shadow btn-primary" href="./">SIGN UP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;