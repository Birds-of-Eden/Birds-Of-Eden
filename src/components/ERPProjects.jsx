// components/ERPProjects.js
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useNavigate } from "react-router-dom";
import erpProjects from "../data/erpProjects";

function ERPProjects() {
  const navigate = useNavigate();

  const handleLearnMore = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className="bg-slate-100 text-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="heading3 ">Our ERP Projects</h1>
        </div>

        <Splide
          options={{
            type: "fade",
            rewind: true,
            arrows: true,
            pagination: true,
            autoplay: true,
            interval: 4000,
            pauseOnHover: false,
            speed: 1000,
            resetProgress: false,
            classes: {
              arrows: "splide__arrows custom-arrows",
              arrow: "splide__arrow custom-arrow",
              prev: "splide__arrow--prev custom-prev",
              next: "splide__arrow--next custom-next",
            },
          }}
          className="erp-carousel"
        >
          {erpProjects.map((project) => (
            <SplideSlide key={project.id}>
              <div className="flex flex-col items-center gap-8 p-8 md:flex-row">
                <div className="transition-opacity duration-500 md:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[400px] w-full rounded-lg object-contain shadow-xl"
                  />
                </div>
                <div className="space-y-6 md:w-1/2">
                  <h2 className="text-3xl font-bold text-blue-400">
                    {project.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-black dark:text-gray-300">
                    {project.description.length > 200
                      ? `${project.description.slice(0, 200)}...`
                      : project.description}
                  </p>
                  <div className="flex gap-4">
                    <button
                      className="link boxshadow rounded-xl"
                      onClick={() => handleLearnMore(project.id)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default ERPProjects;
