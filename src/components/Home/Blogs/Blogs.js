import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Blog from '../Blog/Blog';

const Blogs = () => {
    // loading all blogs
    const {services} = useServices();
    return (
        <div id="blogs">
            <Container>
                <h2 className="my-5 text-primary">Read Health Blogs</h2>
                <Row className="mx-auto gy-5" md={2} xs={1} sm={1} lg={3}>
                    {
                        services.map(service=><Blog key={service.id} blog={service?.blog}></Blog>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;