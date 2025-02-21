"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocale } from "next-intl";

export default function DoctorsCarousel() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const locale = useLocale() as "ru" | "uz" | "en";

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const response = await axios.get(
          "https://medyordam.result-me.uz/api/doctor",

          {
            headers: {
              "Accept-Language": locale,
            },
          }
        );
        setDoctors(response.data.data || []);
      } catch (err) {
        setError("Ошибка загрузки данных врачей");
      } finally {
        setLoading(false);
      }
    }
    fetchDoctors();
  }, []);
  
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="lg:px-[100px]">
      <div className="p-5 bg-[#F6FAFF] rounded-3xl mt-10 relative">
        <span className="bg-button-gradient mb-2 text-white px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
          Врачи
        </span>
        <div className="flex justify-between items-center mb-4 relative">
          <h2 className="text-4xl font-semibold">Топ 10 врачей Ташкента</h2>
          <div className="lg:absolute lg:top-0 lg:right-0 lg:flex lg:gap-2 hidden">
            <div
              id="doctors-prev"
              className="swiper-button-prev !w-10 !h-10 bg-[#6236ff] text-white rounded-full flex items-center justify-center shadow-lg"
            >
              <FiArrowLeft className="w-5 h-5" />
            </div>
            <div
              id="doctors-next"
              className="swiper-button-next !w-10 !h-10 bg-[#6236ff] text-white rounded-full flex items-center justify-center shadow-lg"
            >
              <FiArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          spaceBetween={20}
          navigation={{
            nextEl: "#doctors-next",
            prevEl: "#doctors-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1420: { slidesPerView: 4 },
          }}
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="px-5 lg:min-h-[510px] bg-white rounded-2xl overflow-hidden mb-10 shadow-sm hover:shadow-md duration-200 flex flex-col justify-between">
                <div className="w-full 2xl:h-[300px] h-[250px] relative">
                  <Image
                    src={doctor.image || "/default-doctor.jpg"}
                    alt={doctor.name}
                    fill={true}
                    quality={100}
                    className="rounded-t-2xl object-cover object-top"
                  />
                  <div className="absolute bottom-3 bg-white px-2 py-1 rounded-r-md flex items-center shadow-md gap-1">
                    <span className="text-blue-500 font-bold text-sm">
                      <FaStar />
                    </span>
                    {doctor.rating || "-"}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="bg-[#CFFAFE] w-max px-3 py-1.5 rounded-md text-sm font-semibold">
                    {doctor.specialty || "Неизвестно"}
                  </span>

                  <h3 className="text-lg font-semibold mt-2">{doctor.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 flex-grow">
                    {doctor.morespec?.length > 50
                      ? doctor.morespec.slice(0, 50) + "..."
                      : doctor.morespec}
                  </p>
                  <div className="flex items-center text-sm mt-2">
                    <FaLocationDot className="w-5 h-5 text-blue-500 mr-1" />
                    {doctor.location || "Неизвестный адрес"}
                  </div>

                  <div className="flex justify-start mt-auto">
                    <Button variant="link" className="text-[#0129E3]">
                      Подробнее <FiArrowRight className="w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-5">
          <Button className="bg-blue-600 text-white px-7 py-6 rounded-full mb-[40px]">
            Посмотреть всех
          </Button>
        </div>
      </div>
    </div>
  );
}
