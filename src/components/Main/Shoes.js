import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import "../css/LatestProduct.css";
import shoesData from "../../assets/ShoesData"; 
import Footer from "../partial/Footer";
import { FaShoppingCart, FaTrash } from 'react-icons/fa';

const ShoesProduct = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const toggleDetailsModal = () => {
    setIsDetailsModalOpen(!isDetailsModalOpen);
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const incrementQuantity = (id) => {
    const updatedItems = cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
    setCartItems(updatedItems);
  };

  const decrementQuantity = (id) => {
    const updatedItems = cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item);
    setCartItems(updatedItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const deleteItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    toggleDetailsModal();
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div id="mens-latest" className="mens-latest mt-5">
      <Container fluid className="px-3 px-md-5 mb-5">
        <h1 className="mb-5" style={{fontSize: 26, fontWeight: 400}} >Discover your ideal footwear</h1>
        <Row className="gx-3 gx-md-4">
          {shoesData.map((product) => (
            <Col key={product.id} xs={6} md={3}>
              <Card className="mens-latest-card mb-3">
                <Card.Img variant="top" src={product.image} />
                <Card.Body className="mens-latest-card-body">
                  <Card.Title>{product.name}</Card.Title>
                  <button className="custom-button" onClick={() => handleShowDetails(product)}>View Details</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', color: 'black', cursor: 'pointer' }} onClick={toggleCartModal}>
        <FaShoppingCart size={40} />
      </div>
      <Modal show={isCartModalOpen} onHide={toggleCartModal} size="lg" className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart ({cartItems.length} Items)</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {cartItems.length === 0 ? (
            <div className="text-center">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div>
              <h5>Items in Cart:</h5>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item mb-3 d-flex align-items-center">
                  <img src={item.image} alt={item.name} className="img-fluid" style={{ maxHeight: '100px', marginRight: '15px' }} />
                  <div className="flex-grow-1">
                    <h6>{item.name}</h6>
                    <p>Price: ₱{item.price}</p>
                  </div>
                  <div className="d-flex align-items-center quantity-controls">
                    <Button variant="secondary" onClick={() => decrementQuantity(item.id)}>-</Button>
                    <span className="mx-2 quantity-display">{item.quantity}</span>
                    <Button variant="secondary" onClick={() => incrementQuantity(item.id)}>+</Button>
                    <Button variant="danger" onClick={() => deleteItem(item.id)} className="ms-2">
                      <FaTrash />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <h5>Total Amount: ₱{totalPrice.toFixed(2)}</h5>
          <button className="custom-button" onClick={clearCart}>
            <FaTrash /> Clear All
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={isDetailsModalOpen} onHide={toggleDetailsModal} size="lg" className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <Row className="justify-content-center">
              <Col md={6}>
                <img src={selectedProduct.image} alt={selectedProduct.name} className="card-img-top img-fluid" style={{ maxHeight: '450px', width: '360px'}} />
              </Col>
              <Col md={6} className="d-flex flex-column justify-content-between">
                <div>
                  <h2 className="mb-4">{selectedProduct.name}</h2>
                  <h5 className="mb-4 text-muted">Details:</h5>
                  <h5 className="mb-2">Price: ₱{selectedProduct.price}</h5>
                  <p className="mb-2"><strong>Available Colors:</strong></p>
                  <div className="color-options mb-3">
                    {selectedProduct.colors?.map((color, index) => (
                      <span key={index} className="color-swatch" style={{ backgroundColor: color }}></span>
                    ))}
                  </div>
                  <p className="mb-2"><strong>Available Sizes:</strong></p>
                  <div className="size-options mb-3">
                    {selectedProduct.sizes?.map((size, index) => (
                      <span key={index} className="size-swatch">{size}</span>
                    ))}
                  </div>
                </div>
                <Button variant="primary" className="add-to-cart-btn mt-auto" onClick={() => addToCart(selectedProduct)}>
                  Add to Cart
                </Button>
              </Col>
            </Row>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ShoesProduct;
