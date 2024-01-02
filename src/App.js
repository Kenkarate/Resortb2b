// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import images from './images.json'
import Categories from "./Components/Categories";
import Rooms from "./Components/Rooms";

const App = () => {
  const categories = [...new Set(images.rooms.map((room) => room.category))];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Categories categories={categories} />} />
        <Route path="/rooms/:category" element={<Rooms rooms={images.rooms} />} />
        <Route path="/product/:roomId" element={<ProductDetail rooms={images.rooms} />} />
      </Routes>
    </Router>
  );
};

export default App;
