import React, { useState } from "react";
import Sidebar from "../partial/Sidebar";
import "../css/Dashboard.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Row, Col, Button, Card } from 'react-bootstrap';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isInventoryVisible, setIsInventoryVisible] = useState(true);
  const [isSystemInfoVisible, setIsSystemInfoVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleInventoryVisibility = () => {
    setIsInventoryVisible(!isInventoryVisible);
  };

  const toggleSystemInfoVisibility = () => {
    setIsSystemInfoVisible(!isSystemInfoVisible);
  };

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="dashboard-container">
        <div className={`dashboard-content ${isSidebarOpen ? "shifted" : ""}`}>
          <div className="summary-label mt-5 mb-3">
            <h2 className="section-title">Inventory Summary</h2>
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
                        <i className="fas fa-cogs"></i> Total Products
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">Products Count</h3>
                      <div className="dashboard-value">460</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-box"></i> Bought Products
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">Products Sold</h3>
                      <div className="dashboard-value">180</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-coins"></i> Income
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">Total Income</h3>
                      <div className="dashboard-value">₱12,500</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-th-large"></i> Categories
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">Categories Count</h3>
                      <div className="dashboard-value">3</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-4 g-4">
              <Col md={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-clock"></i> Last Update
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">Last Updated</h3>
                      <div className="dashboard-value">Nov 22, 2024 3:30 PM</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-exclamation-triangle"></i> Low Stock
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">Low Stock Items</h3>
                      <div className="dashboard-value">12</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <div className="summary-label mt-5 mb-3">
            <h2 className="section-title">System Information</h2>
            <Button onClick={toggleSystemInfoVisibility} className="toggle-button" variant="link">
              <i className={`fas ${isSystemInfoVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            </Button>
          </div>
          <div className={`dashboard-boxes ${!isSystemInfoVisible ? 'collapsed' : ''}`}>
            <Row className="mb-4 g-4">
              <Col md={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-users"></i> Users
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">User Count</h3>
                      <div className="dashboard-value">4</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-sign-in-alt"></i> Log In Users
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">Active Users</h3>
                      <div className="dashboard-value">2</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-cart-plus"></i> Add to Cart Users
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">Users with Cart</h3>
                      <div className="dashboard-value">3</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="label-container">
                      <div className="label">
                        <i className="fas fa-user-slash"></i> Non-Active Users
                      </div>
                    </div>
                    <div className="value-container">
                      <h3 className="value-title">Inactive Users</h3>
                      <div className="dashboard-value">2</div>
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
