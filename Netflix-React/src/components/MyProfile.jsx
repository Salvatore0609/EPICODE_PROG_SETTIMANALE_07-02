import { Container, Row, Col, Form, Button, Dropdown, Image } from "react-bootstrap";

const NetflixProfile = () => {
  return (
    <div className="bg-dark text-white min-vh-100 p-4">
      <Container className="profile-container mt-4">
        <h1 className="fs-1 fw-medium mb-4 border-bottom border-secondary pb-3">Edit Profile</h1>
        <Row>
          <Col md={4} className="position-relative">
            <Image src="./Netflix-assets/assets/avatar.png" alt="Profile Avatar" fluid />
            <div className="position-absolute bottom-0 start-0 p-2">
              <i className="bi bi-pencil-square text-white fs-4"></i>
            </div>
          </Col>
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label></Form.Label>
                <Form.Control type="text" className="py-3" defaultValue="Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <h3 className="fs-5 pt-5">Language:</h3>
                <Dropdown className="border-bottom border-secondary pb-5">
                  <Dropdown.Toggle variant="dark" className="border border-white rounded-0">
                    English
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="bg-dark border-white">
                    <Dropdown.Item className="text-white">Italian</Dropdown.Item>
                    <Dropdown.Item className="text-white">English</Dropdown.Item>
                    <Dropdown.Item className="text-white">Spanish</Dropdown.Item>
                    <Dropdown.Item className="text-white">French</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Maturity Settings</Form.Label>
                <p className="text-white bg-secondary border py-3">ALL MATURITY RATINGS</p>
                <p className="form-text">Show titles of all maturity ratings for this profile.</p>
                <Button variant="dark" className="border">
                  EDIT
                </Button>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Autoplay Controls</Form.Label>
                <Form.Check type="checkbox" label="Autoplay next episode in a series on all devices." defaultChecked />
                <Form.Check type="checkbox" label="Autoplay previews while browsing on all devices." defaultChecked />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row className="border-top pt-4">
          <Col className="d-flex justify-content-between">
            <Button variant="dark" className="border">
              SAVE
            </Button>
            <Button variant="dark" className="border">
              CANCEL
            </Button>
            <Button variant="dark" className="border">
              DELETE PROFILE
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NetflixProfile;
