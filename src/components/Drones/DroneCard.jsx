// DroneCard.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DroneCard = ({ id, title, description, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
    >
      <Link to={`/drones/${id}`} className="block">
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
          className="transform cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 dark:bg-slate-800"
        >
          <img src={image} alt={title} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default DroneCard;
