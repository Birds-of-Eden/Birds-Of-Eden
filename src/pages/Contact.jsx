import { motion } from "framer-motion";
// import React from "react";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Contact Form */}
          <div className="mx-auto max-w-lg rounded-lg bg-gray-800 p-8 shadow-md">
            <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
            <p className="mb-6">
              Feel free to reach out to us for any inquiries or collaboration
              opportunities.
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 block font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md bg-gray-700 px-4 py-2 focus:bg-gray-600 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md bg-gray-700 px-4 py-2 focus:bg-gray-600 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full rounded-md bg-gray-700 px-4 py-2 focus:bg-gray-600 focus:outline-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-4 py-2 transition duration-300 hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Cards Section */}
          <div className="mx-auto max-w-lg rounded-lg bg-gray-800 p-8 shadow-md">
            <h2 className="mb-4 text-3xl font-bold">Our Location</h2>
            <div className="mb-4">
              <div className="mb-2 flex items-center">
                <svg
                  className="mr-2 h-6 w-6 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a7 7 0 017 7c0 4.163-3.755 8.022-6.549 10.357a1 1 0 01-1.386 0C6.755 17.022 3 13.163 3 9a7 7 0 017-7zm0 2a5 5 0 00-5 5c0 1.5.682 3.803 3.749 6.698l.251.227a1 1 0 001.502 0l.251-.227C16.318 10.803 17 8.5 17 7a5 5 0 00-5-5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p>ECB Chattar,Dhaka Cantonment,Tower-71, Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-2 h-6 w-6 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a7 7 0 017 7c0 4.163-3.755 8.022-6.549 10.357a1 1 0 01-1.386 0C6.755 17.022 3 13.163 3 9a7 7 0 017-7zm0 2a5 5 0 00-5 5c0 1.5.682 3.803 3.749 6.698l.251.227a1 1 0 001.502 0l.251-.227C16.318 10.803 17 8.5 17 7a5 5 0 00-5-5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p>Email: info@example.com</p>
              </div>
            </div>
            <div className="relative mb-4 h-96 overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0">
                <iframe
                  className="h-full w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.9434129044034!2d90.38741947497816!3d23.820611178622503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7080f8d81bd%3A0xe7aab9e32233a52e!2sTower%2071%20(Homes%2071%20Ltd.)!5e0!3m2!1sen!2sbd!4v1715839431661!5m2!1sen!2sbd"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
