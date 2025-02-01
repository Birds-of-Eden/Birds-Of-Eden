import React from "react";
import { Link } from "react-router-dom";
import Video from "../../assets/2.mp4"; // Import the video file
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";

const Hero = () => {
  return (
    <main className="relative">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={Video} type="video/mp4" />
      </video>
      <div className="after:absolute after:inset-0 after:h-full after:w-full after:bg-black/60"></div>

      {/* Content */}
      <section className="container relative z-10 flex pb-32 pt-44 py-20 flex-col items-center justify-center">
        <div className="grid grid-cols-1 items-center gap-8 text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center md:items-start md:text-left"
          >
            <h1 className="mb-3 text-2xl md:text-5xl transition-transform duration-500">
              <span className="scale-10 0 transform rounded font-bold text-primary transition-transform duration-500">
                BIRDS OF EDEN
              </span>
              <span> Innovating the Future of Erp Software Solutions And AI</span>
            </h1>
            <p className="text-xl font-light duration-500">
              Birds OF EDEN is a cutting-edge software company dedicated to
              transforming ideas into reality through innovative technology
              solutions. Our mission is to empower businesses and individuals
              with state-of-the-art software that enhances efficiency,
              productivity, and user experience.
            </p>
            <div className="mt-4 md:space-x-4">
              <Link to="/get-started">
                <button className="mb-2 rounded-md border-2 border-blue-500 bg-blue-500/50 px-8 py-3 text-2xl text-white shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:bg-blue-700">
                  Get Started
                </button>
              </Link>
              <Link to="/learn-more">
                <button className="rounded-md border-2 border-emerald-500 bg-emerald-500/50 px-8 py-3 text-2xl text-white shadow-md transition-transform duration-300 hover:scale-105 hover:bg-emerald-500">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <img
            src="/undraw_progressive_app_m-9-ms.svg"
            alt="No image"
            className="w-full hidden lg:block"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
