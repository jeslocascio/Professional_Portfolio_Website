import Selfie from '../assets/Photo_Of_Me.jpg';
import {Container} from "react-bootstrap";
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <Container className="About_Me">
        <img src={Selfie} className="photoOfMe" alt="Jesse LoCascio" />
        <div className="line"></div>
        <div className="blurb">
        <p>
        Hello! My name is Jesse LoCascio. Currently, I am on an exciting journey as a full-stack web
        developer. My path began with a strong foundation in the arts, as I hold
        a BFA in Visual Arts with a concentration in Visual Communications (in
        simpler terms, I have a Graphic Design degree). This creative background
        fuels my passion for web development, where design and code come
        together in a really enticing way.
      </p>
      <p>
        My journey has been a dynamic one. I have been a pioneer in the pilot
        program for an AP Computer Science class in high school, led club events
        and workshops as a club president in college, and eagerly attended a
        range of technology conventions after college. Each experience has been
        a stepping stone in my pursuit of excellence in this new field. As I
        move forward, I am committed to providing fresh insights and innovative
        solutions to the ever-evolving world of web development. Join me as we
        explore the limitless possibilities of this digital landscape.
      </p>
        </div>
    </Container>
  );
}

export default AboutMe;
