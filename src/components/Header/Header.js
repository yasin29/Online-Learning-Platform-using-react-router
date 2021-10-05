import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const styleNav = {
        fontWeight: "bold",
        color: "red"
    }
    const textStyle = {
        textDecoration: 'none',
        marginRight: '25px',
        color: 'white'
    }
    const element = <FontAwesomeIcon icon={faPaw} />
    return (
        <div >
            <Navbar style={{
                backgroundColor: '#0a4275',
            }} expand="lg">
                <Container fluid>
                    <Navbar.Brand style={{ marginRight: '33%', fontWeight: '600' }} to="/home"><Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>{element} InfoTech</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <NavLink
                                to="/home"
                                activeStyle={styleNav}
                                style={textStyle}

                            >
                                HOME
                            </NavLink>
                            <NavLink
                                to="/career"
                                activeStyle={styleNav}
                                style={textStyle}
                            >
                                All Courses
                            </NavLink>
                            <NavLink
                                to="/join"
                                activeStyle={styleNav}
                                style={textStyle}
                            >
                                TEACHERS
                            </NavLink>
                            <NavLink
                                to="/about"
                                activeStyle={styleNav}
                                style={textStyle}
                            >
                                ABOUT
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;