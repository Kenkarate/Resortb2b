// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rooms from "./Components/Rooms";
import ProductDetail from "./Components/ProductDetail";
import images from "./images.json";

const Home = () => {
  return (
    <div className="">
      <div className="bg-green-600 p-5">
        <h1 className="text-4xl font-bold ">Parakkat Nature resort</h1>
      </div>
      <Rooms rooms={images.rooms} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:roomId"
          element={<ProductDetail rooms={images.rooms} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
