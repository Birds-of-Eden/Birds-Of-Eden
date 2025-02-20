import React from "react";

const Govt = () => {
  return (
    <div className="min-h-[200px] rounded-lg bg-gray-100 p-4 shadow-md dark:bg-slate-800 sm:p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
        Government Solutions
      </h2>
      <p className="mb-2 text-gray-700 dark:text-white">
        We provide comprehensive software solutions tailored for government
        institutions. Our services include:
      </p>
      <ul className="mb-4 list-inside list-disc text-gray-700 dark:text-white">
        <li>Public administration systems</li>
        <li>E-Governance platforms</li>
        <li>Data security and management</li>
        <li>Citizen engagement tools</li>
      </ul>
      <p className="text-gray-700 dark:text-white">
        Our solutions are designed to enhance efficiency, transparency, and
        public trust.
      </p>
    </div>
  );
};

export default Govt;
