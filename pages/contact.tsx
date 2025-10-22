import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-[#07132A] mb-6">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 mb-6">
          We'd love to hear from you. Send us a message, and we'll respond promptly.
        </p>

        <form
          action="https://formsubmit.co/realdataafrica@gmail.com"
          method="POST"
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
          ></textarea>

          {/* ✅ Redirect to thank you page */}
          <input
            type="hidden"
            name="_next"
            value="https://realdataafrica.netlify.app/thankyou"
          />

          <button
            type="submit"
            className="w-full bg-[#06B6D4] text-white py-3 rounded-md hover:bg-[#0891B2] transition font-semibold"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-gray-700 space-y-2">
          <p>
            📧{" "}
            <a
              href="mailto:realdataafrica@gmail.com"
              className="text-[#06B6D4] hover:underline"
            >
              realdataafrica@gmail.com
            </a>
          </p>
          <p>
            💬{" "}
            <a
              href="https://wa.me/254758412009"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#06B6D4] hover:underline"
            >
              WhatsApp: +254 758 412009
            </a>
          </p>
          <p>
            🌐{" "}
            <a
              href="https://facebook.com/NevinsVanSten"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#06B6D4] hover:underline"
            >
              Facebook: Nevins Van Sten
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
