import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ListGroup } from "react-bootstrap";

const About = () => {
  return (
    <ListGroup className="" horizontal>
      <ListGroup.Item>
        <AiFillGithub />
      </ListGroup.Item>
      <ListGroup.Item>
        <AiFillLinkedin />
      </ListGroup.Item>
      <ListGroup.Item>renders</ListGroup.Item>
      <ListGroup.Item>horizontally!</ListGroup.Item>
    </ListGroup>
  );
};

export default About;
