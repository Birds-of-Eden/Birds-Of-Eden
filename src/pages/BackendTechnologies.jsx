import React from "react";
import { useOutletContext } from "react-router-dom";

const BackendTechnologies = () => {
  const { technologies } = useOutletContext();

  if (!technologies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {technologies
        .filter((tech) => tech.category === "backend")
        .map((technology) => (
          <div
            key={technology.id}
            className="flex transform flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition duration-300 hover:scale-105"
          >
            <img
              src={technology.image}
              alt={technology.name}
              className="mb-4 h-24 w-24 animate-spin-slow rounded-full border-4 border-gray-300 object-cover"
            />
            <h3 className="mb-2 text-2xl font-bold text-gray-800">
              {technology.name}
            </h3>
            <p className="text-gray-600">{technology.description}</p>
          </div>
        ))}
    </div>
  );
};

export default BackendTechnologies;
