// Home.jsx
// import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "./../components/Banner/Banner";

import Blogs from "./../components/Blogs/Blogs";

import Service from "./../components/Service/Service";

import ClientPage from "../components/ClientPage/ClientPage";
import Banner1 from "./../assets/blog1.jpg";
import BannerDetails from "./../components/BannerDetails/BannerDetails";

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

      {/* Add content for the home page */}
    </div>
  );
};

export default Home;
