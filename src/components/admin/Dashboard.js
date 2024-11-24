import React, { useState } from "react";
import Sidebar from "../partial/Sidebar";
import "../css/Dashboard.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Row, Col } from 'react-bootstrap';

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
          {/* Inventory Summary Section */}
          <div className="summary-label mt-5">
            <h2>Inventory Summary</h2>
            <button onClick={toggleInventoryVisibility} className="toggle-button">
              <i className={`fas ${isInventoryVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            </button>
          </div>
          <div className={`dashboard-boxes ${!isInventoryVisible ? 'collapsed' : ''}`}>
            <Row>
              <Col md={3}>
                <div className="dashboard-box">
                  <div className="label-container">
                    <div className="label">
                      <i className="fas fa-cogs"></i> 
                      Total Products
                    </div>
                  </div>
                  <div className="value-container">
                    <h3>Products Count</h3>
                    <div className="dashboard-value">460</div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="dashboard-box">
                  <div className="label-container">
                    <div className="label">
                      <i className="fas fa-box"></i>
                      Bought Products
                    </div>
                  </div>
                  <div className="value-container">
                    <h3>Products Sold</h3>
                    <div className="dashboard-value">180</div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="dashboard-box">
                  <div className="label-container">
                    <div className="label">
                      <i className="fas fa-coins"></i> 
                      Income
                    </div>
                  </div>
                  <div className="value-container">
                    <h3>Total Income</h3>
                    <div className="dashboard-value">₱12,500</div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="dashboard-box">
                  <div className="label-container">
                    <div className="label">
                      <i className="fas fa-th-large"></i>
                      Categories
                    </div>
                  </div>
                  <div className="value-container">
                    <h3>Categories Count</h3>
                    <div className="dashboard-value">3</div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6} className="mb-3">
                <div className="dashboard-box">
                  <div className="label-container">
                    <div className="label">
                      <i className="fas fa-clock"></i>
                      Last Update
                    </div>
                  </div>
                  <div className="value-container">
                    <h3>Last Updated</h3>
                    <div className="dashboard-value">Nov 22, 2024 3:30 PM</div>
                  </div>
                </div>
              </Col>
              <Col md={6} className="mb-3">
                <div className="dashboard-box">
                  <div className="label-container">
                    <div className="label">
                      <i className="fas fa-exclamation-triangle"></i>
                      Low Stock
                    </div>
                  </div>
                  <div className="value-container">
                    <h3>Low Stock Items</h3>
                    <div className="dashboard-value">12</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          {/* System Information Section */}
          <div className="summary-label mt-5">
            <h2>System Information</h2>
            <button onClick={toggleSystemInfoVisibility} className="toggle-button">
              <i className={`fas ${isSystemInfoVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            </button>
          </div>
          <div className={`dashboard-boxes ${!isSystemInfoVisible ? 'collapsed' : ''}`}>
            <Row>
              <Col md={3}>
                <div className="dashboard-box">
                  <div className="label-container">
                    <div className="label">
                      <i className="fas fa-users"></i>
                      Users
                    </div>
                  </div>
                  <div className="value-container">
                    <h3>User Count</h3>
                    <div className="dashboard-value">4</div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="dashboard-box">
                  <div className="label-container">
                    <div className="label">
                      <i className="fas fa-sign-in-alt"></i>
                      Log In Users
                    </div>
                  </div>
                  <div className="value-container">
                    <h3>Active Users</h3>
                    <div className="dashboard-value">2</div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="dashboard-box">
                  <div className="label-container">
                    <div className="label">
                      <i className="fas fa-cart-plus"></i>
                      Add to Cart Users
                    </div>
                  </div>
                  <div className="value-container">
                    <h3>Users with Cart</h3>
                    <div className="dashboard-value">3</div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="dashboard-box">
                  <div className="label-container">
                    <div className="label">
                      <i className="fas fa-user-slash"></i>
                      Non-Active Users
                    </div>
                  </div>
                  <div className="value-container">
                    <h3>Inactive Users</h3>
                    <div className="dashboard-value">2</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
