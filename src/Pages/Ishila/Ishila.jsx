import React from "react";
import { Link } from "react-router-dom";
import ishi1 from "../../images/ishila/ishi1.jpg";
import ishi2 from "../../images/ishila/ishi2.jpg";
import ishi3 from "../../images/ishila/ishi3.webp";
import ishi4 from "../../images/ishila/ishi4.jpg";
import { Button } from "flowbite-react";

const Ishila = () => {
  const images = [
    { src: ishi1, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 1 },
    { src: ishi2, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 2 },
    { src: ishi3, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 3 },
    { src: ishi4, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 4 },
  ];

  return (
    <div className="py-10 px-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Eshiklar Gallery</h1>
        <Link
          to={"/ishila/all"}
          className="text-teal-600 hover:underline text-lg font-medium"
        >
          Xammasini ko'rish
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full p-10 h-56 object-cover"
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
                  href="https://t.me/tower2112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Sotib olish
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ishila;
