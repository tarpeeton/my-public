"use client";
import { useState, useEffect } from "react";
import { NEWS_DATA } from "@/constants/news";
import { useParams } from "next/navigation";
import Image from "next/image";
import { INewsData } from "@/types/news";
import { useLocale } from "next-intl";

export default function NewsPage() {
  const { slug } = useParams();
  const locale = useLocale() as "ru" | "uz" | "en";
  console.log(slug, "SLUG");

  const [data, setData] = useState<INewsData | {}>({});

  useEffect(() => {
    const dataSingle = NEWS_DATA.filter((item) => item.slug === slug);
    setData(dataSingle);
  }, [slug]);

  return (
    <div className="mx-auto px-2 md:p-6 rounded-2xl md:px-[100px] w-full">
      <span className="bg-button-gradient text-white mb-2 px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
        Блог
      </span>
      <div className="flex items-center space-x-3 mb-6">
        <h2 className="text-4xl font-semibold">Новости и статьи</h2>
      </div>

      <div className="text-2xl font-bold text-gray-800 mb-4 max-w-[650px] break-words"></div>

      <div className="text-sm text-[#0129E3] font-semibold mb-4">
        Zandra Wu • 18 Янв 2024
      </div>

      {/* OPTIONLARNI MAP QILASIZ AGAR RASM BOLSA RASMINI KORSATASIZ AGAR BOLMASA KORSTMAYSIN ?? && ORQALI ISHLANG */}

      <div></div>
      <div className="w-full h-[400px] md:h-[635px] overflow-hidden rounded-3xl">
        <Image
          src="/single-news.jpg"
          alt="Семинар по лечению коморбидных пациентов"
          width={1200}
          height={800}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      <p className="text-[#454545] leading-relaxed mb-4 mt-10">
        14 ноября 2024 года в отеле InterContinental Tashkent прошёл
        международный семинар, посвящённый современным методам ведения пациентов
        с сочетанием сахарного диабета 2 типа и хронической сердечной
        недостаточности. Организаторами выступили Министерство здравоохранения
        Республики Узбекистан, Республиканский специализированный
        научно-практический медицинский центр кардиологии и другие профильные
        учреждения.
      </p>

      <p className="text-[#454545] leading-relaxed whitespace-pre-wrap">
        14 ноября 2024 года в отеле InterContinental Tashkent прошёл
        международный семинар, посвящённый современным методам ведения пациентов
        с сочетанием сахарного диабета 2 типа и хронической сердечной
        недостаточности. Организаторами выступили Министерство здравоохранения
        Республики Узбекистан, Республиканский специализированный
        научно-практический медицинский центр кардиологии и другие профильные
        учреждения.
      </p>
    </div>
  );
}
