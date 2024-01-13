import React from "react";
import Banner from "./banner";
import Content from "./content";
import Navbar from "./navbar";
import Footer from "./footer";

export default function LayOut() {
  return (
    <>
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </>
  );
}
