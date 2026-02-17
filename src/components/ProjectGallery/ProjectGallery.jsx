import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { ExternalLink } from "lucide-react";

const ProjectGallery = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);

  const projectsPerPage = 8;
  const projects = t("home.projectGallery.projects", { returnObjects: true });

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // ✅ Card thumbnail will always show first image (images[0]) if exists, else fallback to image
  const getProjectThumbnail = (project) => {
    const imgs = Array.isArray(project?.images) ? project.images : [];
    if (imgs.length > 0) return imgs[0];
    if (project?.image) return project.image;
    return ""; // or "placeholder.png"
  };

  const closeModal = () => {
    setSelectedProject(null);
    setOpenModal(false);
    setActiveSlide(0);
  };

  // ✅ Modal images (stable resolution)
  const modalImages = useMemo(() => {
    if (!selectedProject) return [];
    const imgs = Array.isArray(selectedProject?.images) ? selectedProject.images : [];
    if (imgs.length > 0) return imgs;
    if (selectedProject?.image) return [selectedProject.image];
    return [];
  }, [selectedProject]);

  return (
    <motion.section
      className="bg-slate-50 py-20 dark:bg-slate-800"
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

        <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => {
                setSelectedProject(project);
                setActiveSlide(0);
                setOpenModal(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`/assets/${getProjectThumbnail(project)}`}
                  alt={project.title}
                  className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-6 transform p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
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

      <Dialog
        open={openModal}
        onOpenChange={(isOpen) => {
          setOpenModal(isOpen);
          if (!isOpen) closeModal();
        }}
      >
        <DialogContent className="w-[95vw] max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-0 shadow-2xl">
          {selectedProject && (
            <div className="flex max-h-[90vh] flex-col">
              {/* ✅ Image section (Carousel) */}
              <div className="relative w-full md:shrink-0">
                <div className="relative overflow-hidden">
                  {/* safety fallback */}
                  <img
                    src={`/assets/${modalImages?.[activeSlide] || getProjectThumbnail(selectedProject)}`}
                    alt={`${selectedProject.title} - ${activeSlide + 1}`}
                    className="h-[220px] w-full object-cover sm:h-[260px] md:h-[360px]"
                    loading="lazy"
                  />

                  {/* overlay only for md+ */}
                  <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent md:block" />

                  {/* title on image (md+) */}
                  <div className="absolute bottom-0 left-0 right-0 hidden p-6 md:block">
                    <DialogTitle className="text-2xl font-bold text-white">
                      {selectedProject.title}
                    </DialogTitle>
                  </div>

                  {/* arrows */}
                  {modalImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlide((prev) => (prev - 1 + modalImages.length) % modalImages.length);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60"
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlide((prev) => (prev + 1) % modalImages.length);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60"
                        aria-label="Next image"
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* dots */}
                  {modalImages.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                      {modalImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSlide(i);
                          }}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            i === activeSlide ? "bg-emerald-400" : "bg-white/40 hover:bg-white/60"
                          }`}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* ✅ Content section */}
              <div className="scrollbar-elegant flex-1 overflow-y-auto border-t border-white/10 p-5 sm:p-6">
                {/* Title for mobile */}
                <div className="mb-3 md:hidden">
                  <DialogTitle className="text-xl font-bold text-white">
                    {selectedProject.title}
                  </DialogTitle>
                </div>

                {/* Tech stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {["React", "Next.js", "TailwindCSS", "TypeScript", "PostgreSQL", "ShadCn UI"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                <h4 className="text-lg font-semibold text-emerald-400">
                  {t("home.projectGallery.modal.description")}
                </h4>

                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-gray-300 sm:text-base">
                  {selectedProject.description}
                </p>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={selectedProject.deploymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-600"
                  >
                    <ExternalLink size={16} />
                    {t("home.projectGallery.modal.viewDemo")}
                  </a>

                  <button
                    onClick={closeModal}
                    className="rounded-xl bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:bg-white/10"
                  >
                    {t("home.projectGallery.modal.close")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default ProjectGallery;
