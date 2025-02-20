import React from "react";

const Ecommerce = () => {
  return (
    <div className="min-h-[200px] rounded-lg bg-gray-100 p-4 shadow-md dark:bg-slate-800 sm:p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
        E-Commerce Solutions
      </h2>
      <p className="mb-2 text-gray-700 dark:text-white">
        Maximize your online sales with our comprehensive e-commerce solutions:
      </p>
      <ul className="mb-4 list-inside list-disc text-gray-700 dark:text-white">
        <li>Customizable online store platforms</li>
        <li>Payment gateway integrations</li>
        <li>Inventory management systems</li>
        <li>Customer experience enhancements</li>
      </ul>
      <p className="text-gray-700 dark:text-white">
        Grow your e-commerce business with our scalable and secure solutions.
      </p>
    </div>
  );
};

export default Ecommerce;
