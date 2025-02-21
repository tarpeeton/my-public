"use client";

import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./spec.css";

const cards = [
  { title: "Кардиология", image: "/img-doc1.png" },
  { title: "Пульмонолог", image: "/img-doc2.png" },
  { title: "Эндокринолог", image: "/img-doc3.png" },
];

export default function SpecializationCards() {
  return (
    <div className="lg:px-[100px] mt-24">
      <div className="w-full px-6">
        {/* Заголовки */}
        <span className="bg-button-gradient mb-2 text-white px-1 py-1.5 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
          Специализация
        </span>
        <h2 className="text-4xl font-semibold mb-4">Популярные направления</h2>
        
        {/* Swiper для карточек */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 }, // Мобильные устройства
            768: { slidesPerView: 2 }, // Планшеты
            1024: { slidesPerView: 3 }, // Десктоп
          }}
        >
          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <div className="relative  h-[250px] bg-teal-500 p-4 flex flex-col justify-between inverted-radius overflow-hidden">
                  <h3 className="text-lg text-end font-semibold text-white absolute top-4 right-4 z-10">
                    {item.title}
                  </h3>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={400}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-110 rounded-lg"
                  />
                </div>
                <div className="absolute bottom-2 right-1 bg-[#7EC8E3] hover:bg-[#96e3ff] duration-300 p-3 rounded-full cursor-pointer flex items-center justify-center w-14 h-14 z-50">
                  <HiArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
