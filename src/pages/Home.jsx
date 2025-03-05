// Home.jsx
import React, { useRef } from "react"; // Import useRef
import Hero from "../components/Hero/Hero";
import Banner from "./../components/Banner/Banner";
import Blogs from "./../components/Blogs/Blogs";
import Service from "./../components/Service/Service";
import ClientPage from "../components/ClientPage/ClientPage";
import Banner1 from "/assets/blog1.jpg";
import BannerDetails from "./../components/BannerDetails/BannerDetails";
import Gallery from "../components/Gallery";
import CircularGallery from "../components/CircularGallery/CircularGallery";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import DronePage from "./DronePage";
import RollingErpCard from "../components/ErpSolutions/RollingCard";
import office_1 from "/assets/office_1.png";
import office_2 from "/assets/office_2.png";
import office_3 from "/assets/office_3.png";
import ProjectGallery from "../components/ProjectGallery/ProjectGallery";
import BounceCards from "../components/BounceCards/BounceCards";
import ERPProjects from "../components/ERPProjects";
import ORMSection from "../components/ORMSection";
import { useTranslation } from "react-i18next";

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
          .replace(/rotate\\(([-0-9.]+)deg\\)/g, (match, p1) => {
            const newRotation = parseFloat(p1) * 0.4;
            return `rotate(${newRotation}deg)`;
          })
          .replace(/translate\\(([-0-9.]+)px\\)/g, (match, p1) => {
            const newTranslate = Math.max(
              Math.min(parseFloat(p1) * 0.5, 80),
              -80,
            );
            return `translate(${newTranslate}px)`;
          }),
      )
    : baseTransformStyles;

const Home = () => {
  const { t } = useTranslation();
  const erpProjectsRef = useRef(null); // Create a ref for the ERPProjects section

  const scrollToERPProjects = () => {
    if (erpProjectsRef.current) {
      erpProjectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Hero scrollToERPProjects={scrollToERPProjects} />{" "}
      {/* Pass the function */}
      <Service />
      <div ref={erpProjectsRef}>
        {" "}
        {/* Attach the ref to the ERPProjects section */}
        <ERPProjects />
      </div>
      <ORMSection />
      <BannerDetails reverse={true} img={Banner1} />
      <DronePage />
      <div>
        <ProjectGallery />
      </div>
      <div style={{ height: "700px", position: "relative" }} className="pb-40">
        <h1 className="heading3 pt-3">{t("home.partners.title")}</h1>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      <div
        style={{
          padding: "50px 0",
          textAlign: "center",
        }}
        className="bg-slate-50 dark:bg-slate-800"
      >
        <h2 className="heading2 pb-10 font-sans text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {t("home.teamMoments.title")}
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: window.innerWidth < 640 ? "wrap" : "nowrap",
            gap: window.innerWidth < 640 ? "5px" : "20px",
          }}
        >
          <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={window.innerWidth < 640 ? 350 : 500}
            containerHeight={window.innerWidth < 640 ? 200 : 250}
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
    </div>
  );
};

export default Home;
