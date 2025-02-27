"use client";
import { useState , useEffect } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";

interface IBannerProps {
  total: number;
}

export interface ServiceName {
    ru: string;
    uz: string;
    en: string;
  }

export const Banner = ({ total }: IBannerProps) => {
  const locale = useLocale() as "ru" | "uz" | "en";
  const [serviceName, setServiceName] = useState<ServiceName>({
    ru: "Услуги",
    uz: "Xizmatlar",
    en: "Services",
  });

  useEffect(() => {
    const storedName = localStorage.getItem("serviceName");
    if (storedName) {
      try {
        const parsed: ServiceName = JSON.parse(storedName);
        setServiceName(parsed);
      } catch (error) {
        console.error("Ошибка при разборе serviceName из localStorage", error);
      }
    }
  }, []);


  

  return (
    <section className="flex flex-col mt-6 lg:h-[360px] lg:px-20 lg:justify-between lg:flex-row lg:items-center bg-gradient-to-tr from-[#012ae3ed] to-[#379FF2] lg:rounded-[40px] rounded-[12px]">
      <div className="text-white px-5 py-4 md:py-14 md:px-7">
        <p className="text-[24px] font-semibold md:text-[48px] lg:text-[50px]">
          {locale === "ru"
            ? `${serviceName.ru} услуги`
            : locale === "uz"
            ? `${serviceName.uz} xizmatlar`
            : `${serviceName.en} services`}
        </p>
        <p className="text-[16px] font-medium md:text-[24px] lg:text-[24px] mt-5">
          {locale === "ru"
            ? `${total} услуги в Ташкенте`
            : locale === "uz"
            ? `Toshkentda ${total} ta xizmatlar`
            : `${total} services in Tashkent`}
        </p>
      </div>
      <div className="h-full">
        <Image
          src="https://ucarecdn.com/8cc822e6-fb4d-4ee4-8348-b4a9baf42711/-/preview/494x505/"
          width={1000}
          height={800}
          quality={100}
          alt="Service Image"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};
