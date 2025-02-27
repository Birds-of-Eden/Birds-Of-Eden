import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BannerDetails = ({ reverse, img }) => {
  const { t } = useTranslation();

  const features = t("home.bannerDetails.features", {
    returnObjects: true,
  });

  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-800 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={`${reverse ? "order-1 md:order-2" : "order-2"} w-full`}
            >
              <img
                src="https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg"
                alt={t("home.bannerDetails.title")}
                className="mx-auto h-[450px] w-full rounded-md ring-2 transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "order-2 md:order-1" : "order-1"
              }`}
            >
              <h1 className="text-2xl md:text-4xl">
                {t("home.bannerDetails.title")}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("home.bannerDetails.description")}
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                  {features.map((feature, index) => (
                    <li key={index} className="font-medium">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-x-4">
                <Link to="/get-started">
                  <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
                    {t("home.bannerDetails.getStarted")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
