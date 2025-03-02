import axios from "axios";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation(); // Hook for translations

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
        alert(t("contact.successMessage"));
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error(t("contact.errorMessage"), error);
      alert(t("contact.errorAlert"));
    }
  };

  return (
    <div className="">
      <div className="flex min-h-screen flex-col justify-between bg-slate-100 dark:bg-slate-800">
        <motion.div
          className="container mx-auto flex flex-col items-center justify-center space-y-8 p-8 md:flex-row md:gap-20 md:space-x-12 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8 w-full max-w-md rounded-lg bg-slate-200 p-8 shadow-lg dark:bg-slate-700 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
              {t("contact.contactUs")}
            </h2>
            <form onSubmit={handleSubmit}>
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black dark:text-white"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-slate-100 px-3 py-2 text-black focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder={t("contact.namePlaceholder")}
                />
              </motion.div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black dark:text-white"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-slate-100 px-3 py-2 text-black focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </motion.div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black dark:text-white"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-slate-100 px-3 py-2 text-black focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder={t("contact.messagePlaceholder")}
                  rows="4"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {t("contact.sendMessage")}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="w-full max-w-lg rounded-lg bg-slate-200 p-8 shadow-md dark:bg-slate-700"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
              {t("contact.ourLocation")}
            </h2>
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
