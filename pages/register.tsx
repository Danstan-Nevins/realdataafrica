import React from "react";

export default function Register() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-[#07132A] mb-6">
          Register Your Interest
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Join the RealData Africa network. Get early access to property data tools and insights.
        </p>

        <form
          action="https://formsubmit.co/realdataafrica@gmail.com"
          method="POST"
          className="space-y-5"
        >
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <textarea
            name="message"
            placeholder="Additional Info (optional)"
            rows={4}
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
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition font-semibold"
          >
            Register Now
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
