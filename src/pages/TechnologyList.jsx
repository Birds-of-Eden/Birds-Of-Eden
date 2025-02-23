import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const TechnologyList = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/technologylist/")
      .then((response) => {
        setTechnologies(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the technologies!", error);
      });
  }, []);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto mb-10 mt-10 rounded-lg bg-gray-50 p-6 shadow-xl dark:bg-slate-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="mb-10 text-center text-4xl font-bold text-blue-700 dark:text-purple-500"
        variants={textVariants}
      >
        Our Technology
      </motion.h1>

      <motion.p
        className="mb-10 text-center text-lg text-gray-700 dark:text-white"
        variants={textVariants}
      >
        At
        <span className="ml-1 animate-bounce text-2xl text-green-700 dark:text-orange-500">
          BIRDS OF EDEN
        </span>
        , we are at the forefront of technological innovation. Our software
        solutions are built using the latest and most reliable technologies to
        ensure high performance, scalability, and security.
      </motion.p>

      <motion.div
        className="mb-6 flex justify-center"
        variants={containerVariants}
      >
        <motion.div variants={buttonVariants} whileHover="hover">
          <NavLink
            to="frontend"
            className={({ isActive }) =>
              isActive
                ? "mr-2 rounded bg-red-700 px-4 py-2 text-white transition-transform duration-300"
                : "mr-2 rounded bg-green-500 px-4 py-2 text-white transition-transform duration-300 hover:scale-105"
            }
          >
            Frontend Technologies
          </NavLink>
        </motion.div>

        <motion.div variants={buttonVariants} whileHover="hover">
          <NavLink
            to="backend"
            className={({ isActive }) =>
              isActive
                ? "rounded bg-red-700 px-4 py-2 text-white transition-transform duration-300"
                : "rounded bg-blue-500 px-4 py-2 text-white transition-transform duration-300 hover:scale-105"
            }
          >
            Backend Technologies
          </NavLink>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Outlet context={{ technologies }} />
      </motion.div>
    </motion.div>
  );
};

export default TechnologyList;
