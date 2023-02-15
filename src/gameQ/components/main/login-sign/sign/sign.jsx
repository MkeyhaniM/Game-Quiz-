import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function FormSign() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [number, setNumber] = useState(null);
  const [country, setCuontry] = useState(null);
  return (
    <Form>
      <Row>
        <Form.Group
          as={Col}
          className="col-gl-6 mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col}>
          <Form.Label>Number</Form.Label>
          <Form.Control
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder="+9924642316"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label htmlFor="disabledSelect">
            Which country do you want to play ?
          </Form.Label>
          <Form.Select
            onChange={(e) => setCuontry.target.value}
            id="disabledSelect"
          >
            <option>Disabled select</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
            <option value="England">England</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Iran">Iran</option>
            <option value="Japan">Japan</option>
            <option value="Russia">Russia</option>
            <option value="Spain">Spain</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="md-1 mt-3">
        <Form.Group as={Col} controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </Row>
      <Button className="mt-4 text text-center" variant="success" type="submit">
        Create an account
      </Button>
    </Form>
  );
}
