import "./App.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, { useEffect, useState } from "react";

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


  const [phone_value, setValue] = useState()
  return (
    <div className="App">
      <header className="App-header">
      <PhoneInput id="phone"
        placeholder="Enter phone number"
        value={phone_value}
        onChange={setValue}/>
        {/* <input type="phone" id="phone" placeholder="Phone Number" /> */}
        <Row>
          <Col>
            <Button variant="primary" onClick={() => insertclick(phone_value)}>Insert</Button>
            {/* <Button variant="primary" onClick={() => insertclick(document.getElementById("phone").value)}>Insert</Button> */}
          </Col>
          <Col>
            <Button variant="danger" onClick={() => deleteclick(document.getElementById("phone"))}>Delete</Button>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
