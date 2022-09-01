import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const {services} = useServices();
    // loading all services
    return (
        <Container id="services">
            <h2 className="text-primary my-5">Our Services</h2>
            <Row className="mx-auto gy-5" md={2} xs={1} sm={1} lg={3}>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </Row>
        </Container>
    );
};

export default Services;