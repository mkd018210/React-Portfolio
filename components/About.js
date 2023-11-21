import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/Portfolio_Headshot.png";
import "../style/About.css";

function About() {
    return (
        <section id="about" className="py-5">
            <h1 className="about-heading">About Me</h1>
            <Container>
                <Row>
                    <Col
                    xs={12}
                    md={4}
                    className="d-flex justify-content-center mb-4 mb-md-0"
                    >
                        <Image src={avatar} rounded fluid className="about-image" />
                    </Col>
                    <Col xs={12} md={8}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center mb-4">
                                    About Me
                                </Card.Title>
                                <Card.Text>
                                    I am a 40 year old wife and mother of two. I have been in early childhood education my whole life and thought I would give something new a try. I have only been coding for 6 months as I am just finishing up my bootcamp from SMU. This is a whole new adventure for me and I am looking forward to seeing what all I can learn and do!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;