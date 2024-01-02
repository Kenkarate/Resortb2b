// Categories.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import images from "../images.json";

const Categories = () => {
  const categoryData = images.rooms.reduce((accumulator, room) => {
    // Check if the category already exists in the accumulator
    const existingCategory = accumulator.find(
      (category) => category.name === room.category
    );

    // If the category exists, update its inventory and price
    if (existingCategory) {
      existingCategory.inventory += 1; // Update with your logic
    } else {
      // If the category doesn't exist, add a new entry
      accumulator.push({
        name: room.category,
        inventory: 1, // Update with your logic
        price: room.rate, // Set the price to the rate of the first room in the category
      });
    }

    return accumulator;
  }, []);

  return (
    <div>
      <Header />
      <h2 className="text-3xl text-center font-semibold py-5">Categories</h2>
      <table className="table-auto mx-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Category Name</th>
            <th className="border px-4 py-2">Inventory</th>
            <th className="border px-4 py-2"> Price</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((category) => (
            <tr key={category.name}>
              <td className="border px-4 py-2">
                <Link to={`/rooms/${category.name}`}>{category.name}</Link>
              </td>
              <td className="border px-4 py-2">{category.inventory}</td>
              <td className="border px-4 py-2">
                Rs. {category.price.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mx-[5%]">
        <p>
          {" "}
          <p className="font-bold">Meal Plan</p>
          ADULT MAP PLAN: 950+18% PER HEAD
          <br />
          ADULT AP PLAN : 1900 + 18%PER HEAD
          <br />
          KID MAP PLAN : 650+ 18 % PER HEAD
          <br />
          KID AP PLAN: 1300 + 18 % PER HEAD
          <br />
          <br />
          <p className="font-bold">Extra Person Charge</p>
          KID WITH / WITHOUT EXTRA BED: 750 PER HEAD (6-10YRS)
          <br />
          ADULT: 1250 PER HEAD (ABOVE 10YRS)
          <br />
        </p>
      </div>
    </div>
  );
};

export default Categories;
