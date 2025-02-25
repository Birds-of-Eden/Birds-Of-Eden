import React from "react";
import { Link } from "react-router-dom";

const BannerDetails = ({ reverse, img }) => {
  return (
    <section>
      <main className=" bg-slate-100 dark:bg-slate-800 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={`${reverse ? "order-1 md:order-2" : "order-2"} w-full`}
            >
              <img
                src="https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg"
                alt="উচ্চ-মানের প্রযুক্তি পটভূমি"
                className="mx-auto h-[450px] w-full rounded-md ring-2 transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]"
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
                  <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
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
