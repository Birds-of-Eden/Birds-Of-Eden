import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
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

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
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
        <div className="bg-zinc-800">
          <div className="container">
            <div className="flex h-12 items-center justify-center md:justify-end">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 p-2 text-white">
                  <FaEnvelope className="size-5" />
                  <a
                    href="mailto:talat@birdsofeden.com"
                    className="hover:underline"
                  >
                    talat@birdsofeden.me
                  </a>
                </div>
                <div className="flex items-center gap-2 p-2 text-white">
                  <FaPhoneAlt className="size-5" />
                  <a href="tel:01842781978" className="hover:underline">
                    +88-01842781978
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-white dark:bg-zinc-900">
          <div className="container">
            <div className="flex h-16 items-center justify-between gap-10">
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-full">
                    <img
                      src={logo}
                      alt="logo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-3 shrink-0 text-lg sm:text-xl md:text-2xl">
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
                <NavigationMenu className="hidden 2xl:flex">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Hover Here</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex flex-col p-3">
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
                                  Payment Gateway Integration (Stripe, PayPal,
                                  Razorpay)
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
                                  Backend Technology
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        Our Products
                      </NavigationMenuTrigger>
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
                        `rounded-lg px-4 py-2 tracking-wide transition-colors hover:bg-zinc-200 focus:outline-none dark:hover:bg-zinc-700/50 dark:focus:bg-zinc-700/50 dark:active:bg-zinc-700/50 ${
                          isActive ? "text-blue-500" : ""
                        }`
                      }
                    >
                      <NavLink to="/hardware">Hardware Product</NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem
                      asChild
                      className={({ isActive }) =>
                        `rounded-lg px-4 py-2 tracking-wide transition-colors hover:bg-zinc-200 focus:outline-none dark:hover:bg-zinc-700/50 dark:focus:bg-zinc-700/50 dark:active:bg-zinc-700/50 ${
                          isActive ? "text-blue-500" : ""
                        }`
                      }
                    >
                      <NavLink to="/drones">Drones</NavLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Dark mode & Others */}
              <div className="hidden items-center gap-5 2xl:flex">
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
              <div className="flex items-center gap-4 2xl:hidden">
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
