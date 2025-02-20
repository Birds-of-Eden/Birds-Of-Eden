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

const images = [
  "https://picsum.photos/400/400?grayscale",
  "https://picsum.photos/500/500?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/700/700?grayscale",
  "https://picsum.photos/300/300?grayscale",
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
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
        <PhotoGallery />
      </div>

      <div style={{ height: "700px", position: "relative" }} className="pb-40">
        <h1 className="heading">Our Partners</h1>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>

      {/* Add content for the home page */}
      {/* <div>
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={500}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div> */}
    </div>
  );
};

export default Home;

// cisco , jonipar , mikrotik , tender , huwaie , zte , winradio , oracle , wordpress , odoo , chatgpt , deepseek ,
