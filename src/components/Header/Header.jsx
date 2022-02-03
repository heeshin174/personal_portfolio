import "./style.css";
import logo from "../../img/HatchfulExport_All/logo2.png";
import { Nav, Navbar, Container } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    <header id="home">
      <Navbar bg="dark" variant="dark" expand="lg" className="p-0" fixed="top">
        <Container className="p-0 bar">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              className="d-inline-block align-top logo"
              onClick={() => scroll.scrollToTop()}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav className="socialicons">
              <Nav.Link href="https://www.github.com/heeshin174">
                <AiFillGithub className="socialicon" />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/heechul-shin-077738221/">
                <AiFillLinkedin className="socialicon" />
              </Nav.Link>
              <Nav.Link href="https://discord.gg/user/Heechul#5868">
                <FaDiscord className="socialicon" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
