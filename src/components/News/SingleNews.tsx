"use client";

import Image from "next/image";


export default function NewsPage() {
  return (
    <div className="mx-auto px-2 md:p-6 rounded-2xl md:px-[100px] w-full">
      <span className="bg-button-gradient text-white mb-2 px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
        Блог
      </span>
      <div className="flex items-center space-x-3 mb-6">
        <h2 className="text-4xl font-semibold">Новости и статьи</h2>
      </div>

      <div className="text-2xl font-bold text-gray-800 mb-4 max-w-[650px] break-words">
        Международный семинар по современным подходам к лечению коморбидных
        пациентов
      </div>

      <div className="text-sm text-[#0129E3] font-semibold mb-4">
        Zandra Wu • 18 Янв 2024
      </div>

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

      <p className="text-[#454545] leading-relaxed">
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
