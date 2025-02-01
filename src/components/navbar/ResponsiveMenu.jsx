import React, { useState } from "react";
import { FaCaretDown, FaCaretUp, FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ResponsiveMenu = ({ showMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-[60] flex h-screen w-[75%] flex-col justify-between bg-slate-950 px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}
    >
      <div className="flex-grow overflow-y-auto">
        <div className="card">
          <div className="flex items-center justify-start gap-3">
            <FaUserCircle size={50} />
            <div>
              <h1>Talat Md. Tawfiq Elahi</h1>
              <h1 className="text-sm text-slate-500">CEO</h1>
            </div>
          </div>
          <nav className="mt-5">
            <ul className="space-y-4 text-xl">
              <li className="p-2 hover:bg-violet-200">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="p-2 hover:bg-violet-200">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="p-2 hover:bg-violet-200">
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Meet Our Executive Team
                </NavLink>
              </li>
              <li className="p-2 hover:bg-violet-200">
                <NavLink
                  to="/Cloud"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li className="group relative cursor-pointer p-2 hover:bg-violet-200">
                <NavLink
                  to="#"
                  onClick={() => setIsOpen(!isOpen)}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2"
                      : "flex items-center gap-2"
                  }
                >
                  Other Services{" "}
                  {isOpen ? (
                    <FaCaretUp className="transform transition-transform duration-200" />
                  ) : (
                    <FaCaretDown className="transform transition-transform duration-200" />
                  )}
                </NavLink>
                <div
                  className={`absolute left-0 z-10 w-full max-w-md rounded-lg bg-white text-gray-800 shadow-lg transition-all duration-200 ${
                    isOpen
                      ? "max-h-96 overflow-auto"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="flex flex-col gap-4 p-4 md:flex-row">
                    <div className="w-full overflow-hidden md:w-36">
                      <img
                        className="w-full rounded-lg"
                        src="https://picsum.photos/200"
                        alt="Service"
                      />
                    </div>
                    <div>
                      <div className="mb-4">
                        <h1 className="text-lg font-semibold">Best Selling</h1>
                        <p className="text-sm text-gray-600">
                          Explore our top-rated services tailored to meet your
                          needs.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <h2 className="text-md mb-2 font-semibold text-green-300">
                            Development
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-3 cursor-pointer ring-green-300 hover:text-primary">
                              <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex h-12 items-center gap-2 text-red-500"
                                    : "flex h-12 items-center gap-2"
                                }
                              >
                                Regular Services
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/IOS"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex h-12 items-center gap-2 text-red-500"
                                    : "flex h-12 items-center gap-2"
                                }
                              >
                                iOS App Development
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="text-md mb-3 font-semibold text-green-300">
                            Other Services
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/Web"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                Web Development
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/Mobile"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex h-12 items-center gap-2 text-red-500"
                                    : "flex h-12 items-center gap-2"
                                }
                              >
                                Mobile App Development
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-2 hover:text-primary">
                <NavLink
                  to="/technologies/frontend"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Technologies
                </NavLink>
              </li>

              <li className="p-2 hover:text-primary">
                <NavLink
                  to="/products/govt"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Our Products
                </NavLink>
              </li>

              <li className="p-2 hover:bg-violet-200">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li className="p-2 hover:bg-violet-200">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li className="p-2 hover:bg-violet-200">
                <NavLink
                  to="/privacy"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li className="p-2 hover:bg-violet-200">
                <NavLink
                  to="/add-book"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Add your Comments
                </NavLink>
              </li>
              <li className="relative cursor-pointer">
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    isActive
                      ? "flex scale-105 transform items-center justify-center rounded-full bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 px-6 py-3 font-bold uppercase text-white shadow-lg transition duration-300 hover:from-blue-500 hover:via-purple-500 hover:to-pink-600"
                      : "flex transform items-center justify-center rounded-full bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 px-6 py-3 font-bold uppercase text-white shadow-lg transition duration-300 hover:from-blue-500 hover:via-purple-500 hover:to-pink-600"
                  }
                >
                  Career
                  <span className="absolute right-0 top-0 -mr-2 -mt-2 animate-bounce rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white shadow-md">
                    New!
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer mb-10 mt-8">
        <h1>© 2024 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
