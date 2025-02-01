import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const JobPostList = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantName, setApplicantName] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/job-post-list/")
      .then((response) => {
        setJobPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the job posts!", error);
      });
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setApplicantName("");
    setCvFile(null);
    setCoverLetterFile(null);
    setAdditionalInfo("");
  };

  const handleNameChange = (e) => {
    setApplicantName(e.target.value);
  };

  const handleCvChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleCoverLetterChange = (e) => {
    setCoverLetterFile(e.target.files[0]);
  };

  const handleAdditionalInfoChange = (e) => {
    setAdditionalInfo(e.target.value);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("applicant_name", applicantName);
    formData.append("job_title", selectedJob.title);
    formData.append("cv", cvFile);
    formData.append("cover_letter", coverLetterFile);
    formData.append("additional_info", additionalInfo);

    axios
      .post("http://127.0.0.1:8000/job-application-create/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      });
  };

  return (
    <div>
      <div className="mx-auto mb-10 mt-10 max-w-4xl rounded-lg bg-gray-100 p-6 text-black  md:min-h-screen">
        <h1 className="mb-4 text-center text-3xl font-bold">
          Welcome to Careers at EDEN BIRDS
        </h1>
        <p className="mb-8 text-center text-lg">
          EDEN BIRDS is a software company committed to excellence and
          innovation. We are always looking for talented individuals to join our
          team. Explore our current career opportunities below.
        </p>
        {jobPosts.map((post) => (
          <div
            key={post.id}
            className="mb-6 rounded-lg bg-gray-800 p-6 shadow-md"
          >
            <h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>
            <p className="mb-4 text-lg">{post.description}</p>
            <p className="mb-4 text-lg">
              <strong>Location:</strong> {post.location}
            </p>
            <button
              onClick={() => handleApplyClick(post)}
              className="inline-block rounded-lg bg-purple-600 px-6 py-3 text-lg font-semibold text-white hover:bg-purple-700"
            >
              Apply Now
            </button>
          </div>
        ))}

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
                  onChange={handleCvChange}
                  className="mb-4 w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                <label className="mb-2 block text-gray-600 dark:text-gray-400">
                  Upload your Cover Letter
                </label>
                <input
                  type="file"
                  onChange={handleCoverLetterChange}
                  className="mb-4 w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                <label className="mb-2 block text-gray-600 dark:text-gray-400">
                  Additional Information
                </label>
                <textarea
                  rows="4"
                  value={additionalInfo}
                  onChange={handleAdditionalInfoChange}
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
                  <button
                    onClick={handleSubmit}
                    className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 font-bold text-white hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JobPostList;
