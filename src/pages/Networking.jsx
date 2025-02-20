import React from "react";

const Networking = () => {
  return (
    <div className="min-h-[200px] rounded-lg bg-gray-100 p-4 shadow-md dark:bg-slate-800 sm:p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
        Networking & Connectivity
      </h2>
      <p className="mb-2 text-gray-700 dark:text-white">
        Build a robust network with our latest networking solutions:
      </p>
      <ul className="mb-4 list-inside list-disc text-gray-700 dark:text-white">
        <li>Enterprise-grade routers and switches</li>
        <li>Secure VPN and firewall solutions</li>
        <li>Wireless access points and mesh networking</li>
        <li>High-speed fiber optic solutions</li>
      </ul>
      <p className="text-gray-700 dark:text-white">
        Achieve seamless connectivity with high-performance networking devices.
      </p>
    </div>
  );
};

export default Networking;
