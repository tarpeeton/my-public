import React from "react";
import Header from "../Header";
import Filter from "../Filter/Filter";
import Advantages from "../Advantages/index";
import FAQ from "@/components/Faq/Faq";
import TopDoctos from "@/components/TopDoctors/TopDoctors";
import TopClinics from "@/components/TopClinics/TopClinics";
import SpecializationsCarousel from "../Specializations/Specialization";
import TelegramBanner from "../TelegramBot/TelegramBot";
import News from "../News/News";
import Discount from "../Discount/Discount";
import HowItWorks from "../HowItWorks";
import LogosAnimation from "../LogosAnimation/LogoAnim";

const Main = () => {
  return (
    <div>
      <Header />
      <Filter />
      <TopDoctos />
      <SpecializationsCarousel />
      <div className="mt-32">
        <TopClinics />
      </div>
      <div className="mt-28">
        <HowItWorks />
      </div>
      <Advantages />
      <Discount />
      <div className="mt-28">
        <FAQ />
      </div>
      <div className="mt-28">
        <News />
      </div>
      <LogosAnimation />
      <TelegramBanner />
    </div>
  );
};

export default Main;
