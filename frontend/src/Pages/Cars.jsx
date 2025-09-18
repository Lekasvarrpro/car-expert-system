import React from "react";
import { NavLink } from "react-router-dom";
const carData = [
  {
    name: "Toyota Corolla",
    engine: "Petrol",
    mileage: "16 km/l",
    price: "$20,000",
    image: "/public/cars/toyoto.jpg"
  },
  {
    name: "Honda Civic",
    engine: "Petrol",
    mileage: "15 km/l",
    price: "$22,000",
    image: "/public/cars/honda-civic.jpg"
  },
  {
    name: "BMW 3 Series",
    engine: "Diesel",
    mileage: "14 km/l",
    price: "$35,000",
    image: "/public/cars/bmw.jpg"
  },
  {
    name: "Mercedes C-Class",
    engine: "Petrol",
    mileage: "13 km/l",
    price: "$40,000",
    image: "/public/cars/merchendes.jpg"
  },
  {
    name: "Audi A4",
    engine: "Petrol",
    mileage: "14 km/l",
    price: "$38,000",
    image: "/public/cars/audi.jpg"
  },
  {
    name: "Hyundai Creta",
    engine: "Diesel",
    mileage: "17 km/l",
    price: "$18,000",
    image: "/public/cars/hyndai-creata.jpg"
  },
  {
    name: "Ford Mustang",
    engine: "Petrol",
    mileage: "10 km/l",
    price: "$60,000",
    image: "/public/cars/ford-mustang.jpg"
  },
  {
    name: "Volkswagen Polo",
    engine: "Petrol",
    mileage: "18 km/l",
    price: "$15,000",
    image: "/public/cars/volwswagen.jpg"
  },
  {
    name: "Kia Seltos",
    engine: "Diesel",
    mileage: "16 km/l",
    price: "$19,000",
    image: "/public/cars/kia.jpg"
  },
  {
    name: "Tata Harrier",
    engine: "Diesel",
    mileage: "15 km/l",
    price: "$22,000",
    image: "/public/cars/tata.jpg"
  },
];

const Cars = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="italic bg-clip-text  text-red-500 tracking-wide text-3xl font-bold text-center mb-6">Our Previous Cars Solutions</h2>
      <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {carData.map((car, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-600">Engine: {car.engine}</p>
              <p className="text-gray-600">Mileage: {car.mileage}</p>
              <p className="text-gray-600">Price: {car.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
         <NavLink to="/explore" className="cursor-pointer hover:bg-black hover:text-white px-6 py-3 active:scale-[0.92] bg-red-500 text-white font-bold rounded-lg shadow-lg transition duration-300">Chat Now</NavLink>
      </div>
    </div>
  );
};

export default Cars;
