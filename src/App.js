import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Rout from "./components/Layouts/rout";
import NavBar from "./components/partial/NavigationBar";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <BrowserRouter>
      {loggedInUser !== "swabeadmin@gmail.com" && <NavBar />}
      <Rout setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />
    </BrowserRouter>
  );
}

export default App;
