import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Gauge,
  Layers,
  MousePointerClick,
  Wifi,
} from "lucide-react";
import mouses from "../Data/mouses.json";

const pills = ["All", ...new Set(mouses.map((item) => item.category))];

const specsMap = [
  { icon: MousePointerClick, key: "sensor", label: "Sensor" },
  { icon: Layers, key: "dpi", label: "DPI" },
  { icon: Gauge, key: "buttons", label: "Buttons" },
  { icon: Wifi, key: "connectivity", label: "Connectivity" },
  { icon: Droplets, key: "weight", label: "Weight" },
];

const MousePage = () => {
  const [filter, setFilter] = useState("All");

  const filteredMouses = useMemo(() => {
    if (filter === "All") return mouses;
    return mouses.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <section className="container mx-auto px-6 py-10">
        <div className="mb-6 flex flex-wrap gap-3">
          {pills.map((pill) => (
            <button
              key={pill}
              onClick={() => setFilter(pill)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                filter === pill
                  ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
              }`}
            >
              {pill}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMouses.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="relative h-52 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {item.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col space-y-4 px-5 py-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {item.brand}
                  </p>
                </div>

                <div className="grid gap-3 text-xs md:grid-cols-2">
                  {specsMap.map(({ icon: Icon, key, label }) => (
                    <div
                      key={key}
                      className="flex items-start gap-2 rounded-2xl border border-gray-100 bg-gray-50 px-3 py-2 dark:border-gray-700 dark:bg-gray-900"
                    >
                      <Icon className="mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-300" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {item[key]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Gauge className="h-3 w-3 text-blue-500" />
                    Ships in 1–3 days
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MousePage;
