"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaPhone } from "react-icons/fa6";
import { Link } from "@/i18n/routing";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const YandexMap = dynamic(() => import("@/components/YandexMap/Map"), {
  ssr: false,
  loading: () => <div className="h-[300px] bg-gray-100 animate-pulse"></div>,
});

const clinics: {
  id: number;
  name: string;
  brand: string;
  doctors: number;
  rating: number;
  reviews: number;
  phone: string;
  slug: string;
  address: string;
  location: [number, number];
}[] = [
  {
    id: 1,
    brand: "Intermed в Ташкент",
    name: "'Intermed клиник' в Ташкент",
    doctors: 26,
    rating: 4.9,
    reviews: 130,
    phone: "+998 (99) 838 80 78",
    address: "ул. Ховос д. 22",
    location: [41.2795, 69.2401],
    slug: "intermed"
  },
  {
    id: 2,
    brand: "Intermed в Ташкент",
    name: "'Intermed клиник' в Ташкент",
    doctors: 26,
    rating: 4.5,
    reviews: 130,
    phone: "+998 (99) 838 80 78",
    address: "ул. Ховос д. 22",
    location: [41.2965, 69.2401],
    slug: "intermed"

  },
  {
    id: 3,
    brand: "Intermed в Ташкент",
    name: "'Intermed клиник' в Ташкент",
    doctors: 26,
    rating: 4.8,
    reviews: 130,
    phone: "+998 (99) 838 80 78",
    address: "ул. Ховос д. 22",
    location: [41.2995, 79.1411],
    slug: "intermed"

  },
  {
    id: 4,
    brand: "Intermed в Ташкент",
    name: "'Intermed клиник' в Ташкент",
    doctors: 26,
    rating: 4.4,
    reviews: 130,
    phone: "+998 (99) 838 80 78",
    address: "ул. Ховос д. 22",
    location: [41.2995, 69.1491],
    slug: "intermed"

  },
];



export const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => {
        const fullStars = Math.floor(rating);
        const fraction = rating - fullStars;
        const fillPercentage =
          i < fullStars ? 100 : i === fullStars ? fraction * 100 : 0;
        return (
          <span key={i} className="relative inline-block w-5 h-5">
            <FaStar className="text-gray-300 absolute" />
            {fillPercentage > 0 && (
              <FaStar
                className="absolute text-blue-500"
                style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
              />
            )}
          </span>
        );
      })}
      <span className="text-gray-700 font-medium ml-2">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};



export default function ClinicsPage() {
  return (
    <div className="container mx-auto p-6 lg:px-[100px]">
      <h1 className="text-3xl font-bold mb-6">Топ 10 клиники Ташкента</h1>
      <div className="space-y-6">
        {clinics.map((clinic) => (
          <Card
            key={clinic.id}
            className="p-6 flex flex-col lg:flex-row gap-4 border-none shadow-xl shadow-gray-200/20"
          >
            <div className="flex-1 flex flex-col gap-4">
              <Image
                src="/INTERMED.png"
                alt="Intermed Logo"
                width={300}
                height={150}
              />
              <p className="text-xl font-semibold">Запись на прием</p>
              <div className="flex items-center gap-3 text-center">
                <FaPhone
                  className="text-[#0129E3] bg-[#0129E31A] mt-1 rounded-full py-2 px-2"
                  size={40}
                />
                <p className="mt-2 font-semibold text-xl">{clinic.phone}</p>
              </div>
              <div className="flex-grow" />

              <Link href={`/clinick/${clinic.slug}`} className="mt-auto bg-[#0129E3] text-white flex items-center justify-center rounded-full px-10 py-1 text-sm h-12 w-44">
                Подробнее
              </Link>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-xl font-semibold">{clinic.brand}</h2>
              <p className="text-gray-600">Клиника</p>
              <p className="font-semibold">{clinic.doctors} врачей</p>
              <p className="mt-2 text-gray-700">
                Хорошая цена, скидки. Быстрое обслуживание, вежливый персонал.
                Доступность от метро, быстро добралась. Все объяснили после
                процедуры. Обратилась в клинику через интернет, вводила "УЗИ
                молочных желез…
              </p>
              <div className="mt-2 flex">
                <StarRating rating={clinic.rating} /> /
                <p className="ml-2 text-sm text-gray-500">
                  {clinic.reviews} отзывов
                </p>
              </div>
            </div>

            <div className="flex-1 h-full w-full overflow-hidden">
              <h1 className="text-lg font-semibold">{clinic.name}</h1>
              <p className="text-gray-500">{clinic.address}</p>
              <div className="flex items-center gap-2 flex-nowrap mb-5 mt-1">
                <Link
                  href={`/clinick/${clinic.slug}`}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Открыть в Яндекс картах
                </Link>
                <FaArrowRight className="text-blue-500 hover:underline font-semibold" />
              </div>

              <div className="w-full max-w-full overflow-hidden">
                <YandexMap location={clinic.location} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
