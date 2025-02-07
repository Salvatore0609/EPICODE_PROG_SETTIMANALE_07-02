import { Component } from "react";
import { Container, Spinner, Alert, Row, Col } from "react-bootstrap";

const API_KEY = "2331de3e";

class MovieGallery extends Component {
  state = {
    movies: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${this.props.category}&apikey=${API_KEY}`);
      if (response.ok) {
        const data = await response.json();
        if (data.Search) {
          this.setState({ movies: data.Search });
        } else {
          throw new Error("Nessun film trovato");
        }
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { movies, loading, error } = this.state;

    return (
      <Container fluid className="text-light">
        {loading && <Spinner animation="border" variant="light" />}
        {error && <Alert variant="danger">{error}</Alert>}

        {/* Carosello orizzontale */}
        <div className="movie-carousel-container pt-5 pb-2">
          <h4>{this.props.category} Movies</h4>
          <Row className="movie-carousel-row px-2 gap-3">
            {movies.map((movie, index) => (
              <Col key={index} className="movie-item mb-4 text-center" xs={6} sm={4} md={3} lg={2}>
                <div>
                  <img
                    className="img-fluid"
                    src={movie.Poster}
                    alt={movie.Title}
                    style={{
                      maxHeight: "100%",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <h5 className="mt-2">{movie.Title}</h5>
                <p className="text-secondary">{movie.Year}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}

export default MovieGallery;
