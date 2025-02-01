import React, { useEffect, useState } from "react";
import Navbar2 from "../components/navbar/Navbar2";

// Importing team member images correctly
import { default as CEOImage, default as CTOImage } from "../assets/talat.webp"; // Assuming you have a different image for the CTO

const TeamListStatic = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  // Static team members data with imported images
  const teamMembers = [
    {
      id: 1,
      name: "Talat Md. Tawfik Elahi",
      role: "CEO",
      image: CEOImage,
      portfolioLink: "https://talat-me.vercel.app/", // Added portfolio link for the CEO
    },
    {
      id: 2,
      name: "Talat Md. Taufik Elahi",
      role: "CTO",
      image: CTOImage,
      portfolioLink: "https://talat-me.vercel.app/",
    },
    {
      id: 3,
      name: "Md. Amenul Islam",
      role: "COO",
      image: CTOImage, // Change to the correct image for the COO
      portfolioLink: "https://aminul-me.vercel.app/",
    },
  ];

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const groupedTeamMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.role]) {
      acc[member.role] = [];
    }
    acc[member.role].push(member);
    return acc;
  }, {});

  const roleOrder = ["CEO", "CTO", "COO"];

  return (
    <div className=" dark:bg-slate-800">
      {/* <Navbar2 toggleTheme={toggleTheme} /> */}
      <div className="container mx-auto justify-center px-5 py-10 text-center dark:bg-slate-800 md:min-h-screen">
        <h1 className="heading2 md:text-5xl">Meet Our Executive Team</h1>
        <div className="container mx-auto">
          {roleOrder.map(
            (role) =>
              groupedTeamMembers[role] && (
                <div key={role} className="mb-10">
                  <h2 className="mb-8 mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-center text-4xl font-bold text-transparent">
                    {role}
                  </h2>
                  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {groupedTeamMembers[role].map((member) => (
                      <div
                        key={member.id}
                        className={`transform overflow-hidden rounded-xl ${
                          theme === "light" ? "bg-white" : "bg-gray-800"
                        } shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl`}
                      >
                        <div className="group relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="h-64 w-full transform object-cover transition duration-500 ease-in-out group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition duration-500 ease-in-out group-hover:opacity-80"></div>
                        </div>
                        <div className="p-6">
                          <h3
                            className={`mb-3 text-2xl font-semibold ${
                              theme === "light" ? "text-gray-900" : "text-white"
                            }`}
                          >
                            {member.name}
                          </h3>
                          <p
                            className={`mb-5 ${
                              theme === "light"
                                ? "text-gray-600"
                                : "text-gray-400"
                            }`}
                          >
                            {member.role}
                          </p>

                          {/* Conditionally render portfolio button for CEO */}
                          {member.portfolioLink && (
                            <a
                              href={member.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
                            >
                              Visit Portfolio
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamListStatic;
