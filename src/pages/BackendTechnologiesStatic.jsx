import React from "react";
import djangoLogo from "../assets/django.png";
import goLogo from "../assets/go.png";
import laravelLogo from "../assets/laravel.png";
import nodejsLogo from "../assets/nodejs.png";
import pythonLogo from "../assets/python.png";
import rustLogo from "../assets/rust.png";
import springbootLogo from "../assets/springboot.png";

const BackendTechnologiesStatic = () => {
  // Static data for backend technologies
  const technologies = [
    {
      id: 1,
      name: "Node.js",
      category: "backend",
      description: "A JavaScript runtime built on Chrome's V8 engine.",
      image: nodejsLogo,
    },
    {
      id: 2,
      name: "Django",
      category: "backend",
      description:
        "A high-level Python Web framework that encourages rapid development.",
      image: djangoLogo,
    },
    {
      id: 3,
      name: "Spring Boot",
      category: "backend",
      description:
        "A framework that simplifies the development of Java-based applications.",
      image: springbootLogo,
    },
    {
      id: 4,
      name: "Python",
      category: "backend",
      description:
        "A versatile, high-level programming language known for simplicity.",
      image: pythonLogo,
    },
    {
      id: 5,
      name: "Go",
      category: "backend",
      description:
        "A statically typed, compiled programming language designed at Google.",
      image: goLogo,
    },
    {
      id: 6,
      name: "Rust",
      category: "backend",
      description:
        "A system programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.",
      image: rustLogo,
    },
    {
      id: 7,
      name: "Laravel",
      category: "backend",
      description:
        "A PHP framework for web artisans, providing elegant syntax and robust tools.",
      image: laravelLogo,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {technologies
        .filter((tech) => tech.category === "backend")
        .map((technology) => (
          <div
            key={technology.id}
            className="flex transform flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition duration-300 hover:scale-105 dark:bg-slate-800"
          >
            <img
              src={technology.image}
              alt={technology.name}
              className="mb-4 h-24 w-24 animate-spin-slow rounded-full border-4 border-gray-300 object-cover"
            />
            <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
              {technology.name}
            </h3>
            <p className="text-gray-600 dark:text-white">
              {technology.description}
            </p>
          </div>
        ))}
    </div>
  );
};

export default BackendTechnologiesStatic;
