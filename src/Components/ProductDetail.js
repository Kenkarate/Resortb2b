// ProductDetail.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ rooms }) => {
  const { roomId } = useParams();
  const room = rooms && rooms.find((r) => r.id.toString() === roomId);

  const [active, setActive] = useState(room.gallery[0]);

  if (!room) {
    return <div>Room not found!</div>;
  }

  return (
    <div className="">
      <div className="p-5 bg-green-600">
        <h1 className="lg:text-[50px] text-3xl font-bold">
          Parakkat Nature Resort
        </h1>
      </div>
      <h2 className="p-5 lg:text-4xl text-2xl font-bold py-5">{room.name}</h2>
      {/* <img className="w-[400px]" src={room.imagePath} alt={room.name} /> */}

      <div className="p-5 image-gallery">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
              src={active}
              alt=""
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {room.gallery &&
              room.gallery.map((imgelink, index) => (
                <div key={index}>
                  <img
                    onClick={() => setActive(imgelink)}
                    src={imgelink}
                    className="h-full max-w-full cursor-pointer rounded-lg object-cover object-center"
                    alt={`gallery-${index + 1}`}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* <p className="pt-10">{room.description}</p> */}
      <p className="p-5 py-4 text-2xl font-semibold">Rs. {room.rate}</p>
      <p className="p-5 pb-44">
        <b>Meal Plan </b> <br />
        ADULT MAP PLAN: 950+18% PER HEAD <br />
        ADULT AP PLAN : 1900 + 18%PER HEAD <br />
        KID MAP PLAN : 650+ 18 % PER HEAD <br />
        KID AP PLAN: 1300 + 18 % PER HEAD <br />
        <br />
        <b>Extra Person Charge</b> <br />
        KID WITH / WITHOUT EXTRA BED: 750 PER HEAD (6-10YRS) <br />
        ADULT: 1250 PER HEAD (ABOVE 10YRS)
      </p>

      {/* Add other details such as price, activities, etc. */}
    </div>
  );
};

export default ProductDetail;
