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
      className="container mx-auto bg-gray-50 pb-20 pt-28 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Page Header */}
      <motion.div
        className="mb-14 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 dark:text-white">
          Premium Tech Accessories
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Empower your workspace with high-quality, professional-grade tech
          accessories.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Accessories Details Section */}
        <motion.div
          className="flex flex-col justify-center rounded-lg bg-white p-10 shadow-2xl dark:bg-gray-800"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
            Professional Tech Accessories
          </h2>
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
            Enhance productivity with premium accessories:
          </p>
          <ul className="mb-8 list-disc space-y-4 pl-6 text-lg text-gray-700 dark:text-gray-300">
            <li>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Mechanical Keyboards & Ergonomic Mice:
              </span>{" "}
              Precision and comfort for daily use.
            </li>
            <li>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                High-Speed SSDs & External Storage:
              </span>{" "}
              Secure and fast data management.
            </li>
            <li>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                Ultra HD Monitors & Docking Stations:
              </span>{" "}
              Optimized for multitasking efficiency.
            </li>
          </ul>
          <motion.button
            className="self-start rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collection
          </motion.button>
        </motion.div>

        {/* Image Carousel Section */}
        <motion.div
          className="relative h-[450px] w-full overflow-hidden rounded-lg shadow-2xl"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/70 p-4 text-white transition hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❮
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/70 p-4 text-white transition hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❯
          </motion.button>
        </motion.div>
      </div>

      {/* Additional Accessories Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white">
          Networking & Tech Solutions
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300">
          High-performance gear for seamless connectivity and productivity.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {[router, dockingStation, external_hdd].map((image, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white p-6 shadow-2xl transition hover:shadow-xl dark:bg-gray-900"
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
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
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
