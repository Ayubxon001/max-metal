import React from "react";
import { Link } from "react-router-dom";
import Skameyka1 from "../../images/Skameyka/Skameyka1.jpeg";
import Skameyka2 from "../../images/Skameyka/Skameyka2.jpeg";
import Skameyka3 from "../../images/Skameyka/Skameyka3.jpeg";
import Skameyka4 from "../../images/Skameyka/Skameyka4.jpeg";
import { Button } from "flowbite-react";
const Skameyka = () => {
  const images = [
    { src: Skameyka1, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka2, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka3, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka4, title: "Skameyka", price: "100,000 som" },
  ];
  return (
    <div className="py-12 px-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Skameyka Gallery</h1>
        <Link
          to={"/skameyka/all"}
          className="text-teal-600 hover:underline text-lg font-medium"
        >
          Xammasini korish
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

export default Skameyka;
