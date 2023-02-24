import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Auctions from "../Layout/Auctions/Auctions";
import Banner from "../Layout/Banner/Banner";
import Brands from "../Layout/Brands/Brands";
import Category from "../Layout/Category/Category";
import Creators from "../Layout/Creators/Creators";
import Popular from "../Layout/Popular/Popular";
import Subscribe from "../Layout/Subscribe/Subscribe";
import Work from "../Layout/Work/Work";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
      miror: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <Navbar/> */}
      <Banner />
      <Brands />
      <Auctions />
      <Work />
      <Popular />
      <Category />
      <Creators />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
