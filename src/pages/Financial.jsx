import React from "react";

const Financial = () => {
  return (
    <div className="min-h-[200px] rounded-lg bg-gray-100 p-4 shadow-md dark:bg-slate-800 sm:p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
        Financial Institutions Solutions
      </h2>
      <p className="mb-2 text-gray-700 dark:text-white">
        Our financial software solutions are designed to enhance the performance
        and security of financial institutions:
      </p>
      <ul className="mb-4 list-inside list-disc text-gray-700 dark:text-white">
        <li>Online banking platforms</li>
        <li>Fraud detection systems</li>
        <li>Investment management tools</li>
        <li>Risk management solutions</li>
      </ul>
      <p className="text-gray-700 dark:text-white">
        Ensure your institution's growth and reliability with our
        state-of-the-art technology.
      </p>
    </div>
  );
};

export default Financial;
