import { Link } from "react-router-dom";
import CircleServices from "./circleServices";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const typewriterStrings = t("hero.typewriter");

  return (
    <main className="flex flex-col pt-[100px] lg:pt-0">
      <section className="container">
        <div className="grid grid-cols-1 items-center gap-4 text-white md:gap-8 lg:h-[calc(100vh-112px)] lg:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-start gap-4 text-left"
          >
            <h1 className="text-4xl transition-transform duration-500 xl:text-5xl">
              <span className="scale-10 mb-1 block transform rounded font-bold text-primary transition-transform duration-500">
                {t("hero.title")}
              </span>
              <span className="text-2xl text-black dark:text-white">
                <Typewriter
                  options={{
                    strings: typewriterStrings,
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 25,
                  }}
                />
              </span>
            </h1>
            <p className="font-light tracking-wide text-black duration-500 dark:text-white/90 xl:text-xl">
              {t("hero.description")}
            </p>
            <div className="mt-4 flex w-full justify-start gap-4">
              <Link
                to="/get-started"
                className="mb-2 rounded-md border-2 border-blue-500 bg-blue-500/50 px-4 py-2 text-lg text-black shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:bg-blue-700 dark:text-white xl:px-8 xl:py-3 xl:text-2xl"
              >
                {t("hero.getStarted")}
              </Link>
              <Link
                to="/learn-more"
                className="mb-2 rounded-md border-2 border-emerald-500 bg-emerald-500/50 px-4 py-2 text-lg text-black shadow-md transition-transform duration-300 hover:scale-105 hover:border-emerald-700 hover:bg-emerald-700 dark:text-white xl:px-8 xl:py-3 xl:text-2xl"
              >
                {t("hero.learnMore")}
              </Link>
            </div>
          </div>
          <div className="hidden md:flex">
            <CircleServices />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
