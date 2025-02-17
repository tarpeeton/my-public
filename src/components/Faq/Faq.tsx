"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";
import clsx from "clsx"; // импортируем clsx

const faqItems = [
  {
    question: "Какова основная цель сайта?",
    answer:
      "Основная цель сайта — предоставить удобный способ записи к врачам и получения информации о медицинских учреждениях.",
  },
  {
    question: "Как записаться на прием?",
    answer:
      "Чтобы записаться на прием, найдите нужную клинику или врача, перейдите в их профиль и нажмите на кнопку «Записаться на прием». Выберите подходящую дату и время, а затем подтвердите запись.",
  },
  {
    question: "Как я могу получить достоверную информацию о врачах?",
    answer:
      "На сайте представлена информация о врачах, их специализациях, рейтингах и отзывах от пациентов.",
  },
  {
    question: "Как работает поиск на сайте?",
    answer:
      "Поиск позволяет находить врачей и клиники по имени, специализации и местоположению.",
  },
  {
    question: "Бесплатно ли пользоваться услугами сайта?",
    answer:
      "Да, использование базового функционала сайта, включая поиск врачей и запись на прием, является бесплатным.",
  },
  {
    question: "Какие клиники представлены на сайте?",
    answer:
      "На сайте представлены государственные и частные клиники, а также независимые медицинские специалисты.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); 

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="mx-auto px-2 md:p-6 rounded-2xl md:px-[100px] w-full">
      <span className="bg-button-gradient text-white mb-2 px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
        FAQ
      </span>
      <div className="flex items-center space-x-3 mb-6">
        <h2 className="text-2xl font-bold">Часто задаваемые вопросы</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg transition-all duration-300"
          >
            <AccordionTrigger
              className={clsx(
                "px-6 py-4 text-lg font-medium text-start transition-colors duration-300 hover:no-underline",
                openIndex === index ? "text-blue-600" : "text-black"
              )}
              onClick={() => handleToggle(index)}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent
              className="px-6 py-4 text-gray-600 shadow-md rounded-b-lg bg-white text-start"
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
