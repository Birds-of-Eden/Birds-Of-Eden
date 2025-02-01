import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const TechnologyList = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/technologylist/")
      .then((response) => {
        setTechnologies(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the technologies!", error);
      });
  }, []);

  return (
    <div className="">
      <div className="container mx-auto mb-10 mt-10  rounded-lg bg-gray-50 p-6 shadow-xl dark:bg-slate-800">
        <h1 className="mb-10 text-center text-4xl font-bold text-blue-700 dark:text-purple-500">
          Our Technology
        </h1>
        <p className="mb-10 text-center text-lg text-gray-700 dark:text-white">
          At
          <span className="ml-1 animate-bounce text-2xl text-green-700 dark:text-orange-500">
            BIRDS OF EDEN
          </span>
          , we are at the forefront of technological innovation. Our software
          solutions are built using the latest and most reliable technologies to
          ensure high performance, scalability, and security.
        </p>
        <div className="mb-6 flex justify-center">
          <NavLink
            to="frontend"
            className={({ isActive }) =>
              isActive
                ? "mr-2 rounded bg-red-700 px-4 py-2 text-white"
                : "mr-2 rounded bg-green-500 px-4 py-2 text-white"
            }
          >
            Frontend Technologies
          </NavLink>
          <NavLink
            to="backend"
            className={({ isActive }) =>
              isActive
                ? "rounded bg-red-700 px-4 py-2 text-white"
                : "rounded bg-blue-500 px-4 py-2 text-white"
            }
          >
            Backend Technologies
          </NavLink>
        </div>
        <Outlet context={{ technologies }} />
      </div>
    </div>
  );
};

export default TechnologyList;
