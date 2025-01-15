import React from "react";
import Rishotka1 from "../../images/Rishotka/Rishotka1.jpg";
import Rishotka2 from "../../images/Rishotka/Rishotka2.jpg";
import Rishotka3 from "../../images/Rishotka/Rishotka3.jpg";
import Rishotka4 from "../../images/Rishotka/Rishotka4.jpg";
import Rishotka5 from "../../images/Rishotka/Rishotka5.jpg";
import Rishotka6 from "../../images/Rishotka/Rishotka6.jpg";
import Rishotka7 from "../../images/Rishotka/Rishotka7.jpg";
import Rishotka8 from "../../images/Rishotka/Rishotka8.jpg";
import Rishotka9 from "../../images/Rishotka/Rishotka9.jpg";
import Rishotka10 from "../../images/Rishotka/Rishotka10.jpg";
import Rishotka11 from "../../images/Rishotka/Rishotka11.jpg";
import Rishotka12 from "../../images/Rishotka/Rishotka12.jpg";
import Rishotka13 from "../../images/Rishotka/Rishotka13.jpg";
import Rishotka14 from "../../images/Rishotka/Rishotka14.jpg";
import Rishotka15 from "../../images/Rishotka/Rishotka15.jpg";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
const RishotkaAll = () => {
  const images = [
    { src: Rishotka1, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka2, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka3, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka4, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka5, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka6, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka7, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka8, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka9, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka10, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka11, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka12, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka13, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka14, title: "Rishotka", price: "Narxi kelishilgan holda" },
    { src: Rishotka15, title: "Rishotka", price: "Narxi kelishilgan holda" },
  ];
  return (
    <div className="py-12 px-10">
      <div className="mb-8">
        <Button>
          <Link to={"/"}>Orqaga</Link>
        </Button>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Rishotkala Xammasi</h1>
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

export default RishotkaAll;
