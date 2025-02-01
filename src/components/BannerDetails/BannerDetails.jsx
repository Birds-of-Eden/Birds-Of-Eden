import React from "react";
import { Link } from "react-router-dom";

const BannerDetails = ({ reverse, img }) => {
  return (
    <section>
      <main className="mb-10 bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={`${reverse ? "order-1 md:order-2" : "order-2"} w-full`}
            >
              <img
                src={img}
                alt="No image"
                className="mx-auto w-full transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "order-2 md:order-1" : "order-1"
              }`}
            >
              <h1 className="text-2xl md:text-4xl">
                We Build Apps That Get Trending On Appworld
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Birds OF EDEN is a cutting-edge software company dedicated to
                transforming ideas into reality through innovative technology
                solutions. Our mission is to empower businesses and individuals
                with state-of-the-art software that enhances efficiency,
                productivity, and user experience.
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                  <li className="font-medium">
                    Expert software development tailored to your needs.
                  </li>
                  <li className="font-medium">
                    Innovative solutions that drive growth and success.
                  </li>
                  <li className="font-medium">
                    Commitment to quality and exceptional user experience.
                  </li>
                </ul>
              </div>
              <div className="space-x-4">
                <Link to="/get-started">
                  <button className="transform animate-pulse rounded-md border-2 border-blue-500 bg-blue-500 px-4 py-2 text-sm text-white shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:bg-blue-700">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
