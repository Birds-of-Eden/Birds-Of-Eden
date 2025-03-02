import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const ClientPage = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  const clients = t("home.clientPage.clients", {
    returnObjects: true,
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Truncate text function
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  return (
    <div className="mb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="heading my-8 text-center text-3xl font-bold">
          {t("home.clientPage.title")}
        </h1>

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            gap: "2rem",
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: true,
            pagination: true,
            breakpoints: {
              1280: { perPage: 3 },
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
        >
          {clients.map((client, index) => (
            <SplideSlide key={index}>
              <div className="m-4 mb-6 h-[480px] rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800">
                <div className="flex h-full flex-col">
                  <div className="mb-4 h-20 flex-shrink-0">
                    <img
                      src={`/assets/${client.logo}`}
                      alt={client.name}
                      className="mx-auto h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-grow flex-col justify-between">
                    <div>
                      <h2 className="mb-2 text-center text-xl font-semibold text-gray-900 dark:text-gray-200 sm:text-2xl">
                        {client.name}
                      </h2>
                      <p className="text-md mb-4 text-center text-gray-700 dark:text-gray-300">
                        {truncateText(client.description, 120)}
                      </p>
                      <ul className="text-gray-700 dark:text-gray-300">
                        {client.services.map((service, idx) => (
                          <li key={idx} className="text-center text-sm">
                            • {service}
                          </li>
                        ))}
                      </ul>
                      <blockquote className="text-center text-sm italic text-gray-700 dark:text-gray-300">
                        "{truncateText(client.testimonial, 100)}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default ClientPage;
