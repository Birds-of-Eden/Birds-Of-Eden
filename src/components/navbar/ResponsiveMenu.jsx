/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp, FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  Database,
  Wrench,
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

const ResponsiveMenu = React.forwardRef(({ showMenu }, ref) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTechnologiesOpen, setIsTechnologiesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div
      ref={ref}
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed top-0 z-[999] flex h-full w-[75%] flex-col justify-between border-r bg-slate-100 transition-all duration-200 dark:bg-slate-950 dark:text-white 2xl:hidden`}
    >
      <div className="flex-grow overflow-y-auto overflow-x-hidden p-5">
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
              {/* <li className="p-2 hover:bg-violet-200">
                <NavLink
                  to="/OurService"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Services
                </NavLink>
              </li> */}

              {/* Services Dropdown */}
              <li className="group relative cursor-pointer p-2 hover:bg-violet-200 ">
                <div
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-2"
                >
                  Services{" "}
                  {isServicesOpen ? (
                    <FaCaretUp className="transform transition-transform duration-200" />
                  ) : (
                    <FaCaretDown className="transform transition-transform duration-200" />
                  )}
                </div>
                <div
                  className={`absolute left-0 z-10 w-full max-w-md rounded-lg bg-slate-200 text-gray-800 shadow-lg transition-all duration-200 dark:bg-slate-800 ${
                    isServicesOpen
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
                        <p className="text-sm text-gray-600 dark:text-white ">
                          Explore our top-rated services tailored to meet your
                          needs.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-4 dark:text-white md:grid-cols-2 ">
                        <div>
                          <h2 className="text-md mb-2 font-semibold text-green-300">
                            Development
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/OurService"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <Database className="h-4 w-4" />
                                Big Data Analysis & Dashboard Design
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer ring-green-300 hover:text-primary">
                              <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <Wrench className="h-4 w-4" />
                                Regular Services
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/Web"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <Globe className="h-4 w-4" />
                                Web Development
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/IOS"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <Smartphone className="h-4 w-4" />
                                iOS App Development
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/Mobile"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <Smartphone className="h-4 w-4" />
                                Mobile App Development
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
                                to="/payment-gateway"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <CreditCard className="h-4 w-4" />
                                Payment Gateway Integration
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/quickbook-integration"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <BookCheck className="h-4 w-4" />
                                QuickBooks Integration
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/zoho-integration"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <Boxes className="h-4 w-4" />
                                Zoho Integration
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Technologies Dropdown */}
              <li className="group relative cursor-pointer p-2 hover:bg-violet-200">
                <div
                  onClick={() => setIsTechnologiesOpen(!isTechnologiesOpen)}
                  className="flex items-center gap-2"
                >
                  Technologies{" "}
                  {isTechnologiesOpen ? (
                    <FaCaretUp className="transform transition-transform duration-200" />
                  ) : (
                    <FaCaretDown className="transform transition-transform duration-200" />
                  )}
                </div>
                <div
                  className={`absolute left-0 z-10 w-full max-w-md rounded-lg bg-slate-200 shadow-lg transition-all duration-200 dark:bg-slate-800 dark:text-white ${
                    isTechnologiesOpen
                      ? "max-h-96 overflow-auto"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="flex flex-col gap-4 p-4 md:flex-row">
                    <div className="w-full overflow-hidden md:w-36">
                      <img
                        className="w-full rounded-lg"
                        src="https://picsum.photos/200"
                        alt="Technology"
                      />
                    </div>
                    <div>
                      <div className="mb-4">
                        <h1 className="text-lg font-semibold">
                          Our Technologies
                        </h1>
                        <p className="text-sm ">
                          Explore our top-rated services tailored to meet your
                          needs.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <h2 className="text-md mb-2 font-semibold text-green-300">
                            Technologies
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/technologies/frontend"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <Globe className="h-4 w-4" />
                                Frontend Technology
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="text-md mb-2 font-semibold text-green-300">
                            Other
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/technologies/backend"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <Database className="h-4 w-4" />
                                Backend Technology
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Products Dropdown */}
              <li className="group relative cursor-pointer p-2 hover:bg-violet-200">
                <div
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center gap-2"
                >
                  Products{" "}
                  {isProductsOpen ? (
                    <FaCaretUp className="transform transition-transform duration-200" />
                  ) : (
                    <FaCaretDown className="transform transition-transform duration-200" />
                  )}
                </div>
                <div
                  className={`absolute left-0 z-10 w-full max-w-md rounded-lg  bg-slate-200 shadow-lg transition-all duration-200 dark:bg-slate-800 dark:text-white ${
                    isProductsOpen
                      ? "max-h-96 overflow-auto"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="flex flex-col gap-4 p-4 md:flex-row">
                    <div className="w-full overflow-hidden md:w-36">
                      <img
                        className="w-full rounded-lg"
                        src="https://picsum.photos/200"
                        alt="Product"
                      />
                    </div>
                    <div>
                      <div className="mb-4">
                        <h1 className="text-lg font-semibold">Our Products</h1>
                        <p className="text-sm ">
                          Explore our top-rated services tailored to meet your
                          needs.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <h2 className="text-md mb-2 font-semibold text-green-300">
                            Products
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/products/govt"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <Building2 className="h-4 w-4" />
                                Govt
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/products/seo"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <BarChart className="h-4 w-4" />
                                SEO Agencies
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/products/financial"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <Building className="h-4 w-4" />
                                Financial
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="text-md mb-2 font-semibold text-green-300">
                            Other Products
                          </h2>
                          <ul className="flex flex-col gap-1">
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/products/corporate"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <Building2 className="h-4 w-4" />
                                Corporate
                              </NavLink>
                            </li>
                            <li className="mb-3 cursor-pointer hover:text-primary">
                              <NavLink
                                to="/products/ecommerce"
                                className={({ isActive }) =>
                                  isActive
                                    ? "flex items-center gap-2 text-red-500"
                                    : "flex items-center gap-2"
                                }
                              >
                                <ShoppingCart className="h-4 w-4" />
                                Ecommerce
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="p-2 hover:bg-violet-200">
                <NavLink
                  to="/hardware"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Hardware Products
                </NavLink>
              </li>

              <li className="p-2 hover:bg-violet-200">
                <NavLink
                  to="/drones"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 text-red-500"
                      : "flex items-center gap-2"
                  }
                >
                  Drones
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
                    isActive ? "boxshadow link" : "boxshadow link"
                  }
                >
                  Career
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer bg-slate-100 p-5 dark:bg-gray-900">
        <h1>© 2024 All Rights Reserved</h1>
      </div>
    </div>
  );
});

ResponsiveMenu.displayName = "ResponsiveMenu";
export default ResponsiveMenu;
