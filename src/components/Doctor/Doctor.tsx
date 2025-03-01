"use client";
import React, { useEffect, useState } from "react";
import BreacdCrambs from "../bread-crumb";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import DoctorCard from "./doctor-card";
import axios from "axios";

const Doctor = () => {
  const t = useTranslations("Doctor");
  const { locale } = useParams();
  const [doctors, setDoctors] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://medyordam.result-me.uz/api/doctor",
          {
            headers: {
              AcceptLanguage: locale,
            },
          }
        );
        setDoctors(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [locale]);
  console.log(doctors);

  return (
    <div className="mt-10">
      <BreacdCrambs
        data={{
          slug: `${locale}`,
          title: { ru: t("nav_home"), uz: t("nav_home"), en: t("nav_home") },
        }}
        page={{
          ru: t("bread_crumb_page"),
          uz: t("bread_crumb_page"),
          en: t("bread_crumb_page"),
        }}
      />

      <button className="bg-gradient-to-b from-[#379FF2] via-[#206BEF] to-[#0129E3] text-white p-1 px-3 rounded-[10px] mt-8 transform -rotate-12">
        {t("bread_crumb_page")}
      </button>
      <h2 className="text-[24px] md:text-[36px] xl:text-[50px] font-semibold">
        {t("top_10")}
      </h2>
      <div className="">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </div>
  );
};

export default Doctor;
