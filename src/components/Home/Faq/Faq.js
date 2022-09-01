import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Faq = () => {
    // faq section implemented using Accordion
    return (
        <Container>
            <h2 className="text-primary my-5">Frequentry Asked Questions</h2>
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
            <Accordion className="py-4 order-2 order-lg-1 w-75 m-auto">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What about Location?</Accordion.Header>
                        <Accordion.Body>
                        To know about our address see the <Link to="/contact">contact</Link> secton.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What About Result delivery?</Accordion.Header>
                        <Accordion.Body>
                        We will sent message to your phone. We provide results within 48 hours except emergency.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What About Holidays?</Accordion.Header>
                        <Accordion.Body>
                        You will get the occational holidays. But for emergency we are 24/7 on.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What about emergency</Accordion.Header>
                        <Accordion.Body>
                        We are always on for emergency. Our dedicted team cares much about emergency patient. You will fimd us 24/7 in case of emergency.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>How can we pay?</Accordion.Header>
                        <Accordion.Body>
                        We have every international gateways. Paypal will be easier or you can use any mastercard.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className="order-1 order-lg-2">
                    <img className="img-fluid" src="https://image.freepik.com/free-vector/faqs-concept-illustration_114360-6685.jpg" alt="" />
                </div>
        </div>
        </Container>
    );
};

export default Faq;