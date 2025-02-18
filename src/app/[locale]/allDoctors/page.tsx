"use client";

import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const doctors = [
  {
    name: "Лариса Юрьевна",
    specialty: "Педиатр",
    rating: "4.9",
    morespec: "Опытный специалист в области педиатрии.",
    location: "Ташкент, улица Шаблонка, д.10",
    image: "/doc1.jpg",
  },
  {
    name: "Сабина Камоловна",
    specialty: "Педиатр",
    rating: "4.9",
    morespec: "Специализируется на детском здоровье.",
    location: "Ташкент, улица Шаблонка, д.10",
    image: "/doc2.jpg",
  },
  {
    name: "Алекс Азимович",
    specialty: "Хирург",
    rating: "4.9",
    morespec: "Высококвалифицированный хирург.",
    location: "Ташкент, улица Шаблонка, д.10",
    image: "/doc3.jpg",
  },
  {
    name: "Сабина Камоловна",
    specialty: "Педиатр",
    rating: "4.9",
    morespec: "Специализируется на детском здоровье.",
    location: "Ташкент, улица Шаблонка, д.10",
    image: "/doc2.jpg",
  },
  {
    name: "Алекс Азимович",
    specialty: "Хирург",
    rating: "4.9",
    morespec: "Высококвалифицированный хирург.",
    location: "Ташкент, улица Шаблонка, д.10",
    image: "/doc3.jpg",
  },
  {
    name: "Сабина Камоловна",
    specialty: "Педиатр",
    rating: "4.9",
    morespec: "Специализируется на детском здоровье.",
    location: "Ташкент, улица Шаблонка, д.10",
    image: "/doc2.jpg",
  },
  {
    name: "Алекс Азимович",
    specialty: "Хирург",
    rating: "4.9",
    morespec: "Высококвалифицированный хирург.",
    location: "Ташкент, улица Шаблонка, д.10",
    image: "/doc3.jpg",
  },
  {
    name: "Лобар Садихахмуд",
    specialty: "Стоматолог",
    rating: "4.9",
    morespec: "Специалист по здоровью зубов.",
    location: "Ташкент, улица Шаблонка, д.10",
    image: "/doc4.jpg",
  },
];

export default function DoctorsCarousel() {
  return (
    <div className="lg:px-[100px]  mb-32 mt-5">
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
              className="px-5 md:px-0 bg-white rounded-2xl overflow-hidden mb-10 shadow-sm hover:shadow-md duration-200"
            >
              <div className="w-full h-[300px] relative">
                <Image
                  src={doctor.image}
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
              <div className="p-4">
                <span className="bg-[#CFFAFE] px-3 py-1.5 rounded-md text-sm font-semibold">
                  {doctor.specialty}
                </span>
                <h3 className="text-lg font-semibold mt-2">{doctor.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{doctor.morespec}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
}
