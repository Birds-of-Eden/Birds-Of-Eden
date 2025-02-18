import { useParams } from "react-router-dom";
import droneData from "../Data/droneData";

const DroneDetailsPage = () => {
  const { id } = useParams(); // Get ID from URL
  const drone = droneData.find((d) => d.id === parseInt(id));

  if (!drone) {
    return (
      <div className="mt-20 text-center text-2xl text-red-600">
        Drone not found!
      </div>
    );
  }

  return (
    <div className="mx-auto mt-24 max-w-4xl pb-24">
      <img
        src={drone.image}
        alt={drone.title}
        className="rounded-lg object-cover shadow-md"
      />
      <h2 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">
        {drone.title}
      </h2>
      <p className="mt-2 text-gray-700 dark:text-white">{drone.description}</p>
    </div>
  );
};

export default DroneDetailsPage;
