import React, { useState } from "react";
import Sidebar from "../partial/Sidebar";
import "../css/Dashboard.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Row, Col, Button, Card } from 'react-bootstrap';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isInventoryVisible, setIsInventoryVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleInventoryVisibility = () => {
    setIsInventoryVisible(!isInventoryVisible);
  };

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
          <div className={`dashboard-boxes ${!isInventoryVisible ? 'collapsed' : ''}`}>
            <Row className="mb-4 g-4">
              <Col md={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-shoe-prints"></i>Shoes
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">Shoes Counts</h3>
                      <div className="dashboard-value">11</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-tshirt"></i>Shirts
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">Shirts Counts</h3>
                      <div className="dashboard-value">250 pcs</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-boxes"></i>Collection
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">Total Collection</h3>
                      <div className="dashboard-value">189 pcs</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
