import { faArrowRight, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Blog.css"

const Blog = ({blog}) => {
    // loading blogs from prop to show
    const {title, pic, writter, article, source, link} = blog;
    const arrow = <FontAwesomeIcon icon={faArrowRight} />
    const eye = <FontAwesomeIcon icon={faEye} />
    return (
        <div>
            <Col className="mx-auto">
                <Card className="card">
                    <Card.Img height="200vh" variant="top" src={pic} />
                    <Card.Body>
                        <Card.Title className="title text-center">{title}</Card.Title>
                        <h6 className="mt-3"><span className="text-muted">By:</span> <span className="text-primary">{writter}</span></h6>
                        <Card.Text className="">
                            {article}
                        </Card.Text>
                        <p className="text-muted">Source: {source}</p>
                        <div className="d-flex justify-content-end"><a target="_blank" rel="noopener noreferrer" className="detail" href={link}>{eye} watch full {arrow}</a></div>
                    </Card.Body>        
                </Card>
            </Col>
        </div>
    );
};

export default Blog;