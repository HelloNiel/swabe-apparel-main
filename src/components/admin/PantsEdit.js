import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function PantsEdit({ showModal, closeModal, itemToEdit, handleSave }) {
  const [editedItem, setEditedItem] = useState(itemToEdit);
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setEditedItem(itemToEdit);
  }, [itemToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addColor = () => {
    setEditedItem((prev) => ({
      ...prev,
      colors: [...prev.colors, ""],
    }));
  };

  const addSize = () => {
    setEditedItem((prev) => ({
      ...prev,
      sizes: [...prev.sizes, { size: "", quantity: "" }],
    }));
  };

  const handleColorChange = (index, value) => {
    const newColors = [...editedItem.colors];
    newColors[index] = value;
    setEditedItem((prev) => ({
      ...prev,
      colors: newColors,
    }));
  };

  const handleSizeChange = (index, field, value) => {
    const newSizes = [...editedItem.sizes];
    newSizes[index] = { ...newSizes[index], [field]: value };
    setEditedItem((prev) => ({
      ...prev,
      sizes: newSizes,
    }));
  };

  const removeColor = () => {
    setShowConfirmation(true);
  };

  const confirmRemoveColor = () => {
    if (selectedColorIndex !== null) {
      const newColors = [...editedItem.colors];
      newColors.splice(selectedColorIndex, 1);
      setEditedItem((prev) => ({
        ...prev,
        colors: newColors,
      }));
      setSelectedColorIndex(null);
    }
    setShowConfirmation(false);
  };

  const cancelRemoveColor = () => {
    setShowConfirmation(false);
  };

  const saveChanges = () => {
    handleSave(editedItem);
    closeModal();
  };

  return (
    <>
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Pants</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editedItem && (
            <Form>
              <Form.Group controlId="formPantsName" className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={editedItem.name}
                  onChange={handleChange}
                  placeholder="Enter the pants name"
                  style={{ borderRadius: "0" }}
                />
              </Form.Group>
              <Form.Group controlId="formPantsPrice" className="mb-4">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={editedItem.price}
                  onChange={handleChange}
                  placeholder="Enter the price"
                  style={{ borderRadius: "0" }}
                />
              </Form.Group>
              <Form.Group controlId="formPantsQuantity" className="mb-4">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="quantity"
                  value={editedItem.quantity}
                  onChange={handleChange}
                  placeholder="Enter the quantity"
                  style={{ borderRadius: "0" }}
                />
              </Form.Group>

              <Form.Group controlId="formPantsColors" className="mb-4">
                <Form.Label>Colors</Form.Label>
                <div className="d-flex flex-wrap">
                  {editedItem.colors.map((color, index) => (
                    <div
                      key={index}
                      className="position-relative me-2 mb-2"
                      style={{ display: "inline-block" }}
                    >
                      <div
                        className={`color-swatch ${
                          selectedColorIndex === index ? "selected" : ""
                        }`}
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: color,
                          display: "inline-block",
                          boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                          cursor: "pointer",
                        }}
                        onClick={() => setSelectedColorIndex(index)}
                      >
                        {selectedColorIndex === index && (
                          <div
                            style={{
                              position: "absolute",
                              top: "-5px",
                              right: "-5px",
                              color: "black",
                              fontSize: "18px",
                            }}
                          >
                            <i className="fas fa-check"></i>
                          </div>
                        )}
                      </div>
                      <Form.Control
                        type="text"
                        name="colors"
                        value={color}
                        onChange={(e) =>
                          handleColorChange(index, e.target.value)
                        }
                        placeholder={`Color #${index + 1}`}
                        className="mt-2"
                        style={{ borderRadius: "0" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-start">
                  <Button
                    variant="outline-secondary"
                    onClick={addColor}
                    style={{ borderRadius: "0" }}
                  >
                    Add Color
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={removeColor}
                    disabled={selectedColorIndex === null}
                    style={{ borderRadius: "0", marginLeft: "10px" }}
                  >
                    Delete Selected Color
                  </Button>
                </div>
              </Form.Group>

              <Form.Group controlId="formPantsSizes" className="mb-4">
                <Form.Label>Sizes</Form.Label>
                <div className="d-flex flex-wrap">
                  {editedItem.sizes.map((sizeObj, index) => (
                    <div key={index} className="me-2 mb-2">
                      <Form.Control
                        as="select"
                        name="sizes"
                        value={sizeObj.size}
                        onChange={(e) =>
                          handleSizeChange(index, "size", e.target.value)
                        }
                        className="size-select"
                        style={{ borderRadius: "0" }}
                      >
                        <option value="">Select Size</option>
                        {["S", "SM", "M", "L", "XL", "XXL", "XXXL"].map(
                          (sizeOption) => (
                            <option key={sizeOption} value={sizeOption}>
                              {sizeOption}
                            </option>
                          )
                        )}
                      </Form.Control>
                      <Form.Control
                        type="number"
                        value={sizeObj.quantity}
                        onChange={(e) =>
                          handleSizeChange(index, "quantity", e.target.value)
                        }
                        placeholder="Enter quantity"
                        className="mt-2"
                        style={{ borderRadius: "0" }}
                      />
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline-secondary"
                  onClick={addSize}
                  style={{ borderRadius: "0", width: "100px" }}
                >
                  Add Size
                </Button>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={saveChanges}
            style={{ height: "50px", borderRadius: "0" }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showConfirmation} onHide={cancelRemoveColor} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the selected color?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelRemoveColor}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmRemoveColor}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PantsEdit;
