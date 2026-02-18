import { useEffect, useRef, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3, HiOutlineChevronDown } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "/assets/boedl1.png";
import ResponsiveMenu from "./ResponsiveMenu";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useOnClickOutside } from "usehooks-ts";

const Navbar2 = () => {
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
      <header className="sticky left-0 top-0 z-50 w-full">
        {/* Top Bar */}
        <div className=" bg-slate-700">
          <div className="container">
            <div className="flex h-12 items-center justify-center md:justify-end">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 p-2 text-white">
                  <FaEnvelope className="h-5 w-5" />
                  <a
                    href="mailto:talat@birdsofeden.com"
                    className="hover:underline"
                  >
                    talat@birdsofeden.me
                  </a>
                </div>
                <div className="flex items-center gap-2 p-2 text-white">
                  <FaPhoneAlt className="h-5 w-5" />
                  <a href="tel:01842781978" className="hover:underline">
                    +88-01842781978
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Navigation */}
        <div className="bg-gradient-to-r from-blue-500/30 to-blue-300/40 text-black shadow-lg dark:text-white">
          <div className="container">
            <nav className="flex h-[80px] items-center justify-between gap-10 p-2">
              <div className="flex items-center">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <img
                    src={logo}
                    alt="logo"
                    className="h-full w-full object-cover"
                    // style={{
                    //   filter: theme === "dark" ? "invert(1)" : "invert(0)",
                    // }}
                  />
                </div>
                <div className="ml-3 shrink-0 text-lg sm:text-xl md:text-2xl">
                  <NavLink
                    to="/"
                    className="flex items-center tracking-wide text-white transition duration-300 ease-in-out hover:text-primary"
                  >
                    <span className="whitespace-nowrap font-bold text-primary">
                      Birds{" "}
                    </span>
                    <span className="ml-1 inline-block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                      Of Eden
                    </span>
                  </NavLink>
                </div>
              </div>

              <div className="hidden items-center overflow-x-auto md:flex">
                <ul className="flex items-center">
                  <li className="group relative cursor-pointer">
                    <NavLink
                      to=""
                      className={({ isActive }) =>
                        `flex items-center gap-1.5 whitespace-nowrap rounded-full border border-transparent px-4 py-2 hover:border-white/20 hover:bg-white/10  ${
                          isActive && ""
                        }`
                      }
                    >
                      Hover Here
                      <HiOutlineChevronDown className="h-[18px] w-[18px] transition-all duration-200 group-hover:rotate-180" />
                    </NavLink>
                    <div className="absolute left-0 z-[9999] hidden pt-2 group-hover:block">
                      <div className="rounded-xl bg-gradient-to-b from-blue-500/50 to-blue-500/20 p-2 text-black backdrop-blur-xl">
                        <ul className="flex flex-col gap-1 text-black">
                          <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                            <NavLink
                              to="/"
                              className={({ isActive }) =>
                                `flex items-center gap-2 ${
                                  isActive ? "text-amber-500" : "text-white/80"
                                }`
                              }
                            >
                              Home
                            </NavLink>
                          </li>
                          <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                            <NavLink
                              to="/about"
                              className={({ isActive }) =>
                                `flex items-center gap-2 ${
                                  isActive ? "text-amber-500" : "text-white/80 "
                                }`
                              }
                            >
                              About Us
                            </NavLink>
                          </li>
                          <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                            <NavLink
                              to="/team"
                              className={({ isActive }) =>
                                `flex items-center gap-2 ${
                                  isActive ? "text-amber-500" : "text-white/80"
                                }`
                              }
                            >
                              Meet Our Executive Team
                            </NavLink>
                          </li>
                          <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                            <NavLink
                              to="/OurService"
                              className={({ isActive }) =>
                                `flex items-center gap-2 ${
                                  isActive ? "text-amber-500" : "text-white/80"
                                }`
                              }
                            >
                              Services
                            </NavLink>
                          </li>
                          <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                            <NavLink
                              to="/contact"
                              className={({ isActive }) =>
                                `flex items-center gap-2 ${
                                  isActive ? "text-amber-500" : "text-white/80"
                                }`
                              }
                            >
                              Contact
                            </NavLink>
                          </li>
                          <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                            <NavLink
                              to="/blogs"
                              className={({ isActive }) =>
                                `flex items-center gap-2 ${
                                  isActive ? "text-amber-500" : "text-white/80"
                                }`
                              }
                            >
                              Blogs
                            </NavLink>
                          </li>
                          <li className="whitespace-nowrap rounded-lg p-2 hover:bg-white/20">
                            <NavLink
                              to="/privacy"
                              className={({ isActive }) =>
                                `flex items-center gap-2 ${
                                  isActive ? "text-amber-500" : "text-white/80"
                                }`
                              }
                            >
                              Privacy policy
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="group relative cursor-pointer">
                    <NavLink
                      to=""
                      className={({ isActive }) =>
                        `flex items-center gap-1.5 whitespace-nowrap rounded-full border border-transparent px-4 py-2 hover:border-white/20 hover:bg-white/10  ${
                          isActive && ""
                        }`
                      }
                    >
                      Services
                      <HiOutlineChevronDown className="h-[18px] w-[18px] transition-all duration-200 group-hover:rotate-180" />
                    </NavLink>
                    <div className="absolute left-0 z-[9999] hidden pt-2 group-hover:block">
                      <div className="rounded-xl bg-gradient-to-b from-blue-500/50 to-blue-500/20 p-4 text-white backdrop-blur-xl">
                        <div className="flex w-80 flex-col gap-4">
                          <div className="flex gap-4">
                            <div className="h-36 w-36 shrink-0 overflow-hidden">
                              <img
                                className="rounded-lg"
                                src="https://picsum.photos/200"
                                alt="Service"
                              />
                            </div>
                            <div className="mb-4">
                              <h1 className="text-lg font-semibold">
                                Best Selling
                              </h1>
                              <p className="text-sm text-white/70">
                                Explore our top-rated services tailored to meet
                                your needs.
                              </p>
                            </div>
                          </div>
                          <div>
                            {/* ......................... */}

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h2 className="mb-2 text-lg font-semibold">
                                  Development
                                </h2>
                                <ul className="flex flex-col gap-1">
                                  <li className="mb-2 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/OurService"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      Big Data Analysis & Dashboard Design
                                    </NavLink>
                                  </li>
                                  <li className="mb-2 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/services"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      Regular Services
                                    </NavLink>
                                  </li>
                                  <li className="cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/Web"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      Web Development
                                    </NavLink>
                                  </li>
                                  <li className="mb-3 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/IOS"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      iOS App Development
                                    </NavLink>
                                  </li>
                                  <li className="mb-3 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/Mobile"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      Mobile App Development
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h2 className="mb-2 text-lg font-semibold">
                                  Other Services
                                </h2>
                                <ul className="flex flex-col gap-1">
                                  <li className="mb-2 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/payment-gateway"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      Payment Gateway Integration (Stripe,
                                      PayPal, Razorpay)
                                    </NavLink>
                                  </li>
                                  <li className="mb-2 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/quickbook-integration"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      QuickBooks Integration
                                    </NavLink>
                                  </li>
                                  <li className="mb-2 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/zoho-integration"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      Zoho Integration
                                    </NavLink>
                                  </li>

                                  <li className="mb-2 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/orm"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      ORM
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            {/* ........................ */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="group relative cursor-pointer">
                    <NavLink
                      to="/technologies/frontend"
                      className={({ isActive }) =>
                        `flex items-center gap-1.5 whitespace-nowrap rounded-full border border-transparent px-4 py-2 hover:border-white/20 hover:bg-white/10  ${
                          isActive && ""
                        }`
                      }
                    >
                      Technologies
                      <HiOutlineChevronDown className="h-[18px] w-[18px] transition-all duration-200 group-hover:rotate-180" />
                    </NavLink>
                    <div className="absolute left-0 z-[9999] hidden pt-2 group-hover:block">
                      <div className="rounded-xl bg-gradient-to-b from-blue-500/50 to-blue-500/20 p-4 text-white backdrop-blur-xl">
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-4">
                            <div className="h-36 w-36 shrink-0 overflow-hidden">
                              <img
                                className="rounded-lg"
                                src="https://picsum.photos/200"
                                alt="Service"
                              />
                            </div>
                            <div className="mb-4">
                              <h1 className="whitespace-nowrap text-lg font-semibold">
                                Our Technologies
                              </h1>
                              <p className="text-sm text-white/70">
                                Explore our top-rated services tailored to meet
                                your needs.
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h2 className="text-md mb-2 font-semibold">
                                  Technologies
                                </h2>
                                <ul className="flex flex-col gap-1">
                                  <li className="mb-3 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/technologies/frontend"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      Frontend Technology
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h2 className="text-md mb-2 font-semibold">
                                  Other
                                </h2>
                                <ul className="flex flex-col gap-1">
                                  <li className="mb-3 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/technologies/backend"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      Backend Technology
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="group relative cursor-pointer">
                    <NavLink
                      to="/products/govt"
                      className={({ isActive }) =>
                        `flex items-center gap-1.5 whitespace-nowrap rounded-full border border-transparent px-4 py-2 hover:border-white/20 hover:bg-white/10  ${
                          isActive && ""
                        }`
                      }
                    >
                      Our Products
                      <HiOutlineChevronDown className="h-[18px] w-[18px] transition-all duration-200 group-hover:rotate-180" />
                    </NavLink>
                    <div className="absolute left-0 z-[9999] hidden pt-2 group-hover:block">
                      <div className="rounded-xl bg-gradient-to-b from-blue-500/50 to-blue-500/20 p-4 text-white backdrop-blur-xl">
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-4">
                            <div className="h-36 w-36 shrink-0 overflow-hidden">
                              <img
                                className="rounded-lg"
                                src="https://picsum.photos/200"
                                alt="Service"
                              />
                            </div>
                            <div className="mb-4">
                              <h1 className="whitespace-nowrap text-lg font-semibold">
                                Our Products
                              </h1>
                              <p className="text-sm text-white/70">
                                Explore our top-rated services tailored to meet
                                your needs.
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h2 className="text-md mb-2 font-semibold">
                                  Products
                                </h2>
                                <ul className="flex flex-col gap-1">
                                  <li className="mb-3 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/products/govt"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      Govt
                                    </NavLink>
                                  </li>
                                  <li className="mb-3 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/products/seo"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      SEO Agencies
                                    </NavLink>
                                  </li>
                                  <li className="cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/products/financial"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      Financial
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h2 className="text-md mb-2 font-semibold">
                                  Other Products
                                </h2>
                                <ul className="flex flex-col gap-1">
                                  <li className="mb-3 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/products/corporate"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      Corporate
                                    </NavLink>
                                  </li>
                                  <li className="mb-3 cursor-pointer hover:text-primary">
                                    <NavLink
                                      to="/products/ecommerce"
                                      className={({ isActive }) =>
                                        `flex items-center gap-2 ${
                                          isActive
                                            ? "text-amber-500"
                                            : "text-white/70 hover:text-white"
                                        }`
                                      }
                                    >
                                      Ecommerce
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="cursor-pointer">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `flex items-center gap-1.5 whitespace-nowrap rounded-full border border-transparent px-4 py-2 hover:border-white/20 hover:bg-white/10  ${
                          isActive && ""
                        }`
                      }
                    >
                      Contact
                    </NavLink>
                  </li>

                  <li className="cursor-pointer">
                    <NavLink
                      to="/hardware"
                      className={({ isActive }) =>
                        `flex items-center gap-1.5 whitespace-nowrap rounded-full border border-transparent px-4 py-2 hover:border-white/20 hover:bg-white/10  ${
                          isActive && ""
                        }`
                      }
                    >
                      Hardware
                    </NavLink>
                  </li>

                  <li className="cursor-pointer">
                    <NavLink
                      to="/drones"
                      className={({ isActive }) =>
                        `flex items-center gap-1.5 whitespace-nowrap rounded-full border border-transparent px-4 py-2 hover:border-white/20 hover:bg-white/10  ${
                          isActive && ""
                        }`
                      }
                    >
                      Drones
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-5 md:flex">
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
                  <NavLink
                    to="/career"
                    className={({ isActive }) => `link boxshadow`}
                  >
                    career
                    {/* <span className="absolute right-0 top-0 -mr-2 -mt-2 animate-bounce rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                    New!
                  </span> */}
                  </NavLink>

                  {/* <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 py-1.5 pl-2 pr-4 shadow-lg">
                  <div className="rounded-full bg-primary p-2 text-lg text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-primary/90">
                    <FaPhoneAlt className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm leading-none text-white">
                      Call us on
                    </p>
                    <p className="text-lg font-semibold leading-none text-white">
                      <a href="tel:01842781978" className="hover:underline">
                        +88-01842781978
                      </a>
                    </p>
                  </div>
                </div> */}

                  {/* <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    `font-md  relative flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-sm uppercase text-white transition duration-300 hover:from-blue-700 hover:to-blue-900`
                  }
                >
                  Log In
                </NavLink> */}
                </div>
                <div className="flex items-center gap-4 md:hidden">
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
            </nav>
          </div>
        </div>
      </header>
      <ResponsiveMenu showMenu={showMenu} ref={mobileRef} />
    </>
  );
};

export default Navbar2;
