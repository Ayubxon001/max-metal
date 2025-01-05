import React from "react";
import FastFoodKioska1 from "../../images/FastFoodKioska/FastFoodKioska1.jpeg";
import FastFoodKioska2 from "../../images/FastFoodKioska/FastFoodKioska2.jpeg";
import FastFoodKioska3 from "../../images/FastFoodKioska/FastFoodKioska3.jpeg";
import FastFoodKioska4 from "../../images/FastFoodKioska/FastFoodKioska4.jpeg";
import FastFoodKioska5 from "../../images/FastFoodKioska/FastFoodKioska5.jpeg";
import FastFoodKioska6 from "../../images/FastFoodKioska/FastFoodKioska6.jpeg";
import FastFoodKioska7 from "../../images/FastFoodKioska/FastFoodKioska7.jpeg";
import FastFoodKioska8 from "../../images/FastFoodKioska/FastFoodKioska8.jpeg";
import FastFoodKioska9 from "../../images/FastFoodKioska/FastFoodKioska9.jpeg";
import FastFoodKioska10 from "../../images/FastFoodKioska/FastFoodKioska10.jpeg";
import FastFoodKioska11 from "../../images/FastFoodKioska/FastFoodKioska11.jpeg";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
const FastFoodKioska = () => {
  const images = [
    { src: FastFoodKioska1, title: "Fast Food Kiosk", price: "100,000 som" },
    { src: FastFoodKioska2, title: "Fast Food Kiosk", price: "100,000 som" },
    { src: FastFoodKioska3, title: "Fast Food Kiosk", price: "100,000 som" },
    { src: FastFoodKioska4, title: "Fast Food Kiosk", price: "100,000 som" },
    { src: FastFoodKioska5, title: "Fast Food Kiosk", price: "100,000 som" },
    { src: FastFoodKioska6, title: "Fast Food Kiosk", price: "100,000 som" },
    { src: FastFoodKioska7, title: "Fast Food Kiosk", price: "100,000 som" },
    { src: FastFoodKioska8, title: "Fast Food Kiosk", price: "100,000 som" },
    { src: FastFoodKioska9, title: "Fast Food Kiosk", price: "100,000 som" },
    { src: FastFoodKioska10, title: "Fast Food Kiosk", price: "100,000 som" },
    { src: FastFoodKioska11, title: "Fast Food Kiosk", price: "100,000 som" },
  ];
  return (
    <div className="py-14 px-10">
      <div className="pb-10">
        <Button>
          <Link to={"/"}>Orqaga</Link>
        </Button>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
        Fast Food Kiosk Xammasini
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-4 ">
              <h3 className="text-lg font-semibold text-gray-700">
                {image.title}
              </h3>
              <p className="text-teal-600 mb-0 mt-4  font-bold">
                {image.price}
              </p>
            </div>

            <div className="p-4 text-center">
              <Button gradientDuoTone="purpleToBlue">
                <a
                  href="https://t.me/Isa_Yuu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Sotvolish
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FastFoodKioska;
