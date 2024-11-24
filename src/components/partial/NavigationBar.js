import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/Navbar.css";
import "../css/NavbarIcon.css";

function NavScrollExample() {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleAccountToggle = () => {
    setAccountDropdownOpen(!accountDropdownOpen);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar" sticky="top">
      <Container>
        <Navbar.Brand
          as={HashLink}
          smooth
          to="/#Swabe"
          style={{ fontWeight: 700 }}
        >
          SWABE APPAREL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 navbar-nav">
            <Nav.Link
              as={HashLink}
              smooth
              to="/#Swabe"
              className={`link-hover ${
                location.hash === "#Swabe" ? "active" : ""
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/#Products"
              className={`link-hover ${
                location.hash === "#Products" ? "active" : ""
              }`}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/#mens-latest"
              className={`link-hover ${
                location.hash === "#mens-latest" ? "active" : ""
              }`}
            >
              New Shirts
            </Nav.Link>
            <Nav.Link
              className={`icon-hover link-hover ${
                location.pathname === "/shoes" ? "active" : ""
              }`}
              as={HashLink}
              smooth
              to="/shoes"
            >
              <span className="text">Shoes</span>
              <i className="fas fa-shoe-prints icon"></i>
            </Nav.Link>
            <Nav.Link
              className={`icon-hover link-hover ${
                location.pathname === "/shirts" ? "active" : ""
              }`}
              as={HashLink}
              smooth
              to="/shirts"
            >
              <span className="text">Shirts</span>
              <i className="fas fa-tshirt icon"></i>
            </Nav.Link>

            <Nav.Link
              className={`icon-hover link-hover ${
                location.pathname === "/collection" ? "active" : ""
              }`}
              as={HashLink}
              smooth
              to="/collection"
            >
              <span className="text">Collection</span>
              <i className="fas fa-box icon"></i>
            </Nav.Link>

            <NavDropdown
              title={
                <span>
                  Pages{" "}
                  <i
                    className={`fas fa-chevron-down ${
                      dropdownOpen ? "rotate" : ""
                    }`}
                  ></i>
                </span>
              }
              id="navbarScrollingDropdown"
              show={dropdownOpen}
              onToggle={handleToggle}
            >
              <NavDropdown.Item
                as={Link}
                to="/about-us"
                className="dropdown-item link-hover"
              >
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/location"
                className="dropdown-item link-hover"
              >
                Location
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  Account{" "}
                  <i
                    className={`fas fa-chevron-down ${
                      accountDropdownOpen ? "rotate" : ""
                    }`}
                  ></i>
                </span>
              }
              id="navbarScrollingDropdownAccount"
              show={accountDropdownOpen}
              onToggle={handleAccountToggle}
            >
              <NavDropdown.Item
                as={Link}
                to="/manage-account"
                className="dropdown-item link-hover"
              >
                Manage Account
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/feedback"
                className="dropdown-item link-hover"
              >
                Give us Feedback
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as="button"
                className="dropdown-item link-hover"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <i className="fas fa-sign-out-alt"></i>
                Log In
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
