import { Link } from "react-router-dom";

const DroneCard = ({ id, title, description, image }) => {
  return (
    <Link to={`/drones/${id}`} className="block">
      <div className="transform cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 hover:scale-105 dark:bg-slate-800">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-white">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default DroneCard;
