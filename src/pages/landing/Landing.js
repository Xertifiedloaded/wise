import React from "react";
import Hero from "../../component/hero/hero";
import Converter from "../../component/converter/converter";
import Bank from "../../component/Bank/bank";
import Swiper from "../../component/swiper/swiper";
import Transfer from "../../component/Transfer/transfer";
import Money from "../../component/money/money";
import Countries from "../../component/countries/Countries";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <Converter />
        <Bank />
        <Swiper />
        <Transfer />
        <Money />
        <Countries/>
      </div>
    </>
  );
};

export default Landing;
