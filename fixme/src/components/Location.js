import React from "react";
import Header from './Header';
import Footer from './Footer';
import "./Location.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import meeting from "./meeting.svg"
import mapspic from "./photo_2023-02-02_15-32-16.jpg"

function Location() {
    return (
        <>
            <Header/>

            <Container className="location">
                <Row>
                    <Col xs={12} className="text-center my-5">
                        <h1>We Stand Here To Assist</h1>
                        <img src={meeting} alt="Meet" className="location-image" />
                    </Col>
                    <Col xs={12} className="text-center mb-5">
                        <Form>
                            <Form.Control type="text" placeholder="Search..." />
                            <Button className="search-button my-3">Search</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} className="mb-5">
                        < img src={mapspic} alt={mapspic} className={mapspic}/>
                        <p className="partner-name">Partner Name</p>
                        <p className="shop-name">Shop Name</p>
                        <p className="contact">Contact</p>
                        <a href="#" className="location-link">
                            Location
                        </a>
                    </Col>
                    <Col xs={12} md={3} className="mb-5">
                        <p className="partner-name">Partner Name</p>
                        <p className="shop-name">Shop Name</p>
                        <p className="contact">Contact</p>
                        <a href="#" className="location-link">
                            Location
                        </a>
                    </Col>
                    <Col xs={12} md={3} className="mb-5">
                        <p className="partner-name">Partner Name</p>
                        <p className="shop-name">Shop Name</p>
                        <p className="contact">Contact</p>
                        <a href="#" className="location-link">
                            Location
                        </a>
                    </Col>
                    <Col xs={12} md={3} className="mb-5">
                        <p className="partner-name">Partner Name</p>
                        <p className="shop-name">Shop Name</p>
                        <p className="contact">Contact</p>
                        <a href="#" className="location-link">
                            Location
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text-center my-5">
                        <p className="phone-number">Phone: +123-456-7890</p>
                        <a href="#" className="telegram-link">
                            Telegram
                        </a>
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </>
    );
}

export default Location;
