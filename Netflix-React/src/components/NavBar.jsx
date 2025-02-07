import { Navbar, Nav, Container } from "react-bootstrap";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";
import logo from "../assets/logo.png";

const TopBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="./Home.jsx">
          <img src={logo} alt="Logo" width="100" height="55" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center text-light">
            <a href="#" className="text-light">
              <Search className="mx-3" size={20} />
            </a>
            <a href="#" className="text-light text-decoration-none">
              <span className="fw-bold" style={{ fontSize: "0.8em" }}>
                KIDS
              </span>
            </a>
            <a href="#" className="text-light">
              <Bell className="mx-3" size={20} />
            </a>
            <a href="#" className="text-light">
              <PersonCircle className="mx-3" size={20} />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
