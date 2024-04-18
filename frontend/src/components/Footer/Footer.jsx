import React, { useState } from "react";
import Logo from "../../assets/website/logo.png";
import { Link } from "react-router-dom";
import facebook from "../../assets/website/facebook.png";
import insta from "../../assets/website/insta.png";
import tik_tok from "../../assets/website/tik_tok.png";
import Modal from "./Modal";

const Footer = () => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const openTermsModal = () => {
    setIsTermsModalOpen(true);
  };

  const closeTermsModal = () => {
    setIsTermsModalOpen(false);
  };

  const openPrivacyModal = () => {
    setIsPrivacyModalOpen(true);
  };

  const closePrivacyModal = () => {
    setIsPrivacyModalOpen(false);
  };

  const handleAcceptTerms = () => {
    // Handle acceptance of terms
    closeTermsModal();
  };

  const handleAcceptPrivacy = () => {
    // Handle acceptance of privacy policy
    closePrivacyModal();
  };

  return (
    <footer className="bg-teal-950 text-white py-[50px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <div className="md:col-span-2 flex items-center justify-center md:justify-start">
            <Link to="/" className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="w-20 ml-10" />
              <span className="font-bold text-2xl sans">Winzen's Cafe</span>
            </Link>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-1 ml-32 sm:-ml-48 mt-5 sm:-mt-5">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Categories</h2>
              <ul>
                <li>
                  <Link
                    to="/coffee"
                    className="text-white/70 hover:text-white hover:underline text-lg"
                  >
                    Coffee
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tea"
                    className="text-white/70 hover:text-white hover:underline text-lg"
                  >
                    Tea
                  </Link>
                </li>
                <li>
                  <Link
                    to="/frappe"
                    className="text-white/70 hover:text-white hover:underline text-lg"
                  >
                    Frappe
                  </Link>
                </li>
                <li>
                  <Link
                    to="/lemonade"
                    className="text-white/70 hover:text-white hover:underline text-lg"
                  >
                    Lemonade
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pastries"
                    className="text-white/70 hover:text-white hover:underline text-lg"
                  >
                    Pastries
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Explore</h2>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-white/70 hover:text-white hover:underline text-lg"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/location"
                    className="text-white/70 hover:text-white hover:underline text-lg"
                  >
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white/70 hover:text-white hover:underline text-lg"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu"
                    className="text-white/70 hover:text-white hover:underline text-lg"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                    className="text-white/70 hover:text-white hover:underline text-lg"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Legal</h2>
              <ul>
                <li>
                  <button
                    onClick={openTermsModal}
                    className="text-white/70 hover:text-white hover:underline text-lg bg-transparent border-none cursor-pointer"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={openPrivacyModal}
                    className="text-white/70 hover:text-white hover:underline text-lg bg-transparent border-none cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
              <div className="flex gap-1">
                <div className="bg-yellow-600 rounded-full h-[40px] w-[40px] flex justify-center items-center">
                  <a
                    href="https://www.facebook.com/WinzensCafe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={facebook}
                      alt="Facebook"
                      className="h-[20px] w-[20px] hover:text-blue-500"
                    />
                  </a>
                </div>
                <div className="bg-yellow-600 rounded-full h-[40px] w-[40px] flex justify-center items-center">
                  <a
                    href="https://www.instagram.com/winzenscafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={insta}
                      alt="Instagram"
                      className="h-[20px] w-[20px] hover:text-blue-500"
                    />
                  </a>
                </div>
                <div className="bg-yellow-600 rounded-full h-[40px] w-[40px] flex justify-center items-center">
                  <a
                    href="https://tiktok.com/@Winzens.Cafe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={tik_tok}
                      alt="TikTok"
                      className="h-[20px] w-[20px] hover:text-blue-500"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-[70px]">
          &copy; Winzens 2023. All rights reserved.
        </div>
      </div>
      <Modal isOpen={isTermsModalOpen} onClose={closeTermsModal}>
        <div className="h-auto w-[800px] p-4 overflow-y-auto sans">
          <h2 className="text-xl font-semibold mb-2 text-black">
            <strong className="text-black">Terms of Service</strong>
          </h2>
          <p className="text-black intend-8">
            Welcome to Winzen's Cafe! These terms outline the rules and
            regulations for the use of our services. By accessing this cafe, we
            assume you accept these terms and conditions. Do not continue to use
            Winzen's Cafe if you do not agree to all of the terms and conditions
            stated on this page.
          </p>
          <ol className="list-decimal pl-6">
            <li className="mt-5">
              <strong className="text-black mt-5">
                1. Acceptance of Terms:
              </strong>
              <p className="text-black intend-8">
                By visiting or using any part of Winzen's Cafe, including
                ordering and consuming our products, you agree to be bound by
                these Terms of Service.
              </p>
            </li>
            <li className="mt-5">
              <strong className="text-black mt-5">
                2. Service Description:
              </strong>
              <p className="text-black intend-8">
                Winzen's Cafe provides a cozy environment for customers to enjoy
                high-quality coffee, tea, pastries, and other refreshments. We
                strive to create a welcoming atmosphere for all patrons.
              </p>
            </li>
            <li className="mt-5">
              <strong className="text-black mt-5">3. User Conduct:</strong>
              <ul className="list-disc pl-6 text-black">
                <li>Please be respectful of other patrons and our staff.</li>
                <li>
                  Keep noise levels to a minimum to maintain a relaxing
                  ambiance.
                </li>
                <li>Clean up after yourself and dispose of trash properly.</li>
                <li>No smoking or vaping inside the cafe premises.</li>
                <li>Follow any additional rules posted within the cafe.</li>
              </ul>
            </li>
            <li className="mt-5">
              <strong className="text-black mt-5">4. Payment Terms:</strong>
              <ul className="list-disc pl-6 text-black">
                <li>
                  Payment for orders can be made using cash, credit/debit cards,
                  or other accepted payment methods.
                </li>
                <li>
                  Prices for menu items are clearly displayed, and any
                  applicable taxes or fees will be added at checkout.
                </li>
              </ul>
            </li>
            <li className="mt-5">
              <strong className="text-black mt-5">
                5. Reservation and Cancellation Policy:
              </strong>
              <ul className="list-disc pl-6 text-black">
                <li>
                  Reservations for events or table bookings may be subject to
                  availability.
                </li>
                <li>
                  Please notify us in advance if you need to cancel or modify
                  your reservation.
                </li>
              </ul>
            </li>
            <li className="mt-5">
              <strong className="text-black mt-5">
                6. Intellectual Property:
              </strong>
              <p className="text-black intend-8">
                All content, logos, and trademarks displayed within Winzen's
                Cafe are the property of the cafe owner and may not be used
                without permission.
              </p>
            </li>
            <li className="mt-5">
              <strong className="text-black mt-5">7. Privacy Policy:</strong>
              <p className="text-black intend-8">
                We respect your privacy and are committed to protecting your
                personal information. Please review our Privacy Policy for
                details on how we collect, use, and safeguard your data.
              </p>
            </li>
            <li className="mt-5">
              <strong className="text-black mt-5">
                8. Liability Disclaimer:
              </strong>
              <p className="text-black intend-8">
                Winzen's Cafe is not liable for any loss, damage, or injury
                incurred by customers while on the premises.
              </p>
            </li>
            <li className="mt-5">
              <strong className="text-black mt-5">9. Changes to Terms:</strong>
              <p className="text-black intend-8">
                Winzen's Cafe reserves the right to update or modify these Terms
                of Service at any time. Notification of changes will be provided
                through our website or other communication channels.
              </p>
            </li>
            <li className="mt-5">
              <strong className="text-black mt-5">
                10. Contact Information:
              </strong>
              <p className="text-black intend-8">
                If you have any questions or concerns regarding these Terms of
                Service, please contact us at:
              </p>
              <ul className="list-disc pl-6 text-black">
                <li>Address: South Poblacion, Naga, Philippines</li>
                <li>Phone: 0927 513 8080</li>
                <li>Email: WinzensCafe@gmail.com</li>
              </ul>
            </li>
          </ol>
          <label htmlFor="acceptTerms" className="block mb-2 text-black mt-10">
            <input
              type="checkbox"
              id="acceptTerms"
              className="mr-2 text-black"
            />
            I have read and agree to the Terms of Service
          </label>
          <button
            onClick={handleAcceptTerms}
            className="bg-teal-900 text-white font-medium px-4 py-2 rounded hover:bg-teal-600 mt-3"
          >
            Accept
          </button>
        </div>
      </Modal>
      <Modal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal}>
        <div className="h-auto w-[800px] p-4 overflow-y-auto sans">
          <h2 className="text-xl font-semibold mb-2 text-black">
            <strong>Privacy Policy</strong>
          </h2>
          <p className="text-black mt-5">
            Thank you for choosing Winzen's Cafe. We are committed to protecting
            your privacy and ensuring the security of any personal information
            you provide to us through our website.
          </p>
          <ol className="list-decimal pl-6 mt-5 text-black">
            <li>
              <strong>Information We Collect:</strong>
              <p className="intend-8">
                Winzen's Cafe only collects personal information through the
                "Contact Us" section of our website. The information collected
                may include your name, email address, and any additional details
                you choose to provide in your message.
              </p>
            </li>
            <li>
              <strong>How We Use Your Information:</strong>
              <p className="intend-8">
                We use the information provided through the "Contact Us" form
                solely to respond to your inquiries, comments, or requests for
                information about Winzen's Cafe.
              </p>
            </li>
            <li>
              <strong>Information Sharing:</strong>
              <p className="intend-8">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties. Any information collected through
                the "Contact Us" form is kept confidential and used only for the
                purpose of addressing your specific inquiry or request.
              </p>
            </li>
            <li>
              <strong>Data Security:</strong>
              <p className="intend-8">
                We take precautions to protect your personal information
                submitted through our website. However, please be aware that no
                method of transmission over the internet or electronic storage
                is 100% secure.
              </p>
            </li>
            <li>
              <strong>Data Retention:</strong>
              <p className="intend-8">
                We retain the personal information submitted through the
                "Contact Us" form only for as long as necessary to respond to
                your inquiry or request. Once your inquiry has been addressed,
                we may delete or securely dispose of the information.
              </p>
            </li>
            <li>
              <strong>Your Rights:</strong>
              <p className="intend-8">
                You have the right to access, update, or request deletion of
                your personal information submitted through the "Contact Us"
                form. If you would like to exercise any of these rights or have
                questions about your personal data, please contact us using the
                information provided below.
              </p>
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong>
              <p className="intend-8">
                Our website may use cookies and similar tracking technologies
                for analytical purposes and to enhance your browsing experience.
                You can manage your cookie preferences through your browser
                settings.
              </p>
            </li>
            <li>
              <strong>Changes to Our Privacy Policy:</strong>
              <p className="intend-8">
                We reserve the right to update or modify this privacy policy at
                any time. Any changes will be effective immediately upon posting
                on this page, with a revised effective date. We encourage you to
                review this privacy policy periodically for any updates.
              </p>
            </li>
            <li>
              <strong>Contact Us:</strong>
              <p className="intend-8">
                If you have any questions or concerns regarding our privacy
                policy or your personal information, please contact us at:
                Winzen's Cafe
                <ul className="list-disc pl-6 text-black">
                  <li>Address: South Poblacion, Naga, Philippines</li>
                  <li>Phone: 0927 513 8080</li>
                  <li>Email: WinzensCafe@gmail.com</li>
                </ul>
              </p>
            </li>
          </ol>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
