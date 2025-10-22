import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS link (for sending email without backend)
    const mailtoLink = `mailto:realdataafrica@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Reach out to <strong>RealData Africa</strong> — we’d love to hear from you!  
        Use the form below, or contact us directly through WhatsApp or Facebook.
      </p>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-4 border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-center space-y-3">
        <a
          href="https://wa.me/254758412009"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-green-600 font-semibold hover:underline"
        >
          💬 Chat on WhatsApp
        </a>

        <a
          href="mailto:realdataafrica@gmail.com"
          className="block text-blue-600 font-semibold hover:underline"
        >
          📧 Send Email
        </a>

        <a
          href="https://facebook.com/NevinsVanSten"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-800 font-semibold hover:underline"
        >
          🔗 Visit Facebook
        </a>
      </div>
    </div>
  );
}
