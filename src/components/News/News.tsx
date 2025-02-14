"use client";

import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import "./news.css";
import { Button } from "../ui/button";

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
    date: "15 Jan 2022",
    title: "Бесплатные лекарства для пациентов в Ташкенте",
    description:
      "В 2025 году в Ташкенте начнёт активно внедряться программа реимбурсации, направленная на обеспечение пациентов с некоторыми ...",
    image: "/news2.jpg",
  },
  {
    author: "Candice Wu",
    date: "15 Jan 2022",
    title: "Бесплатные лекарства для пациентов в Ташкенте",
    description:
      "В 2025 году в Ташкенте начнёт активно внедряться программа реимбурсации, направленная на обеспечение пациентов с некоторыми ...",
    image: "/news3.jpg",
  },
];

export default function NewsCard() {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-24 mb-15">
      {newsData.map((news, index) => (
        <div
          key={index}
          className="relative bg-white shadow hover:shadow-md rounded-[25px] p-6 w-[420px]"
        >
          {/* Автор и дата */}
          <span className="text-blue-600 text-sm font-semibold">
            {news.author} • {news.date}
          </span>

          {/* Заголовок */}
          <h2 className="text-xl font-semibold mt-2">{news.title}</h2>

          {/* Описание */}
          <p className="text-gray-500 text-sm mt-2">{news.description}</p>

          {/* Изображение */}
          <div className="relative w-full h-[180px] mt-4 overflow-hidden rounded-lg z-10  inverted-card ">
            <Image
              src={news.image}
              alt="news"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Кнопка со стрелкой */}
          <div className="absolute bottom-8 right-7 bg-[#0129E3] hover:bg-[#6882f7] duration-300 p-3 rounded-full cursor-pointer flex items-center justify-center w-14 h-14 z-20">
            <HiArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <Button
          id="view-all-doctors"
          className="bg-blue-600 text-white px-7 py-6 rounded-full mb-[40px]"
        >
          Посмотреть новости
        </Button>
      </div>
    </div>
  );
}
