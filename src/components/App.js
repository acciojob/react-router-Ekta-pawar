import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Navigation Links */}
      <nav>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
