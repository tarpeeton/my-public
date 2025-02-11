import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
  return (
    <div className="mx-auto p-6 rounded-2xl px-16">
      <span className="bg-button-gradient text-white mb-2 px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-12">
          FAQ
        </span>
      <div className="flex items-center space-x-3 mb-6">
        <h2 className="text-2xl font-bold">Часто задаваемые вопросы</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-4"> {/* Увеличил space-y */}
        {faqItems.map((item, index) => (
          <AccordionItem    
            key={index}
            value={`item-${index}`}
            className="border rounded-lg transition-all duration-300"
          >
            <AccordionTrigger className="px-6 py-4 text-lg font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent 
              className="px-6 py-4 text-gray-600 shadow-md rounded-b-lg bg-white"
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
