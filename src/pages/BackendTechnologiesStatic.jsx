// BackendTechnologiesStatic.js
import React from "react";
import { useTranslation } from "react-i18next";
import djangoLogo from "/assets/django.png";
import goLogo from "/assets/go.png";
import laravelLogo from "/assets/laravel.png";
import nodejsLogo from "/assets/nodejs.png";
import pythonLogo from "/assets/python.png";
import rustLogo from "/assets/rust.png";
import springbootLogo from "/assets/springboot.png";

const BackendTechnologiesStatic = () => {
  const { t } = useTranslation();

  const technologies = [
    { id: 1, name: "nodeJs", category: "backend", image: nodejsLogo },
    { id: 2, name: "django", category: "backend", image: djangoLogo },
    { id: 3, name: "springBoot", category: "backend", image: springbootLogo },
    { id: 4, name: "python", category: "backend", image: pythonLogo },
    { id: 5, name: "go", category: "backend", image: goLogo },
    { id: 6, name: "rust", category: "backend", image: rustLogo },
    { id: 7, name: "laravel", category: "backend", image: laravelLogo },
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
              alt={t(`technologyList.technologies.backend.${technology.name}`)}
              className="mb-4 h-24 w-24 animate-spin-slow rounded-full border-4 border-gray-300 object-cover"
            />
            <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
              {technology.name} {/* Display the key */}
            </h3>
            <p className="text-gray-600 dark:text-white">
              {t(`technologyList.technologies.backend.${technology.name}`)}
            </p>
          </div>
        ))}
    </div>
  );
};

export default BackendTechnologiesStatic;
