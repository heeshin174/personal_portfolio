import "./styles.css";
import { Button } from "react-bootstrap";


const Hero = () => {
  return (
    <main className="hero">
      <div className="lg">
        <h1>
          <span className="title">I am Heechul Shin</span>
        </h1>
        <h3>
          I'm a Turin based <span>Full-Stack Web Developer</span>. I like to
          code things from scratch, and enjoy bringing ideas to life in the
          browser.
        </h3>
        <div>
          <div>
            <Button
              variant="primary"
              onClick={() => (window.location = "#about")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
