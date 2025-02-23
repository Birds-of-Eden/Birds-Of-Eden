// Drones.jsx
import DroneCard from "../components/Drones/DroneCard";
import droneData from "../Data/droneData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";

const Drones = () => {
  return (
    <section className="px-6 pb-24 pt-24">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="mb-4 text-center text-3xl font-bold dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
        >
          Explore Our Drone Collection
        </motion.h2>
        <div>
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              gap: 24,
              autoplay: true,
              interval: 3000,
              pauseOnHover: true,
              arrows: false,
              pagination: true,
              breakpoints: {
                1024: { perPage: 2 },
                640: { perPage: 1 },
              },
            }}
          >
            {droneData.map((drone, index) => (
              <SplideSlide key={index} className="overflow-hidden rounded-lg">
                <DroneCard
                  key={drone.id}
                  id={drone.id}
                  title={drone.title}
                  description={drone.description}
                  image={drone.image}
                  index={index} // Pass index to alternate animations
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </motion.div>
    </section>
  );
};

export default Drones;
