import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Whitemocha from "../../assets/website/Whitemocha.png";
import Vanillalatte from "../../assets/website/Vanillalatte.png";
import Spanishlatte from "../../assets/website/Spanishlatte.png";
import Saltedcaramel from "../../assets/website/Saltedcaramel.png";
import Plainlatte from "../../assets/website/Plainlatte.png";
import Matchalatte from "../../assets/website/Matchalatte.png";
import Hazelnutlatte from "../../assets/website/Hazelnutlatte.png";
import Flatwhite from "../../assets/website/Flatwhite.png";
import Espresso from "../../assets/website/Espresso.png";
import Chocolate from "../../assets/website/Chocolate.png";
import Caramelmacchiato from "../../assets/website/Caramelmacchiato.png";
import Caffeinatedmatcha from "../../assets/website/Caffeinatedmatcha.png";
import Cappucino from "../../assets/website/Cappucino.png";
import Cafemocha from "../../assets/website/Cafemocha.png";
import Americano from "../../assets/website/Americano.png";
import Affogato from "../../assets/website/Affogato.png";

const Coffee = () => {
  return (
    <div>
      <Navbar />
      <div className="h-auto w-auto bg-teal-950 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-start items-start mt-10 mb-20 ml-4">
        <h1 className="text-4xl sm:text-5xl text-white sans font-semibold mb-4 ml-48 sm:ml-4">Menu</h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              to={"/products"}
              className="text-3xl text-white sans font-light py-2 px-4
              text-white font-medium hover:font-bold hover:bg-teal-900 hover:teal-50 rounded-xl duration-300"
            >
              Best Seller
            </Link>
            <Link
              to={"/coffee"}
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
            <Product image={Whitemocha} name="White Mocha" />
            <Product image={Vanillalatte} name="Vanilla Latte" />
            <Product image={Spanishlatte} name="Spanish Latte" />
            <Product image={Saltedcaramel} name="Salted Caramel" />
            <Product image={Plainlatte} name="Plain Latte" />
            <Product image={Matchalatte} name="Matcha Latte" />
            <Product image={Hazelnutlatte} name="Hazelnut Latte" />
            <Product image={Flatwhite} name="Flat White" />
            <Product image={Espresso} name="Espresso" />
            <Product image={Chocolate} name="Chocolate" />
            <Product image={Caramelmacchiato} name="Caramel Macchiato" />
            <Product image={Caffeinatedmatcha} name="Caffeinated Matcha" />
            <Product image={Cappucino} name="Cappucino" />
            <Product image={Cafemocha} name="Cafe Mocha" />
            <Product image={Americano} name="Americano" />
            <Product image={Affogato} name="Affogato" />
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
      <img src={image} alt={name} className="rounded-[25px] h-[250px] w-[250px] p-3 max-w-full" />
      <p className="text-center mt-2 sans font-medium">{name}</p>
    </div>
  );
};

export default Coffee;
