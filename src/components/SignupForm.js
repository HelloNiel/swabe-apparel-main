import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LoginForm.css";

const SignupForm = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (password !== confirmPassword) {
      event.preventDefault();
      setPasswordMismatch(true);
      return;
    } else {
      setShowModal(true);
    }
    setValidated(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <Container fluid className="login-container">
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "95vh" }}
      >
        <Col md={8}>
          <Card className="login-card">
            <Card.Body>
              <Card.Title className="text-center mb-4">Sign Up</Card.Title>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formBasicEmail" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your email.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formFullName" className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your full name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicNumber" className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your phone number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formBasicPassword" className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your password.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      controlId="formConfirmPassword"
                      className="mb-3"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please confirm your password.
                      </Form.Control.Feedback>
                      {passwordMismatch && (
                        <div className="text-danger">
                          Passwords do not match.
                        </div>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Form.Check
                        type="radio"
                        label="Male"
                        name="gender"
                        value="male"
                        onChange={(e) => setGender(e.target.value)}
                        required
                      />
                      <Form.Check
                        type="radio"
                        label="Female"
                        name="gender"
                        value="female"
                        onChange={(e) => setGender(e.target.value)}
                        required
                      />
                      <Form.Check
                        type="radio"
                        label="Other"
                        name="gender"
                        value="other"
                        onChange={(e) => setGender(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms of use & privacy policy"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                  />
                </Form.Group>
                <Button
                  variant="outline-primary"
                  type="submit"
                  className="custom-button w-100 mb-3"
                >
                  Sign Up
                </Button>
              </Form>
              <div className="text-center">
                <span>
                  Already have an account? <a href="/login">Login here</a>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Signup Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your account has been created successfully!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SignupForm;
