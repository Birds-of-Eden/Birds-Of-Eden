import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import CEOImage from "../assets/talat_md.png";
import CTOImage from "../assets/amenul_islam.png";

const TeamListStatic = () => {
  const { t } = useTranslation();
  const teamData = t("team", { returnObjects: true });

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Define animation variants
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.8, bounce: 0.3 },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.2 },
    },
  });

  return (
    <motion.div
      className="min-h-screen bg-slate-100 py-12 dark:bg-slate-900"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="mb-16 text-center text-4xl font-bold dark:text-white md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {teamData.title}
        </motion.h1>

        <div className="space-y-16">
          {teamData.members.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-8 md:flex-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants(index)}
            >
              {/* Profile Image Section */}
              <div className="w-full overflow-hidden rounded-md bg-slate-200 dark:bg-slate-800 md:w-64">
                <div className="p-4">
                  <motion.img
                    src={index === 0 ? CEOImage : CTOImage}
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
                      className="link boxshadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t("team.viewPortfolio")}
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
                  {t("team.descriptionTitle")}
                </h4>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {member.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamListStatic;
