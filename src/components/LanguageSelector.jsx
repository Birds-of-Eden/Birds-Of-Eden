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
  ];

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-3">
      {languages.map((lang) => (
        <label
          key={lang.code}
          className={`flex size-7 shrink-0 cursor-pointer items-center justify-center ${
            i18n.language === lang.code
              ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-black"
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
  );
};

export default LanguageSelector;
