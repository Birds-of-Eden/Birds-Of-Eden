import React from "react";

const Corporate = () => {
  return (
    <div className="min-h-[200px] rounded-lg bg-gray-100 p-4 shadow-md dark:bg-slate-800 sm:p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
        Corporate Solutions
      </h2>
      <p className="mb-2 text-gray-700 dark:text-white">
        Streamline your corporate operations with our innovative software
        solutions:
      </p>
      <ul className="mb-4 list-inside list-disc text-gray-700 dark:text-white">
        <li>Enterprise resource planning (ERP)</li>
        <li>Customer relationship management (CRM)</li>
        <li>Human resources management systems (HRMS)</li>
        <li>Data analytics and reporting</li>
      </ul>
      <p className="text-gray-700 dark:text-white">
        Enhance your business efficiency and decision-making processes with our
        customized solutions.
      </p>
    </div>
  );
};

export default Corporate;
