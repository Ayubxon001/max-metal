import React from "react";
import { Link } from "react-router-dom";
import Skameyka6 from "../../images/Skameyka/Skameyka6.jpeg";
import Skameyka7 from "../../images/Skameyka/Skameyka7.jpeg";
import Skameyka8 from "../../images/Skameyka/Skameyka8.jpeg";
import Skameyka9 from "../../images/Skameyka/Skameyka9.jpeg";
import Skameyka10 from "../../images/Skameyka/Skameyka10.jpeg";
import Skameyka11 from "../../images/Skameyka/Skameyka11.jpeg";
import Skameyka12 from "../../images/Skameyka/Skameyka12.jpeg";
import Skameyka13 from "../../images/Skameyka/Skameyka13.jpeg";
import Skameyka14 from "../../images/Skameyka/Skameyka14.jpeg";
import Skameyka15 from "../../images/Skameyka/Skameyka15.jpeg";
import Skameyka16 from "../../images/Skameyka/Skameyka16.jpeg";
import Skameyka17 from "../../images/Skameyka/Skameyka17.jpeg";
import Skameyka18 from "../../images/Skameyka/Skameyka18.jpeg";
import { Button } from "flowbite-react";
const SkameykaAll = () => {
  const images = [
    { src: Skameyka6, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka7, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka8, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka9, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka10, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka11, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka12, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka13, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka14, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka15, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka16, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka17, title: "Skameyka", price: "100,000 som" },
    { src: Skameyka18, title: "Skameyka", price: "100,000 som" },
  ];
  return (
    <div className="py-12 px-10">
      <div className="pb-10">
        <Button>
          <Link to="/">Orqaga</Link>
        </Button>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Skameyka Xammasi</h1>
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
              className="w-full h-56 p-5 object-cover"
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

export default SkameykaAll;
