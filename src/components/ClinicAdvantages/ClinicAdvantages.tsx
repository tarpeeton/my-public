import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const advantages = [
  {
    icon: "/clinic1.png",
    title: "Удобный поиск",
    description:
      "Платформа позволяет пользователям быстро находить врачей и клиники в ближайшем районе.",
  },
  {
    icon: "/clinic2.png",
    title: "Полная информация",
    description:
      "На платформе представлена подробная информация о врачах, их опыте, дипломах, услугах и ценах.",
  },
  {
    icon: "/clinic3.png",
    title: "Экономия времени",
    description:
      "Пользователи могут найти всю необходимую информацию, записаться на приём в одном месте.",
  },
  {
    icon: "/clinic4.png",
    title: "Система онлайн-записи",
    description:
      "Платформа предоставляет возможность записываться на приём к врачу онлайн, что создаёт удобства для пациентов и врачей.",
  },
  {
    icon: "/clinic5.png",
    title: "Отзывы и система рейтинга",
    description:
      "Пользователи могут оставлять отзывы о врачах или клиниках, а также ставить им оценки.",
  },
  {
    icon: "/clinic6.png",
    title: "Чат-бот",
    description:
      "Если у платформы есть чат-бот, пользователи могут использовать его в любое время и в любом месте.",
  },
];

export default function Advantages() {
  return (
    <section className="py-12 md:px-[100px] px-5 text-left">
      <div className="inline-block text-left">
      <span className="bg-button-gradient mb-2 text-white px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
          Приимущества
        </span>
        <h2 className="text-3xl font-bold mt-4">Преимущества работы с нами</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {advantages.map((adv, index) => (
          <Card key={index} className="p-6 shadow-lg rounded-xl hover:shadow-xl duration-150">
            <CardContent className="flex flex-col items-center space-y-4">
              <Image src={adv.icon} alt={adv.title} width={150} height={150} className="rounded-full" />
              <h3 className="text-xl font-semibold">{adv.title}</h3>
              <p className="text-gray-600 text-sm">{adv.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
