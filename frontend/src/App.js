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
            <Button variant="primary" onClick={()=>{
              fetch(
                "http://localhost:3000/insert?phone=1234567890"
              ).then(res => res.json())
              .then(data => console.log(data))
              .catch(err => console.log(err))
            }}>Insert</Button>
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
