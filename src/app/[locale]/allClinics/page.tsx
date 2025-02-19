import React from "react";
import Clinics from "@/components/Clinics/Clinics";
import ClinicAdvantages from "@/components/ClinicAdvantages/ClinicAdvantages";
import Discount from "@/components/Discount/Discount";
import NewsCard from "@/components/News/News";
import LogosAnimation from "@/components/LogosAnimation/LogoAnim";
function allClinics() {
  return (
    <div>
      <Clinics />
      <ClinicAdvantages />
      <Discount />
      <div className="mt-24">
        <NewsCard />
      </div>
      <div className="mb-24">
        <LogosAnimation />
        </div>
    </div>
  );
}

export default allClinics;
