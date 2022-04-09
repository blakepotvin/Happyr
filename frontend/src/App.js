import "./App.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// const axios = require('axios')

function insertclick(phone_num) {
  console.log(phone_num);
  window.location.href = `http://localhost:3000/insert/?phone=${phone_num}`;
}

function deleteclick(phone_num) {
  console.log(phone_num);
  window.location.href = `http://localhost:3000/delete/?phone=${phone_num}`;
}

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <input type="phone" id="phone" placeholder="Phone Number" />
        <Row>
          <Col>
            <Button variant="primary" onClick={() => insertclick(document.getElementById("phone").value)}>Insert</Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => deleteclick(document.getElementById("phone").value)}>Delete</Button>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
