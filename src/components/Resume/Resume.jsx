import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";

const Resume = () => {
  return (
    <Fragment>
      <section id="resume">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={6} md={4}>
              <h1>
                <span>EDUCATION</span>
              </h1>
            </Col>
            <Col xs={12} md={8} className="education">
              <h3>University of Alabama at Birmingham</h3>
              <p className="info">
                Bachelor of Science (B.S.) degree in Computer Science
              </p>
              <p>
                The first year required the study of foundations of mathematics,
                physics, computer science, computer networks and electronics.
                The second year required the study of advanced mathematics and
                physics, and the fundamentals of electronic systems. The first
                year required the study of foundations of mathematics, physics,
                computer science, computer networks and electronics. The second
                year required the study of advanced mathematics and physics, and
                the fundamentals of electronic systems.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <h1>
                <span>WORK</span>
              </h1>
            </Col>
            <Col xs={12} md={8} className="work">
              <h3>Be the first company to work with me!</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h1>
                <span>SKILLS</span>
              </h1>
            </Col>
            <Col>
              <div className="skills">
                <i className="devicon-heroku-plain-wordmark technology"></i>
                <i className="devicon-express-original-wordmark colored technology"></i>
                <i className="devicon-bootstrap-plain-wordmark technology"></i>
                <i className="devicon-css3-plain-wordmark colored technology"></i>
                <i className="devicon-mongodb-plain-wordmark colored technology"></i>
                <i className="devicon-html5-plain-wordmark colored technology"></i>
                <i className="devicon-typescript-plain colored technology"></i>
                <i className="devicon-javascript-plain colored technology"></i>
                <i className="devicon-postgresql-plain-wordmark  technology"></i>
                <i className="devicon-flask-original-wordmark colored technology"></i>
                <i className="devicon-c-plain-wordmark colored technology"></i>
                <i className="devicon-react-plain-wordmark colored technology"></i>
                <i className="devicon-java-plain-wordmark technology"></i>
                <i className="devicon-python-plain-wordmark colored technology"></i>
                <i className="devicon-docker-plain-wordmark technology"></i>
                <i className="devicon-mysql-plain-wordmark colored technology"></i>
                <i className="devicon-github-original-wordmark colored technology"></i>
                <i className="devicon-amazonwebservices-plain-wordmark colored technology"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Resume;
