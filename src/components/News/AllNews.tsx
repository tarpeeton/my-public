"use client";

import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import "./news.css";
import { NEWS_DATA } from "@/constants/news";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function NewsPage() {
  const locale = useLocale() as "ru" | "uz" | "en";

  return (
    <div className="lg:px-[100px] mt-5 mb-32">
      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/news">Новости</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Статьи</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Заголовок страницы */}
      <div className="ml-5 md:ml-0">
        <span className="bg-button-gradient mb-2 text-white px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
          Блог
        </span>
        <h2 className="text-4xl font-semibold mb-6">Новости и статьи</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NEWS_DATA.map((news, index) => (
          <Link
           key={news.slug} href={`/news/${news.slug}`} 
            className="relative bg-white shadow hover:shadow-md rounded-[25px] p-6 w-full flex flex-col justify-between h-[400px]"
          >
            <span className="text-blue-600 text-sm font-semibold">
              {news.date}
            </span>

            <div className="flex-1">
              <h2 className="text-xl font-semibold mt-2">
                {news.title[locale]}
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                {news.description[locale].length > 60
                  ? news.description[locale].slice(0, 60) + "..."
                  : news.description[locale]}
              </p>
            </div>

            <div className="relative w-full h-[180px] mt-4 overflow-hidden rounded-lg">
              <Image
                src={news.option[0].img || news.option[1].img || news.option[2].img || ""}
                alt="news"
                fill
                objectFit="cover"
                className="rounded-lg inverted-card"
                quality={100}
              />
            </div>

            <div className="absolute bottom-6 right-5 bg-[#0129E3] hover:bg-[#6882f7] duration-300 p-3 rounded-full cursor-pointer flex items-center justify-center w-14 h-14">
              <HiArrowRight className="w-6 h-6 text-white" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
