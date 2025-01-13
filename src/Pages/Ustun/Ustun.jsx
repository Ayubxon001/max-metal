import React from "react";
import { FaRocket, FaShieldAlt, FaUserFriends } from "react-icons/fa";

const Ustun = () => {
  return (
    <div className="py-14 px-10 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Bizning ustunlarimiz
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaRocket className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Tezkor xizmat
          </h2>
          <p className="text-gray-600">
            Bizning jarayonlarimiz tezkor ishlashga moslashtirilgan. Natijani
            kechikishlarsiz olasiz.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaShieldAlt className="text-4xl text-green-500 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Ishonchlilik
          </h2>
          <p className="text-gray-600">
            Har bir mijoz uchun shaffof va halol xizmat ko'rsatamiz.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaUserFriends className="text-4xl text-yellow-500 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Individual yondashuv
          </h2>
          <p className="text-gray-600">
            Har bir mijoz uchun mos yechimlarni taqdim etamiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ustun;
