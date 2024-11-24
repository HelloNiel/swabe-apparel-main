import React, { useState } from "react";
import Sidebar from "../partial/Sidebar";
import TabRemove from "./TabRemove";
import "../css/Dashboard.css";

function ProductList() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <TabRemove />{" "}
    </>
  );
}

export default ProductList;
