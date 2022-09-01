import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    // user loaded
    const {logOut, user} = useAuth();
    const logout = <FontAwesomeIcon icon={faSignOutAlt}/>
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="white">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <div className="border border-dark mx-2 d-inline-block p-2 rounded-circle">
                            <img
                                src="https://image.flaticon.com/icons/png/512/1186/1186516.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </div> 
                    </Link>
                    <Link to="/" className="text-decoration-none">
                        <span className="text-dark fw-bold">Heal-Lab</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fw-bold fs-6 fw d-flex justify-content-around align-items-center">
                        <Nav.Link className="text-dark me-4 link" as={ HashLink } to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-dark me-4 link" as={ HashLink } to="/services#services">Services</Nav.Link>
                        <Nav.Link className="text-dark me-4 link" as={ Link } to="/about">About</Nav.Link>
                        <Nav.Link className="text-dark me-4 link" as={HashLink} to="/blogs#blogs">Blogs</Nav.Link>
                        <Nav.Link className="text-dark me-4 link" as={HashLink} to="/contact#contact">Contact</Nav.Link>
                        <div>
                            {/* toggle log in logout */}
                            {
                                user?.emailVerified ? <Nav.Link><div><span className="mt-1 text-success">{ (user?.email).slice(0, (user.email.length-10))} </span><button className="btn btn-dark rounded-pill" onClick={logOut}>logout {logout}</button></div></Nav.Link> : <Nav.Link className="text-dark me-4 link" as={Link} to="/login">Login</Nav.Link>
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Header;