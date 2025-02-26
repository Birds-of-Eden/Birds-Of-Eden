import React from "react";
import { motion } from "framer-motion";
import talatImage from "./../assets/talat_md.png";
import amenul_islam from "./../assets/amenul_islam.png";

const AboutUs = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3,
      },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const headerVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div>
      <motion.div
        className="bg-slate-100 pb-10 dark:bg-slate-800"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <motion.div
          className="relative z-[1] bg-[url('/pexels-felixmittermeier-1205301.jpg')] bg-cover bg-center bg-no-repeat py-8 text-center after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-100 after:to-blue-500/60 dark:bg-blue-500/50 dark:to-slate-800 dark:after:from-slate-800"
          variants={headerVariant}
        >
          <motion.h1
            className="relative z-[1] justify-center rounded-lg p-4 text-center text-4xl font-bold"
            variants={fadeInUpVariant}
          >
            About{" "}
            <span className="ml-1 inline-block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Birds OF EDEN
            </span>
          </motion.h1>
        </motion.div>

        <motion.div
          className="container bg-gradient-to-t from-transparent to-slate-100 dark:to-slate-800"
          variants={containerVariant}
        >
          <motion.p className="mb-8 text-lg" variants={fadeInUpVariant}>
            <span className="font-semibold">BIRDS OF EDEN</span> is a dynamic
            software company dedicated to creating innovative solutions that
            empower businesses to thrive in the digital age.
          </motion.p>

          <motion.h2
            className="mb-6 text-3xl font-bold"
            variants={fadeInUpVariant}
          >
            Our Mission
          </motion.h2>
          <motion.p className="mb-8 text-lg" variants={fadeInUpVariant}>
            At <span className="font-semibold">BIRDS OF EDEN</span>, our mission
            is to revolutionize the software industry by delivering cutting-edge
            products and services that exceed our clients' expectations.
          </motion.p>

          <motion.h2
            className="mb-6 text-3xl font-bold"
            variants={fadeInUpVariant}
          >
            Our Values
          </motion.h2>
          <motion.ul className="mb-8 text-lg" variants={containerVariant}>
            {[
              "Innovation: We constantly explore new ideas and technologies to stay ahead of the curve.",
              "Quality: We are committed to delivering high-quality solutions that add value to our clients' businesses.",
              "Integrity: We conduct business with honesty, transparency, and integrity.",
              "Customer Satisfaction: We prioritize the needs and satisfaction of our clients above all else.",
              "Collaboration: We believe in the power of collaboration and teamwork to achieve success.",
            ].map((value, index) => (
              <motion.li
                key={index}
                className="mb-4"
                variants={fadeInUpVariant}
              >
                {value}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h2
            className="mb-6 text-3xl font-bold"
            variants={fadeInUpVariant}
          >
            Core Members
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariant}
          >
            {[
              {
                name: "Talat Md. Tawfiq Elahi",
                role: "Co-Founder & CEO",
                direction: -1,
                Image: talatImage,
              },
              {
                name: "Md.Amenul Islam",
                role: "CTO",
                direction: 0,
                Image: amenul_islam,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-gray-100 p-3 ring-2 ring-purple-600"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
                initial={{
                  opacity: 0,
                  x: member.direction * 50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.2,
                  },
                }}
              >
                <img
                  src={member.Image}
                  alt={member.name}
                  className="mb-2 w-full rounded-lg"
                />
                <motion.h3
                  className="mb-2 text-2xl font-semibold text-purple-600"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-lg text-gray-700">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
