import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Logo from "../images/nav_bar/Logo.jpg";

const NavBar = () => {
  return (
    <Navbar className=" shadow-md p-4 md:px-10 lg:px-20">
      <NavbarBrand href="/" className="flex items-center space-x-3">
        <img src={Logo} className="h-28 rounded-lg" alt="Logo in Max Metal" />
        <h1 className="text-3xl font-bold text-gray-800">Max Metal</h1>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse className="w-full">
        <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center w-full">
          <NavbarLink
            href="#bosh-sahifa"
            id="bosh-sahifa"
            className="text-lg hover:text-teal-600 transition duration-300 text-center"
          >
            Bosh Sahifa
          </NavbarLink>
          <NavbarLink
            href="#haqimizda"
            id="nav-haqimizda"
            className="text-lg hover:text-teal-600 transition duration-300 text-center"
          >
            Biz haqimizda
          </NavbarLink>
          <NavbarLink
            href="#product"
            id="nav-product"
            className="text-lg hover:text-teal-600 transition duration-300 text-center"
          >
            Maxsulotla
          </NavbarLink>
        </div>
      </NavbarCollapse>

      <NavbarCollapse className="w-full">
        <a
          href="tel:+998901091900
"
          id="phone-link"
          className="mt-3 md:mt-0 bg-teal-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-teal-600 transition duration-300 text-center ml-auto"
        >
          Telefon qilish
        </a>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavBar;
