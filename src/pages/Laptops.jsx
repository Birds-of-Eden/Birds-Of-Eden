import React from "react";

const Laptops = () => {
  return (
    <div className="min-h-[200px] rounded-lg bg-gray-100 p-4 shadow-md dark:bg-slate-800 sm:p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
        Laptops & Workstations
      </h2>
      <p className="mb-2 text-gray-700 dark:text-white">
        Discover our range of high-performance laptops and workstations:
      </p>
      <ul className="mb-4 list-inside list-disc text-gray-700 dark:text-white">
        <li>Business and gaming laptops</li>
        <li>High-end workstations for professionals</li>
        <li>Lightweight ultrabooks for mobility</li>
        <li>Custom-configured performance models</li>
      </ul>
      <p className="text-gray-700 dark:text-white">
        Get the best laptops tailored for your needs, from budget-friendly to
        premium devices.
      </p>
    </div>
  );
};

export default Laptops;
