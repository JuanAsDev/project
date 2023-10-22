import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginDanRegis from "./component/LoginDanRegis.js";
import Home from "./component/Home.js";
import About from "./component/About.js";
import Posting from "./component/Posting.js";
import Contact from "./component/Contact.js";
import { AdminProvider } from "./component/AdminContext.js";

const App = () => (
  <AdminProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginDanRegis />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </AdminProvider>
);

export default App;
