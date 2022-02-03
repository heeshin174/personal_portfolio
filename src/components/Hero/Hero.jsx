import "./styles.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typed from "react-typed";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Container>
          <Row>
            <Col>
              <h1>HELLO WORLD!\n Welcome To My Personal Portfolio</h1>
              <h1>I am Heechul Shin</h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Typed
                className="typed-text"
                strings={[
                  "Full Stack Web App Development...",
                  "Web Design...",
                  "Web App Development...",
                  "Frontend Web Development...",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
              ></Typed>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <Button
              variant="primary"
              onClick={() => (window.location = "#about")}
              className="btn-main"
            >
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
