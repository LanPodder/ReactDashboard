import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface HeaderNavProps {

}

class HeaderNav extends React.Component<HeaderNavProps> {
    constructor(props: HeaderNavProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Sickass brandname or image</Link></Navbar.Brand>
                {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>*/}
            </Navbar>
        );
    }
}

export default HeaderNav;