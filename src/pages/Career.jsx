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
      className={`min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900`}
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-center text-4xl font-bold text-gray-800 dark:text-white"
          >
            Welcome to Careers at{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Birds Of Eden
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-center text-lg text-gray-600 dark:text-gray-400"
          >
            Birds Of Eden is a software company committed to excellence and
            innovation. We are always looking for talented individuals to join
            our team. Explore our current career opportunities below.
          </motion.p>
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <h2 className="relative mb-3 text-2xl font-semibold text-gray-800 dark:text-white">
                {job.title}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>
              </h2>
              <p className="mb-3 text-gray-600 dark:text-gray-400">
                {job.description}
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Location:</span> {job.location}
              </p>
              <motion.button
                onClick={() => handleApplyClick(job)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 font-bold text-white shadow-md transition duration-300 hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:w-auto"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
          <TestYourIQ />
        </motion.div>
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
              <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
                Apply for {selectedJob?.title}
              </h3>
              <input
                type="text"
                value={applicantName}
                onChange={handleNameChange}
                className="mb-4 w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Write your name..."
              />
              <div className="flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="mr-4 rounded-lg bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 font-bold text-white hover:from-blue-600 hover:to-purple-600">
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
