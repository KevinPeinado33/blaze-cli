import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Navbar bg='light' expand='lg'className="mt-4 mb-4">
            <Container>
                <Link to="/" className="navbar-brand">BLAZE</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/orders" className="nav-link">Orders</NavLink>
                        <NavLink to="/products" className="nav-link">Products</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
