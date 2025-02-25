import { useEffect, useState } from "react";
import { default as CEOImage } from "../assets/talat_md.png";
import { default as CTOImage } from "../assets/amenul_islam.png";
import { motion } from "framer-motion";

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
        "Talat Md. Tawfik Elahi is a visionary leader driving strategic growth and excellence. With a forward-thinking approach, he anticipates market shifts and navigates challenges with agility. His leadership bridges strategy and execution, ensuring organizational success.",
    },
    {
      id: 2,
      name: "Md. Amenul Islam",
      role: "CTO",
      image: CTOImage,
      portfolioLink: "https://talat-me.vercel.app/",
      description:
        "Md. Amenul Islam is a strategic innovator leading operational efficiency and growth. He combines visionary thinking with practical execution to achieve business goals. His foresight enables the organization to adapt and thrive in a dynamic landscape.",
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

  // Framer Motion Variants for Scroll Animation
  const scrollVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // Alternating left and right
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  });

  return (
    <motion.div
      className="min-h-screen bg-slate-100 py-12 dark:bg-slate-900"
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="mb-16 text-center text-4xl font-bold dark:text-white md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Executive Team
        </motion.h1>

        <div className="space-y-16">
          {roleOrder.map(
            (role) =>
              groupedTeamMembers[role] && (
                <motion.div
                  key={role}
                  className="mb-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h2
                    className="mb-8 text-center text-3xl font-semibold dark:text-white"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {role}
                  </motion.h2>
                  <div className="space-y-8">
                    {groupedTeamMembers[role].map((member, index) => (
                      <motion.div
                        key={member.id}
                        className="flex flex-col gap-8 md:flex-row"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={scrollVariants(index)}
                      >
                        {/* Card Section */}
                        <div className="w-full overflow-hidden rounded-md bg-slate-200 dark:bg-slate-800 md:w-64">
                          <div className="p-4">
                            <motion.img
                              src={member.image}
                              alt={member.name}
                              className="mx-auto mb-4 h-32 w-32 rounded-full"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            />
                            <h3 className="mb-2 text-center text-lg font-semibold dark:text-white">
                              {member.name}
                            </h3>
                            <p className="mb-4 text-center text-blue-400">
                              {member.role}
                            </p>
                            {member.portfolioLink && (
                              <motion.a
                                href={member.portfolioLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="boxshadow link"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                View Portfolio
                              </motion.a>
                            )}
                          </div>
                        </div>

                        {/* Description Section */}
                        <motion.div
                          className="flex-1 rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                          <h4 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">
                            Description
                          </h4>
                          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                            {member.description}
                          </p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ),
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamListStatic;
