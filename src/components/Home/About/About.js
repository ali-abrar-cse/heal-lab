import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';

const About = () => {
    const {services} = useServices();
    const about = [];
    // taking about from api
    services.map(service => about.push(service.about));
    return (
        <div>
            <Container>
                <h2 className="text-primary my-5">Who We Are</h2>
                <Row className="mx-auto gy-5" md={2} xs={1} sm={1} lg={4}>
                    {
                        // showing about info
                        about.map(info => <Col key={info.drname} className="mx-auto">
                            <Card>
                                <Card.Img variant="top" src={info?.img} />
                                <Card.Title className="text-center text-white p-2 bg-primary">{info?.drname}</Card.Title>
                                <Card.Body>
                                    <Card.Text className="fs-5 text-center fw-bold">
                                        Position: {info?.position}
                                        <br />
                                        Qualification: {info?.qualification}
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

export default About;