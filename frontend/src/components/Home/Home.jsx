import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Footer from "../Footer/Footer";
import Logo from "../../assets/website/logo.png";
import aboutUs from "../../assets/website/aboutUs.jpg";
import prevSlideImage from "../../assets/website/prevSlide.png";
import nextSlideImage from "../../assets/website/nextSlide.png";
import currentImageIndexImage from "../../assets/website/currentImageIndex.png";
import bestSeller from "../../assets/website/bestseller.png";
import best_seller from "../../assets/website/best_seller.jpg";
import customer1 from "../../assets/website/customer1.jpg";
import customer2 from "../../assets/website/customer2.jpg";
import customer3 from "../../assets/website/customer3.jpg";
import coffee_beans from "../../assets/website/coffee_beans.png";
import frappe from "../../assets/website/frappe.png";
import tea_leaf from "../../assets/website/tea_leaf.png";
import lemonade from "../../assets/website/lemonade.png";
import github from "../../assets/website/github.png";
import linkedin from "../../assets/website/linkedin.png";
import hacker from "../../assets/website/hacker.jpg";
import hustler from "../../assets/website/hustler.jpg";
import hipster from "../../assets/website/hipster.png";
import Vanillawhitemocha from "../../assets/website/Vanillawhitemocha.png";
import Strawberryfrappe from "../../assets/website/Strawberryfrappe.png";
import Saltedcaramelfrappe from "../../assets/website/Saltedcaramelfrappe.png";
import star4 from "../../assets/website/star4.png";
import star5 from "../../assets/website/star5.png";

const Home = () => {
  const sliderRef = useRef(null);
  const images = [prevSlideImage, currentImageIndexImage, nextSlideImage];
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    beforeChange: (current, next) => setCurrentImageIndex(next),
  };

  const feedbackData = [
    {
      image: customer1,
      name: "Ribinjan deLeon",
      feedback:
        "Visited Winzen's Cafe recently and was blown away by the cozy ambiance, flavorful dishes, and exceptional service. A definite must-visit for anyone looking for a delightful dining experience!",
    },
    {
      image: customer2,
      name: "Ander Dotillos",
      feedback:
        "Winzen's Cafe offers a cozy atmosphere, delicious food, and exceptional service, making it a must-visit spot.",
    },
    {
      image: customer3,
      name: "Tselsie Dotillos",
      feedback:
        "Winzen's Cafe never disappoints - the ambiance is cozy, the food is delicious, and the service is exceptional. It's become my favorite spot in town!",
    },
    {
      image: customer3,
      name: "Tselsie Dotillos",
      feedback:
        "At Winzen's Cafe, you'll find warmth, flavor, and a personal touch in every bite and interaction. It's a must-visit for those seeking a truly enriching dining experience.",
    },
    {
      image: customer3,
      name: "Tselsie Dotillos",
      feedback:
        "Winzen's Cafe is a delightful escape with its cozy setting, delicious offerings, and attentive staff. Highly recommend stopping by for a memorable experience!",
    },
  ];

  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  const nextFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) =>
      prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) =>
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="min-h-screen bg-teal-950 flex justify-center items-center relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-teal-900 py-2 px-4 rounded-full ml-5 z-10"
        >
          &lt;
        </button>
        <div className="container max-w-full h-auto relative">
          <Slider
            ref={sliderRef}
            {...settings}
            initialSlide={currentImageIndex}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-teal-900 py-2 px-4 rounded-full mr-5 z-10"
        >
          &gt;
        </button>
      </div>
      <div className="h-[1100px] sm:h-[370px] w-screen bg-white flex flex-col justify-center items-center hover:animate-fade -mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-14">
          <Link to={"/coffee"}>
            <div className="bg-teal-950 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[180px] md:h-[180px] shadow-2xl rounded-[200px] flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700">
              <img
                src={coffee_beans}
                className="w-[70px] h-[70px] m-10 sm:mt-10"
              />
            </div>
          </Link>
          <Link to={"/frappe"}>
            <div className="bg-teal-950 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[180px] md:h-[180px] shadow-2xl rounded-[200px] flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700">
              <img src={frappe} className="w-[70px] h-[70px] m-10" />
            </div>
          </Link>
          <Link to={"/tea"}>
            <div className="bg-teal-950 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[180px] md:h-[180px] shadow-2xl rounded-[200px] flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700">
              <img src={tea_leaf} className="w-[70px] h-[70px] m-10" />
            </div>
          </Link>
          <Link to={"/pastries"}>
            <div className="bg-teal-950 w-[180px] h-[180px] sm:w-[220px] sm:h-[250px] md:w-[180px] md:h-[180px] shadow-2xl rounded-[200px] mb-10 flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700">
              <img src={lemonade} className="w-[70px] h-[70px]" />
            </div>
          </Link>
        </div>
      </div>
      <div className="h-auto sm:h-[800px] w-screen mt-19 bg-white flex flex-col sm:flex-row justify-center items-center hover:animate-fade-down delay-700">
        <div className="w-full sm:w-1/2 flex justify-center items-center hover:animation-fade">
          <img
            src={aboutUs}
            className="w-[400px] h-auto md:w-[500px] md:h-[650px] mt-8 py-6 items-start flex rounded-t-full mb-20 animate-fade-left animate-once animate-ease-in-out animate-alternate animate-fill-both"
          />
        </div>
        <div className="w-full sm:w-1/2 flex justify-start items-start px-6 sm:px-12">
          <div>
            <h1 className="text-4xl sm:text-6xl font-sans font-semibold py-5 sm:py-10 text-teal-950 -mt-20 sm:-mt-48">
              About Us
            </h1>
            <p className="sans font-normal py-2 text-lg sm:text-2xl mb-10">
              loremipsumloremipsumloremipsumloremipsum<br></br>
              loremipsumloremipsumloremipsumloremipsum<br></br>
              loremipsumloremipsumloremipsumloremipsum<br></br>
              loremipsumloremipsumloremipsumloremipsum<br></br>
              loremipsumloremipsumloremipsumloremipsum<br></br>
              loremipsumloremipsumloremipsumloremipsum<br></br>
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen sm:min-h-[800px] md:min-h-[800px] w-screen bg-teal-950 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-white sans font-medium text-5xl sm:text-6xl mt-10 sm:mt-1">
            Best Sellers
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-20 mt-10">
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full">
              <img
                src={Vanillawhitemocha}
                className="rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 mt-5 sm:mt-10 shadow-2xl"
                alt="Vanilla White Mocha"
              />
              <p className="text-center text-white sans text-2xl sm:text-2xl font-medium mt-5 sm:mt-10">
                Vanilla White Mocha
              </p>
            </div>
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full">
              <img
                src={Strawberryfrappe}
                className="rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 mt-10 sm:mt-10 shadow-2xl"
                alt="Strawberry Frappe"
              />
              <p className="text-center text-white sans text-2xl sm:text-2xl font-medium mt-5 sm:mt-10">
                Strawberry Frappe
              </p>
            </div>
            <div className="w-[250px] h-[400px] sm:w-[300px] sm:h-[400px] md:w-[350px] md:h-[450px] rounded-full mb-[50px]">
              <img
                src={Saltedcaramelfrappe}
                className="rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 mt-16 sm:mt-10 shadow-2xl"
                alt="Salted Caramel Frappe"
              />
              <p className="text-center text-white sans text-2xl sm:text-2xl font-medium mt-5 sm:mt-10">
                Salted Caramel Frappe
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Customer Feedback */}
      <div className="h-auto sm:h-[800px] w-screen bg-white flex flex-col justify-center items-center grids-cols-3">
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-teal-950 sans font-medium text-4xl sm:text-6xl mt-10 sm:mt-10">
            Customer Feedback
          </h1>
        </div>
        <div className="flex justify-center items-center gap-y-2 gap-x-2 mt-14">
          {feedbackData.map((item, index) => (
            <div
              key={index}
              className={`bg-white w-full sm:w-[800px] h-[500px] shadow-2xl mb-20 flex flex-col justify-center items-center ${
                index === currentFeedbackIndex ? "" : "hidden"
              }`}
            >
              <img
                src={item.image}
                className="rounded-[300px] w-[150px] h-[150px] -mt-10 mb-4"
              />
              <div className="mt-1 text-center flex flex-col items-center justify-center">
                <img
                  src={index % 2 === 0 ? star4 : star5}
                  alt="Star Rating"
                  className="h-[35px] mb-4 items-center"
                />
                <h2 className="text-xl text-center font-semibold">
                  {item.name}
                </h2>
                <p className="text-gray-700 text-center text-lg sans mt-4 ml-10 mr-10">
                  "{item.feedback}"
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Previous and Next Feedback Buttons */}
        <div className="flex justify-center mb-10 -mt-10">
          <button
            onClick={prevFeedback}
            className="bg-teal-950 text-white px-6 py-3 rounded-full hover:bg-teal-900 mr-4"
          >
            Previous
          </button>
          <button
            onClick={nextFeedback}
            className="bg-teal-950 text-white px-6 py-3 rounded-full hover:bg-teal-900"
          >
            Next
          </button>
        </div>
      </div>
      {/* Additional developers section */}
      <div className="h-auto sm:h-[800px] w-screen bg-teal-950 flex flex-col justify-center items-top">
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-white sans font-medium text-5xl sm:text-6xl mt-10 sm:-mt-20">
            The developers
          </h1>
        </div>
        <div className="h-auto sm:h[800px] w-screen flex flex-col justify-center items-center hover:animate-fade delay-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-14 mt-14">
            <div className="w-[280px] h-[360px] sm:w-[300px] sm:h-[400px] md:w-[310px] md:h-[300px] rounded-full mb-[50px]">
              <img
                src={hacker}
                className="rounded-full justify-center items-center hover:animate-fade"
              />
              <h1 className="text-center text-white sans text-lg sm:text-2xl font-medium mt-6 sm:mt-10">
                App and Web Developer
              </h1>
              <p className="flex justify-center items-center font-light text-white">
                Relgin Paloma
              </p>
              <div className="flex justify-center items-center col-span-2 gap-4 mt-3">
                <button>
                  <a
                    href="https://github.com/Beaumont12"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-neutral-950 hover:bg-neutral-900 text-white font-medium sans py-2 px-4 rounded inline-flex items-center"
                  >
                    <img src={github} className="w-[30px] h-[30px] mr-2" />
                    Github
                  </a>
                </button>
                <button>
                  <a
                    href="https://www.linkedin.com/in/imrelgin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-900 hover:bg-blue-900 text-white font-medium sans py-2 px-4 rounded inline-flex items-center"
                  >
                    <img src={linkedin} className="w-[30px] h-[30px] mr-2" />
                    Linkedin
                  </a>
                </button>
              </div>
            </div>
            <div className="w-[280px] h-[220px] sm:w-[300px] sm:h-[400px] md:w-[310px] md:h-[300px] rounded-full mb-[50px]">
              <img
                src={hustler}
                className="rounded-[400px] justify-center items-center hover:animate-fade"
              />
              <h1 className="text-center text-white sans text-lg sm:text-2xl font-medium mt-6 sm:mt-10">
                Project Manager
              </h1>
              <p className="flex justify-center items-center font-light text-white">
                Sheena Mechaela Basiga
              </p>
              <div className="flex justify-center items-center col-span-2 gap-4 mt-3">
                <button>
                  <a
                    href="https://github.com/sheenabasiga?fbclid=IwAR2OLsC63BgrRw-brIldOp-1uQYoj2Ro64oV3YW7yo5mo4jTIfg6ACRW_BI"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-neutral-950 hover:bg-neutral-900 text-white font-medium sans py-2 px-4 rounded inline-flex items-center"
                  >
                    <img src={github} className="w-[30px] h-[30px] mr-2" />
                    Github
                  </a>
                </button>
                <button>
                  <a
                    href="https://www.linkedin.com/in/sheena-mechaela-basiga-a31336296/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-900 hover:bg-blue-900 text-white font-medium sans py-2 px-4 rounded inline-flex items-center"
                  >
                    <img src={linkedin} className="w-[30px] h-[30px] mr-2" />
                    Linkedin
                  </a>
                </button>
              </div>
            </div>
            <div className="w-[290px] h-[400px] sm:w-[300px] sm:h-[400px] md:w-[310px] md:h-[300px] rounded-full mb-[50px] mt-36 sm:mt-3">
              <img
                src={hipster}
                className="rounded-full justify-center items-center hover:animate-fade"
              />
              <h1 className="text-center text-white sans text-lg sm:text-2xl font-medium mt-6 sm:mt-10">
                UI/UX Designer
              </h1>
              <p className="flex justify-center items-center font-light text-white">
                Flynn Y. Rigonan
              </p>
              <div className="flex justify-center items-center col-span-2 gap-4 mt-3">
                <button>
                  <a
                    href="https://github.com/LloydDaytona"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-neutral-950 hover:bg-neutral-900 text-white font-medium sans py-2 px-4 rounded inline-flex items-center"
                  >
                    <img src={github} className="w-[30px] h-[30px] mr-2" />
                    Github
                  </a>
                </button>
                <button>
                  <a
                    href="https://www.linkedin.com/in/flynn-rigonan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-900 hover:bg-blue-900 text-white font-medium sans py-2 px-4 rounded inline-flex items-center"
                  >
                    <img src={linkedin} className="w-[30px] h-[30px] mr-2" />
                    Linkedin
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
