import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";
import emailIcon from "../../assets/website/email.png";
import contact_us from "../../assets/website/contact_us.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4ssn1px", "template_8dzihva", form.current, {
        publicKey: "dNDKo6bl50wZaO390",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log(result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div className="h-[700px] sm:h-[700px] bg-teal-950 flex justify-center items-center">
        <div className="flex flex-col justify-start items-center">
        <h1 className="text-white text-4xl sm:text-4xl font-semibold mb-14 flex justify-center items-center -mt-10 -sm:mt-10">Contact Us</h1>
          <div className="flex justify-start items-star -mt-10 sm:-mt-10">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white w-[90vw] md:w-[700px] h-[400px] rounded-2xl mt-10 px-6 py-4 shadow-lg"
            >
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                className="border border-gray-300 rounded px-3 py-2 mb-4 w-[100%] md:w-[300px]"
              />
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                className="border border-gray-300 rounded px-3 py-2 mb-4 w-[100%] md:w-[300px]"
              />
              <label className="block mb-2">Message</label>
              <textarea
                name="message"
                className="border border-gray-300 rounded px-3 py-2 mb-4 h-20 w-[100%] md:w-[300px]"
              ></textarea>
              <div className="flex justify-between items-start w-[80%] md:w-auto">
                <input
                  type="submit"
                  value="Send"
                  className="bg-yellow-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-yellow-400"
                />
                {/* Hide the image on small screens */}
                <div className="hidden md:flex justify-start items-start">
                  <img src={contact_us} className="w-[300px] h-[345px] -mt-[305px]" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
