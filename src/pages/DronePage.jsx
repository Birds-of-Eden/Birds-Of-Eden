import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function DronePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Load Translated Drones Data
  const translatedDrones = t("home.dronePage.drones", {
    returnObjects: true,
  });

  return (
    <div className="bg-slate-100 text-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="heading3 pb-10">{t("home.dronePage.title")}</h1>

        <Splide className="drone-carousel">
          {translatedDrones.map((drone, index) => (
            <SplideSlide key={index}>
              <div className="flex flex-col items-center gap-8 p-8 md:flex-row">
                <div className="transition-opacity duration-500 md:w-1/2">
                  <img
                    src={drone.image}
                    alt={drone.title}
                    className="h-[400px] w-full rounded-lg object-cover shadow-xl"
                  />
                </div>
                <div className="space-y-6 md:w-1/2">
                  <h2 className="text-3xl font-bold text-blue-400">
                    {drone.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-black dark:text-gray-300">
                    {drone.description}
                  </p>

                  <ul className="list-disc pl-4 text-black dark:text-white">
                    <li>
                      <strong>{t("home.dronePage.specs.flightTime")}: </strong>
                      {drone.specs.flightTime}
                    </li>
                    <li>
                      <strong>{t("home.dronePage.specs.range")}: </strong>
                      {drone.specs.range}
                    </li>
                    <li>
                      <strong>{t("home.dronePage.specs.camera")}: </strong>
                      {drone.specs.camera}
                    </li>
                  </ul>

                  <div className="flex gap-4">
                    <button
                      onClick={() =>
                        navigate(`/drones`, { state: { from: "dronePage" } })
                      }
                      className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
                    >
                      {t("home.dronePage.viewCollections")}
                    </button>
                    <button
                      onClick={() =>
                        navigate(`/drones/${index + 1}`, {
                          state: { from: "dronePage" },
                        })
                      }
                      className="rounded-lg border border-blue-400 px-6 py-2 text-blue-400 transition-colors hover:bg-blue-400 hover:text-white"
                    >
                      {t("home.dronePage.viewSpecs")}
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
