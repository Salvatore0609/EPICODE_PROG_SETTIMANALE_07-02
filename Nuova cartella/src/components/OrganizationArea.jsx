import { Grid3x3, Grid } from "react-bootstrap-icons";
import { Container, Dropdown } from "react-bootstrap";

const OrganizationArea = () => {
  return (
    <Container fluid className="px-4 text-light">
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex align-items-center">
          <h2 className="mb-0">TV Shows</h2>
          <Dropdown className="ms-4">
            <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0">
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Teen</Dropdown.Item>
              <Dropdown.Item href="#">Anime</Dropdown.Item>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Kids</Dropdown.Item>
              <Dropdown.Item href="#">British</Dropdown.Item>
              <Dropdown.Item href="#">Comedies</Dropdown.Item>
              <Dropdown.Item href="#">Docuseries</Dropdown.Item>
              <Dropdown.Item href="#">Dramas</Dropdown.Item>
              <Dropdown.Item href="#">European</Dropdown.Item>
              <Dropdown.Item href="#">Sci-Fi & Fantasy</Dropdown.Item>
              <Dropdown.Item href="#">Mystery & Thriller</Dropdown.Item>
              <Dropdown.Item href="#">Horror</Dropdown.Item>
              <Dropdown.Item href="#">International</Dropdown.Item>
              <Dropdown.Item href="#">Italian</Dropdown.Item>
              <Dropdown.Item href="#">Reality & Talk Shows</Dropdown.Item>
              <Dropdown.Item href="#">Romantic</Dropdown.Item>
              <Dropdown.Item href="#">Science & Nature</Dropdown.Item>
              <Dropdown.Item href="#">Sports</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
              <Dropdown.Item href="#">USA</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex align-items-center ms-auto ">
          <a href="#" className="text-light">
            <Grid className="me-3" size={20} />
          </a>

          <a href="#" className="text-light">
            <Grid3x3 size={20} />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default OrganizationArea;
