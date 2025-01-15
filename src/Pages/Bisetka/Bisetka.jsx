import React from "react";
import besetka1 from "../../images/Besetka/Besetka1.jpg";
import besetka2 from "../../images/Besetka/Besetka2.jpg";
import besetka3 from "../../images/Besetka/Besetka3.jpg";
import besetka4 from "../../images/Besetka/Besetka4.jpg";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
const Bisetka = () => {
  const images = [
    { src: besetka1, title: "Besetka", price: "Narxi kelishilgan holda" },
    { src: besetka2, title: "Besetka", price: "Narxi kelishilgan holda" },
    { src: besetka3, title: "Besetka", price: "Narxi kelishilgan holda" },
    { src: besetka4, title: "Besetka", price: "Narxi kelishilgan holda" },
  ];
  return (
    <div className="py-14 px-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Bisetka Gallery</h1>
        <Link
          to={"/bisetka/all"}
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

export default Bisetka;
