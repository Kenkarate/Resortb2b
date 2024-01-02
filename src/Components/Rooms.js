// Rooms.js
import React from "react";
import { Link } from "react-router-dom";

const Rooms = ({ rooms }) => {
  const categories = Array.from(new Set(rooms.map((room) => room.category)));

  return (
    <div className="px-[5%] pb-20">
      {categories.map((category) => (
        <div className="" key={category}>
          <h2 className="lg:py-5 pt-10 pb-5 text-3xl lg:text-2xl font-semibold">{category} Rooms</h2>
          <div className="flex flex-wrap">
            {rooms
              .filter((room) => room.category === category)
              .map((room) => (
                <Link key={room.id} to={`/product/${room.id}`}>
                  <div class="max-w-sm rounded overflow-hidden shadow-lg m-[2%]  bg-white">
                    <img
                      className="w-full"
                      src={room.imagePath}
                      alt={room.name}
                    />
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">
                        <h3>{room.name}</h3>
                      </div>
                      <p class="text-gray-700 text-base">{room.description}</p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Rs. {room.offSeasonRate}
                      </span>

                      {room.ac === "Yes" ? (
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          AC
                        </span>
                      ) : (
                        ""
                      )}
                      {room.balcony === "Yes" ? (
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          Balcony
                        </span>
                      ) : (
                        ""
                      )}
                      <div>
                        
                        pax extra person charge kids charge breakfast
                        complimentary Map price AP price Activities
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
