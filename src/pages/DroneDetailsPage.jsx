import { useNavigate, useParams, useLocation } from "react-router-dom";
import droneData from "../Data/droneData";

const DroneDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation(); // Get location object
  const drone = droneData.find((d) => d.id === id);

  // If drone not found
  if (!drone) {
    return (
      <div className="mt-20 text-center text-2xl text-red-600">
        Drone not found!
      </div>
    );
  }

  // Determine where to go back based on the location state
  // const goBackTo = location.state?.from === "dronePage" ? "/" :  "/drones";

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

      <button
        onClick={() => navigate(-1)} // Dynamically navigate back
        className="rounded-lg bg-blue-600 px-6 py-2 mt-5 text-white transition-colors hover:bg-blue-700"
      >
        Back
      </button>
    </div>
  );
};

export default DroneDetailsPage;
