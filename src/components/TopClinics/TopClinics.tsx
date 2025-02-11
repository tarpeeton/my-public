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

const clinics = [
  {
    name: "Клиника Здоровье",
    specialty: "Многопрофильная",
    rating: "4.8",
    description: "Педиатр с многолетним стажем Педиатр с многолетним стажем.",
    location: "Ташкент, проспект Амира Темура, д.25",
    image: "/clinic1.jpg",
  },
  {
    name: "МедЦентр Плюс",
    specialty: "Диагностика",
    rating: "4.7",
    description: "Педиатр с многолетним стажем Педиатр с многолетним стажем.",
    location: "Ташкент, улица Мустакиллик, д.15",
    image: "/clinic2.jpg",
  },
  {
    name: "Дента Про",
    specialty: "Стоматология",
    rating: "4.9",
    description: "Педиатр с многолетним стажем Педиатр с многолетним стажем",
    location: "Ташкент, улица Навои, д.8",
    image: "/clinic3.jpg",
  },
  {
    name: "Гармония Зрения",
    specialty: "Офтальмология",
    rating: "4.8",
    description: "Педиатр с многолетним стажем Педиатр с многолетним стажем",
    location: "Ташкент, улица Фурката, д.12",
    image: "/clinic4.jpg",
  },
];

export default function ClinicsCarousel() {
  return (
    <div className="px-[100px]">
      <div className="p-6 bg-[#F6FAFF] rounded-3xl mt-10 px-[60px] relative">
        <span className="bg-button-gradient mb-2 text-white px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-12">
          Клиники
        </span>
        <div className="flex justify-between items-center mb-4 relative">
          <h2 className="text-4xl font-semibold">Лучшие клиники Ташкента</h2>

          <div className="absolute top-0 right-0 flex gap-2">
            <div className="swiper-button-prev !relative !w-10 !h-10 bg-[#6236ff] text-white rounded-full flex items-center justify-center shadow-lg">
              <FiArrowLeft className="w-5 h-5" />
            </div>
            <div className="swiper-button-next !relative !w-10 !h-10 bg-[#6236ff] text-white rounded-full flex items-center justify-center shadow-lg">
              <FiArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          className="ml-[160px]"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {clinics.map((clinic, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl overflow-hidden w-[320px] mb-10 shadow-sm hover:shadow-md duration-200">
                <div className="w-full h-[300px] relative">
                  <Image
                    src={clinic.image}
                    alt={clinic.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl object-top"
                  />
                  <div className="absolute bottom-3 bg-white px-2 py-1 rounded-r-md flex items-center shadow-md gap-1">
                    <span className="text-blue-500 font-bold text-sm">
                      <FaStar />
                    </span>
                    {clinic.rating}
                  </div>
                </div>
                <div className="p-4">
                  <span className="bg-[#CFFAFE] px-3 py-1.5 rounded-md text-sm font-semibold">
                    {clinic.specialty}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">{clinic.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{clinic.description}</p>
                  <div className="flex items-center text-sm mt-2">
                    <FaLocationDot className="w-5 h-5 text-blue-500 mr-1" />
                    {clinic.location}
                  </div>
                  <Button variant="link" className="text-[#0129E3] flex items-center mt-2">
                    Подробнее <FiArrowRight className="w-4" />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center">
          <Button className="bg-blue-600 text-white px-7 py-6 rounded-full mb-[40px]">
            Посмотреть все
          </Button>
        </div>
      </div>
    </div>
  );
}
