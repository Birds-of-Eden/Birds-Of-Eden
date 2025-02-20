import { useEffect, useState } from "react";

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
    name: "MUI (Material-UI)",
    description:
      "MUI is a popular React UI framework that offers a comprehensive set of pre-designed components for building modern and responsive web applications.",
    image: muiLogo,
    category: "frontend",
  },
  {
    name: "Chakra UI",
    description:
      "Chakra UI is a simple, modular, and accessible component library that gives you the building blocks you need to build your React applications.",
    image: chakraUiLogo,
    category: "frontend",
  },
  {
    name: "Bootstrap",
    description:
      "Bootstrap is a powerful, mobile-first front-end framework for faster and easier web development. It includes CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
    image: bootstrapLogo,
    category: "frontend",
  },
  {
    name: "Python",
    description:
      "Python is our preferred language for backend development, data analysis, and machine learning, thanks to its simplicity and powerful libraries.",
    image: pythonLogo,
    category: "backend",
  },
  {
    name: "Django",
    description:
      "For robust and scalable backend solutions, we rely on Django, a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    image: djangoLogo,
    category: "backend",
  },
  {
    name: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows us to build scalable network applications quickly and efficiently.",
    image: nodejsLogo,
    category: "backend",
  },
  {
    name: "Express.js",
    description:
      "Express.js is a fast, unopinionated, minimalist web framework for Node.js, designed for building web applications and APIs.",
    image: expressLogo,
    category: "backend",
  },
  {
    name: "FastAPI",
    description:
      "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.",
    image: fastapiLogo,
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
    name: "Rust",
    description:
      "Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. It’s used for performance-critical applications.",
    image: rustLogo,
    category: "backend",
  },
  {
    name: "CakePHP",
    description:
      "CakePHP is an open-source web framework. It follows the model–view–controller (MVC) approach and is written in PHP, providing a robust and reliable structure for developing web applications.",
    image: cakephpLogo,
    category: "backend",
  },
  {
    name: "Java",
    description:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    image: javaLogo,
    category: "backend",
  },
  {
    name: "Go (Golang)",
    description:
      "Go is an open-source programming language that makes it easy to build simple, reliable, and efficient software. It is particularly well-suited for distributed systems and cloud services.",
    image: goLogo,
    category: "backend",
  },

  {
    name: "PHP",
    description:
      "PHP is our choice for server-side scripting, particularly in web development, due to its flexibility and wide range of frameworks and libraries.",
    image: phpLogo,
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

  const frontendTechnologies = technologies.filter(
    (tech) => tech.category === "frontend",
  );
  const backendTechnologies = technologies.filter(
    (tech) => tech.category === "backend",
  );

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
              Our Technology
            </h1>
            <p className="mb-4 text-lg text-gray-700">
              At Birds of Eden, we are at the forefront of technological
              innovation. Our software solutions are built using the latest and
              most reliable technologies to ensure high performance,
              scalability, and security.
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Frontend Technologies
            </h2>
            <div className="relative mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {frontendTechnologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`flex transform flex-col items-center transition duration-500 ease-in-out ${
                    index === currentImage ? "scale-105" : "scale-95"
                  }`}
                >
                  <img
                    src={tech.image}
                    alt={`${tech.name} Logo`}
                    className={`mb-4 h-32 w-32 transform transition duration-500 ease-in-out ${
                      index === currentImage ? "animate-spin-slow" : ""
                    }`}
                  />
                  <h2
                    className={`mb-2 transform text-2xl font-semibold text-gray-800 transition duration-500 ease-in-out ${
                      index === currentImage ? "scale-110" : ""
                    }`}
                  >
                    {tech.name}
                  </h2>
                  <p
                    className={`transform text-center text-gray-600 transition duration-500 ease-in-out ${
                      index === currentImage ? "scale-105" : ""
                    }`}
                  >
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
            <h2 className="mb-4 mt-12 text-2xl font-semibold text-gray-800">
              Backend Technologies
            </h2>
            <div className="relative mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {backendTechnologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`flex transform flex-col items-center transition duration-500 ease-in-out ${
                    index === currentImage ? "scale-105" : "scale-95"
                  }`}
                >
                  <img
                    src={tech.image}
                    alt={`${tech.name} Logo`}
                    className={`mb-4 h-32 w-32 transform transition duration-500 ease-in-out ${
                      index === currentImage ? "animate-spin-slow" : ""
                    }`}
                  />
                  <h2
                    className={`mb-2 transform text-2xl font-semibold text-gray-800 transition duration-500 ease-in-out ${
                      index === currentImage ? "scale-110" : ""
                    }`}
                  >
                    {tech.name}
                  </h2>
                  <p
                    className={`transform text-center text-gray-600 transition duration-500 ease-in-out ${
                      index === currentImage ? "scale-105" : ""
                    }`}
                  >
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Why Choose Our Technology?
              </h2>
              <ul className="list-inside list-disc text-gray-600">
                <li className="mb-2">
                  Scalability: Our solutions are designed to grow with your
                  business.
                </li>
                <li className="mb-2">
                  Performance: We prioritize speed and efficiency in our
                  applications.
                </li>
                <li className="mb-2">
                  Security: Protecting your data is our top priority.
                </li>
                <li className="mb-2">
                  Flexibility: We build adaptable solutions to meet your unique
                  needs.
                </li>
                <li className="mb-2">
                  User Experience: Intuitive and engaging interfaces for optimal
                  user satisfaction.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
