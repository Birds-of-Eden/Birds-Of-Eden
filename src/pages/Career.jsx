import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import TestYourIQ from "../components/TestYourIQ/TestYourIQ";

const Career = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantName, setApplicantName] = useState("");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      description:
        "We are seeking an experienced Senior Frontend Developer to join our team. The ideal candidate will have strong proficiency in JavaScript, React.js, and CSS frameworks.",
      location: "Remote or Dhaka, Bangladesh",
    },
    {
      title: "UX/UI Designer",
      description:
        "We are looking for a creative and talented UX/UI Designer to create amazing user experiences. The ideal candidate will have a strong understanding of user-centered design principles and proficiency in design tools such as Sketch or Figma.",
      location: "Remote or Dhaka, Bangladesh",
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

  const handleNameChange = (e) => {
    setApplicantName(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 transform text-center text-4xl font-bold text-gray-800 transition duration-500 dark:text-white"
          >
            Welcome to Careers at Birds Of Eden
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 transform text-center text-lg text-gray-600 transition duration-500 dark:text-gray-400"
          >
            Birds Of Eden is a software company committed to excellence and
            innovation. We are always looking for talented individuals to join
            our team. Explore our current career opportunities below.
          </motion.p>
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="mb-8 border-b border-gray-200 pb-8 dark:border-gray-600"
            >
              <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">
                {job.title}
              </h2>
              <p className="mb-3 text-gray-600 dark:text-gray-400">
                {job.description}
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Location:</span> {job.location}
              </p>
              <button
                onClick={() => handleApplyClick(job)}
                className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 font-bold text-white hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:w-auto"
              >
                Apply Now
              </button>
            </motion.div>
          ))}

          <TestYourIQ />
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
            >
              <button
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                onClick={handleCloseModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
                Apply for {selectedJob?.title}
              </h3>
              <label className="mb-2 block text-gray-600 dark:text-gray-400">
                Applicant Name
              </label>
              <input
                type="text"
                value={applicantName}
                onChange={handleNameChange}
                className="mb-4 w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Write your name..."
              />
              <label className="mb-2 block text-gray-600 dark:text-gray-400">
                Upload your CV
              </label>
              <input
                type="file"
                className="mb-4 w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              <label className="mb-2 block text-gray-600 dark:text-gray-400">
                Upload your Cover Letter
              </label>
              <input
                type="file"
                className="mb-4 w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              <label className="mb-2 block text-gray-600 dark:text-gray-400">
                Additional Information
              </label>
              <textarea
                rows="4"
                className="mb-4 w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Write something about yourself..."
              ></textarea>
              <div className="flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="mr-4 rounded-lg bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 font-bold text-white hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Submit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Career;
