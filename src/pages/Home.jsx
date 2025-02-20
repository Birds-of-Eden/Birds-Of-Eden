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

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <BannerDetails reverse={true} img={Banner1} />
      {/* <BannerDetails img={Banner2} /> */}
      <Banner />
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
    </div>
  );
};

export default Home;
