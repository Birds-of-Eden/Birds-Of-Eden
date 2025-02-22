import { useEffect, useState } from "react";

// Importing team member images
import { default as CEOImage } from "../assets/talat.webp";
import { default as CTOImage } from "../assets/talat.webp";

const TeamListStatic = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const teamMembers = [
    {
      id: 1,
      name: "Talat Md. Tawfik Elahi",
      role: "CEO",
      image: CEOImage,
      portfolioLink: "https://talat-me.vercel.app/",
      description:
        "`Talat Md. Tawfik Elahi is the visionary leader and dynamic CEO of our company, steering the organization with unparalleled strategic insight and a relentless drive for excellence. With an extensive background in strategic management and business development, he brings a wealth of knowledge and expertise to the table, enabling the company to navigate complex business landscapes with agility and precision.His leadership is defined by a forward-thinking approach that consistently challenges the status quo, fostering a culture of innovation and continuous improvement. Under his strategic direction, the company has achieved remarkable growth, expanding its footprint and solidifying its position as an industry leader. His unwavering commitment to excellence and passion for transformative change have inspired a culture of high performance, driving the team to exceed expectations and set new benchmarks of success.`",
    },
    {
      id: 2,
      name: "Talat Md. Taufik Elahi",
      role: "CTO",
      image: CTOImage,
      portfolioLink: "https://talat-me.vercel.app/",
      description:
        "`Talat Md. Tawfik Elahi is the visionary leader and dynamic CEO of our company, steering the organization with unparalleled strategic insight and a relentless drive for excellence. With an extensive background in strategic management and business development, he brings a wealth of knowledge and expertise to the table, enabling the company to navigate complex business landscapes with agility and precision.His leadership is defined by a forward-thinking approach that consistently challenges the status quo, fostering a culture of innovation and continuous improvement. Under his strategic direction, the company has achieved remarkable growth, expanding its footprint and solidifying its position as an industry leader. His unwavering commitment to excellence and passion for transformative change have inspired a culture of high performance, driving the team to exceed expectations and set new benchmarks of success.`",
    },
    {
      id: 3,
      name: "Md. Amenul Islam",
      role: "COO",
      image: CTOImage,
      portfolioLink: "https://aminul-me.vercel.app/",
      description:
        "`Md. Amenul Islam is the Chief Operating Officer,steering the organization with unparalleled strategic insight and a relentless drive for excellence. With an extensive background in strategic management and business development, he brings a wealth of knowledge and expertise to the table, enabling the company to navigate complex business landscapes with agility and precision.His leadership is defined by a forward-thinking approach that consistently challenges the status quo, fostering a culture of innovation and continuous improvement. Under his strategic direction, the company has achieved remarkable growth, expanding its footprint and solidifying its position as an industry leader. His unwavering commitment to excellence and passion for transformative change have inspired a culture of high performance, driving the team to exceed expectations and set new benchmarks of success.`",
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

  const roleOrder = ["CEO", "CTO", "COO"];

  const groupedTeamMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.role]) {
      acc[member.role] = [];
    }
    acc[member.role].push(member);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-slate-100 py-12 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h1 className="mb-16 text-center text-4xl font-bold dark:text-white md:text-5xl">
          Meet Our Executive Team
        </h1>

        <div className="space-y-16">
          {roleOrder.map(
            (role) =>
              groupedTeamMembers[role] && (
                <div key={role} className="mb-16">
                  <h2 className="mb-8 text-center text-3xl font-semibold dark:text-white">
                    {role}
                  </h2>
                  <div className="space-y-8">
                    {groupedTeamMembers[role].map((member) => (
                      <div
                        key={member.id}
                        className="flex flex-col gap-8 md:flex-row"
                      >
                        {/* Card Section */}
                        <div className="w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 md:w-64">
                          <div className="p-4">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="mx-auto mb-4 h-32 w-32 rounded-full"
                            />
                            <h3 className="mb-2 text-center text-lg font-semibold dark:text-white">
                              {member.name}
                            </h3>
                            <p className="mb-4 text-center text-blue-400">
                              {member.role}
                            </p>
                            {member.portfolioLink && (
                              <a
                                href={member.portfolioLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-2 text-center font-medium transition-all duration-300 hover:from-blue-700 hover:to-purple-700 dark:text-white"
                              >
                                View Portfolio
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Description Section */}
                        <div className="flex-1 rounded-xl bg-slate-200 p-6 dark:bg-slate-800">
                          <h4 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                            Description
                          </h4>
                          <p className="rounded-md px-3  py-2 text-sm italic leading-relaxed shadow-sm shadow-gray-500 dark:text-white dark:shadow-gray-300">
                            {member.description}
                          </p>
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
