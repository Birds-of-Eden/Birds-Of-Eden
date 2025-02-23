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

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     category: "Web Development",
//     image:
//       "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "A modern e-commerce solution with real-time inventory management and advanced analytics.",
//     client: "Global Retail Inc.",
//     completionDate: "2024",
//     teamSize: 8,
//     challenge:
//       "The client needed a scalable e-commerce platform that could handle high traffic volumes while maintaining fast loading times and real-time inventory updates.",
//     solution:
//       "We implemented a microservices architecture with Redis caching and real-time WebSocket connections for inventory updates. The platform now handles millions of transactions monthly.",
//     technologies: [
//       "React",
//       "Node.js",
//       "Redis",
//       "PostgreSQL",
//       "WebSocket",
//       "AWS",
//     ],
//   },
//   {
//     id: 2,
//     title: "Mobile Banking App",
//     category: "Mobile Development",
//     image:
//       "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "Secure and intuitive mobile banking application with biometric authentication.",
//     client: "FinTech Solutions Ltd.",
//     completionDate: "2024",
//     teamSize: 6,
//     challenge:
//       "Creating a secure yet user-friendly mobile banking experience with support for multiple authentication methods.",
//     solution:
//       "Implemented biometric authentication, real-time fraud detection, and an intuitive UI that simplified complex banking operations.",
//     technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "AWS"],
//   },
//   {
//     id: 3,
//     title: "AI Analytics Dashboard",
//     category: "Data Science",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "Advanced analytics platform powered by machine learning algorithms.",
//     client: "Data Insights Corp",
//     completionDate: "2023",
//     teamSize: 5,
//     challenge:
//       "Building a real-time analytics platform that could process and visualize large datasets efficiently.",
//     solution:
//       "Developed a custom analytics engine with ML capabilities for predictive insights and interactive visualizations.",
//     technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
//   },
//   {
//     id: 4,
//     title: "Smart Home System",
//     category: "IoT",
//     image:
//       "https://images.unsplash.com/photo-1558002038-876f1d0aa8d6?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "Integrated smart home automation solution with AI-powered controls.",
//     client: "Smart Living Technologies",
//     completionDate: "2024",
//     teamSize: 7,
//     challenge:
//       "Integrating multiple IoT devices and creating a unified control system with minimal latency.",
//     solution:
//       "Created a mesh network architecture with edge computing capabilities for real-time device control.",
//     technologies: ["IoT", "React", "Node.js", "MQTT", "TensorFlow Lite"],
//   },
//   {
//     id: 5,
//     title: "Fitness Tracking Platform",
//     category: "Health Tech",
//     image:
//       "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "Comprehensive fitness and health monitoring system with AI coaching.",
//     client: "FitTech Solutions",
//     completionDate: "2023",
//     teamSize: 6,
//     challenge:
//       "Creating an engaging fitness platform that could provide personalized workout recommendations.",
//     solution:
//       "Implemented AI-powered workout planning and real-time progress tracking with social features.",
//     technologies: ["React Native", "Node.js", "TensorFlow", "PostgreSQL"],
//   },
//   {
//     id: 6,
//     title: "Educational Platform",
//     category: "EdTech",
//     image:
//       "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1600",
//     description:
//       "Interactive learning management system with personalized learning paths.",
//     client: "EduTech Innovations",
//     completionDate: "2024",
//     teamSize: 9,
//     challenge:
//       "Developing an adaptive learning platform that could cater to different learning styles and paces.",
//     solution:
//       "Built an AI-driven system that adapts content delivery based on student performance and engagement.",
//     technologies: ["React", "Python", "Django", "PostgreSQL", "Redis"],
//   },
// ];

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
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Our Projects
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          Discover our innovative solutions that push the boundaries of
          technology and create meaningful impact for our clients.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
};

export default ProjectGallery;
