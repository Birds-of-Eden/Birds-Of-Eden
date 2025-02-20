import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/navbar/Navbar2";
import SplashCursor from "../components/SplashCursor/SplashCursor";

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <SplashCursor /> {/* Directly using Splash Cursor */}
      <Navbar2 />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
