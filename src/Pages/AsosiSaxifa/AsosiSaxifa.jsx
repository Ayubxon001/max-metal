import React from "react";
import metalSaxofasi from "../../images/nav_bar/AsosiSaxifa.jpg";

const AsosiSaxifa = () => {
  return (
    <section className=" py-10" id="bosh-sahifa">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between px-6">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">Metalla haqida</h1>
          <p className="mt-4 text-gray-700 text-[20px]">
            Biz sizga eng sifatli metall mahsulotlarini taqdim etamiz.
            Orzularingizni quring va kutganingizdan ham ko‘proq narsani olib
            keling. Metallning mustahkamligi va ishonchliligi har qanday loyiha
            uchun ajoyib poydevor bo‘lib xizmat qiladi.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={metalSaxofasi}
            alt="Metall Rasmi"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AsosiSaxifa;
