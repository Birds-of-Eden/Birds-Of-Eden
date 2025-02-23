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

import BounceCards from "../components/BounceCards/BounceCards";

import office_1 from "../assets/office_1.png";
import office_2 from "../assets/office_2.png";
import office_3 from "../assets/office_3.png";
import ProjectGallery from "../components/ProjectGallery/ProjectGallery";

const images = [office_1, office_2, office_1];

const transformStyles = [
  // "rotate(5deg) translate(-350px)",
  "rotate(5deg) translate(-180px)",
  "rotate(0deg)",
  "rotate(-5deg) translate(180px)",
  // "rotate(-10deg) translate(150px)",
];

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <BannerDetails reverse={true} img={Banner1} />
      {/* <BannerDetails img={Banner2} /> */}
      {/* <Banner /> */}
      <DronePage />
      <Blogs />
      <ClientPage />

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
          backgroundColor: "#222D40", // Light gray background
          padding: "50px 0",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            // color: "#fff",
            fontSize: "2.5em",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
          className="heading2 pb-10"
        >
          Our Team Moments
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={500}
            containerHeight={250}
            animationDelay={1}
            animationStagger={0.09}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// cisco , jonipar , mikrotik , tender , huwaie , zte , winradio , oracle , wordpress , odoo , chatgpt , deepseek ,
