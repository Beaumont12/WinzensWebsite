import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import direction from "../../assets/website/direction.png";
import phone from "../../assets/website/phone.png";
import calendar from "../../assets/website/calendar.png";

const Location = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-teal-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-14 flex justify-center items-center">Location</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="relative">
              <div className="gmap-frame">
                <iframe
                  title="Map"
                  width="100%"
                  height="400"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=650&amp;height=400&amp;hl=en&amp;q=Lote,%20Lote%202,%20City%20of%20Naga,%206037%20Cebu+(Winzen's%20Cafe)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps tracker sport</a>
                </iframe>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start ml-8 sm:ml-1">
              <div className="flex items-center mb-4">
                <img
                  src={calendar}
                  className="w-6 h-6 mr-3"
                  alt="calendar icon"
                />
                <div>
                  <h2 className="text-xl font-medium">Opens Daily</h2>
                  <p className="font-light">10:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src={direction}
                  className="w-6 h-6 mr-3"
                  alt="direction icon"
                />
                <div>
                  <h2 className="text-xl font-medium">
                    South Poblacion, Naga, Philippines
                  </h2>
                  <p className="font-light">Address</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={phone} className="w-6 h-6 mr-3" alt="phone icon" />
                <div>
                  <h2 className="text-xl font-medium">0927 513 8080</h2>
                  <p className="font-light">Phone Number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
