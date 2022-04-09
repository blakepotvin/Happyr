import "./App.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input type="phone" placeholder="Phone Number" />
        <Row>
          <Col>
            <Button variant="primary" href="">Insert</Button>
          </Col>
          <Col>
            <Button variant="danger">Delete</Button>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
