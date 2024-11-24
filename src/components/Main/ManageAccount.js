import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import "../css/Account.css";

const ManageAccount = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showChangeEmailModal, setShowChangeEmailModal] = useState(false);

  const handleCloseEdit = () => setShowEditModal(false);
  const handleShowEdit = () => setShowEditModal(true);

  const handleCloseChangePassword = () => setShowChangePasswordModal(false);
  const handleShowChangePassword = () => setShowChangePasswordModal(true);

  const handleCloseChangeEmail = () => setShowChangeEmailModal(false);
  const handleShowChangeEmail = () => setShowChangeEmailModal(true);

  return (
    <Container fluid className="my-profile-container d-flex align-items-center justify-content-center" style={{ height: '95vh' }}>
      <Row className="justify-content-center">
        <Col xs={12} className="d-flex justify-content-center">
          <Card className="my-profile-card shadow-sm border-0" style={{ width: '1200px' }}>
            <Card.Body>
              <h2 className="mb-5 text-center">Account Information</h2>
              <Row className="mb-3">
                <Col md={6}>
                  <div className="profile-item">
                    <strong>Full Name:</strong> Niel Patrick Penlas
                  </div>
                </Col>
                <Col md={6}>
                  <div className="profile-item">
                    <strong>Email Address:</strong> niel.ladica07@gmail.com
                    <span className="text-muted"> | <a href="#change-email" onClick={handleShowChangeEmail}>Change</a></span>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <div className="profile-item">
                    <strong>Birthday:</strong> April 11, 2004
                  </div>
                </Col>
                <Col md={6}>
                  <div className="profile-item">
                    <strong>Gender:</strong> Male
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <div className="profile-item">
                    <strong>Mobile:</strong> +639917106025
                  </div>
                </Col>
              </Row>
              <div className="d-flex justify-content-start">
                <Button variant="outline-primary" className="mt-2 custom-button" onClick={handleShowEdit}>Edit Profile</Button>
                <Button variant="outline-secondary" className="mt-2 ms-2 custom-button" onClick={handleShowChangePassword}>Change Password</Button>
              </div>
              <div className="mt-3">
                <a href="#privacy-policy" className="text-muted">Privacy Policy</a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showEditModal} onHide={handleCloseEdit} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" defaultValue="Niel Patrick Penlas" className="custom-input" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" defaultValue="niel.ladica07@gmail.com" className="custom-input" />
            </Form.Group>
            <Form.Group controlId="formBirthday">
              <Form.Label>Birthday</Form.Label>
              <Form.Control type="date" defaultValue="2004-04-11" className="custom-input" />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" defaultValue="Male" className="custom-input">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" defaultValue="+639917106025" className="custom-input" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" className="custom-button" onClick={handleCloseEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showChangePasswordModal} onHide={handleCloseChangePassword} centered>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCurrentPassword">
              <Form.Label>Current Password</Form.Label>
              <Form.Control type="password" className="custom-input" />
            </Form.Group>
            <Form.Group controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" className="custom-input" />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" className="custom-input" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" className="custom-button" onClick={handleCloseChangePassword}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showChangeEmailModal} onHide={handleCloseChangeEmail} centered>
        <Modal.Header closeButton>
          <Modal.Title>Change Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNewEmail">
              <Form.Label>New Email Address</Form.Label>
              <Form.Control type="email" className="custom-input" />
            </Form.Group>
            <Form.Group controlId="formConfirmEmail">
              <Form.Label>Confirm New Email Address</Form.Label>
              <Form.Control type="email" className="custom-input" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" className="custom-button" onClick={handleCloseChangeEmail}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageAccount;