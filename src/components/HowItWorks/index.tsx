import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const stepsData = {
  doctor: [
    {
      title: "Регистрация",
      description: "Пройдите верификацию и заполните свою карточку врача",
      position: "bottom-extra",
    },
    {
      title: "Поиск врача",
      description:
        "Обновляйте информацию, редактируйте контакты и график работы",
      position: "bottom",
    },
    {
      title: "Назначить встречу",
      description:
        "Получайте запросы и записывайте пациентов через платформу и Telegram",
      position: "top",
    },
  ],
  patient: [
    {
      title: "Создайте аккаунт",
      description: "Зарегистрируйтесь, чтобы найти врачей и клиники",
      position: "bottom",
    },
    {
      title: "Выберите врача",
      description: "Ищите специалистов по отзывам и рейтингу",
      position: "top",
    },
    {
      title: "Запишитесь на прием",
      description: "Бронируйте удобное время онлайн",
      position: "bottom",
    },
  ],
  clinic: [
    {
      title: "Добавьте клинику",
      description: "Зарегистрируйте свою клинику на платформе",
      position: "bottom",
    },
    {
      title: "Заполните данные",
      description: "Укажите услуги, контакты и расписание",
      position: "top",
    },
    {
      title: "Принимайте пациентов",
      description: "Получайте записи и управляйте ими через платформу",
      position: "bottom",
    },
  ],
};

const getStepIcon = (index: number) => {
  const icons = [
    <div className="absolute left-56 top-56">
      <img src="/icon-1.png" alt="" className="w-24 h-24" />
    </div>,
    <div className="absolute top-16">
      <img src="/icon-3.png" alt="" className="w-24 h-24" />
    </div>,
    <div className="absolute top-44">
      <img src="/icon-2.png" alt="" className="w-24 h-24" />
    </div>,
  ];
  return icons[index];
};

const getNumIcon = (index: number) => {
  const nums = [
    <div className="absolute left-16">
      <img src="/1.png" alt="" className="h-32" />
    </div>,
    <div className="absolute top-60 left-[450px]">
      <img src="/2.png" alt="" className="h-32" />
    </div>,
    <div className="absolute top-10 right-72">
      <img src="/3.png" alt="" className="h-32" />
    </div>,
  ];
  return nums[index];
};

const HowItWorks = () => {
  return (
    <div className="w-full bg-white mb-64">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Как это работает</h2>
        </div>

        <Tabs defaultValue="doctor">
          <TabsList className="flex gap-4">
            <TabsTrigger value="doctor">Врач</TabsTrigger>
            <TabsTrigger value="patient">Пациент</TabsTrigger>
            <TabsTrigger value="clinic">Клиника</TabsTrigger>
          </TabsList>

          <div className="relative mt-16">
            <div className="absolute top-24 left-0 w-full">
              <img src="/singleLine0.png" alt="" className="w-full object-cover" />
            </div>

            {Object.entries(stepsData).map(([key, steps]) => (
             <TabsContent key={key} value={key} className="relative z-10 flex justify-between">
                {steps.map((step, index) => (
                  <div key={index} className="w-1/3 px-8 flex flex-col items-center">
                    <div className="flex flex-col items-center">
                      <div className="mb-2">{getNumIcon(index)}</div>
                      <div className="w-32 h-32 flex justify-center">
                        {getStepIcon(index)}
                      </div>
                    </div>

                    <div
                      className={`flex absolute flex-col items-center text-center max-w-xs ${
                        step.position === "top"
                          ? "top-12 ml-5"
                          : step.position === "bottom-extra"
                          ? "mt-32 ml-36"
                          : "mt-44 ml-28"
                      }`}
                    >
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm text-center max-w-[220px] break-words">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default HowItWorks;
