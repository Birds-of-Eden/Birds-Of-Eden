const MobileApp = () => {
  return (
    <div className="">
      <div className="mx-auto mb-16 mt-8 max-w-lg  sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <div className="transform rounded-lg bg-gray-100 p-8 shadow-md transition duration-300 hover:scale-105 dark:bg-slate-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-purple-500 lg:text-3xl">
            Mobile App Solutions
          </h2>
          <p className="mb-6 text-gray-700 dark:text-white">
            BIRDS OF EDEN offers comprehensive mobile app solutions to empower
            your business with responsive and feature-rich applications across
            platforms.
          </p>
          <ul className="mb-6 list-inside list-disc dark:text-white">
            <li className="text-gray-700 dark:text-white">
              <span className="font-bold">Platform Diversity:</span> Our
              expertise extends to developing applications for iOS, Android, and
              cross-platform environments, ensuring broad accessibility for your
              target audience.
            </li>
            <li className="text-gray-700 dark:text-white">
              <span className="font-bold">Feature-Rich Functionality:</span>{" "}
              From user authentication and push notifications to in-app
              purchases and third-party integrations, we implement a wide range
              of features to enhance user experience and engagement.
            </li>
            <li className="text-gray-700 dark:text-white">
              <span className="font-bold">Scalable Architecture:</span> We
              design scalable architectures that accommodate your app's growth
              and evolving requirements, ensuring seamless performance and
              reliability as your user base expands.
            </li>
            <li className="text-gray-700 dark:text-white">
              <span className="font-bold">Agile Development:</span> With agile
              methodologies, we prioritize collaboration and flexibility,
              allowing for rapid iteration and continuous improvement throughout
              the development process.
            </li>
          </ul>
          <p className="text-gray-700 dark:text-white">
            Partner with us to leverage the power of mobile technology and
            propel your business to new heights of success in today's digital
            landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
