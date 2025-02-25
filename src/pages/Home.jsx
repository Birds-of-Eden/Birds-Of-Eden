// Home.jsx
// import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "./../components/Banner/Banner";

import Blogs from "./../components/Blogs/Blogs";

import Service from "./../components/Service/Service";

import ClientPage from "../components/ClientPage/ClientPage";
import Banner1 from "./../assets/blog1.jpg";
import BannerDetails from "./../components/BannerDetails/BannerDetails";
import Gallery from "../components/Gallery";
import CircularGallery from "../components/CircularGallery/CircularGallery";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import DronePage from "./DronePage";

import RollingErpCard from "../components/ErpSolutions/RollingCard";

import office_1 from "../assets/office_1.png";
import office_2 from "../assets/office_2.png";
import office_3 from "../assets/office_3.png";
import ProjectGallery from "../components/ProjectGallery/ProjectGallery";
import BounceCards from "../components/BounceCards/BounceCards";
import ERPProjects from "../components/ERPProjects";
// import Top_Photo_Gallery from "../components/Top_Photo_Gallery";

const images = [office_1, office_2, office_1];
const baseTransformStyles = [
  "rotate(5deg) translate(-180px)",
  "rotate(0deg)",
  "rotate(-5deg) translate(180px)",
];

const transformStyles =
  window.innerWidth < 640
    ? baseTransformStyles.map((style) =>
        style
          .replace(/rotate\(([-0-9.]+)deg\)/g, (match, p1) => {
            const newRotation = parseFloat(p1) * 0.4; // 40% rotation for mobile
            return `rotate(${newRotation}deg)`;
          })
          .replace(/translate\(([-0-9.]+)px\)/g, (match, p1) => {
            const newTranslate = Math.max(
              Math.min(parseFloat(p1) * 0.5, 80),
              -80,
            ); // Limit translate to ±80px
            return `translate(${newTranslate}px)`;
          }),
      )
    : baseTransformStyles;

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <ERPProjects />
      {/* <RollingErpCard autoplay={true} pauseOnHover={true} /> */}
      {/* <ERPDesignComponent /> */}
      <BannerDetails reverse={true} img={Banner1} />
      {/* <BannerDetails img={Banner2} /> */}
      {/* <Banner /> */}
      <DronePage />

      <div>
        <ProjectGallery />
      </div>

      <div style={{ height: "700px", position: "relative" }} className="pb-40">
        <h1 className="heading3 pt-3">Our Partners</h1>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>

      {/* Add content for the home page */}
      {/* BounceCards Section with Title and Background */}
      <div
        style={{
          padding: "50px 0",
          textAlign: "center",
        }}
        className="bg-slate-50 dark:bg-slate-800"
      >
        <h2 className="heading2 pb-10 font-sans text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Our Team Moments
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: window.innerWidth < 640 ? "wrap" : "nowrap", // Wrap on mobile
            gap: window.innerWidth < 640 ? "5px" : "20px", // Smaller gap on mobile
          }}
        >
          <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={window.innerWidth < 640 ? 350 : 500} // Smaller width on mobile
            containerHeight={window.innerWidth < 640 ? 200 : 250} // Smaller height on mobile
            animationDelay={1}
            animationStagger={0.09}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        </div>
      </div>
      <ClientPage />
      <Blogs />
      {/* <Top_Photo_Gallery /> */}
    </div>
  );
};

export default Home;

// cisco , jonipar , mikrotik , tender , huwaie , zte , winradio , oracle , wordpress , odoo , chatgpt , deepseek ,
