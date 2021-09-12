import "./App.css";
import EntryLogo from "./assets/res2.jpeg";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Homepage from "./Homepage";

function App() {
  const handleClick = () => {}; // to create react-router for routing to homepage
  return (
    <Router>
      <Route path="/Homepage" component={Homepage} />
      <div
        style={{
          backgroundImage: `url(${EntryLogo})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
          textAlign: "center",
          color: "darkred",
          fontFamily: "cursive",
        }}
      >
        <div style={{ position: "absolute", top: "25%", left: "35%" }}>
          <h1>Delish</h1>
          <h3>...Relish your taste buds</h3>
          <Container justify>
            <Button variant="info" to="/menu">
              Take a tour
            </Button>
            {"  "}
            <Link
              className="btn btn-outline-light btn-lg"
              role="button"
              to="/Homepage"
            >
              Home
            </Link>
            <Button variant="info">Login</Button>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
