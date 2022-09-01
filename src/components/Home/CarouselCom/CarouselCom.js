import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./CarouselCom.css";

const CarouselCom = () => {
    // simple carousel component
    return (
        <div className="h-75">
            <Carousel fade variant="dark">
            <Carousel.Item interval={2000} className="carousel-inner">
                <img
                className="d-block w-100"
                src="https://image.freepik.com/free-photo/woman-receiving-aesthetic-laser-scan_107420-74011.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>24/7 Emergency Services</h5>
                <p>we have a dedicated team who works for emergency patents. we care our patients</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className="carousel-inner">
                <img
                className="d-block w-100"
                src="https://image.freepik.com/free-photo/beautiful-female-doctor-sitting-her-office-near-ultrasound-sc_7502-8371.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Digital Technologies</h5>
                <p>We have latest machines with us. We make sure about quality.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className="carousel-inner">
                <img
                className="d-block w-100"
                src="https://image.freepik.com/free-photo/medical-engineer-using-dispenser-take-sample-blood-from-test-tube-lab_482257-2039.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Digital Lab</h5>
                <p>We are equipped with fully digital lab where we maintain a decent environment for experiment.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselCom;