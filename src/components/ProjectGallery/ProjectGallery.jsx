import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProjectGallery = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalTab, setModalTab] = useState("overview");
  const projectsPerPage = 8;

  // Fetch projects from translation JSON
  const projects = t("home.projectGallery.projects", {
    returnObjects: true,
  });

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextProject = () => {
    const currentIndex = projects.findIndex(
      (p) => p.id === selectedProject?.id,
    );
    if (currentIndex < projects.length - 1) {
      setSelectedProject(projects[currentIndex + 1]);
      setModalTab("overview");
    }
  };

  const prevProject = () => {
    const currentIndex = projects.findIndex(
      (p) => p.id === selectedProject?.id,
    );
    if (currentIndex > 0) {
      setSelectedProject(projects[currentIndex - 1]);
      setModalTab("overview");
    }
  };

  return (
    <motion.section
      className="bg-slate-50 py-20 dark:bg-slate-800 "
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-black dark:text-white">
          {t("home.projectGallery.title")}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-black dark:text-gray-400">
          {t("home.projectGallery.description")}
        </p>

        <motion.div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`/assets/${project.image}`}
                  alt={project.title}
                  className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-6 transform p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="mb-2 block text-sm font-semibold text-emerald-400">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`rounded-lg px-4 py-2 transition-colors ${
                  currentPage === i + 1
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative h-[600px] w-full max-w-4xl overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
            <div className="absolute right-4 top-4 z-10 flex gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white/70 transition-colors hover:text-white"
              >
                <X size={28} />
              </button>
            </div>

            <div className="grid h-full grid-cols-1 lg:grid-cols-2">
              <div className="relative h-full">
                <img
                  src={`/assets/${selectedProject.image}`}
                  alt={selectedProject.title}
                  className="h-full w-full rounded-t-2xl object-contain object-center transition-transform duration-500 ease-in-out hover:scale-105 lg:rounded-l-2xl lg:rounded-tr-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="flex flex-col justify-between p-8">
                <div>
                  <h3 className="mb-4 text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-emerald-400">
                    {t("home.projectGallery.modal.description")}
                  </h4>
                  <p className="leading-relaxed text-gray-300">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="mt-6 rounded-lg bg-emerald-500 px-4 py-2 text-white transition-colors hover:bg-emerald-600"
                  >
                    {t("home.projectGallery.modal.close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default ProjectGallery;
