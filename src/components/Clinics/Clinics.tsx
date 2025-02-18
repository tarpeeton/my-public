"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaPhone } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";

const YandexMap = dynamic(() => import("@/components/YandexMap/Map"), {
  ssr: false,
});

const clinics: {
  id: number;
  name: string;
  brand: string;
  doctors: number;
  rating: number;
  reviews: number;
  phone: string;
  address: string;
  location: [number, number];
}[] = [
  {
    id: 1,
    brand: "Intermed в Ташкент",
    name: "Intermed клиник в Ташкент",
    doctors: 26,
    rating: 4.9,
    reviews: 130,
    phone: "+998 (99) 838 80 78",
    address: "ул. Ховос д. 22",
    location: [41.2995, 69.2401],
  },
  {
    id: 2,
    brand: "Intermed в Ташкент",
    name: "Intermed клиник в Ташкент",
    doctors: 26,
    rating: 4.9,
    reviews: 130,
    phone: "+998 (99) 838 80 78",
    address: "ул. Ховос д. 22",
    location: [41.2995, 69.2401],
  },
  {
    id: 3,
    brand: "Intermed в Ташкент",
    name: "Intermed клиник в Ташкент",
    doctors: 26,
    rating: 4.9,
    reviews: 130,
    phone: "+998 (99) 838 80 78",
    address: "ул. Ховос д. 22",
    location: [41.2995, 69.2401],
  },
  {
    id: 4,
    brand: "Intermed в Ташкент",
    name: "Intermed клиник в Ташкент",
    doctors: 26,
    rating: 4.9,
    reviews: 130,
    phone: "+998 (99) 838 80 78",
    address: "ул. Ховос д. 22",
    location: [41.2995, 69.2401],
  },
];

export default function ClinicsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Топ 10 клиники Ташкента</h1>
      <div className="space-y-6">
        {clinics.map((clinic) => (
          <Card key={clinic.id} className="p-6 flex flex-col lg:flex-row gap-4">
            {/* Первая колонка - Логотип и Запись на прием */}
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
              <Button className="mt-4 bg-[#0129E3] rounded-full px-10 py-1 text-sm h-12 w-44">
                Подробнее
              </Button>
            </div>

            {/* Вторая колонка - Информация о клинике */}
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
              <p className="mt-2 text-lg font-semibold">
                ⭐ {clinic.rating} / {clinic.reviews} отзывов
              </p>
            </div>

            {/* Третья колонка - Карта */}
            <div className="flex-1 h-full mt-4">
              <YandexMap location={clinic.location} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
