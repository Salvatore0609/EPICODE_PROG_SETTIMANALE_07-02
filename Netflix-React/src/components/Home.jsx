import { Container } from "react-bootstrap";
import MovieGallery from "./MovieGallery"; // Importa il componente MovieGallery

const Home = () => {
  return (
    <Container fluid className="px-4 text-light">
      <MovieGallery title="Harry Potter" />

      <MovieGallery title="Lord Of Rings" />

      <MovieGallery title="Star Wars" />
    </Container>
  );
};

export default Home;
