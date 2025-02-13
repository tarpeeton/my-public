"use client";

import Image from "next/image";
import React from "react";

const benefits = [
  {
    title: "Единственная платформа",
    description:
      "Это единственная платформа в Ташкенте, удобная для поиска клиник и врачей.",
    icon: "/contact-form.svg",
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
  return (
    <section className="px-4 py-12 md:px-16">
      <span className="bg-button-gradient text-white mb-2 px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
        Врачи
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Преимущества платформы
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group w-full h-[450px] lg:h-[363px] p-[40px] border border-gray-200 rounded-[20px] shadow-lg transition duration-300 flex flex-col justify-center items-center text-center bg-white hover:bg-gradient-to-br hover:from-[#12C2F2] hover:to-[#0129E3] hover:text-white"
          >
            <Image
              src={benefit.icon}
              alt={benefit.title}
              width={64}
              height={64}
              className="mb-4 group-hover:brightness-0 group-hover:invert transition duration-300"
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
