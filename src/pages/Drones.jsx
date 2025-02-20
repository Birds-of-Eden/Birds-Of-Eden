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
              type: "loop", // Enables infinite loop
              perPage: 3, // Shows 3 clients at a time
              gap: 24, // Space between slides
              autoplay: true, // Enables automatic sliding
              interval: 3000, // Changes slide every 3 seconds
              pauseOnHover: true, // Stops auto-slide on hover
              arrows: false, // Shows navigation arrows
              pagination: true, // Shows pagination dots
              breakpoints: {
                1024: { perPage: 2 }, // Show 2 items on medium screens
                640: { perPage: 1 }, // Show 1 item on small screens
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
