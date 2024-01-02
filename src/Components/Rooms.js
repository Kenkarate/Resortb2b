// Rooms.js
import React from "react";
import { useParams,Link } from "react-router-dom";
import Header from "./Header";

const Rooms = ({ rooms }) => {
  const { category } = useParams();

  // Filter rooms based on the selected category
  const filteredRooms = category
    ? rooms.filter(
        (room) => room.category.toLowerCase() === category.toLowerCase()
      )
    : rooms;

  return (
    <div>
      <Header />
      {category && <h2 className="text-2xl font-semibold">{category} Rooms</h2>}
      <div className="grid grid-cols-3">

      {filteredRooms.map((room) => (
        <div key={room.id} className="p-5">
          <Link to={`/product/${room.id}`}>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={room.imagePath} alt={room.name} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                {" "}
                <h3>{room.name}</h3>
              </div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          </Link>
          <p>{room.description}</p>
          {/* Add other details such as price, amenities, etc. */}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Rooms;
