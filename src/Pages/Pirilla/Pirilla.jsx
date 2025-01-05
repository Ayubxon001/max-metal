import React from "react";
import pirilla1 from "../../images/pirilla/pirilla1.jpg";
import pirilla2 from "../../images/pirilla/pirilla2.jpg";
import pirilla3 from "../../images/pirilla/pirilla3.jpg";
import pirilla4 from "../../images/pirilla/pirilla4.jpg";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const Pirilla = () => {
  const images = [
    { src: pirilla1, title: "Pirilla", price: "100,000 som" },
    { src: pirilla2, title: "Pirilla", price: "100,000 som" },
    { src: pirilla3, title: "Pirilla", price: "100,000 som" },
    { src: pirilla4, title: "Pirilla", price: "100,000 som" },
  ];

  return (
    <div className="py-14 px-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Pirilla Gallery</h1>
        <Link
          to="/pirilla/all"
          className="text-teal-600 hover:underline text-lg font-medium"
        >
          Xammasini ko'rish
        </Link>
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

export default Pirilla;
