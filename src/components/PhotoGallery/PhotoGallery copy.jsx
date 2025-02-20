import React, { useState, useEffect, useCallback, useMemo } from "react";
import { X } from "lucide-react";

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
    imageUrl: project1,
  },
  {
    id: 2,
    title: "Stock Market Overview",
    description: "View top gainers, top losers, and detailed market trends.",
    imageUrl: project2,
  },
  {
    id: 3,
    title: "Wallet and Transaction History",
    description: "Manage your wallet and view transaction history.",
    imageUrl: project3,
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution for book purchases.",
    imageUrl: project4,
  },
  {
    id: 5,
    title: "Bookstore Collection",
    description: "Browse and filter a vast collection of books.",
    imageUrl: project5,
  },
  {
    id: 6,
    title: "Dashboard Analytics",
    description: "Data visualization with grouped bar and line charts.",
    imageUrl: project6,
  },
  {
    id: 7,
    title: "Reputation Management",
    description: "Control your reputation with tailored services.",
    imageUrl: project7,
  },

  {
    id: 9,
    title: "Product Showcase",
    description: "Detailed product display and promotional banners.",
    imageUrl: project9,
  },
  {
    id: 10,
    title: "Pricing and Subscription",
    description: "Flexible pricing plans for different user needs.",
    imageUrl: project10,
  },
  {
    id: 11,
    title: "Account Contacts",
    description: "Manage account contacts and user permissions.",
    imageUrl: project11,
  },
  {
    id: 12,
    title: "Dashboard Overview",
    description: "Comprehensive dashboard with advanced analytics.",
    imageUrl: project12,
  },
  {
    id: 13,
    title: "Moving Cost Calculator",
    description: "Calculate moving costs with an intuitive form.",
    imageUrl: project13,
  },
  {
    id: 14,
    title: "Client Management",
    description: "Overview of client campaigns and engagement metrics.",
    imageUrl: project14,
  },
  {
    id: 15,
    title: "Action Summary Dashboard",
    description: "Track tasks, activities, and overall productivity.",
    imageUrl: project15,
  },
];

const PhotoGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let lastTime = performance.now();
    let animationFrame;

    const animate = (currentTime) => {
      if (autoRotate) {
        const deltaTime = currentTime - lastTime;
        const rotationSpeed = 0.05;
        setRotation(
          (prev) => (prev + rotationSpeed * (deltaTime / 16.67)) % 360,
        );
      }
      lastTime = currentTime;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [autoRotate]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [selectedProject]);

  const getBaseRadius = useMemo(() => {
    return windowWidth < 640
      ? 180
      : windowWidth < 768
        ? 220
        : windowWidth < 1024
          ? 280
          : 320;
  }, [windowWidth]);

  const getItemStyle = useCallback(
    (index) => {
      const angleStep = 360 / projects.length;
      const angle = (index * angleStep + rotation) * (Math.PI / 180);

      const x = Math.cos(angle) * getBaseRadius;
      const y = Math.sin(angle) * getBaseRadius;
      const scale = Math.cos(angle) * 0.3 + 0.7;
      const zIndex = Math.round(scale * 100);

      return {
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
        zIndex,
        opacity: scale * 0.8 + 0.2,
      };
    },
    [rotation, getBaseRadius],
  );

  const getCardSizeClasses = useMemo(() => {
    return windowWidth < 640
      ? "w-28 h-28"
      : windowWidth < 768
        ? "w-40 h-40"
        : "w-56 h-56";
  }, [windowWidth]);

  const handleModalClose = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setSelectedProject(null);
    }
  }, []);

  return (
    <div className="flex  flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 p-4  sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px] opacity-50" />

      <h1 className="heading pb-16">Our Projects</h1>

      <div
        className="relative flex h-[500px] w-full items-center justify-center pb-16 sm:h-[600px] md:h-[700px]"
        onMouseEnter={() => setAutoRotate(false)}
        onMouseLeave={() => {
          setAutoRotate(true);
          setHoveredIndex(null);
        }}
        onTouchStart={() => setAutoRotate(false)}
        onTouchEnd={() => setAutoRotate(true)}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="absolute cursor-pointer transition-all duration-500 ease-out will-change-transform"
            style={getItemStyle(index)}
            onClick={() => setSelectedProject(project)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`relative ${getCardSizeClasses} transform-gpu overflow-hidden rounded-xl shadow-2xl transition-all duration-300 ${
                hoveredIndex === index
                  ? "scale-110 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                  : "hover:scale-105"
              }`}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4">
                <h3 className="mb-1 line-clamp-2 text-sm font-semibold text-white sm:text-base md:text-lg">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={handleModalClose}
        >
          <div
            className="animate-modal-appear relative w-full max-w-4xl rounded-xl border border-gray-700 bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-2 top-2 rounded-lg bg-gray-800/50 p-2 text-gray-400 transition-colors hover:bg-gray-700/50 hover:text-white sm:right-4 sm:top-4"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
              <div className="relative h-48 overflow-hidden rounded-lg sm:h-64 md:h-[400px]">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                    {selectedProject.title}
                  </h2>
                  <p className="mb-6 text-base text-gray-300 sm:text-lg">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
