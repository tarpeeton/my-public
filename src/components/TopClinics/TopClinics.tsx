"use client";
import useSwiperNavigation from "@/hooks/useSwiperPrevNext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { FaStar } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronLeft , FaChevronRight } from "react-icons/fa6";

export default function ClinicsCarousel() {
  const [clinics, setClinics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale() as "ru" | "uz" | "en";
  const { swiperRef, handlePrev, handleNext } = useSwiperNavigation();

  useEffect(() => {
    async function fetchClinics() {
      try {
        const response = await axios.get(
          "https://medyordam.result-me.uz/api/clinic",
          {
            headers: {
              "Accept-Language": locale,
            },
          }
        );
        setClinics(response.data.data || []);
      } catch (err) {
        setError("Ошибка загрузки данных клиник");
      } finally {
        setLoading(false);
      }
    }
    fetchClinics();
  }, [locale]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="lg:px-[100px]">
      <div className="p-6 bg-[#F6FAFF] rounded-3xl mt-10 lg:px-[60px] relative">
        <span className="bg-button-gradient mb-2 text-white px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
          Клиники
        </span>
        <div className="flex flex-row justify-between items-center mb-4 relative">
          <h2 className="text-4xl font-semibold">Лучшие клиники Ташкента</h2>
        
          <div className="flex flex-row items-center gap-2">
          <button
              onClick={handlePrev}
              className="hover:bg-blue-500 duration-100 md:w-14 w-10 h-10 flex items-center justify-center md:h-14 rounded-full bg-[#0129E3] text-white"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="hover:bg-blue-500 duration-100 md:w-14 w-10 h-10 flex items-center justify-center md:h-14 rounded-full bg-[#0129E3] text-white"
            >
              <FaChevronRight />
            </button>
          </div>

        </div>
        <Swiper
          loop={true}
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1420: { slidesPerView: 4 },
          }}
        >
          {clinics.map((clinic) => (
            <SwiperSlide key={clinic.id}>
              <div className="bg-white rounded-2xl overflow-hidden mb-10 shadow-sm hover:shadow-md duration-200">
                <div className="w-full h-[300px] relative">
                  <Image
                    src={clinic.mainPhoto?.url || "/placeholder.jpg"}
                    alt={clinic.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl object-top"
                  />
                  <div className="absolute bottom-3 bg-white px-2 py-1 rounded-r-md flex items-center shadow-md gap-1">
                    <span className="text-blue-500 font-bold text-sm">
                      <FaStar />
                    </span>
                    {clinic.rating || "Нет рейтинга"}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mt-2">{clinic.name}</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {clinic.aboutUs?.[0]?.description?.[locale] ||
                      "Описание отсутствует"}
                  </p>

                  <div className="flex items-center text-sm mt-2">
                    <FaLocationDot className="w-5 h-5 text-blue-500 mr-1" />
                    {clinic.address?.[0]?.name?.[locale] || "Адрес не указан"}
                  </div>

                  <Link href={`/clinic/${clinic.id}`} passHref>
                    <Button
                      variant="link"
                      className="text-[#0129E3] flex items-center mt-2"
                    >
                      Подробнее <FiArrowRight className="w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center">
          <Button
            id="view-all-clinics"
            className="bg-blue-600 text-white px-7 py-6 rounded-full mb-[40px] hover:bg-blue-500"
          >
            Посмотреть все
          </Button>
        </div>
      </div>
    </section>
  );
}
