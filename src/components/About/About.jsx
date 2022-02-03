import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import photo from "../../img/passportphoto.jpg";
import resume from "../../img/test.pdf";
import { FiMail } from "react-icons/fi";
import { AiOutlineCloudDownload } from "react-icons/ai";

const About = () => {
  return (
    <Fragment>
      <section id="about">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <h1>About Me</h1>
              <img className="photo" src={photo} alt="" />
            </Col>
            <Col xs={12} md={8}>
              <p>
                I majored in computer science. I first learned a programming
                language called "Python". Starting with Python, I studied the
                programming languages "Java" and "C" that provide
                object-oriented programming and system programming. I know that
                it is difficult to create brand-new programs, but after
                successfully creating the programs, I gained a sense of
                accomplishment. Websites have the advantage that anyone can
                access them as long as they have the Internet. This is my
                favorite thing about the web application. That's why I decide to
                become a web application developer.
                <br />
                <br />
                <br />I know the programming industry is changing rapidly and I
                am open to learning new programming languages and new advanced
                technologies. I would like to work as a team, share knowledge
                and help each other.
              </p>
            </Col>
            <Row className="contact">
              <Col>
                <h1>Contact Details</h1>
                <p>Name: Heechul Shin</p>
                <p>
                  Email: heeshin174@gmail.com
                  <span>
                    <a href="mailto: abc@example.com">
                      <FiMail className="mailIcon" />
                    </a>
                  </span>
                </p>
                <Button
                  type="submit"
                  onClick={() => window.open(resume)}
                  className="btn-download"
                >
                  <span className="downloadIcon">
                    <AiOutlineCloudDownload />
                  </span>
                  Download Resume
                </Button>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default About;
