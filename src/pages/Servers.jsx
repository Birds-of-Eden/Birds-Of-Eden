import React from "react";

const Servers = () => {
  return (
    <div className="min-h-[200px] rounded-lg bg-gray-100 p-4 shadow-md dark:bg-slate-800 sm:p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
        Enterprise Servers & Data Solutions
      </h2>
      <p className="mb-2 text-gray-700 dark:text-white">
        Optimize your business with our enterprise-grade server solutions:
      </p>
      <ul className="mb-4 list-inside list-disc text-gray-700 dark:text-white">
        <li>Rack-mounted and blade servers</li>
        <li>Cloud and on-premise data storage</li>
        <li>High-performance computing solutions</li>
        <li>Redundant and scalable architecture</li>
      </ul>
      <p className="text-gray-700 dark:text-white">
        Power your infrastructure with secure and scalable server technology.
      </p>
    </div>
  );
};

export default Servers;
