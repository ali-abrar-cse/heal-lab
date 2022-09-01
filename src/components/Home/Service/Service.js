import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Col } from 'react-bootstrap';
import "./Service.css"
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {serviceName, price, thumb } = props.service;
    const {test1, test2, test3, test4} = props.service?.tests;
    const dollerIcon = <FontAwesomeIcon icon={faDollarSign} />
    const check = <FontAwesomeIcon icon={faCheck} />
    const arrow = <FontAwesomeIcon icon={faArrowRight} />
    const id = props.service?.id;
    // dynamic route
    const link = `/servicedetail/${id}`;
    return (
        <div>
            {/* loading services with 4 checklist */}
            <Col className="mx-auto">
                <Card>
                    <Card.Img variant="top" src={thumb} />
                    <Card.Body>
                        <Card.Title className="title text-center">{serviceName}</Card.Title>
                        <Card.Text className="fs-5 text-center fw-bold">
                        <sup className="fs-5 fw-normal pe-1">{dollerIcon}</sup>{(price/85.39).toFixed(2)}
                        </Card.Text>
                        <ul className="list">
                            <li><span className="pe-1">{check}</span>{test1}</li>
                            <li><span className="pe-1">{check}</span>{test2}</li>
                            <li><span className="pe-1">{check}</span>{test3}</li>
                            <li><span className="pe-1">{check}</span>{test4}</li>
                        </ul>       
                        <Link className="d-flex justify-content-center align-items-center detail" to={link}><Button varient="primary">See details {arrow}</Button></Link>
                    </Card.Body>        
                </Card>
            </Col>
        </div>
    );
};

export default Service;