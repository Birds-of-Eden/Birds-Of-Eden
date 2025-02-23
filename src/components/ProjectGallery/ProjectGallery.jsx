import React, { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  Users,
  Briefcase,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1600",
    description:
      "A modern e-commerce solution with real-time inventory management and advanced analytics.",
    client: "Global Retail Inc.",
    completionDate: "2024",
    teamSize: 8,
    challenge:
      "The client needed a scalable e-commerce platform that could handle high traffic volumes while maintaining fast loading times and real-time inventory updates.",
    solution:
      "We implemented a microservices architecture with Redis caching and real-time WebSocket connections for inventory updates. The platform now handles millions of transactions monthly.",
    technologies: [
      "React",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "WebSocket",
      "AWS",
    ],
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600",
    description:
      "Secure and intuitive mobile banking application with biometric authentication.",
    client: "FinTech Solutions Ltd.",
    completionDate: "2024",
    teamSize: 6,
    challenge:
      "Creating a secure yet user-friendly mobile banking experience with support for multiple authentication methods.",
    solution:
      "Implemented biometric authentication, real-time fraud detection, and an intuitive UI that simplified complex banking operations.",
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: 3,
    title: "AI Analytics Dashboard",
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    description:
      "Advanced analytics platform powered by machine learning algorithms.",
    client: "Data Insights Corp",
    completionDate: "2023",
    teamSize: 5,
    challenge:
      "Building a real-time analytics platform that could process and visualize large datasets efficiently.",
    solution:
      "Developed a custom analytics engine with ML capabilities for predictive insights and interactive visualizations.",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Smart Home System",
    category: "IoT",
    image:
      "https://images.unsplash.com/photo-1558002038-876f1d0aa8d6?auto=format&fit=crop&q=80&w=1600",
    description:
      "Integrated smart home automation solution with AI-powered controls.",
    client: "Smart Living Technologies",
    completionDate: "2024",
    teamSize: 7,
    challenge:
      "Integrating multiple IoT devices and creating a unified control system with minimal latency.",
    solution:
      "Created a mesh network architecture with edge computing capabilities for real-time device control.",
    technologies: ["IoT", "React", "Node.js", "MQTT", "TensorFlow Lite"],
  },
  {
    id: 5,
    title: "Fitness Tracking Platform",
    category: "Health Tech",
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=1600",
    description:
      "Comprehensive fitness and health monitoring system with AI coaching.",
    client: "FitTech Solutions",
    completionDate: "2023",
    teamSize: 6,
    challenge:
      "Creating an engaging fitness platform that could provide personalized workout recommendations.",
    solution:
      "Implemented AI-powered workout planning and real-time progress tracking with social features.",
    technologies: ["React Native", "Node.js", "TensorFlow", "PostgreSQL"],
  },
  {
    id: 6,
    title: "Educational Platform",
    category: "EdTech",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1600",
    description:
      "Interactive learning management system with personalized learning paths.",
    client: "EduTech Innovations",
    completionDate: "2024",
    teamSize: 9,
    challenge:
      "Developing an adaptive learning platform that could cater to different learning styles and paces.",
    solution:
      "Built an AI-driven system that adapts content delivery based on student performance and engagement.",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Redis"],
  },
];

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalTab, setModalTab] = useState("overview");
  const projectsPerPage = 6;

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
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Our Projects
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          Discover our innovative solutions that push the boundaries of
          technology and create meaningful impact for our clients.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group relative transform cursor-pointer overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
              onClick={() => {
                setSelectedProject(project);
                setModalTab("overview");
              }}
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
            </div>
          ))}
        </div>

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

      {/* Enhanced Modal with Tabs */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-xl bg-gray-800">
            <div className="absolute right-4 top-4 z-10 flex gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white/70 transition-colors hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent lg:hidden" />

                {/* Navigation Buttons */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/70 transition-colors hover:text-white"
                  style={{
                    display:
                      projects.findIndex((p) => p.id === selectedProject.id) ===
                      0
                        ? "none"
                        : "block",
                  }}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/70 transition-colors hover:text-white"
                  style={{
                    display:
                      projects.findIndex((p) => p.id === selectedProject.id) ===
                      projects.length - 1
                        ? "none"
                        : "block",
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <span className="mb-2 block text-sm font-semibold text-emerald-400">
                      {selectedProject.category}
                    </span>
                    <h3 className="mb-2 text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="mb-6 flex gap-4 border-b border-gray-700">
                  <button
                    onClick={() => setModalTab("overview")}
                    className={`relative px-1 pb-2 text-sm font-medium transition-colors ${
                      modalTab === "overview"
                        ? "text-emerald-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Overview
                    {modalTab === "overview" && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-emerald-400" />
                    )}
                  </button>
                  <button
                    onClick={() => setModalTab("details")}
                    className={`relative px-1 pb-2 text-sm font-medium transition-colors ${
                      modalTab === "details"
                        ? "text-emerald-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Project Details
                    {modalTab === "details" && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-emerald-400" />
                    )}
                  </button>
                </div>

                {/* Tab Content */}
                {modalTab === "overview" ? (
                  <div className="space-y-6">
                    <div className="mb-8 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={18} />
                        <span>{selectedProject.completionDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users size={18} />
                        <span>Team of {selectedProject.teamSize}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Briefcase size={18} />
                        <span>{selectedProject.client}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-white">
                        Overview
                      </h4>
                      <p className="text-gray-300">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-white">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-white">
                        The Challenge
                      </h4>
                      <p className="text-gray-300">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-white">
                        Our Solution
                      </h4>
                      <p className="text-gray-300">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
