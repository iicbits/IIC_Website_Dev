"use client";

import Image from "next/image";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <section className="w-full">
      <div className="bg-black relative px-28 py-12 mx-4 my-4 rounded-2xl min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/incub.png"
            alt="Contact Background"
            layout="fill"
            objectFit="cover"
            className="opacity-40 rounded-2xl"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full z-10">
          {/* Left Section */}
          <div className="text-white space-y-6">
            <h1 className="text-6xl lg:text-6xl font-bold leading-tight">
              Need help? or Have suggestions!
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Let's make something happen together
            </p>
            <div className="text-lg text-gray-400">
              <p>📧 hello@yourcompany.com</p>
              <p>📧 hello@yourcompany.com</p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-black bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your Name"
                  className="w-full px-4 py-3 bg-gray-900/40 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500/40 focus:border-transparent transition duration-200 "
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter the Email"
                  className="w-full px-4 py-3 bg-gray-900/40 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500/40 focus:border-transparent transition duration-200 "
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type Here..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900/40 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500/40 focus:border-transparent transition duration-200 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-95 focus:outline-none"
              >
                Send Now!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
