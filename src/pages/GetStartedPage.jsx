// src/pages/GetStartedPage.jsx

import React from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle, Mail } from "lucide-react"; // Import icons

const GetStartedPage = () => {
  const { t } = useTranslation();

  const title = t("home.bannerDetails.title");
  const description = t("home.bannerDetails.description");
  const features = t("home.bannerDetails.features", { returnObjects: true });

  return (
    <div className="min-h-screen bg-slate-100 py-20 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
      <main className="container mx-auto px-6">
        <section className="mx-auto max-w-3xl rounded-2xl bg-white p-10 shadow-xl dark:bg-gray-800">
          <h1 className="mb-6 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="mb-10 text-center text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>

          <div className="mb-12">
            <h2 className="mb-6 text-center text-3xl font-semibold text-gray-800 dark:text-teal-400">
              {t("home.bannerDetails.featuresTitle")}
            </h2>
            <ul className="list-none space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-lg text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              {t("home.bannerDetails.getStartedMessage")}
            </p>
            <a
              href="mailto:atservice@birdsofeden.me"
              className="inline-flex items-center rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white shadow-md transition-colors duration-300 hover:bg-teal-600"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t("home.bannerDetails.contactUs")}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GetStartedPage;
