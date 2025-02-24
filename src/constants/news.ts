import { INewsData } from "@/types/news";

export const NEWS_DATA: INewsData[] = [
  // ***** #1 *****
  {
    date: "19.02.2025",
    slug: "kak-vybrat-luchshego-vracha-v-tashkente-5-glavnyh-kriteriev",
    title: {
      ru: "Как выбрать лучшего врача в Ташкенте: 5 главных критериев",
      en: "How to Choose the Best Doctor in Tashkent: 5 Key Criteria",
      uz: "Toshkentda eng yaxshi shifokorni qanday tanlash: 5 ta asosiy mezon",
    },
    description: {
      ru: "Выбор врача — ответственное решение, от которого зависит ваше здоровье и самочувствие. В Ташкенте работает множество специалистов, но как найти того, кому можно доверить свое здоровье? Разберем 5 ключевых критериев, которые помогут вам сделать правильный выбор.",
      en: "Choosing a doctor is a critical decision that affects your health and well-being. Tashkent has many specialists, but how do you find the one you can trust with your health? Let's explore 5 key criteria to help you make the right choice.",
      uz: "Shifokor tanlash – bu sizning sog'lig'ingiz va farovonlig'ingizga ta'sir etadigan jiddiy qaror. Toshkentda ko'plab mutaxassislar bor, ammo sog'lig'ingizni ishonch bilan topshirishingiz mumkin bo'lgan shifokorni qanday topish mumkin? Keling, to'g'ri tanlov qilishingizga yordam beradigan 5 asosiy mezonni ko'rib chiqamiz.",
    },
    option: [
      {
        title: {
          ru: "Квалификация и опыт работы",
          en: "Qualifications and Experience",
          uz: "Malaka va ish tajribasi",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: `Первое, на что стоит обратить внимание при выборе врача, — его образование и профессиональный опыт. Уточните:
- Где врач получил образование?
- Какие дополнительные курсы и сертификаты он имеет?
- Как долго он работает по своей специальности?
Чем больше практического опыта у специалиста, тем выше вероятность, что он сможет быстро и точно поставить диагноз, назначить эффективное лечение и избежать ошибок.`,
          en: `The first thing to consider when choosing a doctor is their education and professional experience. Ask:
- Where did the doctor receive their education?
- What additional courses and certifications do they have?
- How long have they been practicing in their specialty?
The more practical experience the specialist has, the more likely they are to diagnose quickly and accurately, prescribe effective treatment, and avoid errors.`,
          uz: `Shifokorni tanlashda e'tibor beriladigan birinchi narsa uning ta'limi va professional tajribasidir. So'rang:
- Shifokor qayerda tahsil olgan?
- Qaysi qo'shimcha kurslar va sertifikatlarga ega?
- U o'z sohasida qancha vaqt faoliyat yuritgan?
Mutaxassisning amaliy tajribasi qanchalik ko'p bo'lsa, tashxisni tez va aniq qo'yishi, samarali davolash belgilashi va xatolardan qochishi ehtimoli shunchalik yuqori bo'ladi.`,
        },
      },
      {
        title: {
          ru: "Репутация среди пациентов",
          en: "Reputation Among Patients",
          uz: "Bemorlar orasidagi obro’",
        },
        img: "",
        subtitle: {
          ru: `Отзывы пациентов — это один из самых важных факторов при выборе врача. Обратите внимание на:
- Общий рейтинг врача по отзывам
- Конкретные комментарии о методах лечения
- Отношение к пациентам и внимательность к деталям
Важно учитывать, что единичные негативные отзывы могут быть субъективными. Лучше анализировать общую картину: если большинство пациентов рекомендуют врача, это хороший знак.`,
          en: `Patient reviews are one of the most important factors when choosing a doctor. Consider:
- The overall rating based on reviews
- Specific comments about treatment methods
- The doctor’s attitude and attention to detail
Keep in mind that individual negative reviews can be subjective. It's best to look at the overall picture – if most patients recommend the doctor, that's a good sign.`,
          uz: `Bemorlarning fikrlari shifokorni tanlashda eng muhim omillardandir. E'tiborga oling:
- Shifokorning umumiy reytingi
- Davolash usullari haqidagi aniq izohlar
- Bemorlar bilan munosabati va tafsilotlarga e'tibor
Shuni yodda tutingki, ayrim salbiy fikrlar subyektiv bo'lishi mumkin. Umumiy tasvirga qarash yaxshiroq – agar ko'p bemor shifokorni tavsiya qilsa, bu yaxshi belgidir.`,
        },
      },
      {
        title: {
          ru: "Современные методы диагностики и лечения",
          en: "Modern Methods of Diagnosis and Treatment",
          uz: "Zamonaviy diagnostika va davolash usullari",
        },
        img: "https://ucarecdn.com/562a2aff-4fbb-427a-823d-d3eb829b8f11/-/preview/1000x777/",
        subtitle: {
          ru: `Медицина не стоит на месте, и хороший врач должен идти в ногу со временем. Узнайте:
- Какие методы диагностики использует врач?
- Применяет ли он современные технологии в лечении?
- Открыт ли он к новым подходам и исследованиям?
Если врач использует устаревшие методы и не стремится к повышению квалификации, есть вероятность, что лечение будет менее эффективным.`,
          en: `Medicine is constantly evolving, and a good doctor must keep up with the times. Find out:
- What diagnostic methods does the doctor use?
- Does the doctor employ modern technologies in treatment?
- Is the doctor open to new approaches and research?
If a doctor uses outdated methods and does not strive for further training, the treatment may be less effective.`,
          uz: `Tibbiyot doimiy ravishda rivojlanmoqda, va yaxshi shifokor zamonaviylikni saqlab qolishi kerak. Bilib oling:
- Shifokor qaysi diagnostika usullaridan foydalanadi?
- Davolashda zamonaviy texnologiyalardan foydalanadimi?
- Yangi yondashuvlar va tadqiqotlarga ochiqmi?
Agar shifokor eskirgan usullardan foydalanib, malakasini oshirishga intilmasa, davolash samaradorligi pasayishi mumkin.`,
        },
      },
      {
        title: {
          ru: "Индивидуальный подход и внимательность",
          en: "Individual Approach and Attentiveness",
          uz: "Shaxsiy yondashuv va e'tibor",
        },
        img: "",
        subtitle: {
          ru: `Настоящий профессионал не просто ставит диагноз, а учитывает все особенности пациента: возраст, образ жизни, хронические заболевания. Обратите внимание на:
- Насколько врач внимательно слушает ваши жалобы
- Задает ли он уточняющие вопросы
- Объясняет ли вам понятным языком, что происходит с вашим организмом
Если врач поверхностно относится к пациенту, не объясняет детали диагноза и лечения, стоит задуматься о поиске другого специалиста.`,
          en: `A true professional does more than just diagnose – they consider all the unique aspects of a patient, such as age, lifestyle, and chronic conditions. Pay attention to:
- How attentively the doctor listens to your complaints
- Whether the doctor asks clarifying questions
- If the doctor explains in clear language what is happening with your body
If the doctor takes a superficial approach and does not explain the details of the diagnosis and treatment, you might want to consider another specialist.`,
          uz: `Haqiqiy mutaxassis faqat tashxis qo'ymasdan, bemorning yosh, turmush tarzi va surunkali kasalliklari kabi barcha o'ziga xos jihatlarni hisobga oladi. E'tiborga oling:
- Shifokor shikoyatlaringizni qanchalik diqqat bilan tinglaydi?
- U aniqlashtiruvchi savollar beradimi?
- Shifokor nima bo'layotganini tushunarli tarzda tushuntiradimi?
Agar shifokor bemorga yuzaki yondashib, tashxis va davolash tafsilotlarini tushuntirmasa, boshqa mutaxassis izlashni o'ylab ko'rishingiz mumkin.`,
        },
      },
      {
        title: {
          ru: "Удобство записи и доступность",
          en: "Ease of Appointment and Accessibility",
          uz: "Qabulga yozilishning qulayligi va mavjudligi",
        },
        img: "https://ucarecdn.com/8e4c1a10-95f7-4f24-80bf-ea80c6e7a65e/-/preview/1000x777/",
        subtitle: {
          ru: `Даже самый опытный врач не сможет вам помочь, если попасть к нему на прием невозможно. Учитывайте:
- Насколько быстро можно записаться на прием
- Работает ли врач в удобное для вас время
- Доступность клиники или кабинета
Важно, чтобы врач был не только квалифицированным, но и удобным для посещения. Если к нему трудно попасть или запись расписана на месяцы вперед, возможно, стоит рассмотреть альтернативные варианты.`,
          en: `Even the most experienced doctor cannot help you if you cannot secure an appointment. Consider:
- How quickly you can book an appointment
- Whether the doctor is available at a time convenient for you
- The accessibility of the clinic or office
It is important that the doctor is not only qualified but also easily accessible. If it is difficult to get an appointment or the schedule is booked months in advance, you might consider alternative options.`,
          uz: `Eng tajribali shifokor ham, agar unga qabulga yozilish imkoni bo'lmasa, yordam bera olmaydi. E'tiborga oling:
- Qanchalik tez yozilish mumkin?
- Shifokor sizga qulay bo'lgan vaqtda mavjudmi?
- Klinika yoki kabinetning kirish imkoniyati
Shifokor nafaqat malakali, balki qulay tarzda qabulga yoziladigan bo'lishi kerak. Agar unga yozilish qiyin yoki jadval bir necha oy oldin band bo'lsa, boshqa variantlarni ko'rib chiqish mumkin.`,
        },
      },
      {
        title: {
          ru: "Итог",
          en: "Conclusion",
          uz: "Xulosa",
        },
        img: "",
        subtitle: {
          ru: `Выбор врача в Ташкенте — важный процесс, к которому стоит подходить серьезно. Ориентируйтесь на квалификацию, отзывы, методы лечения, отношение к пациенту и удобство записи. Только так вы сможете найти действительно хорошего специалиста, которому можно доверить свое здоровье.`,
          en: `Choosing a doctor in Tashkent is an important process that should be approached seriously. Focus on qualifications, patient reviews, treatment methods, the doctor’s attitude, and appointment convenience. Only then can you find a truly excellent specialist to trust with your health.`,
          uz: `Toshkentda shifokor tanlash jiddiy yondashuvni talab qiladigan muhim jarayon. Malaka, bemorlarning fikri, davolash usullari, shifokorning bemorga munosabati va qabulga yozilishning qulayligiga e'tibor bering. Faqat shu tarzda siz sog'lig'ingizni ishonch bilan topshirishingiz mumkin bo'lgan haqiqiy mutaxassisni topasiz.`,
        },
      },
    ],
  },

  // ***** #2 *****
  {
    date: "19.02.2025",
    slug: "top-10-klinik-v-tashkente-s-luchshimi-otzyvami-patsientov",
    title: {
      ru: "Топ-10 клиник Ташкента с лучшими отзывами пациентов",
      en: "Top 10 Clinics in Tashkent with the Best Patient Reviews",
      uz: "Toshkentdagi eng yaxshi bemor fikrlariga ega Top 10 klinika",
    },
    description: {
      ru: "Выбор клиники — важное решение, от которого зависит ваше здоровье и комфорт во время лечения. В Ташкенте работает множество медицинских центров, но какие из них действительно заслуживают доверия? Мы составили список 10 клиник, которые получили высокие оценки пациентов.",
      en: "Choosing a clinic is an important decision that affects your health and comfort during treatment. Tashkent is home to many medical centers, but which ones truly deserve your trust? We have compiled a list of 10 clinics that have received high ratings from patients.",
      uz: "Klinika tanlash – bu sizning sog'lig'ingiz va davolanish jarayonidagi qulayligingizga ta'sir etadigan muhim qaror. Toshkentda ko'plab tibbiyot markazlari mavjud, ammo qaysilari haqiqatan ham ishonchga loyiq? Biz bemorlar tomonidan yuqori baholangan 10 ta klinikani ro'yxatga oldik.",
    },
    option: [
      {
        title: {
          ru: "Международная клиника 'AKFA Medline' ",
          en: "International Clinic 'AKFA Medline'",
          uz: "Xalqaro klinika 'AKFA Medline'",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Преимущества: Современное оборудование, многопрофильность, квалифицированные специалисты.",
          en: "Advantages: Modern equipment, multi-specialty services, and qualified specialists.",
          uz: "Afzalliklari: Zamonaviy uskunalar, ko'p tarmoqli xizmatlar va malakali mutaxassislar.",
        },
      },
      {
        title: {
          ru: "Республиканский специализированный центр хирургии имени академика Вахидова",
          en: "Republican Specialized Surgery Center named after Academician Vakhidov",
          uz: "Akademik Vahidov nomidagi Respublikaviy maxsus jarrohlik markazi",
        },
        img: "",
        subtitle: {
          ru: "Преимущества: Высокий уровень хирургических вмешательств, передовые методы диагностики и лечения.",
          en: "Advantages: High level of surgical interventions and advanced methods of diagnosis and treatment.",
          uz: "Afzalliklari: Yuqori darajadagi jarrohlik aralashuvlari, ilg'or diagnostika va davolash usullari.",
        },
      },
      {
        title: {
          ru: "Клиника 'Tashkent International Clinic'",
          en: "Clinic 'Tashkent International Clinic'",
          uz: "Klinika 'Tashkent International Clinic'",
        },
        img: "https://ucarecdn.com/562a2aff-4fbb-427a-823d-d3eb829b8f11/-/preview/1000x777/",
        subtitle: {
          ru: "Преимущества: Европейский стандарт медицинского обслуживания, внимание к деталям, индивидуальный подход.",
          en: "Advantages: European standard of medical care, attention to detail, and an individual approach.",
          uz: "Afzalliklari: Yevropa darajasidagi tibbiy xizmat, tafsilotlarga e'tibor va individual yondashuv.",
        },
      },
      {
        title: {
          ru: "Национальный центр кардиологии Узбекистана",
          en: "National Cardiology Center of Uzbekistan",
          uz: "O‘zbekiston Milliy Kardiologiya Markazi",
        },
        img: "",
        subtitle: {
          ru: "Преимущества: Лечение сердечно-сосудистых заболеваний на высшем уровне, передовые технологии диагностики.",
          en: "Advantages: Top-level treatment of cardiovascular diseases and advanced diagnostic technologies.",
          uz: "Afzalliklari: Yurak-qon tomir kasalliklarini yuqori darajada davolash va ilg'or diagnostika texnologiyalari.",
        },
      },
      {
        title: {
          ru: "Медицинский центр 'Medion'",
          en: "Medical Center 'Medion'",
          uz: "Tibbiyot markazi 'Medion'",
        },
        img: "https://ucarecdn.com/8e4c1a10-95f7-4f24-80bf-ea80c6e7a65e/-/preview/1000x777/",
        subtitle: {
          ru: "Преимущества: Качественная диагностика, опытные врачи, широкий спектр услуг.",
          en: "Advantages: Quality diagnostics, experienced doctors, and a wide range of services.",
          uz: "Afzalliklari: Sifatli diagnostika, tajribali shifokorlar va keng ko'lamli xizmatlar.",
        },
      },
      {
        title: {
          ru: "Многопрофильная клиника 'Shox Med Center'",
          en: "Multidisciplinary Clinic 'Shox Med Center'",
          uz: "Ko‘p sohalik klinika 'Shox Med Center'",
        },
        img: "",
        subtitle: {
          ru: "Преимущества: Высокий уровень сервиса, внимательное отношение к пациентам.",
          en: "Advantages: High level of service and attentive care for patients.",
          uz: "Afzalliklari: Yuqori darajadagi xizmat va bemorlarga diqqatli yondashuv.",
        },
      },
      {
        title: {
          ru: "Клиника 'Grandmed'",
          en: "Clinic 'Grandmed'",
          uz: "Klinika 'Grandmed'",
        },
        img: "",
        subtitle: {
          ru: "Преимущества: Современные методы лечения, комфортные условия для пациентов.",
          en: "Advantages: Modern treatment methods and comfortable conditions for patients.",
          uz: "Afzalliklari: Zamonaviy davolash usullari va bemorlar uchun qulay sharoitlar.",
        },
      },
      {
        title: {
          ru: "Диагностический центр 'Ин Витро' Ташкент",
          en: "Diagnostic Center 'In Vitro' Tashkent",
          uz: "Toshkent 'In Vitro' Diagnostika Markazi",
        },
        img: "",
        subtitle: {
          ru: "Преимущества: Точные лабораторные исследования, высокое качество обслуживания.",
          en: "Advantages: Accurate laboratory testing and high-quality service.",
          uz: "Afzalliklari: Aniqligi yuqori laboratoriya tadqiqotlari va yuqori sifatli xizmat.",
        },
      },
      {
        title: {
          ru: "Клиника 'Sehhat'",
          en: "Clinic 'Sehhat'",
          uz: "Klinika 'Sehhat'",
        },
        img: "",
        subtitle: {
          ru: "Преимущества: Узкопрофильные специалисты, инновационные методики лечения.",
          en: "Advantages: Specialized experts and innovative treatment methods.",
          uz: "Afzalliklari: Maxsus soha mutaxassislari va innovatsion davolash usullari.",
        },
      },
      {
        title: {
          ru: "Медицинский центр 'Soglom Avlod'",
          en: "Medical Center 'Soglom Avlod'",
          uz: "Tibbiyot markazi 'Sog'lom Avlod'",
        },
        img: "",
        subtitle: {
          ru: "Преимущества: Семейная медицина, качественная диагностика, доступные цены.",
          en: "Advantages: Family medicine, quality diagnostics, and affordable prices.",
          uz: "Afzalliklari: Oilaviy tibbiyot, sifatli diagnostika va maqbul narxlar.",
        },
      },
      {
        title: {
          ru: "Итог",
          en: "Conclusion",
          uz: "Xulosa",
        },
        img: "",
        subtitle: {
          ru: "Выбор клиники в Ташкенте зависит от ваших потребностей и состояния здоровья. Обращайте внимание на репутацию, отзывы пациентов, квалификацию врачей и уровень сервиса. Только так вы сможете найти медицинский центр, который предложит вам лучшее лечение и комфорт.",
          en: "Choosing a clinic in Tashkent depends on your needs and health condition. Consider the reputation, patient reviews, doctors' qualifications, and level of service. Only then can you find a medical center that offers you the best treatment and comfort.",
          uz: "Toshkentda klinika tanlash sizning ehtiyojlaringiz va sog'lig'ingiz holatiga bog'liq. Obro’, bemorlarning fikri, shifokorlarning malakasi va xizmat darajasiga e'tibor bering. Faqat shu tarzda siz eng yaxshi davolash va qulaylikni taqdim etadigan tibbiyot markazini topishingiz mumkin.",
        },
      },
    ],
  },

  // ***** #3 *****
  {
    date: "19.02.2025",
    slug: "kak-zapisatsya-k-vrachu-onlayn-v-uzbekistane-poshagovaya-instruktsiya",
    title: {
      ru: "Как записаться к врачу онлайн в Узбекистане: пошаговая инструкция",
      en: "How to Book an Appointment with a Doctor Online in Uzbekistan: A Step-by-Step Guide",
      uz: "O'zbekistonda shifokorga onlayn yozilish: bosqichma-bosqich qo'llanma",
    },
    description: {
      ru: "В современном мире записаться на прием к врачу можно всего за несколько минут, не выходя из дома. Онлайн-запись экономит время и позволяет выбрать удобное время посещения. Разберем пошаговый алгоритм, как записаться к врачу в Узбекистане через интернет.",
      en: "In today's world, you can book a doctor's appointment in just a few minutes without leaving your home. Online booking saves time and allows you to choose a convenient appointment time. Let's go through a step-by-step guide on how to book a doctor’s appointment in Uzbekistan online.",
      uz: "Zamonaviy dunyoda, uyda o'tirib shifokorga qabulga yozilish bir necha daqiqada amalga oshirilishi mumkin. Onlayn yozilish vaqtni tejaydi va qulay vaqtni tanlash imkonini beradi. Keling, O'zbekistonda internet orqali shifokorga yozilishning bosqichma-bosqich algoritmini ko'rib chiqamiz.",
    },
    option: [
      {
        title: {
          ru: "Шаг 1: Выбор платформы для записи",
          en: "Step 1: Choose a Booking Platform",
          uz: "1-qadam: Yozilish platformasini tanlash",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: `В Узбекистане доступно несколько онлайн-сервисов, через которые можно записаться к врачу. Это могут быть:
- Официальные сайты медицинских центров и клиник;
- Специализированные платформы для поиска врачей;
- Медицинские мобильные приложения.
Выберите удобную для вас платформу и зарегистрируйтесь, если это требуется.`,
          en: `In Uzbekistan, several online services are available for booking a doctor's appointment. These may include:
- Official websites of medical centers and clinics;
- Specialized platforms for finding doctors;
- Medical mobile applications.
Choose a platform that suits you and register if necessary.`,
          uz: `O'zbekistonda shifokorga yozilish uchun bir necha onlayn xizmatlar mavjud. Ular:
- Tibbiyot markazlari va klinikalarining rasmiy saytlarida;
- Shifokorlarni qidirish uchun maxsus platformalarda;
- Tibbiy mobil ilovalarda.
Sizga qulay platformani tanlang va zarur bo'lsa, ro'yxatdan o'ting.`,
        },
      },
      {
        title: {
          ru: "Шаг 2: Поиск нужного врача",
          en: "Step 2: Find the Right Doctor",
          uz: "2-qadam: Kerakli shifokorni topish",
        },
        img: "",
        subtitle: {
          ru: `Используйте фильтры по специальности, местоположению, рейтингу и отзывам пациентов. Обратите внимание на:
- Квалификацию врача;
- Опыт работы;
- Отзывы пациентов;
- Доступное время приема.`,
          en: `Use filters such as specialty, location, rating, and patient reviews. Pay attention to:
- The doctor’s qualifications;
- Professional experience;
- Patient reviews;
- Available appointment times.`,
          uz: `Mutaxassislik, joylashuv, reyting va bemorlarning fikrlari kabi filtrlardan foydalaning. E'tiborga oling:
- Shifokorning malakasi;
- Ish tajribasi;
- Bemorlarning izohlari;
- Qabul uchun mavjud vaqt.`,
        },
      },
      {
        title: {
          ru: "Шаг 3: Выбор удобного времени",
          en: "Step 3: Choose a Convenient Time",
          uz: "3-qadam: Qulay vaqtni tanlash",
        },
        img: "https://ucarecdn.com/562a2aff-4fbb-427a-823d-d3eb829b8f11/-/preview/1000x777/",
        subtitle: {
          ru: "После выбора врача просмотрите доступные даты и время приема. Выберите оптимальный вариант и подтвердите запись.",
          en: "After selecting a doctor, review the available dates and appointment times. Choose the best option and confirm your booking.",
          uz: "Shifokorni tanlaganingizdan so'ng, mavjud sanalar va qabul vaqtlarini ko'rib chiqing. Eng qulay variantni tanlab, yozilishni tasdiqlang.",
        },
      },
      {
        title: {
          ru: "Шаг 4: Заполнение данных",
          en: "Step 4: Fill in Your Information",
          uz: "4-qadam: Ma'lumotlarni to'ldirish",
        },
        img: "",
        subtitle: {
          ru: `При записи система может запросить ваши данные:
- ФИО;
- Контактный номер телефона;
- Причину обращения;
- Дополнительные сведения (например, хронические заболевания).`,
          en: `During the booking process, the system may ask for your information:
- Full name;
- Contact phone number;
- Reason for the visit;
- Additional details (e.g., chronic conditions).`,
          uz: `Yozilish jarayonida tizim sizdan quyidagi ma'lumotlarni so'rashi mumkin:
- F.I.O;
- Aloqa telefon raqami;
- Murojaat sababi;
- Qo'shimcha ma'lumotlar (masalan, surunkali kasalliklar).`,
        },
      },
      {
        title: {
          ru: "Шаг 5: Подтверждение записи",
          en: "Step 5: Confirm Your Appointment",
          uz: "5-qadam: Yozilishni tasdiqlash",
        },
        img: "https://ucarecdn.com/8e4c1a10-95f7-4f24-80bf-ea80c6e7a65e/-/preview/1000x777/",
        subtitle: {
          ru: `После заполнения формы запись необходимо подтвердить. Обычно после этого приходит:
- SMS-уведомление с деталями записи;
- Подтверждающее письмо на e-mail;
- Напоминание за день до приема.`,
          en: `After filling out the form, you need to confirm your appointment. Typically, you will receive:
- An SMS notification with appointment details;
- A confirmation email;
- A reminder one day before the appointment.`,
          uz: `Forma to'ldirilgach, yozilishni tasdiqlashingiz kerak. Odatda, quyidagilar yuboriladi:
- Qabul tafsilotlari bilan SMS xabarnoma;
- Tasdiqlovchi elektron pochta;
- Qabuldan bir kun oldin eslatma.`,
        },
      },
      {
        title: {
          ru: "Шаг 6: Посещение врача",
          en: "Step 6: Visit the Doctor",
          uz: "6-qadam: Shifokorni ko'rish",
        },
        img: "",
        subtitle: {
          ru: `В назначенное время прибывайте в клинику или подключайтесь к онлайн-консультации (если выбран такой формат). При необходимости возьмите с собой документы: паспорт, медицинскую карту, результаты анализов.`,
          en: `At the scheduled time, visit the clinic or join the online consultation (if that option is chosen). Bring your documents if necessary: passport, medical card, test results.`,
          uz: `Belgilangan vaqtda klinikaga boring yoki onlayn konsultatsiyaga ulaning (agar shunday variant tanlangan bo'lsa). Zarur bo'lsa, hujjatlaringizni olib keling: passport, tibbiy karta, tahlil natijalari.`,
        },
      },
      {
        title: {
          ru: "Итог",
          en: "Conclusion",
          uz: "Xulosa",
        },
        img: "",
        subtitle: {
          ru: `Онлайн-запись к врачу в Узбекистане — это удобный способ сэкономить время и получить медицинскую помощь без лишних ожиданий. Следуя этой инструкции, вы легко запишетесь к нужному специалисту и своевременно получите необходимое лечение.`,
          en: `Booking an appointment with a doctor online in Uzbekistan is a convenient way to save time and receive medical care without long waits. By following this guide, you can easily secure an appointment with the right specialist and get timely treatment.`,
          uz: `O'zbekistonda shifokorga onlayn yozilish vaqtni tejash va uzoq navbatlarsiz tibbiy yordam olish uchun qulay usuldir. Ushbu qo'llanmani bajarsangiz, kerakli mutaxassisga yozilish oson bo'ladi va o'z vaqtida zarur davolashni olasiz.`,
        },
      },
    ],
  },

  // ***** #4 *****
  {
    date: "19.02.2025",
    slug: "sravnenie-chastnyh-i-gosudarstvennyh-klinik-v-tashkente-chto-vybrat",
    title: {
      ru: "Сравнение частных и государственных клиник в Ташкенте: что выбрать?",
      en: "Comparing Private and Public Clinics in Tashkent: Which to Choose?",
      uz: "Toshkentdagi xususiy va davlat klinikalarini solishtirish: Qaysi biri tanlash kerak?",
    },
    description: {
      ru: "Выбор медицинского учреждения — важный шаг, от которого зависит качество диагностики и лечения. В Ташкенте доступны как частные, так и государственные клиники. У каждого варианта есть свои преимущества и недостатки. Разберем, чем они отличаются и что выбрать в зависимости от ваших потребностей.",
      en: "Choosing a medical facility is an important decision that affects the quality of diagnosis and treatment. In Tashkent, both private and public clinics are available. Each option has its own advantages and disadvantages. Let's discuss their differences and what to choose based on your needs.",
      uz: "Tibbiyot muassasasini tanlash – tashxis va davolash sifatiga ta'sir etadigan muhim qadamdir. Toshkentda xususiy va davlat klinikalari mavjud. Har bir variantning o'zining afzalliklari va kamchiliklari bor. Keling, ular qanday farqlanishini va ehtiyojlaringizga qarab qaysi biri tanlash kerakligini ko'rib chiqamiz.",
    },
    option: [
      {
        title: {
          ru: "Государственные клиники",
          en: "Public Clinics",
          uz: "Davlat klinikalari",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: `Государственные медицинские учреждения предоставляют широкий спектр услуг, включая экстренную помощь и специализированное лечение.
Плюсы:
- Доступные цены и бесплатные услуги по государственной программе;
- Высокий уровень специалистов в узкопрофильных направлениях;
- Большие стационары с возможностью длительного лечения.
Минусы:
- Очереди и длительное ожидание приема;
- Не всегда современное оборудование;
- Возможность дефицита некоторых препаратов или услуг.`,
          en: `Public medical facilities offer a wide range of services, including emergency care and specialized treatment.
Pros:
- Affordable prices and free services under state programs;
- High level of specialists in niche areas;
- Large hospitals with the possibility of extended treatment.
Cons:
- Long waiting lines and extended waiting times;
- Not always equipped with modern technology;
- Possibility of shortages in certain medications or services.`,
          uz: `Davlat tibbiyot muassasalari keng qamrovli xizmatlar ko'rsatadi, jumladan, tez yordam va maxsus davolash.
Afzalliklari:
- Arzon narxlar va davlat dasturlari doirasida bepul xizmatlar;
- Maxsus yo'nalishlardagi yuqori darajadagi mutaxassislar;
- Uzoq muddatli davolash imkoniyatiga ega katta shifoxonalar.
Kamchiliklari:
- Uzoq navbatlar va qabulga kutish muddati;
- Har doim zamonaviy uskunalar bilan jihozlanmagan bo'lishi;
- Ba'zi dori-darmon yoki xizmatlarning yetishmovchiligi ehtimoli.`,
        },
      },
      {
        title: {
          ru: "Частные клиники",
          en: "Private Clinics",
          uz: "Xususiy klinikalar",
        },
        img: "",
        subtitle: {
          ru: `Частные медицинские центры предлагают более комфортные условия и индивидуальный подход к пациентам.
Плюсы:
- Быстрая запись без очередей;
- Современное оборудование и технологии;
- Высокий уровень сервиса и комфорта.
Минусы:
- Высокая стоимость услуг;
- Ограниченное количество узкоспециализированных врачей в некоторых клиниках;
- Отсутствие бесплатных медицинских программ.`,
          en: `Private medical centers offer more comfortable conditions and an individual approach to patients.
Pros:
- Quick booking without queues;
- Modern equipment and technologies;
- High level of service and comfort.
Cons:
- High cost of services;
- Limited number of specialized doctors in some clinics;
- Lack of free medical programs.`,
          uz: `Xususiy tibbiyot markazlari bemorlarga qulay sharoitlar va individual yondashuvni taqdim etadi.
Afzalliklari:
- Navbatsiz tez yozilish;
- Zamonaviy uskunalar va texnologiyalar;
- Yuqori xizmat ko'rsatish darajasi va qulaylik.
Kamchiliklari:
- Xizmatlar narxi yuqori;
- Ba'zi klinikalarda maxsus yo'nalish bo'yicha cheklangan shifokorlar soni;
- Bepul tibbiy dasturlar mavjud emas.`,
        },
      },
      {
        title: {
          ru: "Шаг 4: Заполнение данных",
          en: "Step 4: Filling in the Data",
          uz: "4-qadam: Ma'lumotlarni to'ldirish",
        },
        img: "",
        subtitle: {
          ru: `При записи система может запросить ваши данные:
- ФИО;
- Контактный номер телефона;
- Причину обращения;
- Дополнительные сведения (например, хронические заболевания).`,
          en: `During the booking process, the system may ask for your information:
- Full name;
- Contact phone number;
- Reason for the visit;
- Additional details (e.g., chronic conditions).`,
          uz: `Yozilish jarayonida tizim sizdan quyidagi ma'lumotlarni so'rashi mumkin:
- F.I.O;
- Aloqa telefon raqami;
- Murojaat sababi;
- Qo'shimcha ma'lumotlar (masalan, surunkali kasalliklar).`,
        },
      },
      {
        title: {
          ru: "Шаг 5: Подтверждение записи",
          en: "Step 5: Confirming the Booking",
          uz: "5-qadam: Yozilishni tasdiqlash",
        },
        img: "https://ucarecdn.com/8e4c1a10-95f7-4f24-80bf-ea80c6e7a65e/-/preview/1000x777/",
        subtitle: {
          ru: `После заполнения формы запись необходимо подтвердить. Обычно после этого приходит:
- SMS-уведомление с деталями записи;
- Подтверждающее письмо на e-mail;
- Напоминание за день до приема.`,
          en: `After filling out the form, you need to confirm your booking. Typically, you will receive:
- An SMS notification with booking details;
- A confirmation email;
- A reminder one day before the appointment.`,
          uz: `Forma to'ldirilgach, yozilishni tasdiqlashingiz kerak. Odatda, quyidagilar yuboriladi:
- Qabul tafsilotlari bilan SMS xabarnoma;
- Tasdiqlovchi elektron pochta;
- Qabuldan bir kun oldin eslatma.`,
        },
      },
      {
        title: {
          ru: "Шаг 6: Посещение врача",
          en: "Step 6: Visiting the Doctor",
          uz: "6-qadam: Shifokorni ko'rish",
        },
        img: "",
        subtitle: {
          ru: `В назначенное время прибывайте в клинику или подключайтесь к онлайн-консультации (если выбран такой формат). При необходимости возьмите с собой документы: паспорт, медицинскую карту, результаты анализов.`,
          en: `At the scheduled time, visit the clinic or join the online consultation (if that option is chosen). Bring your documents if necessary: passport, medical card, test results.`,
          uz: `Belgilangan vaqtda klinikaga boring yoki onlayn konsultatsiyaga ulaning (agar shunday variant tanlangan bo'lsa). Zarur bo'lsa, hujjatlaringizni olib keling: passport, tibbiy karta, tahlil natijalari.`,
        },
      },
      {
        title: {
          ru: "Итог",
          en: "Conclusion",
          uz: "Xulosa",
        },
        img: "",
        subtitle: {
          ru: `Онлайн-запись к врачу в Узбекистане — это удобный способ сэкономить время и получить медицинскую помощь без лишних ожиданий. Следуя этой инструкции, вы легко запишетесь к нужному специалисту и своевременно получите необходимое лечение.`,
          en: `Booking an appointment with a doctor online in Uzbekistan is a convenient way to save time and receive medical care without long waits. By following this guide, you can easily secure an appointment with the right specialist and get timely treatment.`,
          uz: `O'zbekistonda shifokorga onlayn yozilish vaqtni tejash va uzoq navbatlarsiz tibbiy yordam olish uchun qulay usuldir. Ushbu qo'llanmani bajarsangiz, kerakli mutaxassisga yozilish oson bo'ladi va o'z vaqtida zarur davolashni olasiz.`,
        },
      },
    ],
  },

  // ***** #5 *****
  {
    date: "19.02.2025",
    slug: "telemeditsina-v-uzbekistane-kachestvennaya-konsultatsiya-onlayn",
    title: {
      ru: "Телемедицина в Узбекистане: можно ли получить качественную консультацию онлайн?",
      en: "Telemedicine in Uzbekistan: Can You Get Quality Online Consultations?",
      uz: "O'zbekistonda telemeditsina: Onlayn sifatli konsultatsiyani olish mumkinmi?",
    },
    description: {
      ru: "С развитием цифровых технологий медицина становится доступнее. Сегодня в Узбекистане можно получить медицинскую консультацию онлайн, не выходя из дома. Но насколько качественными являются такие услуги? Давайте разберемся.",
      en: "With the advancement of digital technologies, medicine is becoming more accessible. Today in Uzbekistan, you can receive medical consultations online without leaving your home. But how high-quality are these services? Let's find out.",
      uz: "Raqamli texnologiyalar rivojlanishi bilan tibbiyot yanada osonlashtirilmoqda. Bugungi kunda O'zbekistonda uyda o'tirib onlayn tibbiy konsultatsiya olish mumkin. Lekin bunday xizmatlar qanchalik sifatli? Keling, aniqlab olaylik.",
    },
    option: [
      {
        title: {
          ru: "Преимущества телемедицины",
          en: "Advantages of Telemedicine",
          uz: "Telemeditsinaning afzalliklari",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: `- Доступность – можно получить консультацию врача, находясь в любом регионе страны.
- Экономия времени – нет необходимости посещать клинику и стоять в очередях.
- Консультации узких специалистов – возможность получить совет даже у редких специалистов.
- Безопасность – снижение риска заражения инфекциями в медицинских учреждениях.`,
          en: `- Accessibility – you can consult a doctor from any region of the country.
- Time-saving – no need to visit a clinic or wait in lines.
- Access to specialized consultations – possibility to get advice from even rare specialists.
- Safety – reduced risk of infection in medical facilities.`,
          uz: `- Mavjudlik – mamlakatning istalgan hududidan shifokor bilan konsultatsiya olish mumkin.
- Vaqt tejash – klinikaga borish yoki navbatda turgan holda vaqt sarflash shart emas.
- Maxsus soha bo'yicha konsultatsiyalar – hatto kam uchraydigan mutaxassislardan maslahat olish imkoniyati.
- Xavfsizlik – tibbiyot muassasalarida infeksiyalardan yuqtirish xavfini kamaytirish.`,
        },
      },
      {
        title: {
          ru: "Ограничения телемедицины",
          en: "Limitations of Telemedicine",
          uz: "Telemeditsinaning cheklovlari",
        },
        img: "",
        subtitle: {
          ru: `- Отсутствие физического осмотра – врач не может провести полноценную диагностику.
- Ограниченные возможности лечения – для некоторых заболеваний требуется очный прием.
- Качество связи – плохой интернет может усложнить консультацию.`,
          en: `- Lack of physical examination – the doctor cannot perform a full diagnosis.
- Limited treatment options – some conditions require an in-person appointment.
- Connection quality – poor internet may hinder the consultation.`,
          uz: `- Jismoniy tekshiruvning yo'qligi – shifokor to'liq tashxis qo'yolmaydi.
- Davolash imkoniyatlarining cheklanganligi – ba'zi kasalliklar yuzma-yuz qabulni talab qiladi.
- Ulanish sifati – yomon internet konsultatsiyani qiyinlashtirishi mumkin.`,
        },
      },
      {
        title: {
          ru: "Как выбрать телемедицинский сервис?",
          en: "How to Choose a Telemedicine Service?",
          uz: "Telemeditsina xizmatini qanday tanlash kerak?",
        },
        img: "https://ucarecdn.com/562a2aff-4fbb-427a-823d-d3eb829b8f11/-/preview/1000x777/",
        subtitle: {
          ru: `- Проверяйте лицензии и сертификаты врачей.
- Изучайте отзывы пациентов.
- Выбирайте платформы с удобным интерфейсом и возможностью видеосвязи.`,
          en: `- Check the licenses and certifications of doctors.
- Review patient testimonials.
- Choose platforms with user-friendly interfaces and video consultation capabilities.`,
          uz: `- Shifokorlarning litsenziya va sertifikatlarini tekshiring.
- Bemorlarning fikrlarini o'rganing.
- Foydalanuvchilarga qulay interfeys va video ulanish imkoniyatiga ega platformalarni tanlang.`,
        },
      },
      {
        title: {
          ru: "Итог",
          en: "Conclusion",
          uz: "Xulosa",
        },
        img: "",
        subtitle: {
          ru: `Телемедицина в Узбекистане – это удобный и доступный способ получить консультацию врача. Однако для серьезных случаев все же рекомендуется очный прием. Если же вам нужна быстрая консультация по анализам или симптомам, онлайн-врач может стать отличным решением.`,
          en: `Telemedicine in Uzbekistan is a convenient and accessible way to get a doctor's consultation. However, for serious cases, an in-person visit is still recommended. If you need a quick consultation regarding tests or symptoms, an online doctor can be an excellent solution.`,
          uz: `O'zbekistonda telemeditsina shifokor konsultatsiyasini olish uchun qulay va oson usuldir. Biroq, jiddiy holatlar uchun yuzma-yuz qabul tavsiya etiladi. Agar sizga tezkor konsultatsiya, tahlillar yoki simptomlar bo'yicha maslahat kerak bo'lsa, onlayn shifokor ajoyib yechim bo'lishi mumkin.`,
        },
      },
    ],
  },

  // ***** #6 *****
  {
    date: "19.02.2025",
    slug: "kak-proverit-litsenziyu-vracha-ili-kliniki-v-uzbekistane",
    title: {
      ru: "Как проверить лицензию врача или клиники в Узбекистане?",
      en: "How to Verify the License of a Doctor or Clinic in Uzbekistan?",
      uz: "O'zbekistonda shifokor yoki klinikaning litsenziyasini qanday tekshirish mumkin?",
    },
    description: {
      ru: "Выбор квалифицированного врача и надежной клиники — залог качественного медицинского обслуживания. В Узбекистане существует несколько способов проверить, имеет ли медицинское учреждение или специалист соответствующую лицензию.",
      en: "Choosing a qualified doctor and a reliable clinic is the key to quality medical care. In Uzbekistan, there are several ways to verify if a medical facility or specialist holds the proper license.",
      uz: "Sifatli tibbiy xizmat olish uchun malakali shifokor va ishonchli klinikani tanlash muhimdir. O'zbekistonda tibbiyot muassasasi yoki mutaxassisning kerakli litsenziyaga ega ekanligini tekshirishning bir necha usullari mavjud.",
    },
    option: [
      {
        title: {
          ru: "1. Проверка через Министерство здравоохранения",
          en: "1. Verification through the Ministry of Health",
          uz: "1. Sog'liqni saqlash vazirligi orqali tekshirish",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: `Министерство здравоохранения Узбекистана ведет реестр лицензированных клиник и врачей. Для проверки:
- Посетите официальный сайт Минздрава;
- Используйте поиск по названию клиники или фамилии врача;
- Ознакомьтесь с номером лицензии и сроком ее действия.`,
          en: `The Ministry of Health of Uzbekistan maintains a registry of licensed clinics and doctors. To verify:
- Visit the official website of the Ministry of Health;
- Use the search function by clinic name or doctor's surname;
- Review the license number and its validity period.`,
          uz: `O'zbekiston Sog'liqni saqlash vazirligi litsenziyalangan klinikalar va shifokorlar reestrini yuritadi. Tekshirish uchun:
- Vazirlikning rasmiy saytiga tashrif buyuring;
- Klinikalar nomi yoki shifokorning familiyasi bo'yicha qidiruvdan foydalaning;
- Litsenziya raqami va uning amal qilish muddatini ko'zdan kechiring.`,
        },
      },
      {
        title: {
          ru: "2. Обращение в Агентство санитарного надзора",
          en: "2. Contacting the Sanitary Surveillance Agency",
          uz: "2. Sanitariya nazorati agentligiga murojaat qilish",
        },
        img: "",
        subtitle: {
          ru: `Эта организация контролирует качество медицинских услуг и лицензирование клиник. Можно подать запрос для проверки легальности деятельности учреждения.`,
          en: `This organization oversees the quality of medical services and the licensing of clinics. You can request verification of the facility's legal status.`,
          uz: `Ushbu tashkilot tibbiy xizmatlar sifatini va klinikalarni litsenziyalashni nazorat qiladi. Muassasaning qonuniy faoliyatini tekshirish uchun so'rov yuborish mumkin.`,
        },
      },
      {
        title: {
          ru: "3. Проверка на сайте самой клиники",
          en: "3. Checking on the Clinic's Own Website",
          uz: "3. Klinikani o'z saytida tekshirish",
        },
        img: "https://ucarecdn.com/562a2aff-4fbb-427a-823d-d3eb829b8f11/-/preview/1000x777/",
        subtitle: {
          ru: `Многие частные медицинские центры публикуют сведения о лицензии на своих сайтах. Обратите внимание на:
- Серийный номер и дату выдачи документа;
- Орган, выдавший лицензию;
- Соответствие вида деятельности заявленной специализации.`,
          en: `Many private medical centers publish license information on their websites. Look for:
- The serial number and issue date of the document;
- The authority that issued the license;
- Whether the type of services matches the declared specialization.`,
          uz: `Ko'plab xususiy tibbiyot markazlari o'z saytlarida litsenziya ma'lumotlarini e'lon qiladi. E'tibor bering:
- Hujjatning seriya raqami va berilgan sana;
- Litsenziyani bergan organ;
- Faoliyat turi e'lon qilingan mutaxassislikka mos keladimi.`,
        },
      },
      {
        title: {
          ru: "4. Запрос в клинике",
          en: "4. Request at the Clinic",
          uz: "4. Klinikada so'rov yuborish",
        },
        img: "",
        subtitle: {
          ru: `Вы вправе потребовать показать лицензию при посещении клиники. Лицензированные учреждения обязаны предоставлять информацию по первому запросу пациента.`,
          en: `You have the right to request to see the license when visiting a clinic. Licensed facilities are required to provide this information upon a patient's request.`,
          uz: `Klinikaga borganingizda litsenziyani ko'rsatishni talab qilish huquqiga egasiz. Litsenziyalangan muassasalar bemor so'roviga binoan ma'lumotni taqdim etishlari shart.`,
        },
      },
      {
        title: {
          ru: "5. Отзывы и рекомендации",
          en: "5. Reviews and Recommendations",
          uz: "5. Fikrlar va tavsiyalar",
        },
        img: "",
        subtitle: {
          ru: `Хотя отзывы пациентов не являются официальным подтверждением лицензии, они помогут выявить сомнительные медицинские центры и специалистов без соответствующей аккредитации.`,
          en: `Although patient reviews are not official proof of licensing, they can help identify questionable medical centers and specialists who lack proper accreditation.`,
          uz: `Bemorlarning fikrlari litsenziyaning rasmiy tasdiqi bo'lmasa-da, ular shubhali tibbiyot markazlari va kerakli akkreditatsiyaga ega bo'lmagan mutaxassislarni aniqlashga yordam beradi.`,
        },
      },
      {
        title: {
          ru: "Итог",
          en: "Conclusion",
          uz: "Xulosa",
        },
        img: "",
        subtitle: {
          ru: `Проверка лицензии врача или клиники в Узбекистане — это простой, но важный шаг перед выбором медицинского учреждения. Используйте официальные ресурсы, запрашивайте документы и доверяйте только проверенным специалистам.`,
          en: `Verifying the license of a doctor or clinic in Uzbekistan is a simple yet important step before choosing a medical facility. Use official resources, request documents, and trust only verified specialists.`,
          uz: `O'zbekistonda shifokor yoki klinikaning litsenziyasini tekshirish tibbiyot muassasasini tanlashdan oldin oddiy, ammo muhim qadamdir. Rasmiy manbalardan foydalaning, hujjatlarni so'rang va faqat tekshirilgan mutaxassislarga ishoning.`,
        },
      },
    ],
  },
];
