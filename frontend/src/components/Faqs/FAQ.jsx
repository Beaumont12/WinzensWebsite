import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import faq1 from "../../assets/website/faq1.png";
import faq2 from "../../assets/website/faq2.png";
import faq3 from "../../assets/website/faq3.png";
import faq4 from "../../assets/website/faq4.png";
import faq5 from "../../assets/website/faq5.png";
import faq6 from "../../assets/website/faq6.png";
import background from "../../assets/website/background.jpg";

const FAQ = () => {
  // Array of your FAQ images
  const faqImages = [faq1, faq2, faq3, faq4, faq5, faq6];

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Reference for controlling the slider
  const sliderRef = useRef(null);

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <Navbar />
      <div className="h-full flex justify-center items-center flex-col relative">
        <div className="background-overlay" />
        <img src={background} alt="Background" className="background-image" />
        <h2 className="z-10 font-bold text-4xl mt-20 text-white">
          Do You Have Questions?
        </h2>
        <div className="w-full max-w-4xl mt-8 relative">
          <Slider ref={sliderRef} {...settings}>
            {faqImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>
            ))}
          </Slider>
          {/* Hidden buttons, but with functionality */}
          <div className="flex justify-center mt-4 mb-10">
            <button
              onClick={goToPrev}
              className="z-10 mr-4 px-4 py-2 bg-white text-gray-800 rounded-full opacity-0 cursor-pointer border border-gray-400 hover:bg-gray-200 transition duration-300"
            >
              &lt; Prev
            </button>
            <button
              onClick={goToNext}
              className="z-10 px-4 py-2 bg-white text-gray-800 rounded-full opacity-0 cursor-pointer border border-gray-400 hover:bg-gray-200 transition duration-300"
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
