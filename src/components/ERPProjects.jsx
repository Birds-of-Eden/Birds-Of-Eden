// components/ERPProjects.js
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ERPProjects() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const erpProjects = t("home.erpProjects.projects", {
    returnObjects: true,
  });

  const handleLearnMore = (id) => {
    navigate(`/projects/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="erp"
      className="bg-slate-100 text-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 py-8 xl:py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading3 text-center"
        >
          {t("home.erpProjects.title")}
        </motion.h1>

        <Splide
          options={{
            type: "fade",
            rewind: true,
            arrows: true,
            pagination: true,
            autoplay: true,
            interval: 4000,
            pauseOnHover: false,
            speed: 1000,
            resetProgress: false,
            classes: {
              arrows: "splide__arrows custom-arrows",
              arrow: "splide__arrow custom-arrow",
              prev: "splide__arrow--prev custom-prev",
              next: "splide__arrow--next custom-next",
            },
          }}
          className="erp-carousel"
        >
          {erpProjects.map((project) => {
            return (
              <SplideSlide key={project.id}>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center gap-8 p-4 md:flex-row xl:p-8"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="transition-opacity duration-500 md:w-1/2"
                  >
                    <img
                      src={`/assets/${project.image}`}
                      alt={project.title}
                      className="h-[400px] w-full rounded-lg object-contain shadow-xl"
                    />
                  </motion.div>
                  <div className="space-y-6 md:w-1/2">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl font-bold text-blue-400"
                    >
                      {project.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-lg leading-relaxed text-black dark:text-gray-300"
                    >
                      {project.description.length > 200
                        ? `${project.description.slice(0, 200)}...`
                        : project.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex gap-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="link boxshadow rounded-xl"
                        onClick={() => handleLearnMore(project.id)}
                      >
                        {t("home.ormSection.learnMore")}
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </motion.div>
  );
}

export default ERPProjects;
