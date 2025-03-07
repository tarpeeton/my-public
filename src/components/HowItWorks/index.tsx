"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const stepsData = {
  doctor: [
    {
      title: "Регистрация",
      description: "Пройдите верификацию и заполните свою карточку врача",
      position: "bottom-extra",
    },
    {
      title: "Обновления",
      description:
        "Обновляйте информацию, редактируйте контакты и график работы",
      position: "bottom",
    },
    {
      title: "Получайте пациентов",
      description:
        "Получайте запросы и записывайте пациентов через платформу и Telegram",
      position: "top",
    },
  ],
  patient: [
    {
      title: "Поиск врача",
      description: "ищите проверенных специалистов в любой точке города",
      position: "bottom-extra",
    },
    {
      title: "Поиск услуг",
      description:
        "выберите подходящую вам услугу с возможностью поиска услуг и врачей на карте",
      position: "bottom",
    },
    {
      title: "Назначить встречу",
      description:
        "запишитесь к понравившемуся специалисту и он обязательно свяжется с вами",
      position: "top",
    },
  ],
  clinic: [
    {
      title: "Регистрация",
      description: "Пройдите верификацию и заполните свою карточку врача",
      position: "bottom-extra",
    },
    {
      title: "Обновления",
      description: "обновляйте информацию о клинике и добавляйте своих врачей",
      position: "bottom",
    },
    {
      title: "Получайте пациентов",
      description:
        "Получайте запросы и записывайте пациентов через платформу и Telegram",
      position: "top",
    },
  ],
};

const getStepIcon = (index: number) => {
  const icons = [
    <div key="icon-1" className="absolute left-56 top-56">
      <img src="/icon-1.png" alt="" className="w-24 h-24" />
    </div>,
    <div key="icon-2" className="absolute top-16">
      <img src="/icon-3.png" alt="" className="w-24 h-24" />
    </div>,
    <div key="icon-3" className="absolute top-44">
      <img src="/icon-2.png" alt="" className="w-24 h-24" />
    </div>,
  ];
  return icons[index];
};

const getNumIcon = (index: number) => {
  const nums = [
    <div key="num-1" className="absolute left-16">
      <img src="/1.png" alt="" className="h-32" />
    </div>,
    <div key="num-2" className="absolute top-60 left-[450px]">
      <img src="/2.png" alt="" className="h-32" />
    </div>,
    <div key="num-3" className="absolute top-10 right-72">
      <img src="/3.png" alt="" className="h-32" />
    </div>,
  ];
  return nums[index];
};

const HowItWorksDesktop = () => {
  return (
    <div className="w-full bg-white mb-64">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-16">
        <Tabs defaultValue="doctor">
          <div className="flex flex-row items-center justify-between">
            <div>
              <span className="bg-button-gradient mb-2 text-white px-4 py-1 rounded-md text-sm font-semibold inline-block -rotate-[5deg]">
                Шаги
              </span>
              <div className="flex flex-row justify-between items-center mb-4 relative">
                <h2 className="text-4xl font-bold">Как это работает</h2>
              </div>
            </div>
            <TabsList className="flex gap-1 p-1 rounded-2xl">
              <TabsTrigger
                value="doctor"
                className="border-gray-200 rounded-l-2xl flex-1 data-[state=active]:border-2 data-[state=active]:border-[#0129E3] data-[state=active]:bg-white"
              >
                Врач
              </TabsTrigger>
              <TabsTrigger
                value="patient"
                className="border-gray-200 flex-1 data-[state=active]:border-2 data-[state=active]:border-[#0129E3] data-[state=active]:bg-white"
              >
                Пациент
              </TabsTrigger>
              <TabsTrigger
                value="clinic"
                className="border-gray-200 rounded-r-2xl flex-1 data-[state=active]:border-2 data-[state=active]:border-[#0129E3] bg-white"
              >
                Клиника
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="relative mt-16">
            <div className="absolute top-24 left-0 w-full">
              <img
                src="/singleLine0.png"
                alt=""
                className="w-full object-cover"
              />
            </div>

            {Object.entries(stepsData).map(([key, steps]) => (
              <TabsContent
                key={key}
                value={key}
                className="relative z-10 justify-between min-h-[300px] transition-all duration-300 ease-in-out hidden data-[state=active]:flex"
              >
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="w-1/3 px-8 flex flex-col items-center"
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-2">{getNumIcon(index)}</div>
                      <div className="w-32 h-32 flex justify-center">
                        {getStepIcon(index)}
                      </div>
                    </div>

                    <div
                      className={`absolute flex flex-col items-center text-center max-w-xs ${
                        step.position === "top"
                          ? "top-12 ml-5"
                          : step.position === "bottom-extra"
                            ? "mt-32 ml-36"
                            : "mt-44 ml-28"
                      }`}
                    >
                      <h3 className="text-lg font-semibold mb-2">
                        {step.title}
                      </h3>
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

export default HowItWorksDesktop;
