import React from "react";
import { Link } from "react-router-dom";
import kravat1 from "../../images/Kravat/Kravat1.jpeg";
import FastFoodKioska2 from "../../images/FastFoodKioska/FastFoodKioska2.jpeg";
import loft2 from "../../images/Loft/Loft2.jpeg";
import miniOffice2 from "../../images/MiniOffice/MiniOffice2.jpeg";
const Category = () => {
  const categories = [
    { id: 1, title: "Kravatlar...", image: kravat1, link: "/kravat/all" },
    {
      id: 2,
      title: "Fast Food Kiosk...",
      image: FastFoodKioska2,
      link: "/fast/food/kiosk/all",
    },
    { id: 3, title: "Loft...", image: loft2, link: "/loft/all" },
    {
      id: 4,
      title: "Mini Office...",
      image: miniOffice2,
      link: "/mini/office/all",
    },
  ];

  return (
    <div className="py-12 px-10">
      <div className="items-center mb-8">
        <h1 className="text-4xl text-gray-800 font-bold">Category</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white"
          >
            <Link to={category.link}>
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 p-5 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {category.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
