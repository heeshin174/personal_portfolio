import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "./Icon";
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
                <span>• January 2018- December 2021</span>
              </p>
              <p>
                In my first year, I studied Academic English at INTO UAB. In the
                Second year, I studies the foundations of mathematics, physics,
                and the syntax of the programming language Python. In the third
                year, I studies object-oriented programming with Java, system
                programming with C, Network security, and functional programming
                with Dr.Racket. In the fourth year, I studied Web app
                development with Python flask, database app development with
                postgresql, Software Engineer with Javafx, and computer
                Security.
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
            <Col className="skillCol">
              <h1>
                <span>SKILLS</span>
              </h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm>
              <h4>
                <span>Programming Language</span>
              </h4>
            </Col>
            <Col sm className="skills">
              <Icon iname="python" />
              <Icon iname="java" />
              <Icon iname="c" />
            </Col>
            <Col sm className="skills">
              <Icon iname="nodejs" />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <h4>
                <span>FrontEnd</span>
              </h4>
            </Col>
            <Col sm className="skills">
              <Icon iname="react" />
              <Icon iname="html5" />
              <Icon iname="css3" />
            </Col>
            <Col sm className="skills">
              <Icon iname="bootstrap" />
              <i className="devicon-typescript-plain colored technology"></i>
              <i className="devicon-javascript-plain colored technology"></i>
            </Col>
            <Col sm className="skills">
              <i className="devicon-materialui-plain colored technology"></i>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <h4>
                <span>BackEnd</span>
              </h4>
            </Col>
            <Col xs={12} md={8} className="skills">
              <i className="devicon-express-original-wordmark colored technology"></i>
              <i className="devicon-flask-original-wordmark colored technology"></i>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col xs={6} md={4}>
              <h4>
                <span>Database</span>
              </h4>
            </Col>
            <Col xs={12} md={8} className="skills">
              <Icon iname="postgresql" />
              <Icon iname="mongodb" />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <h4>
                <span>ETC</span>
              </h4>
            </Col>
            <Col xs={12} md={8} className="skills">
              <Icon iname="git" />
              <Icon iname="docker" />
              <Icon iname="amazonwebservices" />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Resume;
