import { Container } from "react-bootstrap";
import MovieGallery from "./MovieGallery"; // Importa il componente MovieGallery

const Home = () => {
  return (
    <Container fluid className="px-4 text-light">
      <MovieGallery category="Harry Potter" />

      <MovieGallery category="Lord Of Rings" />

      <MovieGallery category="Star Wars" />
    </Container>
  );
};

export default Home;
