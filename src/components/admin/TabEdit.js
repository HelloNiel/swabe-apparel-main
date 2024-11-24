import React, { useState } from "react";
import { Tabs, Tab, Container, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import shirtsData from "../../assets/ShirtsData";
import pantsData from "../../assets/PantsData";
import shoesData from "../../assets/ShoesData";
import collectionData from "../../assets/CollectionData";
import EditShirts from "./ShirtsEdit";
import EditPants from "./PantsEdit";
import EditShoes from "./ShoesEdit";
import EditCollection from "./CollectionEdit";
import "../css/TabControl.css";

function TabControl() {
  const [key, setKey] = useState("shirts");
  const [showModal, setShowModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [itemType, setItemType] = useState("");

  const handleEdit = (item, type) => {
    setItemToEdit(item);
    setItemType(type);
    setShowModal(true);
  };

  const handleSave = (editedItem) => {
    let updatedData = [];
    if (itemType === "shirts") {
      updatedData = shirtsData.map((shirt) =>
        shirt.id === editedItem.id ? editedItem : shirt
      );
    } else if (itemType === "pants") {
      updatedData = pantsData.map((pants) =>
        pants.id === editedItem.id ? editedItem : pants
      );
    } else if (itemType === "shoes") {
      updatedData = shoesData.map((shoe) =>
        shoe.id === editedItem.id ? editedItem : shoe
      );
    } else if (itemType === "collection") {
      updatedData = collectionData.map((item) =>
        item.id === editedItem.id ? editedItem : item
      );
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getRandomStock = () => Math.floor(Math.random() * 18) + 4;

  return (
    <Container className="my-4 mt-5">
      <Tabs
        id="product-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        justify
      >
        <Tab eventKey="shirts" title="Shirts">
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
                      <FaEdit
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={() => handleEdit(shirt, "shirts")}
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
                      <FaEdit
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={() => handleEdit(pants, "pants")}
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
                      <FaEdit
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={() => handleEdit(shoe, "shoes")}
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
                      <FaEdit
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={() => handleEdit(item, "collection")}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Tab>
      </Tabs>

      {itemType === "shirts" && (
        <EditShirts
          showModal={showModal}
          closeModal={closeModal}
          itemToEdit={itemToEdit}
          handleSave={handleSave}
        />
      )}
      {itemType === "pants" && (
        <EditPants
          showModal={showModal}
          closeModal={closeModal}
          itemToEdit={itemToEdit}
          handleSave={handleSave}
        />
      )}
      {itemType === "shoes" && (
        <EditShoes
          showModal={showModal}
          closeModal={closeModal}
          itemToEdit={itemToEdit}
          handleSave={handleSave}
        />
      )}
      {itemType === "collection" && (
        <EditCollection
          showModal={showModal}
          closeModal={closeModal}
          itemToEdit={itemToEdit}
          handleSave={handleSave}
        />
      )}
    </Container>
  );
}

export default TabControl;
