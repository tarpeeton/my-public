"use client";

import React, { Fragment, useState } from "react";
import { useLocale } from "next-intl";
import { Slash } from "lucide-react";
import { ServiceFilterDrawer } from "./ServiceFilterDrawer";



import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { IMultiLang } from "@/types/Doctor";
import { Link } from "@/i18n/routing";

interface IInfoNavigationProps {
  name: IMultiLang;
}

export const InfoNavigation = ({ name }: IInfoNavigationProps) => {
  const locale = useLocale() as "ru" | "uz" | "en";
  const [drawerOpen, setDrawerOpen] = useState(false);

  const breadcrumbData = [
    {
      title:
        locale === "ru" ? "Главная" : locale === "uz" ? "Bosh sahifa" : "Home",
      slug: `/${locale}`,
    },
    {
      title:
        locale === "ru" ? "Услуги" : locale === "uz" ? "Xizmatlar" : "Services",
      slug: `/${locale}/services`,
    },
  ];

  return (
    <section>
      {/* Хлебные крошки */}
      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          {breadcrumbData.map((item, index) => (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink href={item.slug}>{item.title}</BreadcrumbLink>
              </BreadcrumbItem>
              {index < breadcrumbData.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          ))}
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{name[locale]}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

<div className="lg:py-10 py-5 flex flex-row items-center w-full">
    <div  className="w-full">
        <div className="flex w-full flex-row lg:gap-3 justify-between lg:justify-normal">
        <button
        onClick={() => setDrawerOpen(true)}
        className=" py-2 bg-[#E5EAFF] h-14 hover:bg-[#0129E3]  transition-all duration-100 hover:text-white px-[20px] font-medium text-[#0129E3] rounded-[16px]"
      >
        {locale === "ru"
          ? "Фильтры"
          : locale === "uz"
            ? "Filterlar"
            : "Filters"}
      </button>
      <Link

href='/search-map'
className=" py-2 bg-[#E5EAFF] hover:bg-[#0129E3]  transition-all duration-100 hover:text-white h-14 flex items-center justify-center text-center px-[20px] font-medium text-[#0129E3] rounded-[16px]"
>
{locale === "ru"
? "На карте"
: locale === "uz"
? "Xaritada"
: "On the map"}

</Link>
        </div>
   
      
    </div>

</div>
      

      <p className="w-[120px] font-bold -rotate-[5deg] text-center py-[12px] text-white bg-gradient-to-tr from-[#012ae3ed] to-[#379FF2] rounded-[10px] flex items-center justify-center px-3 mt-4">
        {locale === "ru"
          ? "Услуги"
          : locale === "uz"
            ? "Xizmatlar"
            : "Services"}
      </p>
      <p className="text-[24px] mt-2 md:text-[36px] lg:text-[40px] text-black font-semibold">
        {locale === "ru"
          ? `${name.ru} услуги`
          : locale === "uz"
            ? `${name.uz} xizmatlar`
            : `${name.en} services`}
      </p>

      <ServiceFilterDrawer open={drawerOpen} close={() => setDrawerOpen(false)} />
    </section>
  );
};
