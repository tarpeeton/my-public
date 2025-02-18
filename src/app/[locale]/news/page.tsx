"use client";

import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import "./news.css";

const newsData = [
  {
    author: "Candice Wu",
    date: "15 Jan 2022",
    title: "Бесплатные лекарства для пациентов в Ташкенте",
    description:
      "В 2025 году в Ташкенте начнёт активно внедряться программа реимбурсации, направленная на обеспечение пациентов с некоторыми ...",
    image: "/news1.jpg",
  },
  {
    author: "Candice Wu",
    date: "18 Jan 2024",
    title: "Успешная уникальная операция в Национальном медицинском центре",
    description:
      "Национальный медицинский центр объявил об успешном проведении уникальных операций, подробности которой не раскрываются.",
    image: "/news2.jpg",
  },
  {
    author: "Candice Wu",
    date: "15 Jan 2025",
    title: "Врач рассказал, почему нельзя прыгать в сугроб после бани",
    description:
      "Медицинский специалист предупреждает о рисках резкого спазма сосудов и перепада давления при резкой смене температуры после бани.",
    image: "/news3.jpg",
  },
  {
    author: "Candice Wu",
    date: "15 Jan 2025",
    title: "Врач рассказал, почему нельзя прыгать в сугроб после бани",
    description:
      "Медицинский специалист предупреждает о рисках резкого спазма сосудов и перепада давления при резкой смене температуры после бани.",
    image: "/news3.jpg",
  },
  {
    author: "Candice Wu",
    date: "18 Jan 2024",
    title: "Успешная уникальная операция в Национальном медицинском центре",
    description:
      "Национальный медицинский центр объявил об успешном проведении уникальных операций, подробности которой не раскрываются.",
    image: "/news2.jpg",
  },
  {
    author: "Candice Wu",
    date: "15 Jan 2025",
    title: "Врач рассказал, почему нельзя прыгать в сугроб после бани",
    description:
      "Медицинский специалист предупреждает о рисках резкого спазма сосудов и перепада давления при резкой смене температуры после бани.",
    image: "/news3.jpg",
  },
];

export default function NewsPage() {
  return (
    <div className="lg:px-[100px] mt-5 mb-32">
      <div className="ml-5 md:ml-0">
        <span className="bg-button-gradient mb-2 text-white px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
          Блог
        </span>
        <h2 className="text-4xl font-semibold mb-6">Новости и статьи</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="relative bg-white shadow hover:shadow-md rounded-[25px] p-6 w-full"
          >
            <span className="text-blue-600 text-sm font-semibold">
              {news.author} • {news.date}
            </span>
            <h2 className="text-xl font-semibold mt-2">{news.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{news.description}</p>
            <div className="relative w-full h-[180px] mt-4 overflow-hidden rounded-lg">
              <Image
                src={news.image}
                alt="news"
                fill
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="absolute bottom-8 right-5 bg-[#0129E3] hover:bg-[#6882f7] duration-300 p-3 rounded-full cursor-pointer flex items-center justify-center w-14 h-14">
              <HiArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
