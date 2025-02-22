import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { drones } from "../Data/drones";

function DronePage() {
  return (
    <div className="bg-slate-100 text-white dark:bg-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="heading3 pb-10">Our Latest Technology</h1>
        </div>

        <Splide
          options={{
            type: "fade",
            rewind: true,
            arrows: true, // Enabled arrows
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
          className="drone-carousel"
        >
          {drones.map((drone) => (
            <SplideSlide key={drone.id}>
              <div className="flex flex-col items-center gap-8 p-8 md:flex-row">
                <div className="transition-opacity duration-500 md:w-1/2">
                  <img
                    src={drone.image}
                    alt={drone.name}
                    className="h-[400px] w-full rounded-lg object-cover shadow-xl"
                  />
                </div>
                <div className="space-y-6 md:w-1/2">
                  <h2 className="text-3xl font-bold text-blue-400">
                    {drone.name}
                  </h2>
                  <p className="text-lg leading-relaxed text-black dark:text-gray-300">
                    {drone.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
                      Learn More
                    </button>
                    <button className="rounded-lg border border-blue-400 px-6 py-2 text-blue-400 transition-colors hover:bg-blue-400 hover:text-white">
                      View Specs
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

export default DronePage;
