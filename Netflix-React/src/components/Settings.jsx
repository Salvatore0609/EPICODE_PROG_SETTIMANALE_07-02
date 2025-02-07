import { Container, Row, Col, Button, Card } from "react-bootstrap";

const AccountSettings = () => {
  return (
    <Container className="mt-4">
      <h1>Account</h1>

      {/* Prima Row: MEMBERSHIP & BILLING */}
      <Row className="mb-4">
        {/* Colonna 1: MEMBERSHIP & BILLING e Cancel Membership */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>MEMBERSHIP & BILLING</Card.Title>
              <Button variant="light" className="border border-2 w-100 mb-3">
                Cancel Membership
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Colonna 2: Altri dettagli di MEMBERSHIP & BILLING */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Row className="mb-2">
                <Col>
                  <span>student@strive.achool</span>
                  <Button className=" float-end text-decoration-none text-secondary" variant="link">
                    Change account email
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <span>Password: ********</span>
                  <Button className=" float-end text-decoration-none text-secondary" variant="link">
                    Change password
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <span>Phone: 3210441279</span>
                  <Button className=" float-end text-decoration-none text-secondary" variant="link">
                    Change phone number
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <span>PayPal: admin@strive.achool</span>
                  <Button className="float-end text-decoration-none text-secondary" variant="link">
                    Update payment info
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2 text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Billing details
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2 text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Redeem gift card or promo code
                  </Button>
                </Col>
              </Row>
              <Row className="text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Where to buy gift cards
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Seconda Row: PLAN DETAILS */}
      <Row className="mb-4">
        {/* Colonna 1: PLAN DETAILS */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>PLAN DETAILS</Card.Title>
              <p>Informazioni aggiuntive sul piano.</p>
            </Card.Body>
          </Card>
        </Col>

        {/* Colonna 2: Premium ULTRA HD e Change Plan */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Premium [ULTRA HD]</Card.Title>
              <Button className="float-end text-decoration-none text-secondary" variant="link">
                Change plan
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Terza Row: SETTINGS */}
      <Row className="mb-4">
        {/* Colonna 1: Titolo SETTINGS */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>SETTINGS</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        {/* Colonna 2: Contenuto di SETTINGS */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Row className="mb-2 text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Parental controls
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2 text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Test participation
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2 text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Manage download devices
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2 text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Activate a device
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2 text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Recent device streaming activity
                  </Button>
                </Col>
              </Row>
              <Row className="text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Sign out of all devices
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quarta Row: MY PROFILE */}
      <Row className="mb-4">
        {/* Colonna 1: Titolo MY PROFILE */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>MY PROFILE</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        {/* Colonna 2: Contenuto di MY PROFILE */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Row className="mb-2">
                <Col>
                  <span>Strive Student</span>
                  <Button className="float-end text-decoration-none text-secondary" variant="link">
                    Manage profiles
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2 text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Add profile email
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2 text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Language
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2 text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Viewing activity
                  </Button>
                </Col>
              </Row>
              <Row className="mb-2 text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Playback settings
                  </Button>
                </Col>
              </Row>
              <Row className="text-end">
                <Col>
                  <Button className="text-decoration-none text-secondary" variant="link">
                    Settings
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountSettings;
