import React from "react";
import pirilla1 from "../images/pirilla/pirilla1.jpg";
import pirilla2 from "../images/pirilla/pirilla2.jpg";
import pirilla3 from "../images/pirilla/pirilla3.jpg";
import pirilla4 from "../images/pirilla/pirilla4.jpg";
import pirilla5 from "../images/pirilla/pirilla5.jpg";
import pirilla6 from "../images/pirilla/pirilla6.jpg";
import pirilla7 from "../images/pirilla/pirilla7.jpg";
import pirilla8 from "../images/pirilla/pirilla8.jpg";
import pirilla9 from "../images/pirilla/pirilla9.jpg";
import pirilla10 from "../images/pirilla/pirilla10.jpg";
import pirilla11 from "../images/pirilla/pirilla11.jpg";
import pirilla12 from "../images/pirilla/pirilla12.jpg";
import pirilla13 from "../images/pirilla/pirilla13.jpg";
import pirilla14 from "../images/pirilla/pirilla14.jpg";
import pirilla15 from "../images/pirilla/pirilla15.jpg";
import pirilla16 from "../images/pirilla/pirilla16.jpg";
import pirilla17 from "../images/pirilla/pirilla17.jpg";
import pirilla18 from "../images/pirilla/pirilla18.jpg";
import pirilla19 from "../images/pirilla/pirilla19.jpg";
import pirilla20 from "../images/pirilla/pirilla20.jpg";
import pirilla21 from "../images/pirilla/pirilla21.jpg";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const PirillaAll = () => {
  const images = [
    { src: pirilla1, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla2, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla3, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla4, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla5, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla6, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla7, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla8, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla9, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla10, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla11, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla12, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla13, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla14, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla15, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla16, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla17, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla18, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla19, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla20, title: "Pirilla  ", price: "100,000 som" },
    { src: pirilla21, title: "Pirilla  ", price: "100,000 som" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-10">
      <Button gradientDuoTone="greenToBlue">
        <Link to={"/"}>Orqaga</Link>
      </Button>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl py-10 pb-0 font-bold text-gray-800">
          Pirilla Xammasi
        </h2>
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
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">
                {image.title}
              </h3>
              <p className="text-teal-600 font-bold">{image.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PirillaAll;
