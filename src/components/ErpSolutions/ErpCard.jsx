import React, { useState } from "react";
import project1 from "../../assets/project_14.png";
import project2 from "../../assets/project_15.png";
import project3 from "../../assets/rss_feeds.png";

const ErpCard = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      name: "Client One",
      logo: project1,
      description:
        "Client One offers exceptional services with a focus on quality. Client One offers exceptional services with a focus on quality. Client One offers exceptional services with a focus on quality.dfdfd Client One offers exceptional services with a focus on quality. Client One offers exceptional services with a focus on quality. Client One offers exceptional services with a focus on quality.dfdfdfdtyytkiuoltfol",
    },
    {
      name: "Client Two",
      logo: project2,
      description: "Client Two specializes in delivering innovative solutions.",
    },
    {
      name: "Client Three",
      logo: project3,
      description:
        "Client Three is known for its outstanding customer support and reliability. Client Three is known for its outstanding customer support and reliability. Client Three is known for its outstanding customer support and reliability.",
    },
    {
      name: "Client One",
      logo: project1,
      description:
        "Client One offers exceptional services with a focus on quality. Client One offers exceptional services with a focus on quality. Client One offers exceptional services with a focus on quality.dfdfd Client One offers exceptional services with a focus on quality. Client One offers exceptional services with a focus on quality. Client One offers exceptional services with a focus on quality.dfdfdfdtyytkiuoltfol",
    },
    {
      name: "Client Two",
      logo: project2,
      description: "Client Two specializes in delivering innovative solutions.",
    },
    {
      name: "Client Three",
      logo: project3,
      description:
        "Client Three is known for its outstanding customer support and reliability. Client Three is known for its outstanding customer support and reliability. Client Three is known for its outstanding customer support and reliability.",
    },
  ];

  const getShortDescription = (desc) => {
    if (desc.length > 200) {
      return desc.substring(0, 200) + "...";
    }
    return desc;
  };

  return (
    <div className="flex h-screen w-full flex-col dark:bg-gray-900">
      <h1 className="mx-auto mb-4 text-4xl font-bold text-white">
        Our ERP Solutions
      </h1>

      <div className="grid grid-cols-1 gap-6 p-12 md:grid-cols-3">
        {clients.map((client, index) => (
          <div
            key={index}
            onClick={() => setSelectedClient(client)}
            className="relative transform cursor-pointer rounded-2xl bg-gray-800 p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4">
              <img
                src={client.logo}
                alt={client.name}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="p-2">
              <h2 className="mb-2 text-xl font-semibold text-white">
                {client.name}
              </h2>
              <p className="mb-4 text-gray-400">
                {getShortDescription(client.description)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-11/12 rounded-2xl bg-white p-8 shadow-xl md:w-2/3 lg:w-1/2">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {selectedClient.name}
            </h2>
            <img
              src={selectedClient.logo}
              alt={selectedClient.name}
              className="mb-4 rounded-xl object-cover"
            />
            <p className="text-gray-700">{selectedClient.description}</p>
            <button
              onClick={() => setSelectedClient(null)}
              className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErpCard;
