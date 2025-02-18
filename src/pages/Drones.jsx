import DroneCard from "../components/Drones/DroneCard";
import droneData from "../Data/droneData";

const Drones = () => {
  return (
    <section className="px-6 pb-24 pt-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Explore Our Drone Collection
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {droneData.map((drone) => (
            <DroneCard
              key={drone.id}
              id={drone.id}
              title={drone.title}
              description={drone.description}
              image={drone.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Drones;
