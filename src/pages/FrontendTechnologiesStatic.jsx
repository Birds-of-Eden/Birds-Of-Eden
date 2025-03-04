// FrontendTechnologiesStatic.js
import React from "react";
import { useTranslation } from "react-i18next";
import angularLogo from "/assets/angular.jpg";
import backboneLogo from "/assets/chakra_ui.png";
import emberLogo from "/assets/mui.png";
import nextjsLogo from "/assets/next js.png";
import reactLogo from "/assets/react.jpg";
import streamlitLogo from "/assets/streamlit.jpg";
import vueLogo from "/assets/vue.png";

const FrontendTechnologiesStatic = () => {
  const { t } = useTranslation();

  const technologies = [
    { id: 1, name: "reactJs", category: "frontend", image: reactLogo },
    { id: 2, name: "vueJs", category: "frontend", image: vueLogo },
    { id: 3, name: "angular", category: "frontend", image: angularLogo },
    { id: 4, name: "nextJs", category: "frontend", image: nextjsLogo },
    { id: 5, name: "mui", category: "frontend", image: emberLogo },
    { id: 6, name: "chakraUi", category: "frontend", image: backboneLogo },
    { id: 7, name: "streamlit", category: "frontend", image: streamlitLogo },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {technologies
        .filter((tech) => tech.category === "frontend")
        .map((technology) => (
          <div
            key={technology.id}
            className="flex transform flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition duration-300 hover:scale-105 dark:bg-slate-800"
          >
            <img
              src={technology.image}
              alt={t(`technologyList.technologies.frontend.${technology.name}`)}
              className="mb-4 h-24 w-24 animate-spin-slow rounded-full border-4 border-gray-300 object-cover"
            />
            <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
              {technology.name}
            </h3>
            <p className="text-gray-600 dark:text-white">
              {t(`technologyList.technologies.frontend.${technology.name}`)}
            </p>
          </div>
        ))}
    </div>
  );
};

export default FrontendTechnologiesStatic;
