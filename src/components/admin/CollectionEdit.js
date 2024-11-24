import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditCollection({ showModal, closeModal, itemToEdit, handleSave }) {
  const [editedItem, setEditedItem] = useState(itemToEdit);

  useEffect(() => {
    setEditedItem(itemToEdit);
  }, [itemToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({
      ...editedItem,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    handleSave(editedItem);
    closeModal();
  };

  return (
    <Modal show={showModal} onHide={closeModal} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Collection Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="itemName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editedItem.name}
              onChange={handleInputChange}
              placeholder="Enter item name"
              style={{ borderRadius: "0" }}
            />
          </Form.Group>
          <Form.Group controlId="itemPrice" className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={editedItem.price}
              onChange={handleInputChange}
              placeholder="Enter price"
              min="0"
              style={{ borderRadius: "0" }}
            />
          </Form.Group>
          <Form.Group controlId="itemQuantity" className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={editedItem.quantity}
              onChange={handleInputChange}
              placeholder="Enter quantity"
              min="0"
              style={{ borderRadius: "0" }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleSubmit}
          style={{ borderRadius: "0" }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditCollection;
