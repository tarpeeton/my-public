import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MapPin, Phone } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";

const donationCards = [
  {
    id: 1,
    image: "/disc1.jpg",
    title: "Сегодня у нас абсолютно бесплатное донорство крови",
    description:
      "Сегодня сдача крови абсолютно бесплатна, все делают опытные врачи.",
    location: "Клиника Эндомед",
    percentage: "100%",
  },
  {
    id: 2,
    image: "/disc2.jpg",
    title: "Семейная программа здоровья",
    description:
      "скидка 15% на услуги для всех членов семьи. Услуги: Осмотр педиатра, терапевта и других специалистов.",
    location: "Центр здоровья",
    percentage: "75%",
  },
  {
    id: 3,
    image: "/disc3.jpg",
    title: "Активная жизнь",
    description:
      "бесплатное медицинское обследование и консультация для спортсменов. Услуги: Проверка работы сердца, состояния мышц и суставов.",
    location: "Городская больница №5",
    percentage: "50%",
  },
];

export default function DonationList() {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-24 mb-15">
      {donationCards.map((card) => (
        <div
          key={card.id}
          className="max-w-sm bg-white rounded-2xl shadow-lg relative flex flex-col"
        >
          {/* Процентное значение */}
          <div className="absolute top-2 right-2 z-10">
            <div className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-md">
                {card.percentage}
              </span>
              <span className="absolute inset-0 -m-[8px] bg-white roun"></span>
            </div>
          </div>

          {/* Изображение */}
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
            <Image
              src={card.image}
              alt="donation"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Контент */}
          <div className="flex flex-col flex-grow p-4">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-500 mt-1 mb-2">
              {card.description}
            </p>

            {/* Локация */}
            <div className="mt-auto flex items-center gap-2 text-sm text-gray-700">
              <FaLocationDot className="text-[#0129E3]" size={20} />
              {card.location}
            </div>
          </div>

          {/* Кнопки */}
          <div className="border-t border-gray-300 ">
            <div className="grid grid-cols-2">
              <Button
                variant="ghost"
                className="flex items-center justify-center gap-2 text-blue-600 py-3"
              >
                <MapPin className="w-4 h-4" /> Адрес
              </Button>
              <Button className="flex items-center justify-center gap-2 bg-white text-blue-600 py-3 hover:bg-gray-100 border-l border-gray-300">
                <Phone className="w-4 h-4" /> Забронируйте
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
