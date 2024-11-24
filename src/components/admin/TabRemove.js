import React, { useState } from "react";
import { Tabs, Tab, Container, Table, Modal, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import shirtsData from "../../assets/ShirtsData";
import pantsData from "../../assets/PantsData";
import shoesData from "../../assets/ShoesData";
import collectionData from "../../assets/CollectionData";
import "../css/TabControl.css";

function TabControl() {
  const [key, setKey] = useState("shirts");
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const getRandomStock = () => Math.floor(Math.random() * 18) + 4;

  const handleDelete = (item) => {
    setItemToDelete(item);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      console.log(`Item ${itemToDelete.name} deleted!`);
    }
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <Container className="my-4 mt-5">
      <Tabs
        id="product-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        justify
      >
        <Tab eventKey="shirts" title="Shirts" className="custom-tab">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Colors</th>
                <th>Sizes</th>
                <th>Stocks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {shirtsData.map((shirt) => {
                const stock = getRandomStock();
                return (
                  <tr key={shirt.id}>
                    <td>
                      <img
                        src={shirt.image}
                        alt={shirt.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{shirt.name}</td>
                    <td>₱{shirt.price}</td>
                    <td>{shirt.colors.join(", ")}</td>
                    <td>{shirt.sizes.join(", ")}</td>
                    <td>{stock} pcs</td>
                    <td>
                      <FaTrash
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => handleDelete(shirt)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="pants" title="Pants">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Colors</th>
                <th>Sizes</th>
                <th>Stocks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pantsData.map((pants) => {
                const stock = getRandomStock();
                return (
                  <tr key={pants.id}>
                    <td>
                      <img
                        src={pants.image}
                        alt={pants.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{pants.name}</td>
                    <td>₱{pants.price}</td>
                    <td>{pants.colors.join(", ")}</td>
                    <td>{pants.sizes.join(", ")}</td>
                    <td>{stock} pcs</td>
                    <td>
                      <FaTrash
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => handleDelete(pants)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="shoes" title="Shoes">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Colors</th>
                <th>Sizes</th>
                <th>Stocks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {shoesData.map((shoe) => {
                const stock = getRandomStock();
                return (
                  <tr key={shoe.id}>
                    <td>
                      <img
                        src={shoe.image}
                        alt={shoe.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{shoe.name}</td>
                    <td>₱{shoe.price}</td>
                    <td>{shoe.colors.join(", ")}</td>
                    <td>{shoe.sizes.join(", ")}</td>
                    <td>{stock} pcs</td>
                    <td>
                      <FaTrash
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => handleDelete(shoe)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="collection" title="Collection">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Type</th>
                <th>Stocks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {collectionData.map((item) => {
                const stock = getRandomStock();
                return (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>₱{item.price}</td>
                    <td>{item.type}</td>
                    <td>{stock} pcs</td>
                    <td>
                      <FaTrash
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => handleDelete(item)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Tab>
      </Tabs>

      <Modal
        show={showModal}
        onHide={cancelDelete}
        centered
        className="delete-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the item "{itemToDelete?.name}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default TabControl;
