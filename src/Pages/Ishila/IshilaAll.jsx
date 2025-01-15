import React from "react";
import { Link, Links } from "react-router-dom";
import ishi1 from "../../images/ishila/ishi1.jpg";
import ishi2 from "../../images/ishila/ishi2.jpg";
import ishi3 from "../../images/ishila/ishi3.webp";
import ishi4 from "../../images/ishila/ishi4.jpg";
import ishi5 from "../../images/ishila/ishi5.jpg";
import ishi6 from "../../images/ishila/ishi6.jpg";
import ishi7 from "../../images/ishila/ishi7.jpg";
import ishi8 from "../../images/ishila/ishi8.jpg";
import ishi9 from "../../images/ishila/ishi9.jpg";
import ishi10 from "../../images/ishila/ishi10.jpg";
import ishi11 from "../../images/ishila/ishi11.jpg";
import ishi12 from "../../images/ishila/ishi12.jpg";
import ishi13 from "../../images/ishila/ishi13.jpg";
import ishi14 from "../../images/ishila/ishi14.jpg";
import ishi15 from "../../images/ishila/ishi15.jpg";
import { Button } from "flowbite-react";

const IshilaAll = () => {
  const images = [
    { src: ishi1, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 1 },
    { src: ishi2, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 2 },
    { src: ishi3, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 3 },
    { src: ishi4, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 4 },
    { src: ishi5, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 5 },
    { src: ishi6, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 6 },
    { src: ishi7, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 7 },
    { src: ishi8, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 8 },
    { src: ishi9, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 9 },
    { src: ishi10, title: "Eshiklar", price: "Narxi kelishilgan holda", id: 10 },
    { src: ishi11, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 11 },
    { src: ishi12, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 12 },
    { src: ishi13, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 13 },
    { src: ishi14, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 14},
    { src: ishi15, title: "Eshiklar ", price: "Narxi kelishilgan holda", id: 15 },
  ];

  return (
    <div className="py-10 px-10">
      <div className="flex justify-between items-center mb-8">
        <Button>
          <Link to={"/"}>Orqaga</Link>
        </Button>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl py-10 pb-0 font-bold text-gray-800">
        Eshiklar Xammasi
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white"
          >
            <Link to={`/ishila/${image.id}`}>
              <img
                src={image.src}
                alt={image.title}
                className="w-full p-7 h-56 object-cover"
              />
            </Link>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">
                {image.title}
              </h3>
              <p className="text-teal-600 font-bold">{image.price} som</p>
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

export default IshilaAll;
