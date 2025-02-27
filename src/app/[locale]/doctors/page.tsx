"use client";
import { useEffect , useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function DoctorsCarousel() {
  const locale = useLocale() as "ru" | "uz" | "en";
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllDoctors() {
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

    fetchAllDoctors();
  }, []);
  console.log("Doctors list:", doctors);

  return (
    <div className="lg:px-[100px] mb-32 mt-5">
      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/news">Врачи</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>

      <div className="p-5 rounded-3xl mt-10 relative">
        <span className="bg-button-gradient mb-2 text-white px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
          Врачи
        </span>
        <div className="flex justify-between items-center mb-4 relative">
          <h2 className="text-4xl font-semibold">Топ 10 врачей Ташкента</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="px-5 md:px-0 bg-white rounded-2xl overflow-hidden mb-10 shadow-sm hover:shadow-md duration-200 flex flex-col h-full"
            >
              <div className="w-full h-[300px] relative">
                <Image
                  src={doctor.photo?.url || "/fallback.jpg"}
                  alt={doctor.name}

                  fill={true}
                  className="rounded-t-2xl object-cover object-top"
                />
                <div className="absolute bottom-3 bg-white px-2 py-1 rounded-r-md flex items-center shadow-md gap-1">
                  <span className="text-blue-500 font-bold text-sm">
                    <FaStar />
                  </span>
                  {doctor.rating}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <span className="bg-[#CFFAFE] w-max px-3 py-1.5 rounded-md text-sm font-semibold">
                  {doctor.speciality?.[0]?.name || "Неизвестно"}
                </span>

                <h3 className="text-lg font-semibold mt-2">{doctor.name}</h3>
                <p className="text-sm text-gray-500 mt-1 flex-grow">
                  {doctor.morespec?.length > 50
                    ? doctor.morespec.slice(0, 50) + "..."
                    : doctor.morespec}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center text-sm mb-2">
                    <FaLocationDot className="w-5 h-5 text-blue-500 mr-1" />
                    {doctor.location || "Неизвестный адрес"}
                  </div>

                  <Link
                    href={doctor.slug ? `/doctors/${doctor.slug}` : "#"}
                    passHref
                    className="text-[#0129E3] flex items-center"
                  >
                    Подробнее <FiArrowRight className="w-4 ml-1" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
