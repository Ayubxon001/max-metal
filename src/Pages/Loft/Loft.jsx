import React from "react";
import loft1 from "../../images/Loft/Loft1.jpeg";
import loft2 from "../../images/Loft/Loft2.jpeg";
import loft3 from "../../images/Loft/Loft3.jpeg";
import loft4 from "../../images/Loft/Loft4.jpeg";
import loft5 from "../../images/Loft/Loft5.png";
import loft6 from "../../images/Loft/Loft6.jpeg";
import loft7 from "../../images/Loft/Loft7.jpeg";
import loft8 from "../../images/Loft/Loft8.jpeg";
import loft9 from "../../images/Loft/Loft9.jpeg";
import loft10 from "../../images/Loft/Loft10.jpeg";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Loft = () => {
  const images = [
    { id: 1, src: loft1, title: "Loft", price: "Narxi kelishilgan holda " },
    { id: 2, src: loft2, title: "Loft", price: "Narxi kelishilgan holda " },
    { id: 3, src: loft3, title: "Loft", price: "Narxi kelishilgan holda " },
    { id: 4, src: loft4, title: "Loft", price: "Narxi kelishilgan holda " },
    { id: 5, src: loft5, title: "Loft", price: "Narxi kelishilgan holda " },
    { id: 6, src: loft6, title: "Loft", price: "Narxi kelishilgan holda " },
    { id: 7, src: loft7, title: "Loft", price: "Narxi kelishilgan holda " },
    { id: 8, src: loft8, title: "Loft", price: "Narxi kelishilgan holda " },
    { id: 9, src: loft9, title: "Loft", price: "Narxi kelishilgan holda " },
    { id: 10, src: loft10, title: "Loft", price: "Narxi kelishilgan holda " },
  ];

  return (
    <div className="py-12 px-10">
      <div className="pb-10">
        <Button>
          <Link to={"/"}>Orqaga</Link>
        </Button>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Loft Xammasini</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img src={image.src} alt={image.title} className="w-full h-80" />
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

export default Loft;
