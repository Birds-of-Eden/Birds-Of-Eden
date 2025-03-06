import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi"; // Import close icon

const JobPostListStatic = () => {
  const { t } = useTranslation();
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

  const jobPosts = t("JobPostPage.jobs", { returnObjects: true });

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
        [name]: files[0]
          ? `<span class="math-inline">\{files\[0\]\.name\} \(</span>{files[0].type})`
          : "",
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

  return (
    <motion.div className="mx-auto mb-10 min-h-screen max-w-7xl px-4 py-8">
      <motion.h1 className="mb-4 text-center text-5xl font-bold text-gray-800 dark:text-white">
        {t("JobPostPage.title")}
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
              <strong>{t("JobPostPage.location")} :</strong> {post.location}
            </p>
            <motion.button
              onClick={() => handleApplyClick(post)}
              className="rounded-lg border-2 border-blue-800 px-6 py-2 text-black shadow-sm shadow-slate-400 transition-colors hover:bg-blue-700 dark:text-white"
            >
              {t("JobPostPage.applyButton")}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-xl dark:bg-gray-800"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                onClick={handleCloseModal}
              >
                <FiX />
              </button>
              <h3 className="mb-6 flex justify-center text-2xl font-semibold text-gray-800 dark:text-white">
                {t("JobPostPage.applyFor")} {selectedJob?.title}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder={t("JobPostPage.form.namePlaceholder")}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-gray-300 p-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder={t("JobPostPage.form.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-gray-300 p-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                  required
                />

                <input
                  type="text"
                  name="address"
                  placeholder={t("JobPostPage.form.addressPlaceholder")}
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-gray-300 p-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                />

                <div className="relative w-full rounded-lg border-2 border-dashed border-gray-300 p-4 text-center dark:border-gray-700 dark:bg-gray-900">
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    className="absolute inset-0 z-50 opacity-0"
                    required
                  />
                  <p className="text-gray-600 dark:text-gray-300">
                    {fileNames.resume || t("JobPostPage.form.resumeUpload")}
                  </p>
                </div>

                <div className="relative w-full rounded-lg border-2 border-dashed border-gray-300 p-4 text-center dark:border-gray-700 dark:bg-gray-900">
                  <input
                    type="file"
                    name="coverLetter"
                    onChange={handleChange}
                    className="absolute inset-0 z-50 opacity-0"
                    required
                  />
                  <p className="text-gray-600 dark:text-gray-300">
                    {fileNames.coverLetter ||
                      t("JobPostPage.form.coverLetterUpload")}
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 p-5 py-3 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                  >
                    {t("JobPostPage.form.submitButton")}
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
