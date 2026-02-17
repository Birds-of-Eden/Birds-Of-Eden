import {
  Home,
  Info,
  Users,
  Wrench,
  Phone,
  BookOpen,
  Shield,
  Database,
  Globe,
  Smartphone,
  CreditCard,
  BookCheck,
  Boxes,
  Building2,
  BarChart,
  Building,
  ShoppingCart,
  Cpu,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { useOnClickOutside } from "usehooks-ts";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import LanguageSelector from "../LanguageSelector";
import logo from "/assets/boedl1.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark",
  );
  const [showMenu, setShowMenu] = useState(false);
  const mobileRef = useRef(null);

  const handleClickOutside = () => {
    setShowMenu(false);
  };

  useOnClickOutside(mobileRef, handleClickOutside);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("data-mode", "light");
    }
  }, [theme, element.classList]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        {/* Top Bar */}
        <div className="bg-slate-200 text-sm  dark:bg-zinc-800">
          <div className="container flex flex-wrap items-center justify-center gap-3 py-2 md:justify-end">
            {/* Phone */}
            <div className="flex items-center gap-2 text-black dark:text-white">
              <FaEnvelope className="size-5" />
              <a
                href="mailto:talat@birdsofeden.com"
                className="hover:underline "
              >
                atservice@birdsofeden.me
              </a>
            </div>
            <div className="flex cursor-pointer items-center gap-2 text-black dark:text-white">
              <FaPhoneAlt className="size-5" />
              <a href="tel:01842781978" className="hover:underline">
                +88-01842781978
              </a>
            </div>
            {/* Language Selection */}
            <div className="flex items-center gap-1">
              <span>{t("navbar.language")}:&nbsp;</span>
              <LanguageSelector />
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-white dark:bg-zinc-900">
          <div className="container">
            <div className="flex h-16 items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="mr-4 flex items-center gap-2">
                  <div className="relative size-14 shrink-0 overflow-hidden">
                    <img
                      src={logo}
                      alt="logo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-0 shrink-0 text-lg sm:text-xl md:text-xl 2xl:ml-3 2xl:text-2xl">
                    <NavLink
                      to="/"
                      className="flex items-center tracking-wide text-white transition duration-300 ease-in-out hover:text-primary"
                    >
                      <span className="whitespace-nowrap font-bold text-primary">
                        Birds
                      </span>
                      <span className="ml-1 inline-block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                        Of Eden
                      </span>
                    </NavLink>
                  </div>
                </div>

                {/* Menu */}
                <NavigationMenu className="hidden xl:flex">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <NavLink to="/">{t("navbar.home")}</NavLink>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className=" flex flex-col p-3">
                          <NavLink
                            to="/"
                            className={({ isActive }) =>
                              `flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 ${
                                isActive
                                  ? "text-blue-500"
                                  : "text-black/80 dark:text-white/80"
                              }`
                            }
                          >
                            <Home className="h-4 w-4" />
                            {t("navbar.home")}
                          </NavLink>
                          <NavLink
                            to="/about"
                            className={({ isActive }) =>
                              `flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 ${
                                isActive
                                  ? "text-blue-500"
                                  : "text-black/80 dark:text-white/80"
                              }`
                            }
                          >
                            <Info className="h-4 w-4" />
                            {t("navbar.about")}
                          </NavLink>
                          <NavLink
                            to="/team"
                            className={({ isActive }) =>
                              `flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 ${
                                isActive
                                  ? "text-blue-500"
                                  : "text-black/80 dark:text-white/80"
                              }`
                            }
                          >
                            <Users className="h-4 w-4" />
                            {t("navbar.team")}
                          </NavLink>
                          <NavLink
                            to="/OurService"
                            className={({ isActive }) =>
                              `flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 ${
                                isActive
                                  ? "text-blue-500"
                                  : "text-black/80 dark:text-white/80"
                              }`
                            }
                          >
                            <Wrench className="h-4 w-4" />
                            {t("navbar.services")}
                          </NavLink>
                          <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                              `flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 ${
                                isActive
                                  ? "text-blue-500"
                                  : "text-black/80 dark:text-white/80"
                              }`
                            }
                          >
                            <Phone className="h-4 w-4" />
                            {t("navbar.contact")}
                          </NavLink>
                          <NavLink
                            to="/blogs"
                            className={({ isActive }) =>
                              `flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 ${
                                isActive
                                  ? "text-blue-500"
                                  : "text-black/80 dark:text-white/80"
                              }`
                            }
                          >
                            <BookOpen className="h-4 w-4" />
                            {t("navbar.blogs")}
                          </NavLink>
                          <NavLink
                            to="/privacy"
                            className={({ isActive }) =>
                              `flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 ${
                                isActive
                                  ? "text-blue-500"
                                  : "text-black/80 dark:text-white/80"
                              }`
                            }
                          >
                            <Shield className="h-4 w-4" />
                            {t("navbar.privacy")}
                          </NavLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <NavLink to="/hardware">
                          {t("navbar.hardware")}
                        </NavLink>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex w-[400px] flex-col gap-4 p-3">
                          <div className="flex gap-4">
                            <div className="h-36 w-36 shrink-0 overflow-hidden rounded bg-zinc-800">
                              <img
                                className="rounded"
                                src="https://picsum.photos/200"
                                alt="Hardware"
                              />
                            </div>
                            <div className="mb-4">
                              <h1 className="text-lg font-semibold">
                                {t("navbar.hardwareProducts")}
                              </h1>
                              <p className="text-sm text-black/70 dark:text-white/70">
                                {t("navbar.exploreHardware")}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="w-full">
                              <h2 className="mb-2 text-lg font-semibold">
                                {t("navbar.hardwareCategories")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <NavLink
                                  to="/hardware/laptop"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Cpu className="h-4 w-4" />
                                  {t("navbar.laptop")}
                                </NavLink>
                                <NavLink
                                  to="/hardware/printer"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Database className="h-4 w-4" />
                                  {t("navbar.printer")}
                                </NavLink>
                                <NavLink
                                  to="/hardware/keyboard"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Wrench className="h-4 w-4" />
                                  {t("navbar.keyboard")}
                                </NavLink>
                                <NavLink
                                  to="/hardware/mouse"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Phone className="h-4 w-4" />
                                  {t("navbar.mouse")}
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <NavLink to="OurService">
                          {t("navbar.services")}
                        </NavLink>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex w-[550px] flex-col gap-4 p-3">
                          <div className="flex gap-4">
                            <div className="h-36 w-36 shrink-0 overflow-hidden rounded bg-zinc-800">
                              <img
                                className="rounded"
                                src="https://picsum.photos/200"
                                alt="Service"
                              />
                            </div>
                            <div className="mb-4">
                              <h1 className="text-lg font-semibold">
                                {t("navbar.bestSelling")}
                              </h1>
                              <p className="text-sm text-black/70 dark:text-white/70">
                                {t("navbar.exploreServices")}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="border-r pr-4">
                              <h2 className="mb-2 text-lg font-semibold">
                                {t("navbar.development")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <NavLink
                                  to="/OurService"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Database className="h-4 w-4" />
                                  {t("navbar.bigdata")}
                                </NavLink>
                                <NavLink
                                  to="/services"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Wrench className="h-4 w-4" />
                                  {t("navbar.regularServices")}
                                </NavLink>
                                <NavLink
                                  to="/Web"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Globe className="h-4 w-4" />
                                  {t("navbar.webdev")}
                                </NavLink>
                                <NavLink
                                  to="/IOS"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Smartphone className="h-4 w-4" />
                                  {t("navbar.iosdev")}
                                </NavLink>
                                <NavLink
                                  to="/Mobile"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Smartphone className="h-4 w-4" />
                                  {t("navbar.mobiledev")}
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <h2 className="mb-2 text-lg font-semibold">
                                {t("navbar.otherServices")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <NavLink
                                  to="/payment-gateway"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <CreditCard className="h-4 w-4" />
                                  {t("navbar.payment")}
                                </NavLink>
                                <NavLink
                                  to="/quickbook-integration"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <BookCheck className="h-4 w-4" />
                                  {t("navbar.quickbooks")}
                                </NavLink>
                                <NavLink
                                  to="/zoho-integration"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Boxes className="h-4 w-4" />
                                  {t("navbar.zoho")}
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <NavLink to="/technologies/frontend">
                          {t("navbar.technologies")}
                        </NavLink>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex w-[550px] flex-col gap-4 p-3">
                          <div className="flex gap-4">
                            <div className="h-36 w-36 shrink-0 overflow-hidden rounded bg-zinc-800">
                              <img
                                className="rounded"
                                src="https://picsum.photos/200"
                                alt="Service"
                              />
                            </div>
                            <div className="mb-4">
                              <h1 className="text-lg font-semibold">
                                {t("navbar.ourTechnologies")}
                              </h1>
                              <p className="text-sm text-black/70 dark:text-white/70">
                                {t("navbar.exploreTechnologies")}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="border-r pr-4">
                              <h2 className="text-md mb-2 font-semibold">
                                {t("navbar.technologies")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <NavLink
                                  to="/technologies/frontend"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Globe className="h-4 w-4" />
                                  {t("navbar.frontend")}
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <h2 className="text-md mb-2 font-semibold">
                                {t("navbar.other")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <NavLink
                                  to="/technologies/backend"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Database className="h-4 w-4" />
                                  {t("navbar.backend")}
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <NavLink to="/products/govt">
                          {t("navbar.products")}
                        </NavLink>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex w-[600px] flex-col gap-4 p-3">
                          <div className="flex gap-4">
                            <div className="h-36 w-36 shrink-0 overflow-hidden rounded bg-zinc-800">
                              <img
                                className="rounded"
                                src="https://picsum.photos/200"
                                alt="Service"
                              />
                            </div>
                            <div className="mb-4">
                              <h1 className="text-lg font-semibold">
                                {t("navbar.ourProducts")}
                              </h1>
                              <p className="text-sm text-black/70 dark:text-white/70">
                                {t("navbar.exploreProducts")}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="border-r pr-4">
                              <h2 className="text-md mb-2 font-semibold">
                                {t("navbar.products")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <NavLink
                                  to="/products/govt"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Building2 className="h-4 w-4" />
                                  {t("navbar.govt")}
                                </NavLink>
                                <NavLink
                                  to="/products/seo"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <BarChart className="h-4 w-4" />
                                  {t("navbar.seo")}
                                </NavLink>
                                <NavLink
                                  to="/products/financial"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Building className="h-4 w-4" />
                                  {t("navbar.financial")}
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <h2 className="text-md mb-2 font-semibold">
                                {t("navbar.otherProducts")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <NavLink
                                  to="/products/corporate"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <Building2 className="h-4 w-4" />
                                  {t("navbar.corporate")}
                                </NavLink>
                                <NavLink
                                  to="/products/ecommerce"
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 hover:underline ${
                                      isActive
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500"
                                    }`
                                  }
                                >
                                  <ShoppingCart className="h-4 w-4" />
                                  {t("navbar.ecommerce")}
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem
                      asChild
                      className={({ isActive }) =>
                        `whitespace-nowrap rounded-lg px-4 py-2 tracking-wide transition-colors hover:bg-zinc-200 focus:outline-none dark:hover:bg-zinc-700/50 dark:focus:bg-zinc-700/50 dark:active:bg-zinc-700/50 ${
                          isActive ? "text-blue-500" : ""
                        }`
                      }
                    >
                      <NavLink
                        to="/drones"
                        className="flex items-center gap-2 whitespace-nowrap"
                      >
                        {t("navbar.drones")}
                      </NavLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Dark mode & Others */}
              <div className="hidden items-center gap-4 xl:flex">
                <button
                  className="flex aspect-square h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2"
                  onClick={() =>
                    theme == "light" ? setTheme("dark") : setTheme("light")
                  }
                >
                  {theme === "dark" ? (
                    <BiSolidSun className="h-6 w-6 shrink-0" />
                  ) : (
                    <BiSolidMoon className="h-6 w-6 shrink-0" />
                  )}
                </button>
                <NavLink to="/career" className={() => `link boxshadow`}>
                  {t("navbar.career")}
                </NavLink>
              </div>
              <div className="flex items-center gap-4 xl:hidden">
                {theme === "dark" ? (
                  <BiSolidSun
                    onClick={() => setTheme("light")}
                    className="cursor-pointer text-2xl"
                  />
                ) : (
                  <BiSolidMoon
                    onClick={() => setTheme("dark")}
                    className="cursor-pointer text-2xl"
                  />
                )}
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} ref={mobileRef} />
    </>
  );
};

export default Navbar;
