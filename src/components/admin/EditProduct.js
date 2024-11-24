import React, { useState } from "react";
import Sidebar from "../partial/Sidebar";
import TabEdit from "./TabEdit";
import "../css/Dashboard.css";

function ProductList() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <TabEdit />{" "}
    </>
  );
}

export default ProductList;
