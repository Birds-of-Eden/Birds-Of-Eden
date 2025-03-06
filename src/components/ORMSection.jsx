import React from "react";
import { CheckCircle, MessageSquare, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ORMSection = () => {
  const { t } = useTranslation();

  const features = t("home.ormSection.features", {
    returnObjects: true,
  });

  return (
    <section className="bg-gray-100 py-16 dark:bg-slate-700">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-4xl font-bold">
          {t("home.ormSection.title")}
        </h2>
        <p className="mb-8 text-lg">{t("home.ormSection.description")}</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const icons = [
              <CheckCircle className="h-10 w-10 text-green-500" />,
              <MessageSquare className="h-10 w-10 text-blue-500" />,
              <TrendingUp className="h-10 w-10 text-purple-500" />,
            ];
            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-slate-800"
              >
                <div className="mb-4 flex justify-center">{icons[index]}</div>
                <h3 className="mb-2 text-2xl font-semibold dark:text-teal-500">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-white">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <Link to="/orm-details" className="boxshadow link">
            {t("home.ormSection.learnMore")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ORMSection;
