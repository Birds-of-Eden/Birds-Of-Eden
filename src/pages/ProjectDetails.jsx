// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const projects = t("home.erpProjects.projects", { returnObjects: true });

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <p className="text-center text-lg text-red-600">
        {t("projectDetails.notFound")}
      </p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-100 text-black dark:bg-slate-900 dark:text-white"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="mb-12">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-10 flex items-center justify-center text-4xl font-bold"
          >
            {project.title}
          </motion.h1>

          <motion.img
            src={`/assets/${project.image}`}
            alt={project.title}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mx-auto mb-10 w-full rounded-lg object-contain shadow-xl"
          />

          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg leading-relaxed"
            style={{ textAlign: "justify" }}
          >
            {project.description}
          </motion.p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="link boxshadow rounded-lg px-6 py-3 text-white transition-all duration-300"
        >
          {t("home.erpProjects.button")}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
