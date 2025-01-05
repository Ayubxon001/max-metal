import React from "react";
import logo from "../images/footer/Logo.jpg";
import insta from "../images/footer/insta.svg";
import telega from "../images/footer/telega.svg";
import facebook from "../images/footer/facebook.svg";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Biz haqimizda bo'limi */}
          <div>
            <div className="flex items-center gap-2 cursor-pointer mb-3">
              <img src={logo} alt="MaxMetal Logosi" className="w-20" />
              <div>
                <h4 className="text-lg font-bold">MaxMetal</h4>
                <p className="text-gray-400 text-sm">
                  Sanoat ehtiyojlaringiz uchun yuqori sifatli metall
                  mahsulotlar.
                </p>
              </div>
            </div>
          </div>
          {/* Tezkor havolalar bo'limi */}
          <div>
            <h4 className="text-lg font-bold mb-4">Tezkor havolalar</h4>
            <ul className="space-y-2">
              <li>
                <a href="/home" className="text-gray-400 hover:text-white">
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-white">
                  Mahsulotlar
                </a>
              </li>
              <li>
                <a
                  href=""
                  id="#qiganIshlarimiz"
                  className="text-gray-400 hover:text-white"
                >
                  Biz haqimizda
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Biz bilan bog'lanish</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+998888388338"
                  className="text-gray-400 hover:text-white"
                >
                  +998(88)838-83-38
                </a>
              </li>
              <li>
                <a
                  href="tel:+998888388338"
                  className="text-gray-400 hover:text-white"
                >
                  +998(88)838-83-38
                </a>
              </li>
            </ul>
          </div>
          {/* Ijtimoiy tarmoqlar bo'limi */}
          <div>
            <h4 className="text-lg font-bold mb-4">Bizni kuzating</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://telegram.org"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telega} alt="Telegram" className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8">
          &copy; {date.getFullYear()} MaxMetal. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
