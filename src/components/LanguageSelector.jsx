import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    {
      code: "en",
      title: "English",
      img: "/flags/us.svg",
    },
    {
      code: "bn",
      title: "Bengali",
      img: "/flags/bd.svg",
    },
    {
      code: "ar",
      title: "Arabic",
      img: "/flags/sa.svg",
    },
    {
      code: "ja",
      title: "Japanese",
      img: "/flags/jp.svg",
    },
    {
      code: "zh",
      title: "Chinese",
      img: "/public/flags/cn.svg",
    },
  ];

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleLanguageSelectChange = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="hidden items-center gap-3 xl:flex">
        {languages.map((lang) => (
          <label
            key={lang.code}
            className={`flex size-6 shrink-0 cursor-pointer items-center justify-center ${
              i18n.language === lang.code
                ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-zinc-800"
                : ""
            }`}
            title={lang.title}
          >
            <input
              type="radio"
              name="language"
              className="appearance-none"
              checked={i18n.language === lang.code}
              onChange={() => handleLanguageChange(lang.code)}
            />
            <img
              src={lang.img}
              className="shadow-md transition-transform hover:scale-105"
              alt={lang.title}
            />
          </label>
        ))}
      </div>

      {/* Mobile language selector */}
      <div className="relative xl:hidden">
        <select
          className="focus:outline-none dark:bg-zinc-800"
          value={i18n.language}
          onChange={handleLanguageSelectChange}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default LanguageSelector;
