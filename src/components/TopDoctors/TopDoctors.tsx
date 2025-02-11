"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const doctors = [
  {
    name: "Лариса Юрьевна",
    specialty: "Педиатр",
    rating: "4.9",
    morespec: "Педиатр с многолетним стажем Педиатр с многолетним стажем",
    location: "Ташкент, улица Шаблонка, д.10",
    image: "/doc1.jpg",
  },
  {
    name: "Сабина Камоловна",
    specialty: "Педиатр",
    rating: "4.9",
    morespec: "Педиатр с многолетним стажем Педиатр с многолетним стажем",
    location: "Ташкент, улица Шаблонка, д.10",
    image: "/doc2.jpg",
  },
  {
    name: "Алекс Азимович",
    specialty: "Хирург",
    rating: "4.9",
    morespec: "Педиатр с многолетним стажем Педиатр с многолетним стажем",
    location: "Ташкент, улица Шаблонка, д.10",
    image: "/doc3.jpg",
  },
  {
    name: "Лобар Садихахмуд",
    specialty: "Стоматолог",
    rating: "4.9",
    morespec: "Педиатр с многолетним стажем Педиатр с многолетним стажем",
    location: "Ташкент, улица Шаблонка, д.10",
    image: "/doc4.jpg",
  },
];

export default function DoctorsCarousel() {
  return (
    <div className="px-16">
      <div className="p-6 bg-[#F6FAFF] rounded-3xl mt-10 px-[60px]">
        {/* Заголовок и кнопки навигации */}
        <span className="bg-button-gradient text-white mb-2 px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-12">
          Врачи
        </span>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-semibold">Топ 10 врачей Ташкента</h2>
          <div className="flex gap-2">
            <Button className="swiper-button-prev !static" variant="ghost">
              <FiArrowLeft className="w-5 h-5" />
            </Button>
            <Button className="swiper-button-next !static" variant="ghost">
              <FiArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Swiper с карточками врачей */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={3.5}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="relative"
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[300px] mb-10">
                <div className="w-full h-[300px] relative">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl object-top"
                  />
                  <div className="absolute bottom-3 bg-white px-2 py-1 rounded-r-md flex items-center shadow-md gap-1">
                    <span className="text-blue-500 font-bold text-sm">
                      <FaStar />{" "}
                    </span>
                    {doctor.rating}
                  </div>
                </div>
                <div className="p-4">
                  <span className="bg-[#CFFAFE] px-3 py-1.5 rounded-md text-sm font-semibold">
                    {doctor.specialty}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">{doctor.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {doctor.morespec}
                  </p>
                  <div className="flex items-center text-sm mt-2">
                    <FaLocationDot className="w-5 h-5 text-blue-500 mr-1" />
                    {doctor.location}
                  </div>
                  <Button
                    variant="link"
                    className="text-[#0129E3] flex items-center mt-2"
                  >
                    Подробнее <FiArrowRight className="w-4" />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопка "Посмотреть всех" */}
        <div className="flex justify-center">
          <Button className="bg-blue-600 text-white px-7 py-6 rounded-full mb-[40px]">
            Посмотреть всех
          </Button>
        </div>
      </div>
    </div>
  );
}
