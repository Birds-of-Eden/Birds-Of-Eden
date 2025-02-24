import React, { useState } from "react";
import { motion } from "framer-motion";

const JobPostListStatic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantName, setApplicantName] = useState("");

  const jobPosts = [
    {
      id: 1,
      title: "Software Engineer",
      description:
        "Join our team of engineers working on cutting-edge technology.",
      location: "Tower 71, ECB Chattar",
    },
    {
      id: 2,
      title: "Frontend Developer",
      description: "We are looking for a talented frontend developer.",
      location: "Tower 71, ECB Chattar",
    },
    {
      id: 3,
      title: "Backend Developer",
      description: "Work on our API and services with a talented team.",
      location: "Remote",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      description: "Design stunning user experiences and interfaces.",
      location: "Remote",
    },
    {
      id: 5,
      title: "Product Manager",
      description: "Lead product development and strategy.",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 6,
      title: "Data Scientist",
      description: "Analyze complex data sets to drive decisions.",
      location: "Remote",
    },
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setApplicantName("");
  };

  // Container animations with stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Header animations
  const headerVariants = {
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

  // Enhanced initial card load animations
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.8,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Modal animations
  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <motion.div
      className="mx-auto mb-10 min-h-screen max-w-7xl px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="mb-4 text-center text-5xl font-bold text-gray-800 dark:text-white"
        variants={headerVariants}
      >
        Join Our Team
      </motion.h1>

      <motion.p
        className="mb-12 text-center text-lg text-gray-600 dark:text-gray-300"
        variants={headerVariants}
      >
        We are always looking for talented individuals to join our team. Explore
        our current career opportunities below.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {jobPosts.map((post, index) => (
          <motion.div
            key={post.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            custom={index}
            className="rounded-xl bg-white/70 p-6 shadow-lg backdrop-blur-lg dark:bg-slate-800/70"
          >
            <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">
              {post.title}
            </h2>
            <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
              {post.description}
            </p>
            <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
              <strong>Location:</strong> {post.location}
            </p>
            <motion.button
              onClick={() => handleApplyClick(post)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="boxshadow5 link5 mt-14"
            >
              Apply Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          variants={modalBackdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-xl dark:bg-gray-800"
          >
            <button
              className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={handleCloseModal}
            >
              ×
            </button>
            <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
              Apply for {selectedJob?.title}
            </h3>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default JobPostListStatic;
