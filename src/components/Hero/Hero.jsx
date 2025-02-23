import React from "react";
import { Link } from "react-router-dom";
import Video from "../../assets/2.mp4";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";
import CircleServices from "./circleServices";
import Typewriter from "typewriter-effect";
import Particles from "../Backgrounds/Particles/Particles";

const Hero = () => {
  return (
    <main className="min-h-screen">
      {/* Particles Background - Covering entire section */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content */}
      <section className="container z-10 flex h-screen md:flex-col md:items-center md:justify-center md:py-20 md:pb-32 md:pt-44">
        <div className="grid grid-cols-1 items-center gap-4 text-white md:grid-cols-2 md:gap-8">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            f
            className="items-center text-center md:flex md:flex-col md:items-start md:gap-4 md:text-left"
          >
            <h1 className="mb-3 mt-8 text-2xl transition-transform duration-500 md:text-5xl">
              <span className="scale-10 transform rounded font-bold text-primary transition-transform duration-500">
                BIRDS OF EDEN
              </span>{" "}
              <span className="text-black dark:text-white">
                <Typewriter
                  options={{
                    strings: [
                      "Innovating the Future of ERP Software Solutions And AI",
                      "Revolutionizing Business Automation",
                      "Empowering the Next Generation of AI Systems",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 25,
                  }}
                />
              </span>
            </h1>
            <p className="font-light text-black duration-500 dark:text-white md:text-xl">
              Birds OF EDEN is a cutting-edge software company dedicated to
              transforming ideas into reality through innovative technology
              solutions. Our mission is to empower businesses and individuals
              with state-of-the-art software that enhances efficiency,
              productivity, and user experience.
            </p>

            <div className="md:hidden">
              <CircleServices />
            </div>

            <div className="grid gap-1 md:mt-4 md:flex md:space-x-4">
              <Link to="/get-started">
                <button className="mb-2 rounded-md border-2 border-blue-500 bg-blue-500/50 px-8 py-3 text-lg text-white shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:bg-blue-700 md:text-2xl">
                  Get Started
                </button>
              </Link>
              <Link to="/learn-more">
                <button className="rounded-md border-2 border-emerald-500 bg-emerald-500/50 px-8 py-3 text-lg text-white shadow-md transition-transform duration-300 hover:scale-105 hover:bg-emerald-500 md:text-2xl">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <CircleServices />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
