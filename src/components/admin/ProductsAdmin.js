import React, { useState } from "react";
import Sidebar from "../partial/Sidebar";
import "../css/Dashboard.css";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`dashboard-container ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <div className="dashboard-content mb-5">
          <div className="summary-label mt-5">
            <h2>Products inventory</h2>
          </div>
          <div className="dashboard-boxes">
            <div className="dashboard-box">
              <div className="label">Shirts</div>
              <h3>Shirts Counts</h3>
              <div className="dashboard-value">250 PCS</div>
            </div>

            <div className="dashboard-box">
              <div className="label">Pants</div>
              <h3>Pants Counts</h3>
              <div className="dashboard-value">89 PCS</div>
            </div>

            <div className="dashboard-box">
              <div className="label">Shoes</div>
              <h3>Shoes counts</h3>
              <div className="dashboard-value">108 PCS</div>
            </div>

            <div className="dashboard-box">
              <div className="label">Collections</div>
              <h3>Collections counts</h3>
              <div className="dashboard-value">13 PCS</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
