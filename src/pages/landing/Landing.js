import React from "react";
import Hero from "../../component/hero/hero";
import Converter from "../../component/converter/converter";
import Bank from "../../component/Bank/bank";
import Swiper from "../../component/swiper/swiper";
import Transfer from "../../component/Transfer/transfer";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <Converter />
        <Bank />
        <Swiper/>
        <Transfer/>
      </div>
    </>
  );
};

export default Landing;
