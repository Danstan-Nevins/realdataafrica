import React from "react";
import { FaEnvelope, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Get in Touch</h1>
      <p className="text-lg text-gray-600 mb-10">
        We’d love to hear from you! Reach out to us through any of the channels below.
      </p>

      <div className="flex flex-col items-center space-y-6">
        {/* Email */}
        <a
          href="mailto:info@realdataafrica@gmail.com"
          className="flex items-center space-x-3 text-blue-600 hover:text-blue-800"
        >
          <FaEnvelope size={24} />
          <span>info@realdataafrica@gmail.com</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/254758412009"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-green-600 hover:text-green-800"
        >
          <FaWhatsapp size={24} />
          <span>+254 758 412 009</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/NevinsVanSten"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-blue-700 hover:text-blue-900"
        >
          <FaFacebook size={24} />
          <span>Nevins Van Sten</span>
        </a>
      </div>

      <p className="mt-12 text-gray-500">
        Or visit our main site at{" "}
        <a href="https://realdataafrica.netlify.app" className="text-blue-600 hover:underline">
          realdataafrica.netlify.app
        </a>
      </p>
    </div>
  );
}
