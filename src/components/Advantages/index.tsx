"use client";

import Image from "next/image";
import React, { useState } from "react";

const benefits = [
  {
    title: "Единственная платформа",
    description:
      "Это единственная платформа в Ташкенте, удобная для поиска клиник и врачей.",
    icon: "/contact-form.svg",
    isPrimary: true,
  },
  {
    title: "Доступ к пациентам",
    description:
      "Пациенты смогут находить вас через платформу и записываться на прием.",
    icon: "/contact-form-1.svg",
  },
  {
    title: "Публикация услуг",
    description: "Размещайте список ваших услуг с ценами или без них.",
    icon: "/contact-form-2.svg",
  },
  {
    title: "Гибкость управления",
    description:
      "Легко редактируйте информацию о себе и клинике в любое время.",
    icon: "/contact-form-3.svg",
  },
  {
    title: "Геолокация",
    description: "Пациенты могут искать ближайших врачей и записываться.",
    icon: "/contact-form-4.svg",
  },
  {
    title: "Абсолютно бесплатно",
    description: "Регистрация и использование платформы не требуют оплаты.",
    icon: "/contact-form-5.svg",
  },
];

const BenefitsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  console.log(hoveredIndex);

  return (
    <section className="px-4 py-12 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Преимущества платформы
      </h2>
      <div className="flex flex-wrap justify-center gap-x-[16px] gap-y-[32px]">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`w-[446px] h-[363px] p-[40px] border border-gray-200 rounded-[20px] shadow-lg transition duration-300 flex flex-col justify-center items-center text-center ${
              benefit.isPrimary
                ? "bg-gradient-to-br from-[#12C2F2] to-[#0129E3] text-white"
                : "bg-white hover:bg-gradient-to-br hover:from-[#12C2F2] hover:to-[#0129E3] hover:text-white"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={benefit.icon}
              alt={benefit.title}
              width={64}
              height={64}
              className="mb-4"
              priority
            />

            <h3 className="text-xl font-semibold">{benefit.title}</h3>
            <p className="mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
