import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
    
      <nav>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

     
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Switch>
    </div>
  );
}

export default App;
