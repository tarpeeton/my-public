"use client";

import useSwiperNavigation from "@/hooks/useSwiperPrevNext";

import Image from "next/image";
import { Button } from "../ui/button";
import { MapPin, Phone } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import "swiper/css";

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
      "Скидка 15% на услуги для всех членов семьи. Услуги: Осмотр педиатра, терапевта и других специалистов.",
    location: "Центр здоровья",
    percentage: "75%",
  },
  {
    id: 3,
    image: "/disc3.jpg",
    title: "Активная жизнь",
    description:
      "Бесплатное медицинское обследование и консультация для спортсменов. Услуги: Проверка работы сердца, состояния мышц и суставов.",
    location: "Городская больница №5",
    percentage: "50%",
  },
  {
    id: 4,
    image: "/disc3.jpg",
    title: "Активная жизнь",
    description:
      "Бесплатное медицинское обследование и консультация для спортсменов. Услуги: Проверка работы сердца, состояния мышц и суставов.",
    location: "Городская больница №5",
    percentage: "50%",
  },
];






export default function DonationList() {

  const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()

   
  return (
    <div className="lg:px-[100px]">
      <div className="p-5 bg-[#F6FAFF] rounded-3xl mt-10 relative">
        {/* Тег "Акции" */}
        <span className="bg-button-gradient mb-2 text-white px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
          Акции
        </span>

        {/* Заголовок + кнопки навигации */}
        <div className="flex flex-row flex-nowrap justify-between items-center mb-4 relative">
          <h2 className="text-4xl font-semibold">Акции и предложения </h2>
          <div className="flex flex-row items-center gap-2">
            <button onClick={handlePrev} className="md:w-14  w-10 h-10  flex items-center justify-center md:h-14 rounded-full bg-[#0129E3] text-white"><FiArrowLeft /></button>
            <button onClick={handleNext}   className="md:w-14  w-10 h-10 flex items-center justify-center  md:h-14 rounded-full bg-[#0129E3] text-white"><FiArrowRight /></button>
          </div>
        </div>

        {/* Слайдер */}
        <Swiper
          spaceBetween={20}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1420: { slidesPerView: 4 },
          }}
        >
          {donationCards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="px-5 mb-5 md:px-0 bg-white rounded-2xl overflow-hidden shadow-s h-[500px] flex flex-col relative">
                {/* Процентное значение */}
                <div className="absolute top-2 right-2 z-10">
                  <span className="relative z-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-md">
                    {card.percentage}
                  </span>
                  <span className="absolute inset-0 -m-[8px] bg-white rounded-md"></span>
                </div>

                {/* Изображение */}
                <div className="relative w-full h-[250px] md:h-[280px] rounded-2xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt="donation"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Контент */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-2">
                    {card.description}
                  </p>
                  {/* Локация сразу после описания */}
                  <div className="flex items-center gap-2 text-sm text-gray-700 mt-3 mb-4">
                    <FaLocationDot className="text-[#0129E3]" size={20} />
                    {card.location}
                  </div>

                  {/* Фиксированный блок с кнопками */}
                  <div className="mt- border-t border-gray-200">
                    <div className="grid grid-cols-2">
                      <Button
                        variant="ghost"
                        className="flex items-center justify-center gap-2 text-blue-600"
                      >
                        <MapPin className="w-4 h-4" /> Адрес
                      </Button>
                      <Button className="flex items-center justify-center gap-2 bg-white text-blue-600 py-3 hover:bg-gray-100 border-l border-gray-200">
                        <Phone className="w-4 h-4" /> Забронируйте
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопка "Посмотреть все" */}
        <div className="flex justify-center mt-6">
          <Button className="bg-blue-600 text-white px-7 py-6 rounded-full">
            Посмотреть все акции
          </Button>
        </div>
      </div>
    </div>
  );
}
