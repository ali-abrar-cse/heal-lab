import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Blog from '../Blog/Blog';
import CarouselCom from '../CarouselCom/CarouselCom';
import Faq from '../Faq/Faq';
import Service from '../Service/Service';
import "./Home.css"

const Home = () => {
    const {services} = useServices();
    const blogs = [];
    services.map(blog => blogs.push(blog.blog));
    const blogsSlice = blogs.slice(5);
    const updateServices = [...services];
    const slicedServices = updateServices.slice(2);
    const headOffice = services[1]?.contact;
    const arrow = <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>

    return (
        <div id="home">
            {/* loading carousel component */}
            <CarouselCom></CarouselCom>
            {/* loading 6 services */}
            <Container>
            <div className="my-5 d-flex justify-content-between">
                <h2 id="sevices" className="text-primary">Our Services</h2>
                <Link className="fs-5 detail" to="/services">See more {arrow}</Link>
            </div> 
                <Row className="mx-auto gy-5" md={2} xs={1} sm={1} lg={3}>
                    {
                        slicedServices.map(service => <Service key={service.id} service={service}/>)
                    }
                </Row>
            
                {/* loading 3 blogs */}
                <div className="my-5 d-flex justify-content-between">
                    <h2 id="blogs" className="text-primary">Blogs</h2>
                    <Link className="fs-5 detail" to="/blogs">See more {arrow}</Link>
                </div>
                <Row className="mx-auto gy-5" md={2} xs={1} sm={1} lg={3}>
                    {
                        blogsSlice.map(blog => <Blog key={blog.title} blog={blog}></Blog>)
                    }
                </Row>
            
            {/* loading faq component */}
            <Faq></Faq>
            
            {/* youtube video added */}
            <h2 className="text-primary my-5">Glimpse of US</h2>

            <div className="video-container">
            <iframe src="https://www.youtube.com/embed/a3Yn8kqYLSQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            
            {/* contact loading  */}
                <h2 id="contact" className="my-5 text-primary">Our Head Office</h2>
                <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center">
                    <div className="w-75">
                        <img className="img-fluid" src={headOffice?.map} alt="" />
                    </div>
                    <div className="pt-2 pt-lg-0">
                        <h4>Address: {headOffice?.location}</h4>
                        <p>Kolabagan, Lake Circle</p>
                        <p>Thana: Dhanmondi</p>
                        <p>Dhaka: 1207</p>
                        <p>City: {headOffice?.City}</p>
                        <p>Contact: <span className="fw-bold">{headOffice?.cell}</span></p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;