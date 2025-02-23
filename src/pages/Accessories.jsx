import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Importing hardware images
import hardware1 from "../assets/hardware_1.jpg";
import hardware2 from "../assets/hardware_2.jpg";
import hardware3 from "../assets/hardware_3.jpg";
import router from "../assets/router_1.jpg";
import dockingStation from "../assets/docking_station.jpg";
import external_hdd from "../assets/external_hdd.jpg";

const Accessories = () => {
  const images = [
    hardware1,
    hardware2,
    hardware3,
    router,
    dockingStation,
    external_hdd,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      className="container mx-auto pb-16 pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Page Header */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Premium Tech Accessories for Professionals
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          Optimize your workflow with high-quality, industry-standard
          accessories designed for software agencies and businesses.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Accessories Details Section */}
        <motion.div
          className="flex flex-col justify-center rounded-lg bg-gray-100 p-8 shadow-lg dark:bg-slate-800"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl">
            Essential Tech Accessories for Your Business
          </h2>
          <p className="mb-4 text-lg text-gray-700 dark:text-white">
            Equip your team with cutting-edge accessories to enhance
            productivity and efficiency:
          </p>
          <ul className="mb-6 list-disc space-y-3 pl-6 text-lg text-gray-700 dark:text-white">
            <li>
              <span className="font-bold">
                Mechanical Keyboards & Ergonomic Mice:
              </span>{" "}
              Improve typing comfort and precision.
            </li>
            <li>
              <span className="font-bold">
                High-Speed SSDs & External Storage:
              </span>{" "}
              Ensure fast data transfer and reliable backups.
            </li>
            <li>
              <span className="font-bold">
                Ultra HD Monitors & Docking Stations:
              </span>{" "}
              Enhance multitasking capabilities.
            </li>
          </ul>
        </motion.div>

        {/* Image Carousel Section */}
        <motion.div
          className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Tech Accessory ${currentIndex + 1}`}
            className="h-full w-full rounded-lg object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/50 p-3 text-white transition-all hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❮
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/50 p-3 text-white transition-all hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❯
          </motion.button>
        </motion.div>
      </div>

      {/* Additional Accessories Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          Industry-Standard Networking & Tech Solutions
        </h2>
        <p className="mt-3 text-center text-lg text-gray-600 dark:text-gray-300">
          Upgrade your office with high-performance networking gear and
          accessories.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[router, dockingStation, external_hdd].map((image, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={image}
                alt="Accessory"
                className="mb-4 w-full rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Accessory {index + 1}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                High-performance accessory for professionals.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Accessories;
