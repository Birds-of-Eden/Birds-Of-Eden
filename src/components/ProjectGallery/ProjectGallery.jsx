import React, { useState } from "react";

import { motion } from "framer-motion";

import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  Users,
  Briefcase,
} from "lucide-react";

import project1 from "../../assets/project_1.png";
import project2 from "../../assets/project_2.png";
import project3 from "../../assets/project_3.png";
import project4 from "../../assets/project_4.png";
import project5 from "../../assets/project_5.png";
import project6 from "../../assets/project_6.png";
import project7 from "../../assets/project_7.png";
import project9 from "../../assets/project_9.png";
import project10 from "../../assets/project_10.png";
import project11 from "../../assets/project_11.png";
import project12 from "../../assets/project_12.jpeg";
import project13 from "../../assets/project_13.jpeg";
import project14 from "../../assets/project_14.png";
import project15 from "../../assets/project_15.png";

const projects = [
  {
    id: 1,
    title: "Identity Verification",
    description: "Upload a proof of your identity for trading verification.",
    image: project1,
  },
  {
    id: 2,
    title: "Stock Market Overview",
    description: "View top gainers, top losers, and detailed market trends.",
    image: project2,
  },
  {
    id: 3,
    title: "Wallet and Transaction History",
    description: "Manage your wallet and view transaction history.",
    image: project3,
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution for book purchases.",
    image: project4,
  },
  {
    id: 5,
    title: "Bookstore Collection",
    description: "Browse and filter a vast collection of books.",
    image: project5,
  },
  {
    id: 6,
    title: "Dashboard Analytics",
    description: "Data visualization with grouped bar and line charts.",
    image: project6,
  },
  {
    id: 7,
    title: "Reputation Management",
    description: "Control your reputation with tailored services.",
    image: project7,
  },
  {
    id: 9,
    title: "Product Showcase",
    description: "Detailed product display and promotional banners.",
    image: project9,
  },
  {
    id: 10,
    title: "Pricing and Subscription",
    description: "Flexible pricing plans for different user needs.",
    image: project10,
  },
  {
    id: 11,
    title: "Account Contacts",
    description: "Manage account contacts and user permissions.",
    image: project11,
  },
  {
    id: 12,
    title: "Dashboard Overview",
    description: "Comprehensive dashboard with advanced analytics.",
    image: project12,
  },
  {
    id: 13,
    title: "Moving Cost Calculator",
    description: "Calculate moving costs with an intuitive form.",
    image: project13,
  },
  {
    id: 14,
    title: "Client Management",
    description: "Overview of client campaigns and engagement metrics.",
    image: project14,
  },
  {
    id: 15,
    title: "Action Summary Dashboard",
    description: "Track tasks, activities, and overall productivity.",
    image: project15,
  },
];

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalTab, setModalTab] = useState("overview");
  const projectsPerPage = 8;

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
      className="bg-slate-800 py-20"
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Our Projects
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          Discover our innovative solutions that push the boundaries of
          technology and create meaningful impact for our clients.
        </p>

        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                ease: "easeInOut",
              },
            },
          }}
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => {
                setSelectedProject(project);
                setModalTab("overview");
              }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
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
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full rounded-t-2xl object-contain object-center transition-transform duration-500 ease-in-out hover:scale-105 lg:rounded-l-2xl lg:rounded-tr-none"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  srcSet={`
              ${selectedProject.image}?w=480 480w,
              ${selectedProject.image}?w=768 768w,
              ${selectedProject.image}?w=1024 1024w,
              ${selectedProject.image}?w=1440 1440w
            `}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Navigation Buttons */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white/70 transition-transform hover:scale-110 hover:text-white"
                  style={{
                    display:
                      projects.findIndex((p) => p.id === selectedProject.id) ===
                      0
                        ? "none"
                        : "block",
                  }}
                >
                  <ChevronLeft size={30} />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white/70 transition-transform hover:scale-110 hover:text-white"
                  style={{
                    display:
                      projects.findIndex((p) => p.id === selectedProject.id) ===
                      projects.length - 1
                        ? "none"
                        : "block",
                  }}
                >
                  <ChevronRight size={30} />
                </button>
              </div>

              <div className="flex flex-col justify-between p-8">
                <div>
                  <h3 className="mb-4 text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-emerald-400">
                    Description
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
                    Close
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
