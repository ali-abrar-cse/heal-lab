import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    // footer icons
    const phone = <FontAwesomeIcon icon={faPhone}/>
    const mail = <FontAwesomeIcon icon={faEnvelope}/>
    const facebook = <FontAwesomeIcon icon={faFacebook}/>
    return (
        <div className="mt-5 bg-dark text-white">
            <Container className="d-flex flex-column flex-lg-row justify-content-evenly pt-2 pb-3">
                <div className="d-flex flex-column">
                    <h4>Go to</h4>
                    <HashLink className="text-decoration-none text-white" to="/home#home">Home</HashLink>
                    <HashLink className="text-decoration-none text-white" to="/contact#contact">Contact us</HashLink>
                    <HashLink className="text-decoration-none text-white" to="/about#about">About</HashLink>
                    <HashLink className="text-decoration-none text-white" to="/services#services">Services</HashLink>
                </div>
                <div>
                    <h4>Working Day</h4>
                    <p>Sunday-Thursday: 8:00 - 22:00</p>
                    <p>Friday, Saturday: Off</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>{phone} 0177777777</p>
                    <p>{mail} heallab@gmail.com</p>
                    <p>{facebook} Heal Lab</p>
                </div>
            </Container>
            <h4 className="text-center"> &copy; Copyright 2020-2030</h4>
            <p className="text-center text-muted pb-2 mb-0">All Rights Reserved. Powered by SAP</p>
        </div>
    );
};

export default Footer;