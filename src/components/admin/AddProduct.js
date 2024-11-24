import React, { useState } from "react";
import Sidebar from "../partial/Sidebar";
import "../css/AddProducts.css";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({
    productName: false,
    category: false,
    price: false,
    colors: false,
    productImage: false,
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSizes(
      selectedCategory === "shoes"
        ? ["36", "37", "38", "39", "40", "41", "42", "43"]
        : ["S", "M", "L", "XL"]
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProductImage(URL.createObjectURL(file));
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const validateForm = () => {
    const colorRegex = /^#[0-9a-fA-F]+$/;
    const priceRegex = /^[0-9]+(\.[0-9]+)?$/;
    const errors = {
      productName: !productName,
      category: !category,
      price: !price || !priceRegex.test(price),
      colors: !colors || !colorRegex.test(colors),
      productImage: !productImage,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage(true);

      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);

      setProductName("");
      setCategory("");
      setPrice("");
      setColors("");
      setProductImage(null);
      setSizes([]);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`add-product-form-container ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <h2>Add Product</h2>
        {successMessage && (
          <div className="alert alert-success" role="alert">
            Product added successfully!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              className={`form-control ${
                formErrors.productName
                  ? "is-invalid"
                  : productName
                  ? "is-valid"
                  : ""
              }`}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            {formErrors.productName && (
              <div className="invalid-feedback">Product name is required</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className={`form-control ${
                formErrors.category ? "is-invalid" : category ? "is-valid" : ""
              }`}
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              <option value="shirts">Shirts</option>
              <option value="pants">Pants</option>
              <option value="shoes">Shoes</option>
              <option value="collection">Collection</option>
            </select>
            {formErrors.category && (
              <div className="invalid-feedback">Category is required</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              className={`form-control ${
                formErrors.price ? "is-invalid" : price ? "is-valid" : ""
              }`}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price (numbers only)"
            />
            {formErrors.price && (
              <div className="invalid-feedback">Price must be a number</div>
            )}
          </div>

          <div className="form-group">
            <label>Size</label>
            <div className="size-options">
              {sizes.map((size) => (
                <div key={size} className="size-option">
                  <input
                    type="checkbox"
                    id={`size-${size}`}
                    name="size"
                    value={size}
                  />
                  <label htmlFor={`size-${size}`}>{size}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="colors">Color</label>
            <input
              type="text"
              id="colors"
              className={`form-control ${
                formErrors.colors ? "is-invalid" : colors ? "is-valid" : ""
              }`}
              value={colors}
              onChange={(e) => setColors(e.target.value)}
              placeholder="Enter color code (e.g., #a12412)"
            />
            {formErrors.colors && (
              <div className="invalid-feedback">Invalid color code</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="productImage">Product Image</label>
            <input
              type="file"
              id="productImage"
              className={`form-control ${
                formErrors.productImage
                  ? "is-invalid"
                  : productImage
                  ? "is-valid"
                  : ""
              }`}
              accept="image/*"
              onChange={handleImageChange}
            />
            {formErrors.productImage && (
              <div className="invalid-feedback">Product image is required</div>
            )}
            {productImage && (
              <div className="image-preview">
                <img src={productImage} alt="Product Preview" width="150" />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary custom-button"
            style={{ height: "50px" }}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
