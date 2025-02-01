import React from "react";
import angularLogo from "../assets/angular.jpg";
import backboneLogo from "../assets/chakra_ui.png";
import emberLogo from "../assets/mui.png";
import nextjsLogo from "../assets/next js.png"; // Add Next.js logo
import reactLogo from "../assets/react.jpg";
import streamlitLogo from "../assets/streamlit.jpg"; // Add Streamlit logo
import vueLogo from "../assets/vue.png";

const FrontendTechnologiesStatic = () => {
  // Static data for frontend technologies
  const technologies = [
    {
      id: 1,
      name: "React.js",
      category: "frontend",
      description: "A JavaScript library for building user interfaces.",
      image: reactLogo,
    },
    {
      id: 2,
      name: "Vue.js",
      category: "frontend",
      description: "The Progressive JavaScript Framework.",
      image: vueLogo,
    },
    {
      id: 3,
      name: "Angular",
      category: "frontend",
      description: "One framework. Mobile & desktop.",
      image: angularLogo,
    },
    {
      id: 4,
      name: "Next.js",
      category: "frontend",
      description: "A React framework for production.",
      image: nextjsLogo,
    },
    {
      id: 5,
      name: "MUI",
      category: "frontend",
      description: "A framework for ambitious web developers.",
      image: emberLogo,
    },
    {
      id: 6,
      name: "Chakra UI",
      category: "frontend",
      description:
        "Gives structure to web applications by providing models with key-value binding.",
      image: backboneLogo,
    },
    {
      id: 7,
      name: "Streamlit",
      category: "frontend",
      description: "A framework for creating data apps in pure Python.",
      image: streamlitLogo,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3">
      {technologies
        .filter((tech) => tech.category === "frontend")
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

export default FrontendTechnologiesStatic;
