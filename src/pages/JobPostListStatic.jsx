import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JobPostListStatic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    resume: null,
    coverLetter: null,
  });
  const [fileNames, setFileNames] = useState({
    resume: "",
    coverLetter: "",
  });

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
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setFormData({
      name: "",
      email: "",
      address: "",
      resume: null,
      coverLetter: null,
    });
    setFileNames({
      resume: "",
      coverLetter: "",
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume" || name === "coverLetter") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      setFileNames((prev) => ({
        ...prev,
        [name]: files[0] ? `${files[0].name} (${files[0].type})` : "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Application submitted successfully!");
    handleCloseModal();
  };

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
    <motion.div className="mx-auto mb-10 min-h-screen max-w-7xl px-4 py-8">
      <motion.h1 className="mb-4 text-center text-5xl font-bold text-gray-800 dark:text-white">
        Join Our Team
      </motion.h1>

      <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {jobPosts.map((post) => (
          <motion.div
            key={post.id}
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
              className="rounded-lg border-2 border-blue-800 px-6 py-2 text-white shadow-sm shadow-slate-400 transition-colors hover:bg-blue-700"
            >
              Apply Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleCloseModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-xl dark:bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                onClick={handleCloseModal}
              >
                ×
              </button>
              <h3 className="mb-6 flex justify-center text-2xl font-semibold text-gray-800 dark:text-white">
                Apply for {selectedJob?.title}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border-2 border-gray-300 p-3 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border-2 border-gray-300 p-3 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                  required
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border-2 border-gray-300 p-3 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                />

                <div className="relative w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-blue-500 dark:border-gray-700 dark:bg-gray-900">
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    className="absolute inset-0 z-50 cursor-pointer opacity-0"
                    required
                  />
                  <p className="text-gray-600 dark:text-gray-300">
                    {fileNames.resume || "Click to upload your Resume"}
                  </p>
                </div>

                <div className="relative w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-blue-500 dark:border-gray-700 dark:bg-gray-900">
                  <input
                    type="file"
                    name="coverletter"
                    onChange={handleChange}
                    className="absolute inset-0 z-50 cursor-pointer opacity-0"
                    required
                  />
                  <p className="text-gray-600 dark:text-gray-300">
                    {fileNames.coverletter ||
                      "Click to upload your Cover letter"}
                  </p>
                </div>

                <div className="flex justify-end ">
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 p-5 py-3 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default JobPostListStatic;
