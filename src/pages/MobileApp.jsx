import { useTranslation } from "react-i18next";

const MobileApp = () => {
  const { t } = useTranslation();
  const mobileApp = t("services.mobileApp", { returnObjects: true });

  return (
    <div className="">
      <div className="mx-auto mb-16 mt-8 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <div className="transform rounded-lg bg-gray-100 p-8 shadow-md transition duration-300 hover:scale-105 dark:bg-slate-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-purple-500 lg:text-3xl">
            {mobileApp.title}
          </h2>
          <p className="mb-6 text-gray-700 dark:text-white">
            {mobileApp.header}
          </p>
          <ul className="mb-6 list-inside list-disc dark:text-white">
            {mobileApp.list.map((item, index) => (
              <li key={index} className="text-gray-700 dark:text-white">
                <span className="font-bold">{item.title}:</span>{" "}
                {item.description}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 dark:text-white">{mobileApp.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
