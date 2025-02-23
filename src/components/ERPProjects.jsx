import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import project_14 from "../assets/project_14.png";
import project_15 from "../assets/project_15.png";
import project_16 from "../assets/project_16.png";
import project_17 from "../assets/project_17.png";
// import project_18 from "../assets/project_18.png";
// import project_19 from "../assets/project_19.png";

const erpProjects = [
  {
    id: 1,
    title: "Sales Insights Dashboard",
    description:
      "Real-time sales statistics with detailed breakdowns by day, week, month, and year. Get insights on balances, leads, and subscription churn metrics.",
    image: project_14,
  },
  {
    id: 2,
    title: "Client Optimization Analytics",
    description:
      "Advanced optimization metrics for clients with insights into blogs, pages, press releases, and video engagements. Track local SEO audits and activity timelines.",
    image: project_15,
  },
  {
    id: 3,
    title: "Campaign Performance Dashboard",
    description:
      "Monitor campaign health with performance ratings from 'Critical' to 'Great'. Detailed activity logs provide actionable insights for continuous improvement.",
    image: project_16,
  },
  {
    id: 4,
    title: "Seamless Onboarding Workflow",
    description:
      "A step-by-step onboarding process that guides users through account setup, social profile linking, and completion. Streamlined for optimal user experience.",
    image: project_17,
  },
];

function ERPProjects() {
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
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="link boxshadow">Learn More</button>
                    <button className="rounded-lg border border-blue-400 px-6 py-2 text-blue-400 transition-colors hover:bg-blue-400 hover:text-white">
                      View Details
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
