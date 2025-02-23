import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Importing technology logos
import bootstrapLogo from "./../assets/bootstrap.png";
import cakephpLogo from "./../assets/cakephp.png";
import chakraUiLogo from "./../assets/chakra_ui.png";
import djangoLogo from "./../assets/django.png";
import expressLogo from "./../assets/express.png";
import fastapiLogo from "./../assets/fastapi.png";
import goLogo from "./../assets/go.png";
import javaLogo from "./../assets/java.png";
import muiLogo from "./../assets/mui.png";
import nextjsLogo from "./../assets/next js.png";
import nodejsLogo from "./../assets/nodejs.png";
import phpLogo from "./../assets/php.png";
import pythonLogo from "./../assets/python.png";
import reactLogo from "./../assets/react.jpg";
import reduxLogo from "./../assets/redux.jpg";
import rustLogo from "./../assets/rust.png";
import springbootLogo from "./../assets/springboot.png";
import tailwindLogo from "./../assets/tailwind.jpg";

// Technology data
const technologies = [
  {
    name: "React.js",
    description:
      "We leverage the power of React.js, a JavaScript library for building user interfaces. React.js allows us to create fast, responsive, and dynamic web applications that provide an exceptional user experience.",
    image: reactLogo,
    category: "frontend",
  },
  {
    name: "Next.js",
    description:
      "Next.js is our go-to framework for building server-side rendered and statically generated applications, providing optimal performance and SEO benefits.",
    image: nextjsLogo,
    category: "frontend",
  },
  {
    name: "Redux Toolkit",
    description:
      "We use Redux Toolkit to manage complex state in our applications efficiently, making them predictable and easier to debug.",
    image: reduxLogo,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    description:
      "For styling our applications, we use Tailwind CSS, a utility-first CSS framework. Tailwind CSS enables us to rapidly build modern and sleek designs with a consistent look and feel across all our projects.",
    image: tailwindLogo,
    category: "frontend",
  },
  {
    name: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows us to build scalable network applications quickly and efficiently.",
    image: nodejsLogo,
    category: "backend",
  },
  {
    name: "Python",
    description:
      "Python is our preferred language for backend development, data analysis, and machine learning, thanks to its simplicity and powerful libraries.",
    image: pythonLogo,
    category: "backend",
  },
  {
    name: "Spring Boot",
    description:
      "Spring Boot is an open-source Java-based framework used to create a microservice. It is used to build stand-alone and production-ready spring applications.",
    image: springbootLogo,
    category: "backend",
  },
  {
    name: "Go (Golang)",
    description:
      "Go is an open-source programming language that makes it easy to build simple, reliable, and efficient software. It is particularly well-suited for distributed systems and cloud services.",
    image: goLogo,
    category: "backend",
  },
];

const Technology = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % technologies.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Animation Variants
  const containerVariants = {
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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-lg bg-white p-8 shadow-lg dark:bg-slate-800"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white"
            variants={cardVariants}
          >
            Our Technology
          </motion.h1>

          <motion.div
            className="relative mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                whileHover="hover"
                className={`flex flex-col items-center rounded-lg bg-gray-50 p-6 shadow-md transition duration-500 dark:bg-slate-700 ${
                  index === currentImage ? "scale-105" : "scale-95"
                }`}
              >
                <motion.img
                  src={tech.image}
                  alt={`${tech.name} Logo`}
                  className="mb-4 h-24 w-24 rounded-full shadow-lg"
                  animate={{
                    rotate: index === currentImage ? [0, 360] : 0,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                  {tech.name}
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
