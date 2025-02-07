import { Component } from "react";
import { Container, Spinner, Alert, Row, Col } from "react-bootstrap";

const API_KEY = "2331de3e";

class MovieGallery extends Component {
  state = {
    movies: [],
    loading: true,
    error: null,
    selectedMovie: null,
  };

  async componentDidMount() {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${this.props.title}&apikey=${API_KEY}`);
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

  handleImageClick = (movie) => {
    this.setState({ selectedMovie: movie === this.state.selectedMovie ? null : movie });
  };

  render() {
    const { movies, loading, error, selectedMovie } = this.state;

    return (
      <Container fluid className="text-light">
        {loading && <Spinner animation="border" variant="light" />}
        {error && <Alert variant="danger">{error}</Alert>}

        {/* Carosello orizzontale */}
        <div className="movie-carousel-container pt-5 pb-2">
          <h4>{this.props.title} - Movies</h4>

          <Row className="movie-carousel-row px-2 gap-3">
            {movies.map((movie) => (
              <Col key={movie} className="movie-item p-0 text-center" xs={6} sm={4} md={3} lg={2}>
                <div onClick={() => this.handleImageClick(movie)} style={{ cursor: "pointer" }}>
                  <img
                    className="img-fluid"
                    src={movie.Poster}
                    alt={movie.Title}
                    style={{
                      maxHeight: "100%",
                      width: "auto",
                      height: 400,
                      objectFit: "contain",
                    }}
                  />
                </div>
                {selectedMovie === movie && (
                  <div className="movie-text">
                    <h5 className="mt-2">{movie.Title}</h5>
                    <p className="text-secondary mb-0">{movie.Year}</p>
                  </div>
                )}
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}

export default MovieGallery;
