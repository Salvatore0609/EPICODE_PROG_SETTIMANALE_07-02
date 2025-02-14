import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TopBar from "./components/NavBar";
/* import NetflixProfile from "./components/MyProfile"; */
/* import AccountSettings from "./components/Settings"; */
import OrganizationArea from "./components/OrganizationArea";

function App() {
  return (
    <Container fluid className="p-0 bg-dark">
      <TopBar />
      <OrganizationArea />
      <Home />
      {/* <AccountSettings />  */}
      {/* <NetflixProfile /> */}
      <Footer />
    </Container>
  );
}

export default App;
