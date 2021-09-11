
import "./App.css";
import EntryLogo from "./assets/res2.jpeg";
import Button from "react-bootstrap/Button";
import  Container   from "react-bootstrap/Container";

function App() {

  const handleClick=()=>{

  } // to create react-router for routing to homepage
  return (
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
        <Button variant='info' onClick={handleClick}>Take a tour</Button>{'  '}
        <Button variant='info'>Login</Button>
        </Container>
      </div>
    </div>
  );
}

export default App;
