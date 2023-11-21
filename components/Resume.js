import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";
import PDF from "../documentation/";

function Resume() {
    retunr (
        <section id="resume" className="resume-margin">
            <Container className="resume-section">
                <Row>
                    <Col className="text-center">
                    <h1>Resume</h1>
                    <hr className="star-primary" />
                    <Button variant="dark" href={PDF} download>
                        Download Resume
                    </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>Technical Skills</h3>
                    <hr className="star-secondary" />
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <strong>Languages:</strong> JavaScript, HTML, CSS
                        </li>
                        <li className="list-inline-item">
                            <strong>Libraries/Frameworks:</strong> React, jQuery, Bootstrap
                        </li>
                        <li className="list-inline-item">
                            <strong>Databases:</strong> MongoDB, MySQL, SQL
                        </li>
                        <li className="list-inline-item">
                            <strong>Tools/Platforms:</strong> Git, gitHub, Heroku, Insomnia
                        </li>
                    </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>Education</h3>
                    <hr className="star-secondary" />
                    <div className="resume-item">
                        <h4>High School Diploma
                            <h5>Creekview High School</h5>
                        </h4>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>Work Experience</h3>
                    <hr className="star-secondary" />
                    <div className="resume-item">
                        <h4>Full-Stack Bootcamp</h4>
                        <h5>May2023-November2023</h5>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Resume;