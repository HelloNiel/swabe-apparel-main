import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Main/Home";
import About from "../Main/About";
import Products from "../Main/Product";
import Location from "../Main/location";
import Shoes from "../Main/Shoes";
import Shirts from "../Main/Shirts";
import Collection from "../Main/Collection";
import ManageAccount from "../Main/ManageAccount";
import Feedback from "../Main/Feedback";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import Dashboard from "../admin/Dashboard";
import ProductsAdmin from "../admin/ProductsAdmin";
import AddProduct from "../admin/AddProduct";
import ProductList from "../admin/ProductList";
import RemoveProduct from "../admin/RemoveProduct";
import EditProduct from "../admin/EditProduct";

const Rout = ({ setLoggedInUser, loggedInUser }) => {
  return (
    <Routes>
      {!loggedInUser && <Route path="/" element={<Home />} />}
      {!loggedInUser && <Route path="/about-us" element={<About />} />}
      {!loggedInUser && <Route path="/products" element={<Products />} />}
      {!loggedInUser && <Route path="/location" element={<Location />} />}
      {!loggedInUser && <Route path="/shoes" element={<Shoes />} />}
      {!loggedInUser && <Route path="/shirts" element={<Shirts />} />}
      {!loggedInUser && <Route path="/collection" element={<Collection />} />}
      {!loggedInUser && (
        <Route path="/manage-account" element={<ManageAccount />} />
      )}
      {!loggedInUser && <Route path="/feedback" element={<Feedback />} />}
      <Route
        path="/login"
        element={<LoginForm setLoggedInUser={setLoggedInUser} />}
      />
      {!loggedInUser && <Route path="/signup" element={<SignupForm />} />}
      {loggedInUser === "swabeadmin@gmail.com" && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products-admin" element={<ProductsAdmin />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/remove-product" element={<RemoveProduct />} />
          <Route path="/edit-product" element={<EditProduct />} />
        </>
      )}
      <Route
        path="*"
        element={<Navigate to={loggedInUser ? "/dashboard" : "/"} replace />}
      />
    </Routes>
  );
};

export default Rout;
