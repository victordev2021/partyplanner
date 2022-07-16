import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap";
// import { async } from "@firebase/util";
export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const { signup } = useAuth();
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      console.log("Register Successfull :)");
      navigate("/dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("Correo inválido");
          break;
        case "auth/weak-password":
          setError("Password inválido");
          break;
        default:
          break;
      }
      // setError(error.message);
      // console.log(error.message);
    }
  };
  return (
    <Container>
      {error && <p>{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};
