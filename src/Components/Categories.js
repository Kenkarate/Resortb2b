// Categories.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import images from "../images.json";

const Categories = () => {
  const categoryData = images.rooms.reduce((accumulator, room) => {
    const existingCategory = accumulator.find(
      (category) => category.name === room.category
    );

    if (existingCategory) {
      existingCategory.inventory += 1; // Update with your logic
    } else {
      accumulator.push({
        name: room.category,
        inventory: 1, // Update with your logic
        price: room.rate,
        image: room.imagePath, // Assuming imagePath is the URL of the room image
      });
    }

    return accumulator;
  }, []);

  return (
    <div className="">
      <Header />
      <h2 className="text-3xl text-center font-semibold py-5">Categories</h2>
      <div className="grid lg:grid-cols-2 gap-4 mx-[5%] ">
        {categoryData.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              className="w-full   object-center"
              src={category.image}
              alt={category.name}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <p className="text-gray-500">Inventory: {category.inventory}</p>
              <p className="text-gray-500">Price: Rs. {category.price.toFixed(2)}</p>
              <Link
                to={`/rooms/${category.name}`}
                className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                View Rooms
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Additional content goes here */}
    </div>
  );
};

export default Categories;




// import React from "react";
// import { Link } from "react-router-dom";
// import Header from "./Header";
// import images from "../images.json";

// const Categories = () => {
//   const categoryData = images.rooms.reduce((accumulator, room) => {
//     // Check if the category already exists in the accumulator
//     const existingCategory = accumulator.find(
//       (category) => category.name === room.category
//     );

//     // If the category exists, update its inventory and price
//     if (existingCategory) {
//       existingCategory.inventory += 1; // Update with your logic
//     } else {
//       // If the category doesn't exist, add a new entry
//       accumulator.push({
//         name: room.category,
//         inventory: 1, // Update with your logic
//         price: room.rate, // Set the price to the rate of the first room in the category
//       });
//     }

//     return accumulator;
//   }, []);

//   return (
//     <div className="">
//       <Header />
//       <h2 className="text-3xl text-center font-semibold py-5">Categories</h2>
//       <table className="table-auto mx-[5%] lg:mx-auto ">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">Category Name</th>
//             <th className="border px-4 py-2">Inventory</th>
//             <th className="border px-4 py-2"> Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categoryData.map((category) => (
//             <tr key={category.name}>
//               <td className="border px-4 py-2">
//                 <Link to={`/rooms/${category.name}`}>{category.name}</Link>
//               </td>
//               <td className="border px-4 py-2">{category.inventory}</td>
//               <td className="border px-4 py-2">
//                 Rs. {category.price.toFixed(2)}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="grid lg:grid-cols-2 py-10 ">
//         <div className="">
//           <p className="bg-green-50 p-2 px-[5%]">
//             {" "}
//             <p className="font-bold">Meal Plan</p>
//             ADULT MAP PLAN: 950+18% PER HEAD
//             <br />
//             ADULT AP PLAN : 1900 + 18%PER HEAD
//             <br />
//             KID MAP PLAN : 650+ 18 % PER HEAD
//             <br />
//             KID AP PLAN: 1300 + 18 % PER HEAD
//             <br />
//             <br />
//             <p className="font-bold">Extra Person Charge</p>
//             KID WITH / WITHOUT EXTRA BED: 750 PER HEAD (6-10YRS)
//             <br />
//             ADULT: 1250 PER HEAD (ABOVE 10YRS)
//             <br /> <br />
//           </p>
//           <p className="bg-red-50 p-2 px-[5%]">
//             {" "}
//             <b>Mandatory Supplements</b> <br />
//             20 % Hike applicable from 21st Dec. 2023 to 05th Jan. 2024 <br />
//             CHRISTMAS Eve Dinner @ net 2500 / head applicable on 24th Dec 2023{" "}
//             <br />
//             CHRISTMAS Eve Dinner @ 1750 net / child applicable on 24th Dec 2023{" "}
//             <br />
//             NEW YEAR Gala Dinner @ 3500 net / head applicable on 31st Dec 2023{" "}
//             <br />
//             NEW YEAR Gala Dinner @ 2000 Net / child applicable on 31th Dec 2023{" "}
//             <br /> <br />
//             <p>
//               <b>Cancellation policy:</b>
//               <br />
//               In case of cancellation, before 07 days of check in date, full
//               amount will be refunded.
//               <br />
//               Cancellation within 3 days or before of arrival date, 20% will be
//               deducted <br />
//               Before 24hrs of arrival date 50% will be charged.
//               <br />
//               If the cancellation is made within 24 hours of Check in date, no
//               refund will be issued
//               <br />
//               Last minute postponing also not acceptable and the full amount
//               will be held as cancellation.
//               <br />
//               In case of postponing also, if further the booking is cancelled,
//               no refund will be issued irrespective of the postponing date.
//               <br />
//               Refund will be processed on or before 7 working days
//               <br />
//             </p>
//           </p>
//         </div>
//         <div className=" grid lg:grid-rows-2">
//           <div className="grid grid-cols-2 ">
//             <p className=" bg-gray-200 p-2 px-[5%]">
//               <b>Honeymoon Inclusions @ 6000 Net</b> <br />
//               Inclusions are: - <br />
//               Candlelight Dinner <br />
//               Flower Bed Decoration <br />
//               ½ Kg Honeymoon Cake <br />
//               Fruit Basket <br />
//               Badam Milk <br />
//             </p>

//             <ul className="bg-blue-50 p-2 px-[5%]">
//               <li>
//                 <b>Activities</b>
//                 <ul>
//                   <li>• Off road Jeep Trekking (Inside the property)</li>
//                   <li>• Pool Usage (7 am to 7 pm)</li>
//                   <li>• Rope Way</li>
//                   <li>• Cave Room Visit</li>
//                   <li>• Campfire (based on the climate) Till 9.30 pm only</li>
//                   <li>• Kids Park</li>
//                   <li>• Indoor Games</li>
//                   <li>• Rope way cycling</li>
//                   <li>• Rain Dance</li>
//                   <li>• Breakfast with 100 spread</li>
//                   <li>• GYM</li>
//                   <li>• Gaming Area</li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//           <div className="bg-yellow-50 p-2 px-[5%]">
//             {" "}
//             <br />
//             <b>Booking & payment policy:</b> <br />
//             • Need 50 % advance required to confirm a new booking and balance
//             full payment on or before guest arrival. <br />
//             • Mandatory – Please provide any valid Indian ID proof ( Aadhar
//             /Voters ID / Driving License / Passport ) of all adult guest at the
//             time of check in. Pan card not acceptable. <br />
//             • All GIT Bookings (5 rooms and above) must be reconfirmed 30 days
//             in advance with an advance payment <br />
//             • For all foreign nationals, on arrival requested to provide
//             original Passport with Visa. <br />
//             • Full and final payments to be made three bank working days before
//             the date of Tour for FIT & GIT bookings. <br />
//             • Check-out time will be 11:00 AM. Check-in time will be at 02:00 PM
//             Noon. <br />
//             • All FIT / GIT guests should present their confirmation voucher /
//             Messages at the time of check in. <br />{" "}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;
