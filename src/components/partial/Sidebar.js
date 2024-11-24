import {
  FaTachometerAlt,
  FaBox,
  FaPlus,
  FaTrashAlt,
  FaEdit,
  FaCog,
  FaList,
  FaUserCog,
  FaChartLine,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import "../css/Sidebar.css";

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const handleLinkClick = () => {
    toggleSidebar();
  };

  return (
    <>
      <div className="header-container" style={{ height: "60px" }}>
        <div
          className={`hamburger ${isSidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1
          className={`dashboard-title ${isSidebarOpen ? "move-right" : ""}`}
          style={{ letterSpacing: "1px", fontSize: "26px", fontWeight: 900 }}
        >
          MR. SWABE APPAREL
        </h1>
      </div>

      <Offcanvas
        show={isSidebarOpen}
        onHide={toggleSidebar}
        backdrop={false}
        className={`custom-offcanvas ${isSidebarOpen ? "fade-out" : ""}`}
        style={{ width: "250px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{ fontSize: "24px", textTransform: "UpperCase" }}
          >
            Inventory
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="sidebar-links mb-3 mt-3">
            <li>
              <span className="sidebar-muted-text">NAVIGATE</span>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                to="/dashboard"
                onClick={handleLinkClick}
              >
                <FaTachometerAlt className="sidebar-icon" /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                to="/products-admin"
                onClick={handleLinkClick}
              >
                <FaBox className="sidebar-icon" /> Information
              </NavLink>
            </li>
          </ul>

          <ul className="sidebar-links mt-3 mb-3">
            <li>
              <span className="sidebar-muted-text">INVENTORY</span>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                to="/product-list"
                onClick={handleLinkClick}
              >
                <FaList className="sidebar-icon" /> Product List
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                to="/add-product"
                onClick={handleLinkClick}
              >
                <FaPlus className="sidebar-icon" /> Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                to="/remove-product"
                onClick={handleLinkClick}
              >
                <FaTrashAlt className="sidebar-icon" /> Remove Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                to="/edit-product"
                onClick={handleLinkClick}
              >
                <FaEdit className="sidebar-icon" /> Edit Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                to="/config-product"
                onClick={handleLinkClick}
              >
                <FaCog className="sidebar-icon" /> Configure Product
              </NavLink>
            </li>
          </ul>

          <ul className="sidebar-links mt-3 mb-3">
            <li>
              <span className="sidebar-muted-text">ADMIN</span>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                to="/user-management"
                onClick={handleLinkClick}
              >
                <FaUserCog className="sidebar-icon" /> User Management
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                to="/sales-report"
                onClick={handleLinkClick}
              >
                <FaChartLine className="sidebar-icon" /> Sales Report
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                to="/buy-product"
                onClick={handleLinkClick}
              >
                <FaShoppingCart className="sidebar-icon" /> Bought Products
              </NavLink>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
