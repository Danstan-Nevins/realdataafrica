import React from "react";
import { FaEnvelope, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} RealData Africa. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="mailto:info@realdataafrica@gmail.com"
            className="hover:text-white"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://wa.me/254758412009"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://www.facebook.com/NevinsVanSten"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaFacebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
