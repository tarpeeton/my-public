"use client";


const benefits = [
  {
    title: "Единственная платформа",
    description:
      "Это единственная платформа в Ташкенте, удобная для поиска клиник и врачей.",
    icon: "/contact-form.svg",
    hoverIcon: "/contact-form-hover.svg",
  },
  {
    title: "Доступ к пациентам",
    description:
      "Пациенты смогут находить вас через платформу и записываться на прием.",
    icon: "/contact-form-1.svg",
    hoverIcon: "/contact-form-1-hover.svg",
  },
  {
    title: "Публикация услуг",
    description: "Размещайте список ваших услуг с ценами или без них.",
    icon: "/contact-form-2.svg",
    hoverIcon: "/contact-form-2-hover.svg",
  },
  {
    title: "Гибкость управления",
    description:
      "Легко редактируйте информацию о себе и клинике в любое время.",
    icon: "/contact-form-3.svg",
    hoverIcon: "/contact-form-3-hover.svg",
  },
  {
    title: "Геолокация",
    description: "Пациенты могут искать ближайших врачей и записываться.",
    icon: "/contact-form-4.svg",
    hoverIcon: "/contact-form-4-hover.svg",
  },
  {
    title: "Абсолютно бесплатно",
    description: "Регистрация и использование платформы не требуют оплаты.",
    icon: "/contact-form-5.svg",
    hoverIcon: "/contact-form-5-hover.svg",
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
            className="group w-full lg:h-[363px] p-[40px] border border-gray-200 rounded-[20px] shadow-lg transition duration-300 flex flex-col justify-center items-center text-center 
            bg-white hover:text-white hover:bg-button-gradient"
          >
            <div className="relative flex justify-center items-center w-full mb-4">
              <img
                src="/bg-card21.svg"
                alt="background"
                className="absolute w-[140px] h-[140px] mr-8 mb-2 z-10"
              />

              <img
                src="/bg-card12-1.svg"
                alt="background"
                className="absolute w-[250px] h-[150px] z-20 transition-opacity duration-300 
             group-hover:opacity-0"
              />
              <img
                src="/bg-card12.svg"
                alt="bg-card12-1.svg"
                className="absolute w-[250px] h-[150px] z-20 opacity-0 transition-opacity duration-300 
             group-hover:opacity-100"
              />

              {/* Основная иконка */}
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="relative w-16 h-16 z-30 transition-opacity duration-300 group-hover:opacity-0 mb-4"
              />

              {/* Иконка при наведении */}
              <img
                src={benefit.hoverIcon}
                alt={benefit.title}
                className="absolute w-16 h-16 z-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mb-4"
              />
            </div>

            <h3 className="text-xl font-semibold mt-7">{benefit.title}</h3>
            <p className="mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
