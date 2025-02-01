import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <main className="bg-gradient-to-r from-violet-950 to-violet-900">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-8">
          <div className="order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2 md:items-start md:text-left">
            <h1 className="text-4xl font-bold">
              Market Your Brand with BIRDS OF EDEN
            </h1>
            <p className="text-lg">
              BIRDS OF EDEN is dedicated to transforming your innovative ideas into
              reality. Our cutting-edge technology solutions empower businesses
              to enhance efficiency, boost productivity, and create exceptional
              user experiences. Join us in revolutionizing the software industry
              with unparalleled expertise and innovation.
            </p>
            <Link to="/get-started">
              <button className="transform animate-pulse rounded-md border-2 border-blue-500 bg-blue-500 px-4 py-2 text-sm text-white shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:bg-blue-700">
                Get Started
              </button>
            </Link>
          </div>
          <div className="order-1">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:z-10 hover:scale-105">
              <iframe
                className="aspect-video w-full rounded-lg"
                src="https://www.youtube.com/embed/eC_h6w3VWNg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
