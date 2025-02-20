import DroneCard from "../components/Drones/DroneCard";
import droneData from "../Data/droneData";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Drones = () => {
  return (
    <section className="px-6 pb-24 pt-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Explore Our Drone Collection
        </h2>
        <div>
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              gap: 24,
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
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Drones;
