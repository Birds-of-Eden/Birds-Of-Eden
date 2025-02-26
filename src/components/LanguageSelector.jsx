import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const flags = [
    {
      code: "en",
      title: "English",
      img: "/flags/United-states_flag_icon_round.png",
    },
    {
      code: "bn",
      title: "Bengali",
      img: "/flags/circle-flag-of-bangladesh.webp",
    },
    {
      code: "ar",
      title: "Arabic",
      img: "/flags/sa-circle-flag.png",
    },
    {
      code: "ja",
      title: "Japanese",
      img: "/flags/japan-flat-rounded-national-flag-icon.jpg",
    },
  ];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-3">
      {flags.map((flag) => (
        <label
          key={flag.code}
          className={`flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full ${
            language === flag.code
              ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-black"
              : ""
          }`}
          title={flag.title}
        >
          <input
            type="radio"
            name="language"
            className="appearance-none"
            checked={language === flag.code}
            onChange={() => handleLanguageChange(flag.code)}
          />
          <img
            src={flag.img}
            className="rounded-full shadow-md transition-transform hover:scale-105"
            alt={flag.title}
          />
        </label>
      ))}
    </div>
  );
}
