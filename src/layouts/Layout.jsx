/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar/Navbar3";
import Footer from "../components/Footer/Footer";
// import Navbar2 from "../components/navbar/Navbar2";
import SplashCursor from "../components/SplashCursor/SplashCursor";
import Particles from "../components/Backgrounds/Particles/Particles";

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      {/* Particles Background - Covering entire section */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Navbar />
      <SplashCursor /> {/* Directly using Splash Cursor */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
