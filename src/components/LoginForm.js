import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/LoginForm.css';

const LoginForm = ({ setLoggedInUser }) => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (email === 'swabeadmin@gmail.com' && password === 'admin') {
        setLoggedInUser(email);
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    }
    setValidated(true);
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setEmail('');
    setPassword('');
    setValidated(false);
    setSuccessMessage('');
  };

  const handleSendVerification = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setSuccessMessage(`Verification email sent to: ${email}`);
    }
    setValidated(true);
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center" style={{ height: '95vh' }}>
        <Col md={4}>
          <Card className="login-card">
            <Card.Body>
              <Card.Title className="text-center mb-4">Login</Card.Title>
              <Card.Text className="text-muted text-center mb-4">
                Welcome back! Please login to your account.
              </Card.Text>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="username@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="mb-3">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button
                  variant="outline-primary"
                  type="submit"
                  className="custom-button w-100 mb-3"
                >
                  Login
                </Button>
              </Form>
              <div className="text-center mb-2">
                <Button variant="link" className="text-muted" onClick={handleShowModal}>
                  Forgot Password?
                </Button>
              </div>
              <div className="text-center">
                <span>New User? <a href="#signup" onClick={handleSignupRedirect}>Signup</a></span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Verify your account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter your user account's verified email address and we will send you a password reset link.</p>
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <Form noValidate validated={validated} onSubmit={handleSendVerification}>
            <Form.Group controlId="formForgotEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                isInvalid={validated && !email}
              />
              <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSendVerification} className="custom-button">
            Send Verification
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default LoginForm;
