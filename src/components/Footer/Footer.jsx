import React from "react";
import { Link } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillCaretUp } from "react-icons/ai";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <Link to="home" smooth={true} duration={1000}>
              <AiFillCaretUp className="upicon" />
            </Link>
          </Col>
          <Col>
            <p>&copy; Copyright {new Date().getFullYear()} Heechul Shin</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
