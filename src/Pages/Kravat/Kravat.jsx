import React from "react";
import kravat1 from "../../images/Kravat/Kravat1.jpeg";
import kravat2 from "../../images/Kravat/Kravat2.jpeg";
import kravat3 from "../../images/Kravat/Kravat3.jpeg";
import kravat4 from "../../images/Kravat/Kravat4.jpeg";
import kravat5 from "../../images/Kravat/Kravat5.jpeg";
import kravat6 from "../../images/Kravat/Kravat6.jpeg";
import kravat7 from "../../images/Kravat/Kravat7.jpeg";
import kravat8 from "../../images/Kravat/Kravat8.jpeg";
import kravat9 from "../../images/Kravat/Kravat9.jpeg";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
const Kravat = () => {
  const images = [
    { src: kravat1, title: "Kravat", price: "Narxi kelishilgan holda " },
    { src: kravat2, title: "Kravat", price: "Narxi kelishilgan holda " },
    { src: kravat3, title: "Kravat", price: "Narxi kelishilgan holda " },
    { src: kravat4, title: "Kravat", price: "Narxi kelishilgan holda " },
    { src: kravat5, title: "Kravat", price: "Narxi kelishilgan holda " },
    { src: kravat6, title: "Kravat", price: "Narxi kelishilgan holda " },
    { src: kravat7, title: "Kravat", price: "Narxi kelishilgan holda " },
    { src: kravat8, title: "Kravat", price: "Narxi kelishilgan holda " },
    { src: kravat9, title: "Kravat", price: "Narxi kelishilgan holda " },
  ];
  return (
    <div className="py-12 px-10">
      <div className="mb-10">
        <Button>
          <Link to={"/"}>Orqaga</Link>
        </Button>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-10">Kravat</h1>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-lg  shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white"
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

export default Kravat;
