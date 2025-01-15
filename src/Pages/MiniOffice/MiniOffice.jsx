import React from "react";
import miniOffice1 from "../../images/MiniOffice/MiniOffice1.jpeg";
import miniOffice2 from "../../images/MiniOffice/MiniOffice2.jpeg";
import miniOffice3 from "../../images/MiniOffice/MiniOffice3.jpeg";
import miniOffice4 from "../../images/MiniOffice/MiniOffice4.jpeg";
import miniOffice5 from "../../images/MiniOffice/MiniOffice5.jpeg";
import miniOffice6 from "../../images/MiniOffice/MiniOffice6.jpeg";
import miniOffice7 from "../../images/MiniOffice/MiniOffice7.jpeg";
import miniOffice8 from "../../images/MiniOffice/MiniOffice8.jpeg";
import miniOffice9 from "../../images/MiniOffice/MiniOffice9.jpeg";
import miniOffice10 from "../../images/MiniOffice/MiniOffice10.jpeg";
import miniOffice11 from "../../images/MiniOffice/MiniOffice11.jpeg";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
const MiniOffice = () => {
  const images = [
    {
      src: miniOffice1,
      title: "Mini Office",
      price: "Narxi kelishilgan holda",
    },
    {
      src: miniOffice2,
      title: "Mini Office",
      price: "Narxi kelishilgan holda",
    },
    {
      src: miniOffice3,
      title: "Mini Office",
      price: "Narxi kelishilgan holda",
    },
    {
      src: miniOffice4,
      title: "Mini Office",
      price: "Narxi kelishilgan holda",
    },
    {
      src: miniOffice5,
      title: "Mini Office",
      price: "Narxi kelishilgan holda",
    },
    {
      src: miniOffice6,
      title: "Mini Office",
      price: "Narxi kelishilgan holda",
    },
    {
      src: miniOffice7,
      title: "Mini Office",
      price: "Narxi kelishilgan holda",
    },
    {
      src: miniOffice8,
      title: "Mini Office",
      price: "Narxi kelishilgan holda",
    },
    {
      src: miniOffice9,
      title: "Mini Office",
      price: "Narxi kelishilgan holda",
    },
    {
      src: miniOffice10,
      title: "Mini Office",
      price: "Narxi kelishilgan holda",
    },
    {
      src: miniOffice11,
      title: "Mini Office",
      price: "Narxi kelishilgan holda",
    },
  ];
  return (
    <div className="py-14 px-10">
      <div className="pb-10">
        <Button>
          <Link to={"/"}>Orqaga</Link>
        </Button>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Mini Office Xammasini
        </h1>
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

            <div className="p-4 ">
              <h3 className="text-lg font-semibold text-gray-700">
                {image.title}
              </h3>
              <p className="text-teal-600 mb-0 mt-4  font-bold">
                {image.price}
              </p>
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

export default MiniOffice;
