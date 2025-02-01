// AppDev.jsx
// import React from "react";

const AppDev = () => {
  return (
    <div className="pt-24">
      <div className="mx-auto mb-16 mt-8 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <div className="transform rounded-lg bg-gray-100 p-8 shadow-md transition duration-300 hover:scale-105">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 lg:text-3xl">
            App Development Services
          </h2>
          <p className="mb-6 text-gray-700">
            At Birds of Eden, we excel in crafting innovative and scalable
            mobile applications tailored to your unique business requirements.
          </p>
          <ul className="mb-6 list-inside list-disc">
            <li className="text-gray-700">
              <span className="font-bold">Native App Development:</span>{" "}
              Utilizing the latest technologies, we develop native applications
              for iOS and Android platforms, ensuring optimal performance and
              user experience.
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Cross-Platform Solutions:</span> Our
              expertise extends to building cross-platform applications using
              frameworks like React Native, allowing you to reach a wider
              audience with a single codebase.
            </li>
            <li className="text-gray-700">
              <span className="font-bold">UI/UX Design:</span> We prioritize
              user-centric design principles to create intuitive and visually
              appealing interfaces that engage and delight users.
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Agile Development:</span> With agile
              methodologies, we ensure rapid iteration and continuous
              improvement throughout the development lifecycle, keeping you
              involved at every stage.
            </li>
          </ul>
          <p className="text-gray-700">
            Partner with us to transform your app ideas into reality and stay
            ahead of the competition in today's dynamic digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDev;
