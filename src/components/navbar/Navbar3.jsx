import React from "react";
import {
  Home,
  Info,
  Users,
  Wrench,
  Phone,
  BookOpen,
  Shield,
  Code,
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
  Bone as Drone,
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
import logo from "../../assets/boedl1.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

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
        <div className="bg-slate-200 dark:bg-zinc-800">
          <div className="container">
            <div className="flex h-12 items-center justify-center md:justify-end">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 p-2 text-black dark:text-white">
                  <FaEnvelope className="size-5" />
                  <a
                    href="mailto:talat@birdsofeden.com"
                    className="hover:underline "
                  >
                    talat@birdsofeden.me
                  </a>
                </div>
                <div className="flex cursor-pointer items-center gap-2 p-2 text-black dark:text-white">
                  <FaPhoneAlt className="size-5" />
                  <a href="tel:01842781978" className="hover:underline">
                    +88-01842781978
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <label
                    className={`flex size-7 cursor-pointer items-center justify-center rounded-full ${selectedLanguage === "en" ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-black" : ""}`}
                    title="English"
                  >
                    <input
                      type="radio"
                      name="language"
                      className="appearance-none"
                      checked={selectedLanguage === "en"}
                      onChange={() => handleLanguageChange("en")}
                    />
                    <img
                      src="/public/flags/United-states_flag_icon_round.png"
                      className="rounded-full"
                    />
                  </label>
                  <label
                    className={`flex size-7 cursor-pointer items-center justify-center rounded-full ${selectedLanguage === "bn" ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-black" : ""}`}
                    title="Bengali"
                  >
                    <input
                      type="radio"
                      name="language"
                      className="appearance-none"
                      checked={selectedLanguage === "bn"}
                      onChange={() => handleLanguageChange("bn")}
                    />
                    <img
                      src="/public/flags/circle-flag-of-bangladesh.webp"
                      className="rounded-full"
                    />
                  </label>
                  <label
                    className={`flex size-7 cursor-pointer items-center justify-center rounded-full ${selectedLanguage === "ar" ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-black" : ""}`}
                    title="Arabic"
                  >
                    <input
                      type="radio"
                      name="language"
                      className="appearance-none"
                      checked={selectedLanguage === "ar"}
                      onChange={() => handleLanguageChange("ar")}
                    />
                    <img
                      src="/public/flags/sa-circle-flag.png"
                      className="rounded-full"
                    />
                  </label>
                  <label
                    className={`flex size-7 cursor-pointer items-center justify-center rounded-full ${selectedLanguage === "jp" ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-black" : ""}`}
                    title="Japanese"
                  >
                    <input
                      type="radio"
                      name="language"
                      className="appearance-none"
                      checked={selectedLanguage === "jp"}
                      onChange={() => handleLanguageChange("jp")}
                    />
                    <img
                      src="/public/flags/japan-flat-rounded-national-flag-icon.jpg"
                      className="rounded-full"
                    />
                  </label>
                </div>
              </div>
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
                      <NavigationMenuTrigger>Home</NavigationMenuTrigger>
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
                            Home
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
                            About Us
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
                            Meet Our Executive Team
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
                            Services
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
                            Contact
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
                            Blogs
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
                            Privacy policy
                          </NavLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Services</NavigationMenuTrigger>
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
                                Best Selling
                              </h1>
                              <p className="text-sm text-black/70 dark:text-white/70">
                                Explore our top-rated services tailored to meet
                                your needs.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="border-r pr-4">
                              <h2 className="mb-2 text-lg font-semibold">
                                Development
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
                                  Big Data Analysis & Dashboard Design
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
                                  Regular Services
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
                                  Web Development
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
                                  iOS App Development
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
                                  Mobile App Development
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <h2 className="mb-2 text-lg font-semibold">
                                Other Services
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
                                  Payment Gateway Integration
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
                                  QuickBooks Integration
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
                                  Zoho Integration
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        Technologies
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
                                Our Technologies
                              </h1>
                              <p className="text-sm text-black/70 dark:text-white/70">
                                Explore our top-rated services tailored to meet
                                your needs.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="border-r pr-4">
                              <h2 className="text-md mb-2 font-semibold">
                                Technologies
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
                                  Frontend Technology
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <h2 className="text-md mb-2 font-semibold">
                                Other
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
                                  Backend Technology
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex w-[450px] flex-col gap-4 p-3">
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
                                Our Products
                              </h1>
                              <p className="text-sm text-black/70 dark:text-white/70">
                                Explore our top-rated services tailored to meet
                                your needs.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="border-r pr-4">
                              <h2 className="text-md mb-2 font-semibold">
                                Products
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
                                  Govt
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
                                  SEO Agencies
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
                                  Financial
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <h2 className="text-md mb-2 font-semibold">
                                Other Products
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
                                  Corporate
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
                                  Ecommerce
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
                        to="/hardware"
                        className="flex items-center gap-2 whitespace-nowrap"
                      >
                        Hardware Products
                      </NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem
                      asChild
                      className={({ isActive }) =>
                        `rounded-lg px-4 py-2 tracking-wide transition-colors hover:bg-zinc-200 focus:outline-none dark:hover:bg-zinc-700/50 dark:focus:bg-zinc-700/50 dark:active:bg-zinc-700/50 ${
                          isActive ? "text-blue-500" : ""
                        }`
                      }
                    >
                      <NavLink to="/drones" className="flex items-center gap-2">
                        Drones
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
                  career
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
