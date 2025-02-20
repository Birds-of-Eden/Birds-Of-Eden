import axios from "axios";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/contact-form/create/",
        formData,
      );
      if (response.status === 201) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("There was an error sending the message!", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="">
      <div className="flex min-h-screen flex-col justify-between bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-8 p-8 md:flex-row md:gap-20 md:space-x-12 md:space-y-0">
          <div className="mb-8 w-full max-w-md  rounded-lg bg-slate-200 p-8 shadow-lg dark:bg-slate-700 md:mb-0">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-slate-100 px-3 py-2 text-white focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-slate-100 px-3 py-2 text-black focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-slate-100 px-3 py-2 text-black focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Enter your message"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className=" w-full max-w-lg rounded-lg bg-slate-200 p-8 shadow-md dark:bg-slate-700">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
              Our Location
            </h2>
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
                <p className="text-black dark:text-white">
                  ECB Chattar, Dhaka Cantonment, Tower-71, Dhaka, Bangladesh
                </p>
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
                <p className="text-black dark:text-white">
                  Email: info@example.com
                </p>
              </div>
            </div>
            <div className="relative mb-4 h-96 overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0">
                <iframe
                  className="h-full w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.9434129044034!2d90.38741947497816!3d23.820611178622503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7080f8d81bd%3A0xe7aab9e32233a52e!2sTower%2071%20(Homes%2071%20Ltd.)!5e0!3m2!1sen!2sbd!4v1715839431661!5m2!1sen!2sbd"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
