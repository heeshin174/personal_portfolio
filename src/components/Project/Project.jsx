import React from "react";
import "./style.css";
import { projects } from "../constants/constants.js";
import { Container, Row, Col, Card } from "react-bootstrap";

const Project = () => {
  return (
    <section id="projects">
      <Container>
        <h1>Projects</h1>
        <Row xs={1} md={2} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  {/* {project.tags.map(( tag, i)) => (
                    <Card.Text key={i}> {tag}</</Card.Text>>
                    )} */}
                </Card.Body>
                <Card.Footer>
                  <a href={project.source}>
                    <small className="text-muted">
                      <i className="devicon-github-original-wordmark colored github"></i>
                      View Source code
                    </small>
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Project;
