import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';

const Contact = () => {
    const {services} = useServices();
    const contact = [];
    // loading contacts from api
    services.map(service => contact.push(service?.contact));
    return (
        <div>
            <Container>
                <h2 id="contact" className="text-primary my-5">Reach Us</h2>
                <Row className="mx-auto gy-5" md={2} xs={1} sm={1} lg={4}>
                    {
                        contact.map(info => <Col key={info.location} className="mx-auto">
                            <Card>
                                <Card.Img variant="top" src={info?.map} />
                                <Card.Title className="text-center text-white p-2 bg-primary">{info?.City}</Card.Title>
                                <Card.Body>
                                    <Card.Text className="fs-5 text-center fw-bold">
                                        Area: {info?.location}
                                        <br />
                                        Cell: {info?.cell}
                                    </Card.Text>       
                                </Card.Body>        
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Contact;