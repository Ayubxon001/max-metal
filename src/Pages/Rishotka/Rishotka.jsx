import React from "react";
import Rishotka1 from "../../images/Rishotka/Rishotka1.jpg";
import Rishotka2 from "../../images/Rishotka/Rishotka2.jpg";
import Rishotka3 from "../../images/Rishotka/Rishotka3.jpg";
import Rishotka4 from "../../images/Rishotka/Rishotka4.jpg";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
const Rishotka = () => {
  const images = [
    { src: Rishotka1, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka2, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka3, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka4, title: "Rishotka", price: "Narxi kelishilgan holda" },
  ];
  return (
    <div className="py-12 px-10">
  
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Rishotka Gallery</h1>
        <Link
          to={"/rishotka/all"}
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

export default Rishotka;
