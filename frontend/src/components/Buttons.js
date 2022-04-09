import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, { useEffect, useState } from "react";

function insertclick(phone_num) {
    console.log(phone_num);
    // phone_num = phone_num.trim();
    phone_num = phone_num.slice(1);
    window.location.href = `http://localhost:3000/insert/?phone=${phone_num}`;
  }
  
  function deleteclick(phone_num) {
    console.log(phone_num);
    phone_num = phone_num.slice(1);
    window.location.href = `http://localhost:3000/delete/?phone=${phone_num}`;
  }

  const [phone_value, setValue] = useState()

  