import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F0EFF5] w-full py-20 text-center">
      <div className="container mx-auto px-6">
        <img src="/logo.png" alt="Logo" className="w-48 mx-auto" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-3xl mb-3 text-blue-500" />
            <p className="font-semibold text-base text-gray-900">
              Block B, Fraser Road, Patna-1
            </p>
            <p className="text-sm text-gray-700">Our Address</p>
          </div>

          <div className="flex flex-col items-center">
            <FaEnvelope className="text-3xl mb-3 text-blue-500" />
            <p className="font-semibold text-base text-gray-900">
              Connect@zone.credit
            </p>
            <p className="text-sm text-gray-700">Our Email</p>
          </div>

          <div className="flex flex-col items-center">
            <FaWhatsapp className="text-3xl mb-3 text-blue-500" />
            <p className="font-semibold text-base text-gray-900">15557012412</p>
            <p className="text-sm text-gray-700">Our WhatsApp</p>
          </div>
        </div>
        <div className="mt-10 text-sm font-normal text-gray-600">
          <p>
            Copyright © 2024 Zone.credit by White Glass Innovations Pvt. Ltd.
            All Rights Reserved.
          </p>
          <div className="flex justify-center gap-6 mt-2">
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black">
              Terms of Services
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="text-black text-3xl hover:text-gray-700">
            <FaFacebook />
          </a>
          <a href="#" className="text-black text-3xl hover:text-gray-700">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
