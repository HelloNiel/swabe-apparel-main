import React, { useState } from "react";
import Sidebar from "../partial/Sidebar";
import "../css/Dashboard.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Row, Col, Button, Table } from 'react-bootstrap';
import shirtsData from "../../assets/ShirtsData";
import shoesData from "../../assets/ShoesData";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isInventoryVisible, setIsInventoryVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleInventoryVisibility = () => {
    setIsInventoryVisible(!isInventoryVisible);
  };

  const highestSellingProducts = [
    { id: 1, sold: 150, type: "Shoe" },
    { id: 2, sold: 120, type: "Shirt" },
  ];

  const latestSales = [
    { id: 1, date: "2024-11-24", qty: 5, type: "Shoe" },
    { id: 2, date: "2024-11-23", qty: 2, type: "Shirt" },
  ];

  const recentlyAdded = [
    { id: 3, dateAdded: "2024-11-22" },
    { id: 4, dateAdded: "2024-11-20" },
  ];

  const getProductTypeAndDetailsById = (id) => {
    const shirt = shirtsData.find((product) => product.id === id);
    if (shirt) {
      return { name: shirt.name, type: "Shirt", price: shirt.price };
    }

    const shoe = shoesData.find((product) => product.id === id);
    if (shoe) {
      return { name: shoe.name, type: "Shoe", price: shoe.price };
    }

    return { name: "Unknown", type: "Unknown", price: 0 };
  };

  const getProductById = (id, type) =>
    type === "shirt"
      ? shirtsData.find((product) => product.id === id)
      : shoesData.find((product) => product.id === id);

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="dashboard-container">
        <div className={`dashboard-content ${isSidebarOpen ? "shifted" : ""}`}>
          <div className="summary-label mt-5 mb-3">
            <h2 className="section-tittle">Products Inventory</h2>
            <Button onClick={toggleInventoryVisibility} className="toggle-button" variant="link">
              <i className={`fas ${isInventoryVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            </Button>
          </div>

          {isInventoryVisible && (
            <div className="dashboard-boxes">
              <Row className="mb-4 g-4">
                <Col md={3}>
                  <div className="dashboard-card">
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-shoe-prints"></i>Shoes
                      </div>
                      <div className="value-container">
                        <h3 className="value-title">Shoes Counts</h3>
                        <div className="dashboard-value">{shoesData.length}</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="dashboard-card">
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-tshirt"></i>Shirts
                      </div>
                      <div className="value-container">
                        <h3 className="value-title">Shirts Counts</h3>
                        <div className="dashboard-value">{shirtsData.length} pcs</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="dashboard-card">
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-boxes"></i>Collection
                      </div>
                      <div className="value-container">
                        <h3 className="value-title">Total Collection</h3>
                        <div className="dashboard-value">{shirtsData.length + shoesData.length} pcs</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          )}

          <div className="tables-section mt-4">
            <Row>
              <Col md={4}>
                <h5>Highest Selling Product</h5>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th><i className="fas fa-crown"></i> Product</th>
                      <th>Sold</th>
                      <th>Type</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {highestSellingProducts.map(({ id, sold, type }) => {
                      const product = getProductById(id, type.toLowerCase());
                      const totalPrice = product ? (product.price * sold).toFixed(2) : 0;
                      return (
                        <tr key={id}>
                          <td>{product?.name}</td>
                          <td>{sold}</td>
                          <td>{type}</td>
                          <td>₱{totalPrice}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col md={4}>
                <h5>Latest Sales</h5>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th><i className="fas fa-shopping-cart"></i> Product</th>
                      <th>Date</th>
                      <th>Qty</th>
                      <th>Type</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {latestSales.map(({ id, date, qty, type }) => {
                      const product = getProductById(id, type.toLowerCase());
                      const totalPrice = product ? (product.price * qty).toFixed(2) : 0;
                      return (
                        <tr key={id}>
                          <td>{product?.name}</td>
                          <td>{date}</td>
                          <td>{qty}</td>
                          <td>{type}</td>
                          <td>₱{totalPrice}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col md={4}>
                <h5>Recently Added Products</h5>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th><i className="fas fa-plus-circle"></i> Product</th>
                      <th>Date Added</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentlyAdded.map(({ id, dateAdded }) => {
                      const { name, type } = getProductTypeAndDetailsById(id);
                      return (
                        <tr key={id}>
                          <td>{name}</td>
                          <td>{dateAdded}</td>
                          <td>{type}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
