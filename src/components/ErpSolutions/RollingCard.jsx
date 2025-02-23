import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";
import project1 from "../../assets/project_14.png";
import project2 from "../../assets/project_15.png";
import project3 from "../../assets/rss_feeds.png";
import project4 from "../../assets/streamlit.jpg";
import project5 from "../../assets/uiux.jpg";
import project6 from "../../assets/sdaia.png";

const clients = [
  {
    name: "Client One",
    logo: project1,
    description:
      "Client One offers exceptional services with a focus on quality.",
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
      "Client Three is known for its outstanding customer support and reliability.",
  },
  {
    name: "Client Four",
    logo: project4,
    description:
      "Client Four focuses on delivering scalable and robust solutions.",
  },
  {
    name: "Client Five",
    logo: project5,
    description: "Client Five is a leader in industry-specific innovations.",
  },
  {
    name: "Client Six",
    logo: project6,
    description:
      "Client Six provides end-to-end solutions for complex challenges.",
  },
];

// **NEW: 4x Duplication of Clients Array with Unique IDs**
const extendedClients = [...clients, ...clients].map((client, index) => ({
  ...client,
  id: `${client.name}-${index}`, // Unique ID for React key
}));

const RollingErpCard = ({ autoplay = true, pauseOnHover = true }) => {
  const [selectedClient, setSelectedClient] = useState(null);

  // 3D Geometry Calculations
  const faceCount = extendedClients.length;
  const radius = 500; // Radius of the cylinder

  // Framer Motion
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  // **NEW: Normalized Rotation for Infinite Looping**
  const normalizedRotation = useTransform(rotation, (value) => {
    const normalized = value % 360;
    return normalized < 0 ? normalized + 360 : normalized;
  });

  // Convert rotation -> 3D transform
  const transform = useTransform(
    normalizedRotation,
    (val) => `rotate3d(0,1,0,${val}deg)`,
  );

  // **NEW: startInfiniteSpin Function for Infinite Loop**
  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 60, // Slower speed for better experience
        ease: "linear",
        repeat: Infinity, // Infinite loop
      },
    });
  };

  // **NEW: Trigger Infinite Loop on Mount**
  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay]);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  // Drag Handling
  const dragFactor = 0.05;
  const handleDrag = (_, info) => {
    controls.stop();
    const delta = info.delta.x * dragFactor;
    rotation.set(rotation.get() + delta);
  };

  const handleDragEnd = (_, info) => {
    const velocity = info.velocity.x * dragFactor * 0.2;
    rotation.set(rotation.get() + velocity);

    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div className=" mb-4 flex items-center justify-center text-4xl font-bold text-white">
        Our ERP Solutions
      </div>
      <div className="flex h-full items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          style={{
            transform: transform,
            rotateY: normalizedRotation,
            width: "100%",
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] items-center justify-center [transform-style:preserve-3d]"
        >
          {extendedClients.map((client, i) => (
            <div
              key={client.id} // Using unique ID
              onClick={() => setSelectedClient(client)}
              className="group absolute flex h-fit w-[280px] cursor-pointer flex-col items-center justify-center rounded-2xl bg-gray-800 p-4 shadow-lg transition-transform duration-300 [backface-visibility:hidden] hover:scale-105"
              style={{
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px) rotateY(-${
                  (360 / faceCount) * i
                }deg)`,
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="mb-4 h-[200px] w-full rounded-xl object-cover"
              />
              <h2 className="mb-2 text-xl font-semibold text-white">
                {client.name}
              </h2>
              <p className="text-center text-gray-400">{client.description}</p>
            </div>
          ))}
        </motion.div>
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

export default RollingErpCard;
