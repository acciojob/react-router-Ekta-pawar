
import React from "react";
import {BrowserRouter,Routes,Route} from"react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home";  
import About from "./About";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
