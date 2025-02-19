import { useEffect, useState } from "react";
import talatImage from "./../assets/talat.webp";

const AboutUs = () => {
  // State for controlling animation
  const [animated, setAnimated] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div>
      {/* <Navbar2 /> */}

      <div className=" bg-slate-100 pb-10 dark:bg-slate-800">
        <div className="relative z-[1] bg-[url('/pexels-felixmittermeier-1205301.jpg')] bg-cover bg-center bg-no-repeat py-8 text-center after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-100 after:to-blue-500/60 dark:bg-blue-500/50 dark:to-slate-800 dark:after:from-slate-800">
          <h1
            className={`relative z-[1] justify-center rounded-lg p-4 text-center text-4xl font-bold`}
          >
            About{" "}
            <span className="ml-1 inline-block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Birds OF EDEN
            </span>
          </h1>
        </div>

        <div className="container bg-gradient-to-t from-transparent to-slate-100 dark:to-slate-800">
          <p className={`mb-8 text-lg ${animated ? "animate-fadeIn" : ""}`}>
            <span className="font-semibold">BIRDS OF EDEN</span> is a dynamic
            software company dedicated to creating innovative solutions that
            empower businesses to thrive in the digital age.
          </p>

          <h2
            className={`mb-6 text-3xl font-bold ${
              animated ? "animate-fadeIn" : ""
            }`}
          >
            Our Mission
          </h2>
          <p className={`mb-8 text-lg ${animated ? "animate-fadeIn" : ""}`}>
            At <span className="font-semibold">BIRDS OF EDEN</span>, our mission
            is to revolutionize the software industry by delivering cutting-edge
            products and services that exceed our clients' expectations.
          </p>

          <h2
            className={`mb-6 text-3xl font-bold ${
              animated ? "animate-fadeIn" : ""
            }`}
          >
            Our Values
          </h2>
          <ul className={`mb-8 text-lg ${animated ? "animate-fadeIn" : ""}`}>
            <li className="mb-4">
              Innovation: We constantly explore new ideas and technologies to
              stay ahead of the curve.
            </li>
            <li className="mb-4">
              Quality: We are committed to delivering high-quality solutions
              that add value to our clients' businesses.
            </li>
            <li className="mb-4">
              Integrity: We conduct business with honesty, transparency, and
              integrity.
            </li>
            <li className="mb-4">
              Customer Satisfaction: We prioritize the needs and satisfaction of
              our clients above all else.
            </li>
            <li>
              Collaboration: We believe in the power of collaboration and
              teamwork to achieve success.
            </li>
          </ul>

          <h2
            className={`mb-6 text-3xl font-bold ${
              animated ? "animate-fadeIn" : ""
            }`}
          >
            Core Members
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className={`rounded-lg bg-gray-100 p-3 ring-2 ring-purple-600 ${
                animated ? "animate-slideInLeft" : ""
              } hover:scale-105 hover:transform hover:border-2 hover:border-green-600 hover:shadow-lg hover:duration-300`}
            >
              <img
                src={talatImage}
                alt="Talat Md. Tawfiq Elahi"
                className="mb-2 w-full rounded-lg"
              />
              <h3 className="mb-2 text-2xl font-semibold text-purple-600">
                Talat Md. Tawfiq Elahi
              </h3>
              <p className="text-lg text-gray-700">Co-Founder & CEO</p>
            </div>
            <div
              className={`rounded-lg bg-gray-100 p-3 ring-2 ring-purple-600 ${
                animated ? "animate-slideInUp" : ""
              } hover:scale-105 hover:transform hover:border-2 hover:border-green-600 hover:shadow-lg hover:duration-300`}
            >
              <img
                src={talatImage}
                alt="Talat Md. Tawfiq Elahi"
                className="mb-2 w-full rounded-lg"
              />
              <h3 className="mb-2 text-2xl font-semibold text-purple-600">
                Talat Md. Tawfiq Elahi
              </h3>
              <p className="text-lg text-gray-700">CTO</p>
            </div>
            <div
              className={`rounded-lg bg-gray-100 p-3 ring-2 ring-purple-600 ${
                animated ? "animate-slideInRight" : ""
              } hover:scale-105 hover:transform hover:border-2 hover:border-green-600 hover:shadow-lg hover:duration-300`}
            >
              <img
                src={talatImage}
                alt="Md.Amenul Islam"
                className="mb-2 w-full rounded-lg"
              />
              <h3 className="mb-2 text-2xl font-semibold text-purple-600">
                Md.Amenul Islam
              </h3>
              <p className="text-lg text-gray-700">COO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
