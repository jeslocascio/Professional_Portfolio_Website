import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from '../assets/Jesse_LoCascio_Logo.png';
import "../styles/index.css";
import "../styles/Header.css";

function Header() {
  return (
    <>
    <Navbar className="header" expand="md">
      <Container>
        <Navbar.Brand href="#">
        <img src={Logo} className="brandLogo" alt="Jesse LoCascio Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link">
              About Me
            </Nav.Link>
            <Nav.Link href="#portfolio" className="nav-link">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default Header
