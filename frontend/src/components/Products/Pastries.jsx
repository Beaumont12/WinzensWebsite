import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Vanillawhitemocha from "../../assets/website/Vanillawhitemocha.png";
import Strawberryfrappe from "../../assets/website/Strawberryfrappe.png";
import Saltedcaramelfrappe from "../../assets/website/Saltedcaramelfrappe.png";
import Greenocean from "../../assets/website/Greenocean.png";
import Chocolatemintfrappe from "../../assets/website/Chocolatemintfrappe.png";
import Doublechocolatefrappe from "../../assets/website/Doublechocolatefrappe.png";

const Pastries = () => {
  return (
    <div>
      <Navbar />
      <div className="h-auto bg-teal-950 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-start items-start mt-10 mb-20">
          <h1 className="text-4xl sm:text-5xl text-white sans font-semibold mb-4 ml-48 sm:ml-4">Menu</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={"/products"}
              className="text-3xl text-white sans font-light py-2 px-4
              text-white font-medium hover:font-bold hover:bg-teal-900 hover:teal-50 rounded-xl duration-300"
            >
              Best Seller
            </Link>
            <Link
              to={"/Coffee"}
              className="text-3xl text-white sans font-light py-2 px-4
              text-white font-medium hover:font-bold hover:bg-teal-900 hover:teal-50 rounded-xl duration-300"
            >
              Coffee
            </Link>
            <Link
              to={"/tea"}
              className="text-3xl text-white sans font-light py-2 px-4
              text-white font-medium hover:font-bold hover:bg-teal-900 hover:teal-50 rounded-xl duration-300"
            >
              Tea
            </Link>
            <Link
              to={"/frappe"}
              className="text-3xl text-white sans font-light py-2 px-4
              text-white font-medium hover:font-bold hover:bg-teal-900 hover:teal-50 rounded-xl duration-300"
            >
              Frapped
            </Link>
            <Link
              to={"/pastries"}
              className="text-3xl text-white sans font-light py-2 px-4
              text-white font-medium hover:font-bold hover:bg-teal-900 hover:teal-50 rounded-xl duration-300"
            >
              Lemonade
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            <Product image={Vanillawhitemocha} name="Vanilla White Mocha" />
            <Product image={Strawberryfrappe} name="Strawberry Frappe" />
            <Product image={Saltedcaramelfrappe} name="Salted Caramel Frappe" />
            <Product image={Greenocean} name="Green Ocean" />
            <Product image={Doublechocolatefrappe} name="Double Chocolate Frappe" />
            <Product image={Chocolatemintfrappe} name="Chocolate Mint Frappe" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Product = ({ image, name }) => {
  return (
    <div className="bg-white w-[250px] h-[300px] shadow-2xl ml-32 sm:ml-10 mt-5 sm:mt-4 rounded-[25px] transform hover:scale-110 ease-in-out delay-150 duration-700">
      <img
        src={image}
        alt={name}
        className="rounded-[25px] h-[250px] w-[250px] p-3 max-w-full"
        style={{ width: "100%", height: "auto" }} // Make the image responsive
      />
      <p className="text-center mt-2 sans font-medium">{name}</p>
    </div>
  );
};

export default Pastries;
