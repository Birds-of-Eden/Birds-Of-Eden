import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

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
    <>
      <div className="hidden items-center gap-3 xl:flex">
        {languages.map((lang) => (
          <label
            key={lang.code}
            className={`flex size-6 shrink-0 cursor-pointer items-center justify-center ${
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

      {/* Mobile language selector */}
      <div className="relative xl:hidden">
        <Select onValueChange={handleLanguageChange} value={i18n.language}>
          <SelectTrigger className="min-w-max gap-2">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                <div className="flex items-center gap-2">
                  <img src={lang.img} alt={lang.title} className="size-6" />
                  {lang.title}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default LanguageSelector;
