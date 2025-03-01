import React from "react";
import Banner from "./Banner";
import Filter from "./Filter";
import Doctor from "./Doctor";
import Discount from "@/components/Discount/Discount";
import ClinicAdvantages from "@/components/ClinicAdvantages/ClinicAdvantages";
import LogoAnim from "../LogosAnimation/LogoAnim";
import NewsCard from "../News/News";

const DoctorMain = () => {
  return (
    <div className="px-4 md:px-10 py-4">
      <Banner />
      <Filter />
      <Doctor />
      <div className="mt-24">
        <ClinicAdvantages />
      </div>
      <div className="mt-24">
        <Discount />
      </div>
      <div className="mt-32">
      <NewsCard />
      </div>
      <div className="mb-32 mt-24">
        <LogoAnim />
      </div>
    </div>
  );
};

export default DoctorMain;
