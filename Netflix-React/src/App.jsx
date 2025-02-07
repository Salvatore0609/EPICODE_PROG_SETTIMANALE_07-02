import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TopBar from "./components/NavBar";
import OrganizationArea from "./components/OrganizationArea";

function App() {
  return (
    <Container fluid className="p-0 bg-dark">
      <TopBar />
      <OrganizationArea />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
