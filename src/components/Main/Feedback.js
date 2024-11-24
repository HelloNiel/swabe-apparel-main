import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "../css/Account.css";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("Bug");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ feedback, feedbackType });
  };

  return (
    <Container fluid className="feedback-container d-flex align-items-center justify-content-center" style={{ height: '95vh', backgroundColor: '#e5eaf0'}}>
      <Row className="justify-content-center">
        <Col xs={12} className="d-flex justify-content-center">
          <Card className="feedback-card shadow-sm border-0" style={{ width: '800px', padding: 20, borderRadius: 0}}>
            <Card.Body>
              <h2 className="mb-4 text-center">Send us some feedback!</h2>
              <p className="text-center">Do you have a suggestion or found some bug? Let us know in the field below.</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="feedbackDescription">
                  <Form.Label>Describe your issue or idea...</Form.Label>
                  <Form.Control as="textarea" rows={3} value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
                </Form.Group>
                <div className="mt-3">
                  <Form.Check 
                    type="radio" 
                    label="Bug" 
                    name="feedbackType" 
                    value="Bug" 
                    checked={feedbackType === "Bug"} 
                    onChange={(e) => setFeedbackType(e.target.value)} 
                  />
                  <Form.Check 
                    type="radio" 
                    label="Comment" 
                    name="feedbackType" 
                    value="Comment" 
                    checked={feedbackType === "Comment"} 
                    onChange={(e) => setFeedbackType(e.target.value)} 
                  />
                  <Form.Check 
                    type="radio" 
                    label="Other" 
                    name="feedbackType" 
                    value="Other" 
                    checked={feedbackType === "Other"} 
                    onChange={(e) => setFeedbackType(e.target.value)} 
                  />
                </div>
                <Button variant="primary" type="submit" className="mt-3 custom-button">
                  Send Feedback
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Feedback;