import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <Container fluid className="mt-5 text-light">
      <Row className="justify-content-center">
        <Col xs={6}>
          <div className="mb-2">
            <Facebook className="me-2 text-secondary" size={20} />
            <Instagram className="me-2 text-secondary" size={20} />
            <TwitterX className="me-2 text-secondary" size={20} />
            <Youtube className="text-secondary" size={20} />
          </div>

          <Row className="text-secondary" style={{ fontSize: "0.8em" }}>
            <Col>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Audio and Subtitles
                </a>
              </p>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Media Center
                </a>
              </p>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Privacy
                </a>
              </p>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Contact us
                </a>
              </p>
            </Col>
            <Col>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Audio Description
                </a>
              </p>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Investor Relations
                </a>
              </p>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Legal Notices
                </a>
              </p>
            </Col>
            <Col>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Help Center
                </a>
              </p>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Jobs
                </a>
              </p>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Cookie Preferences
                </a>
              </p>
            </Col>
            <Col>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Gift Cards
                </a>
              </p>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Terms of Use
                </a>
              </p>
              <p>
                <a href="#" className="text-secondary text-decoration-none">
                  Corporate Information
                </a>
              </p>
            </Col>
          </Row>

          <Button variant="outline-secondary" size="sm" className="rounded-0 mt-3">
            Service Code
          </Button>

          <p className="mt-2 text-secondary" style={{ fontSize: "0.6em" }}>
            © 1997-2023 Netflix, Inc.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
