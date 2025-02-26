import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();
  const stats = t("home.service.stats", {
    returnObjects: true,
  });

  return (
    <section className="container my-10 xl:mb-10 xl:mt-0">
      <div className="mx-auto grid w-full grid-cols-4 divide-x divide-slate-700 bg-white p-4 shadow-lg ring-blue-400 ring-opacity-75 ring-offset-2 ring-offset-slate-700 transition-all duration-300 hover:ring-4 dark:bg-gray-800 dark:text-white/70 md:max-w-[800px] md:p-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
              <CountUp
                end={parseInt(stat.value)}
                suffix={stat.value.replace(/[0-9]/g, "")}
                duration={2.75}
              />
            </h1>
            <h1 className="sm:text-md text-xs md:text-lg">{stat.label}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
