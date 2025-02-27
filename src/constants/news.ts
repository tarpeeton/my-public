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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
      ru: "Как проверить лицензию врача или клиники в Узбекистане? Топ 5 советов.",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
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
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: `Проверка лицензии врача или клиники в Узбекистане — это простой, но важный шаг перед выбором медицинского учреждения. Используйте официальные ресурсы, запрашивайте документы и доверяйте только проверенным специалистам.`,
          en: `Verifying the license of a doctor or clinic in Uzbekistan is a simple yet important step before choosing a medical facility. Use official resources, request documents, and trust only verified specialists.`,
          uz: `O'zbekistonda shifokor yoki klinikaning litsenziyasini tekshirish tibbiyot muassasasini tanlashdan oldin oddiy, ammo muhim qadamdir. Rasmiy manbalardan foydalaning, hujjatlarni so'rang va faqat tekshirilgan mutaxassislarga ishoning.`,
        },
      },
    ],
  },

  // ***** #7 *****
  {
    date: "2025-02-25",
    slug: "kak-podgotovitsya-k-priemu-u-vracha",
    title: {
      ru: "Как подготовиться к первому приему у врача: советы для пациентов",
      en: "How to Prepare for Your First Doctor's Appointment: Tips for Patients",
      uz: "Shifokor qabuliga qanday tayyorgarlik ko‘rish kerak: bemorlar uchun maslahatlar",
    },
    description: {
      ru: "Первый визит к врачу может вызвать волнение, особенно если речь идет о новом специалисте. Чтобы прием прошел максимально эффективно, важно заранее подготовиться. Следуйте этим советам, чтобы получить качественную консультацию и не упустить важные детали.",
      en: "The first visit to a doctor can be stressful, especially if it's a new specialist. To make the appointment as effective as possible, it is important to prepare in advance. Follow these tips to get a quality consultation and not miss important details.",
      uz: "Shifokorga birinchi tashrif qo‘rqinchli bo‘lishi mumkin, ayniqsa, yangi mutaxassisga murojaat qilayotgan bo‘lsangiz. Qabulni imkon qadar samarali o‘tkazish uchun oldindan tayyorgarlik ko‘rish muhim. Muhim jihatlarni o‘tkazib yubormaslik uchun ushbu maslahatlarga amal qiling.",
    },
    option: [
      {
        title: {
          ru: "Соберите медицинскую документацию",
          en: "Gather Medical Documentation",
          uz: "Tibbiy hujjatlarni to‘plang",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Возьмите с собой медицинскую карту, анализы и список принимаемых лекарств.",
          en: "Bring your medical records, test results, and a list of medications.",
          uz: "Tibbiy kartangizni, tahlil natijalarini va qabul qilayotgan dori-darmonlaringiz ro‘yxatini o‘zingiz bilan oling.",
        },
      },
      {
        title: {
          ru: "Запишите симптомы и жалобы",
          en: "Write Down Symptoms and Complaints",
          uz: "Belgilar va shikoyatlaringizni yozib qo‘ying",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Опишите, когда начались симптомы, как часто проявляются и что их усиливает.",
          en: "Describe when symptoms started, how often they occur, and what worsens them.",
          uz: "Belgilar qachon boshlangan, qanchalik tez-tez paydo bo‘lishi va ularni kuchaytiruvchi omillar haqida yozing.",
        },
      },
      {
        title: {
          ru: "Подготовьте вопросы врачу",
          en: "Prepare Questions for the Doctor",
          uz: "Shifokor uchun savollar tayyorlang",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Запишите важные вопросы, чтобы не забыть их задать на приеме.",
          en: "Write down important questions to make sure you ask them during the appointment.",
          uz: "Muhim savollarni yozib qo‘ying, shunda qabulda ularni so‘rashni unutmaysiz.",
        },
      },
      {
        title: {
          ru: "Уточните детали приема",
          en: "Check Appointment Details",
          uz: "Qabul tafsilotlarini aniqlang",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Узнайте время приема, нужно ли приходить натощак и какие документы взять с собой.",
          en: "Check the appointment time, whether fasting is required, and what documents to bring.",
          uz: "Qabul vaqti, och qoringa kelish kerakmi va qanday hujjatlar kerakligini bilib oling.",
        },
      },
      {
        title: {
          ru: "Будьте готовы к откровенному разговору",
          en: "Be Ready for an Open Discussion",
          uz: "Ochiq suhbatga tayyor bo‘ling",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Честно отвечайте на вопросы врача о вашем здоровье и образе жизни.",
          en: "Answer the doctor's questions honestly about your health and lifestyle.",
          uz: "Shifokorning sog‘lig‘ingiz va turmush tarzingiz haqidagi savollariga halol javob bering.",
        },
      },
      {
        title: {
          ru: "Возьмите блокнот или запишите рекомендации",
          en: "Take Notes or Write Down Recommendations",
          uz: "Daftar oling yoki tavsiyalarni yozib qo‘ying",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Фиксируйте основные моменты приема, чтобы не забыть важные рекомендации.",
          en: "Write down key points from the appointment to remember important recommendations.",
          uz: "Muhim tavsiyalarni eslab qolish uchun qabulning asosiy jihatlarini yozib qo‘ying.",
        },
      },
    ],
  },

  // ***** #8 *****
  {
    date: "15.02.2025",
    slug: "preventive-medical-checkups",
    title: {
      ru: "Что важно знать о профилактических медицинских осмотрах?",
      en: "What You Need to Know About Preventive Medical Checkups",
      uz: "Profilaktik tibbiy ko‘riklar haqida nimalarni bilish muhim?",
    },
    description: {
      ru: "Профилактические медицинские осмотры помогают выявлять болезни на ранних стадиях и контролировать здоровье.",
      en: "Preventive medical checkups help detect diseases early and monitor overall health.",
      uz: "Profilaktik tibbiy ko‘riklar kasalliklarni erta aniqlash va umumiy salomatlikni nazorat qilishga yordam beradi.",
    },
    option: [
      {
        title: {
          ru: "Зачем нужны профилактические осмотры?",
          en: "Why Are Preventive Checkups Necessary?",
          uz: "Profilaktik ko‘riklar nima uchun kerak?",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Они помогают выявлять скрытые болезни, контролировать основные показатели здоровья и корректировать образ жизни.",
          en: "They help detect hidden diseases, monitor key health indicators, and adjust lifestyle habits.",
          uz: "Ular yashirin kasalliklarni aniqlashga, asosiy salomatlik ko‘rsatkichlarini nazorat qilishga va turmush tarzini to‘g‘ri yo‘naltirishga yordam beradi.",
        },
      },
      {
        title: {
          ru: "Как часто проходить медосмотр?",
          en: "How Often Should You Have a Checkup?",
          uz: "Qanchalik tez-tez tibbiy ko‘rikdan o‘tish kerak?",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Частота зависит от возраста и состояния здоровья: детям – ежегодно, взрослым до 40 лет – раз в 1-2 года, после 40 лет – ежегодно.",
          en: "The frequency depends on age and health status: children – annually, adults under 40 – every 1-2 years, after 40 – annually.",
          uz: "Tekshiruvlar chastotasi yosh va salomatlik holatiga bog‘liq: bolalar – har yili, 40 yoshgacha – har 1-2 yilda, 40 yoshdan keyin – har yili.",
        },
      },
      {
        title: {
          ru: "Какие обследования входят в профилактический осмотр?",
          en: "What Tests Are Included in a Preventive Checkup?",
          uz: "Profilaktik tibbiy ko‘rik nimalarni o‘z ichiga oladi?",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Включает анализы крови и мочи, измерение давления, флюорографию, осмотр терапевта и других специалистов.",
          en: "Includes blood and urine tests, blood pressure measurement, fluorography, and specialist consultations.",
          uz: "Qon va siydik tahlillari, qon bosimini o‘lchash, rentgen va mutaxassislar tekshiruvi kabilarni o‘z ichiga oladi.",
        },
      },
      {
        title: {
          ru: "Как подготовиться к осмотру?",
          en: "How to Prepare for a Checkup?",
          uz: "Tibbiy ko‘rikka qanday tayyorgarlik ko‘rish kerak?",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Приходите натощак, избегайте стресса, подготовьте список принимаемых лекарств и хронических заболеваний.",
          en: "Come fasting, avoid stress, prepare a list of medications and chronic diseases.",
          uz: "Och qoringa kelish, stressdan qochish, qabul qilinayotgan dori va surunkali kasalliklar ro‘yxatini tayyorlash kerak.",
        },
      },
      {
        title: {
          ru: "Где пройти профилактический осмотр в Ташкенте?",
          en: "Where to Get a Preventive Checkup in Tashkent?",
          uz: "Toshkentda qayerda profilaktik ko‘rikdan o‘tish mumkin?",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "В государственных и частных клиниках, многие центры предлагают комплексные программы обследования.",
          en: "In public and private clinics, many centers offer comprehensive checkup programs.",
          uz: "Davlat va xususiy klinikalarda, ko‘plab markazlar to‘liq tekshiruv dasturlarini taklif qiladi.",
        },
      },
      {
        title: {
          ru: "Итог",
          en: "Conclusion",
          uz: "Xulosa",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Регулярные осмотры помогают избежать серьезных проблем со здоровьем и своевременно выявлять заболевания.",
          en: "Regular checkups help prevent serious health problems and detect diseases in time.",
          uz: "Muntazam tibbiy ko‘riklar jiddiy salomatlik muammolarining oldini olishga va kasalliklarni o‘z vaqtida aniqlashga yordam beradi.",
        },
      },
    ],
  },

  // ***** #9 *****
  {
    date: "30.01.2025",
    slug: "diagnostika-tashkent",
    title: {
      ru: "Где сделать качественное УЗИ, МРТ и КТ в Ташкенте? Обзор лучших диагностических центров",
      en: "Where to Get Quality Ultrasound, MRI, and CT Scans in Tashkent? Overview of the Best Diagnostic Centers",
      uz: "Toshkentda sifatli UZI, MRT va KT qayerda qilish mumkin? Eng yaxshi diagnostika markazlari sharhi",
    },
    description: {
      ru: "Обзор лучших диагностических центров Ташкента для УЗИ, МРТ и КТ. Как выбрать клинику и записаться на обследование.",
      en: "Overview of the best diagnostic centers in Tashkent for ultrasound, MRI, and CT scans. How to choose a clinic and schedule an examination.",
      uz: "Toshkentdagi eng yaxshi diagnostika markazlari sharhi: UZI, MRT va KT uchun. Klinikani qanday tanlash va tekshiruvga yozilish.",
    },
    option: [
      {
        title: {
          ru: "На что обратить внимание при выборе диагностического центра?",
          en: "What to Look for When Choosing a Diagnostic Center?",
          uz: "Diagnostika markazini tanlashda nimaga e'tibor berish kerak?",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: `При поиске клиники для УЗИ, МРТ или КТ важно учитывать несколько факторов: 
         - Оборудование – современные аппараты обеспечивают более точные результаты.
         - Квалификация врачей – опытные специалисты умеют правильно интерпретировать снимки.
         - Отзывы пациентов – реальный опыт людей поможет сделать правильный выбор.
         - Доступность и цены – стоимость и удобство записи также важны.`,
          en: "When looking for a clinic for ultrasound, MRI, or CT scans, it is important to consider factors such as equipment, doctor qualifications, patient reviews, and prices.",
          uz: "UZI, MRT yoki KT uchun klinika tanlashda jihozlar, shifokorlarning tajribasi, bemorlarning sharhlari va narxlarni hisobga olish muhim.",
        },
      },
      {
        title: {
          ru: "1. Международный медицинский центр IMC",
          en: "1. International Medical Center IMC",
          uz: "1. Xalqaro tibbiyot markazi IMC",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Передовой центр диагностики с высокоточными аппаратами и квалифицированными врачами.",
          en: "A leading diagnostic center with high-precision equipment and qualified doctors.",
          uz: "Yuqori aniqlikdagi uskunalar va tajribali shifokorlar bilan ilg'or diagnostika markazi.",
        },
      },
      {
        title: {
          ru: "2. Клиника AKFA Medline",
          en: "2. AKFA Medline Clinic",
          uz: "2. AKFA Medline klinikasi",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Многопрофильное учреждение с современным оборудованием и точной диагностикой.",
          en: "A multidisciplinary institution with modern equipment and accurate diagnostics.",
          uz: "Zamonaviy uskunalar va aniq diagnostikaga ega ko‘p tarmoqli muassasa.",
        },
      },
      {
        title: {
          ru: "3. Евросонография",
          en: "3. Eurosonography",
          uz: "3. Yevrosonografiya",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Специализируется на УЗИ с использованием аппаратов экспертного класса.",
          en: "Specializes in ultrasound diagnostics using expert-class equipment.",
          uz: "Ekspert darajasidagi jihozlar bilan UZI diagnostikasiga ixtisoslashgan.",
        },
      },
      {
        title: {
          ru: '4. Медицинский центр "Ташкент"',
          en: "4. Tashkent Medical Center",
          uz: "4. Toshkent tibbiyot markazi",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Предлагает широкий спектр диагностических услуг, включая МРТ и КТ.",
          en: "Offers a wide range of diagnostic services, including MRI and CT scans.",
          uz: "MRT va KT ni o‘z ichiga olgan keng diagnostika xizmatlarini taklif etadi.",
        },
      },
      {
        title: {
          ru: "5. Vita Med",
          en: "5. Vita Med",
          uz: "5. Vita Med",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Современный центр с оперативным обслуживанием и внимательным подходом к пациентам.",
          en: "A modern center with fast service and a patient-centered approach.",
          uz: "Tezkor xizmat va bemorlarga e'tiborli yondashuvga ega zamonaviy markaz.",
        },
      },
    ],
  },

  // ***** #9 *****
  {
    date: "15.01.2025",
    slug: "stomatologiya-tashkent",
    title: {
      ru: "Топ-5 стоматологических клиник Ташкента: где лечить зубы?",
      en: "Top 5 Dental Clinics in Tashkent: Where to Treat Your Teeth?",
      uz: "Toshkentdagi eng yaxshi 5 stomatologik klinika: qayerda tish davolash mumkin?",
    },
    description: {
      ru: "Обзор лучших стоматологических клиник Ташкента, предлагающих качественное лечение зубов, имплантацию и эстетическую стоматологию.",
      en: "An overview of the best dental clinics in Tashkent offering quality dental treatment, implantation, and aesthetic dentistry.",
      uz: "Toshkentdagi eng yaxshi stomatologik klinikalar sharhi: sifatli tish davolash, implantatsiya va estetik stomatologiya.",
    },
    option: [
      {
        title: {
          ru: "1. MyDent Clinic",
          en: "1. MyDent Clinic",
          uz: "1. MyDent Clinic",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Одна из ведущих стоматологических клиник Ташкента, предлагающая полный спектр услуг — от профессиональной гигиены до сложной хирургии. Использует новейшие технологии и материалы, а также предлагает лечение без боли.",
          en: "One of the leading dental clinics in Tashkent, offering a full range of services from professional hygiene to complex surgery. Uses the latest technologies and materials and offers pain-free treatment.",
          uz: "Toshkentdagi yetakchi stomatologik klinikalardan biri bo‘lib, professional gigiyenadan tortib murakkab jarrohlik amaliyotigacha bo‘lgan xizmatlarni taklif qiladi. Eng yangi texnologiyalar va materiallardan foydalanadi hamda og‘riqsiz davolashni taqdim etadi.",
        },
      },
      {
        title: {
          ru: "2. Dental House",
          en: "2. Dental House",
          uz: "2. Dental House",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Современная клиника с опытными врачами и передовым оборудованием. Специализируется на эстетической стоматологии, имплантации и протезировании.",
          en: "A modern clinic with experienced doctors and advanced equipment. Specializes in aesthetic dentistry, implantation, and prosthetics.",
          uz: "Tajribali shifokorlar va ilg‘or uskunalar bilan jihozlangan zamonaviy klinika. Estetik stomatologiya, implantatsiya va protezlash bo‘yicha ixtisoslashgan.",
        },
      },
      {
        title: {
          ru: "3. Smile Expert",
          en: "3. Smile Expert",
          uz: "3. Smile Expert",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Популярная клиника с широким спектром стоматологических услуг. Отличается высоким качеством работы и индивидуальным подходом к каждому пациенту.",
          en: "A popular clinic with a wide range of dental services. Known for its high-quality work and personalized approach to each patient.",
          uz: "Keng ko‘lamli stomatologik xizmatlarga ega mashhur klinika. Yuqori sifatli ishlari va har bir bemorga individual yondashuvi bilan ajralib turadi.",
        },
      },
      {
        title: {
          ru: "4. Neo Dental",
          en: "4. Neo Dental",
          uz: "4. Neo Dental",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Клиника с международными стандартами, предлагающая инновационные методы лечения. Специализируется на ортодонтии, имплантации и хирургической стоматологии.",
          en: "A clinic with international standards offering innovative treatment methods. Specializes in orthodontics, implantation, and surgical dentistry.",
          uz: "Xalqaro standartlarga mos keladigan klinika bo‘lib, innovatsion davolash usullarini taklif etadi. Ortodontiya, implantatsiya va jarrohlik stomatologiyasiga ixtisoslashgan.",
        },
      },
      {
        title: {
          ru: "5. Prime Dental",
          en: "5. Prime Dental",
          uz: "5. Prime Dental",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Одна из лучших клиник в городе, известная своими профессиональными врачами и комфортной атмосферой. Использует цифровые технологии для точной диагностики и лечения.",
          en: "One of the best clinics in the city, known for its professional doctors and comfortable atmosphere. Uses digital technologies for precise diagnostics and treatment.",
          uz: "Shahardagi eng yaxshi klinikalardan biri bo‘lib, professional shifokorlari va qulay muhit bilan mashhur. Aniq diagnostika va davolash uchun raqamli texnologiyalardan foydalanadi.",
        },
      },
    ],
  },

  // ***** 10 *****
  {
    date: "10.01.2025",
    slug: "eko-uzbekistan",
    title: {
      ru: "Лучшие центры ЭКО в Узбекистане: стоимость и особенности процедуры",
      en: "Best IVF Centers in Uzbekistan: Costs and Features",
      uz: "O‘zbekistondagi eng yaxshi EKO markazlari: narxlar va xususiyatlar",
    },
    description: {
      ru: "Обзор ведущих клиник Узбекистана, специализирующихся на экстракорпоральном оплодотворении (ЭКО), их особенности и цены.",
      en: "Review of leading clinics in Uzbekistan specializing in in vitro fertilization (IVF), their features, and pricing.",
      uz: "O‘zbekistonda ekstrakorporal urug‘lantirish (EKO) bo‘yicha ixtisoslashgan yetakchi klinikalar sharhi, ularning xususiyatlari va narxlari.",
    },
    option: [
      {
        title: {
          ru: "1. Центр репродукции 'Embryo'",
          en: "1. Embryo Reproduction Center",
          uz: "1. 'Embryo' reproduksiya markazi",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Один из ведущих ЭКО-центров в Ташкенте, использующий передовые методы лечения бесплодия. Высокий процент успешных программ.",
          en: "One of the leading IVF centers in Tashkent, utilizing advanced infertility treatment methods. High success rates.",
          uz: "Toshkentdagi yetakchi EKO markazlaridan biri, bepushtlikni davolashning ilg‘or usullaridan foydalanadi. Yuqori muvaffaqiyat darajasi.",
        },
      },
      {
        title: {
          ru: "2. Клиника 'Madina IVF'",
          en: "2. Madina IVF Clinic",
          uz: "2. 'Madina IVF' klinikasi",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Современное оборудование и квалифицированные специалисты. Полный спектр услуг – от диагностики до имплантации эмбриона.",
          en: "Modern equipment and qualified specialists. Full range of services from diagnostics to embryo implantation.",
          uz: "Zamonaviy uskunalar va malakali mutaxassislar. Diagnostikadan embrion implantatsiyasigacha bo‘lgan to‘liq xizmatlar.",
        },
      },
      {
        title: {
          ru: "3. Международный центр репродуктивной медицины (ICRM)",
          en: "3. International Center for Reproductive Medicine (ICRM)",
          uz: "3. Xalqaro reproduktiv tibbiyot markazi (ICRM)",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Работает по международным стандартам. Возможность проведения сложных репродуктивных программ.",
          en: "Operates according to international standards. Offers complex reproductive programs.",
          uz: "Xalqaro standartlarga muvofiq ishlaydi. Murakkab reproduktiv dasturlarni taklif qiladi.",
        },
      },
      {
        title: {
          ru: "4. 'Nihol IVF'",
          en: "4. Nihol IVF",
          uz: "4. 'Nihol IVF'",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Доступные цены на программы ЭКО. Использование современных методик для повышения успешности.",
          en: "Affordable prices for IVF programs. Uses modern methods to increase success rates.",
          uz: "EKO dasturlari uchun maqbul narxlar. Muvaffaqiyatni oshirish uchun zamonaviy usullardan foydalanadi.",
        },
      },
      {
        title: {
          ru: "5. Клиника 'Avitsenna'",
          en: "5. Avitsenna Clinic",
          uz: "5. 'Avitsenna' klinikasi",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Полный спектр услуг по лечению бесплодия. Возможность криоконсервации эмбрионов и донорских программ.",
          en: "Full range of infertility treatments. Offers embryo cryopreservation and donor programs.",
          uz: "Bepushtlikni davolash bo‘yicha to‘liq xizmatlar. Embrionlarni kriokonservatsiya qilish va donor dasturlarini taklif qiladi.",
        },
      },
    ],
  },

  // ***** 11 *****

  {
    date: "05.01.2025",
    slug: "top-10-analizov-kotorie-stoit-sdavat-raz-v-god",
    title: {
      ru: "ТОП-10 анализов, которые стоит сдавать раз в год",
      en: "Top 10 Tests to Take Annually",
      uz: "Har yili topshirish tavsiya etiladigan 10 ta tahlil",
    },
    description: {
      ru: "Регулярные медицинские обследования помогают выявлять заболевания на ранних стадиях и сохранять здоровье.",
      en: "Regular medical check-ups help detect diseases at an early stage and maintain health.",
      uz: "Muntazam tibbiy tekshiruvlar kasalliklarni erta aniqlashga va sog‘liqni saqlashga yordam beradi.",
    },
    option: [
      {
        title: {
          ru: "1. Общий анализ крови (ОАК)",
          en: "1. Complete Blood Count (CBC)",
          uz: "1. Umumiy qon tahlili (UQT)",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Помогает оценить общее состояние здоровья, выявить анемию, воспалительные процессы и другие патологии.",
          en: "Helps assess overall health, detect anemia, inflammation, and other pathologies.",
          uz: "Umumiy sog‘liq holatini baholash, kamqonlik, yallig‘lanish jarayonlari va boshqa patologiyalarni aniqlashga yordam beradi.",
        },
      },
      {
        title: {
          ru: "2. Биохимический анализ крови",
          en: "2. Biochemical Blood Test",
          uz: "2. Biokimyoviy qon tahlili",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Определяет уровень глюкозы, холестерина, белков, ферментов печени и почек.",
          en: "Determines glucose, cholesterol, protein levels, and liver and kidney enzymes.",
          uz: "Glyukoza, xolesterin, oqsillar, jigar va buyrak fermentlari darajasini aniqlaydi.",
        },
      },
      {
        title: {
          ru: "3. Анализ крови на сахар",
          en: "3. Blood Sugar Test",
          uz: "3. Qon shakarini tekshirish",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Позволяет вовремя обнаружить преддиабетическое состояние и диабет.",
          en: "Helps detect prediabetes and diabetes in time.",
          uz: "Prediabet va diabetni o‘z vaqtida aniqlashga yordam beradi.",
        },
      },
      {
        title: {
          ru: "4. Липидный профиль",
          en: "4. Lipid Profile",
          uz: "4. Lipid profili",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Определяет уровень хорошего и плохого холестерина, что важно для профилактики атеросклероза и сердечно-сосудистых заболеваний.",
          en: "Determines good and bad cholesterol levels, important for preventing atherosclerosis and cardiovascular diseases.",
          uz: "Yaxshi va yomon xolesterin darajasini aniqlaydi, ateroskleroz va yurak-qon tomir kasalliklarini oldini olishda muhim.",
        },
      },
      {
        title: {
          ru: "5. Общий анализ мочи",
          en: "5. General Urine Test",
          uz: "5. Umumiy siydik tahlili",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Помогает выявить инфекции мочевыводящих путей, болезни почек и другие нарушения.",
          en: "Helps detect urinary tract infections, kidney diseases, and other disorders.",
          uz: "Siymoviy yo‘llar infeksiyalari, buyrak kasalliklari va boshqa buzilishlarni aniqlashga yordam beradi.",
        },
      },
    ],
  },
  // ***** 12 *****
  {
    date: "01.01.2025",
    slug: "kak-vybrat-semeynogo-vracha",
    title: {
      ru: "Как правильно выбрать семейного врача?",
      en: "How to Choose the Right Family Doctor?",
      uz: "Qanday qilib to‘g‘ri oilaviy shifokorni tanlash mumkin?",
    },
    description: {
      ru: "Выбор семейного врача — важное решение, от которого зависит здоровье всей семьи.",
      en: "Choosing a family doctor is an important decision that affects the health of the whole family.",
      uz: "Oilaviy shifokorni tanlash butun oilaning salomatligiga ta’sir qiluvchi muhim qarordir.",
    },
    option: [
      {
        title: {
          ru: "1. Квалификация и опыт",
          en: "1. Qualification and Experience",
          uz: "1. Malaka va tajriba",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Обратите внимание на образование, стаж работы и специализацию врача.",
          en: "Pay attention to the doctor's education, work experience, and specialization.",
          uz: "Shifokorning ta’limi, ish tajribasi va mutaxassisligiga e’tibor bering.",
        },
      },
      {
        title: {
          ru: "2. Отзывы пациентов",
          en: "2. Patient Reviews",
          uz: "2. Bemorlarning fikrlari",
        },
         img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Отзывы помогут понять, насколько врач внимателен и компетентен.",
          en: "Reviews help understand how attentive and competent the doctor is.",
          uz: "Fikr-mulohazalar shifokorning e’tiborli va malakali ekanligini tushunishga yordam beradi.",
        },
      },
      {
        title: {
          ru: "3. Умение общаться и индивидуальный подход",
          en: "3. Communication Skills and Individual Approach",
          uz: "3. Muloqot qobiliyati va individual yondashuv",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Важно, чтобы врач умел доступно объяснять медицинские термины.",
          en: "It is important for the doctor to explain medical terms clearly.",
          uz: "Shifokorning tibbiy atamalarni tushunarli tushuntira olishi muhim.",
        },
      },
      {
        title: {
          ru: "4. Доступность и удобство записи",
          en: "4. Accessibility and Appointment Convenience",
          uz: "4. Mavjudlik va qabulga yozilish qulayligi",
        },
          img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Проверьте, насколько легко записаться на приём и время ожидания.",
          en: "Check how easy it is to make an appointment and waiting times.",
          uz: "Qabulga yozilish qulayligi va kutish vaqti haqida bilib oling.",
        },
      },
      {
        title: {
          ru: "5. Комплексный подход к здоровью",
          en: "5. Comprehensive Health Approach",
          uz: "5. Sog‘liqni kompleks yondashuv",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Врач должен не только лечить, но и давать профилактические рекомендации.",
          en: "The doctor should not only treat but also provide preventive recommendations.",
          uz: "Shifokor faqat davolash bilan cheklanmasdan, profilaktik tavsiyalar ham berishi kerak.",
        },
      },
    ],
  },

  // ***** 12 *****
  {
    date: "16.01.2025",
    slug: "vaktsinatsiya-v-uzbekistane",
    title: {
      ru: "Вакцинация в Узбекистане: какие прививки нужны детям и взрослым?",
      en: "How to Choose the Right Family Doctor?",
      uz: "Qanday qilib to‘g‘ri oilaviy shifokorni tanlash mumkin?",
    },
    description: {
      ru: "Вакцинация – эффективный способ защиты от опасных инфекционных заболеваний. В Узбекистане действует Национальный календарь прививок, который регламентирует обязательную иммунизацию для детей и рекомендуемые вакцины для взрослых. Рассмотрим, какие прививки необходимы на разных этапах жизни.",
      en: "Choosing a family doctor is an important decision that affects the health of the whole family.",
      uz: "Oilaviy shifokorni tanlash butun oilaning salomatligiga ta’sir qiluvchi muhim qarordir.",
    },
    option: [
      {
        title: {
          ru: "1. Обязательные прививки для детей",
          en: "1. Qualification and Experience",
          uz: "1. Malaka va tajriba",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: `Согласно Национальному календарю, дети получают следующие прививки:
          - Новорожденные (в роддоме):
    - БЦЖ (против туберкулёза);
    - Гепатит B (первая доза).
- 2 месяца:
    - Гепатит B (вторая доза);
    - АКДС (коклюш, дифтерия, столбняк);
    - Полиомиелит (оральная или инактивированная вакцина);
    - Хиб-инфекция (гемофильная инфекция).
- 3 месяца:
    - Вторая доза АКДС;
    - Вторая доза полиомиелита;
    - Вторая доза Хиб-инфекции.
- 4 месяца:
    - Третья доза АКДС;
    - Третья доза полиомиелита;
    - Третья доза Хиб-инфекции.
- 12 месяцев:
    - Корь, краснуха, паротит (КПК);
    - Гепатит B (третья доза).
- 18 месяцев:
- Ревакцинация АКДС;
- Ревакцинация полиомиелита.
- 6 лет:
    - Вторая доза КПК;
    - Ревакцинация от дифтерии и столбняка (АДС).
- 14 лет:
    - Повторная ревакцинация от дифтерии и столбняка (АДС-М).
          `,
          en: "Pay attention to the doctor's education, work experience, and specialization.",
          uz: "Shifokorning ta’limi, ish tajribasi va mutaxassisligiga e’tibor bering.",
        },
      },
      {
        title: {
          ru: "2. Какие прививки рекомендуются взрослым?",
          en: "2. Patient Reviews",
          uz: "2. Bemorlarning fikrlari",
        },
         img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: `Для поддержания иммунитета взрослым рекомендуется:

- Каждые 10 лет: ревакцинация против дифтерии и столбняка.
- Ежегодно: прививка от гриппа, особенно людям старше 60 лет, беременным и лицам с хроническими заболеваниями.
- При планировании беременности: вакцинация против краснухи и кори.
- От гепатита B: взрослым, не привитым ранее.
- Против ВПЧ (вируса папилломы человека): рекомендуется женщинам до 26 лет для профилактики рака шейки матки.
- От пневмококковой инфекции: взрослым старше 65 лет и людям с хроническими заболеваниями.
- Прививка от COVID-19: рекомендуется взрослым и пожилым людям для защиты от осложнений инфекции.`,
          en: "Reviews help understand how attentive and competent the doctor is.",
          uz: "Fikr-mulohazalar shifokorning e’tiborli va malakali ekanligini tushunishga yordam beradi.",
        },
      },
      {
        title: {
          ru: "3. Где сделать прививки в Узбекистане?",
          en: "3. Communication Skills and Individual Approach",
          uz: "3. Muloqot qobiliyati va individual yondashuv",
        },
           img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Прививки можно сделать в государственных поликлиниках бесплатно (по национальному календарю) или в частных медицинских центрах на платной основе.",
          en: "It is important for the doctor to explain medical terms clearly.",
          uz: "Shifokorning tibbiy atamalarni tushunarli tushuntira olishi muhim.",
        },
      },
      {
        title: {
          ru: "Итог",
          en: "4. Accessibility and Appointment Convenience",
          uz: "4. Mavjudlik va qabulga yozilish qulayligi",
        },
          img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Вакцинация – это надежный способ защиты от серьезных инфекционных заболеваний. Соблюдение графика прививок помогает предотвратить вспышки эпидемий и укрепить коллективный иммунитет. Проверьте свой прививочный статус и позаботьтесь о своем здоровье вовремя!",
          en: "Check how easy it is to make an appointment and waiting times.",
          uz: "Qabulga yozilish qulayligi va kutish vaqti haqida bilib oling.",
        },
      },
    ],
  },
  // ***** 13 *****
  {
    date: "15.02.2025",
    slug: "zdorovyy-obraz-zhizni",
    title: {
      ru: "Как распознать симптомы серьезных заболеваний на ранних стадиях?",
      en: "How to recognize the symptoms of serious diseases at an early stage?",
      uz: "Og'ir kasalliklarning dastlabki bosqichlarida alomatlarini qanday aniqlash mumkin?",
    },
    description: {
      ru: "Вакцинация – эффективный способ защиты от опасных инфекционных заболеваний. В Узбекистане действует Национальный календарь прививок, который регламентирует обязательную иммунизацию для детей и рекомендуемые вакцины для взрослых. Рассмотрим, какие прививки необходимы на разных этапах жизни.",
      en: "Vaccination is an effective way to protect against dangerous infectious diseases. Uzbekistan has a National Immunization Schedule that regulates mandatory vaccinations for children and recommended vaccines for adults. Let’s take a look at which vaccines are needed at different stages of life.",
      uz: "Emlash – xavfli yuqumli kasalliklardan himoya qilishning samarali usuli hisoblanadi. O'zbekistonda bolalar uchun majburiy va kattalar uchun tavsiya etilgan emlashlarni tartibga soluvchi Milliy emlash taqvimi mavjud. Hayotning turli bosqichlarida qaysi emlashlar zarurligini ko'rib chiqamiz.",
    },
    option: [
      {
        title: {
          ru: "1. Обязательные прививки для детей",
          en: "1. Mandatory vaccinations for children",
          uz: "1. Bolalar uchun majburiy emlashlar",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Согласно Национальному календарю, дети получают следующие прививки:\n\n- Новорожденные (в роддоме):\n    - БЦЖ (против туберкулёза);\n    - Гепатит B (первая доза).\n- 2 месяца:\n    - Гепатит B (вторая доза);\n    - АКДС (коклюш, дифтерия, столбняк);\n    - Полиомиелит (оральная или инактивированная вакцина);\n    - Хиб-инфекция (гемофильная инфекция).\n- 3 месяца:\n    - Вторая доза АКДС;\n    - Вторая доза полиомиелита;\n    - Вторая доза Хиб-инфекции.\n- 4 месяца:\n    - Третья доза АКДС;\n    - Третья доза полиомиелита;\n    - Третья доза Хиб-инфекции.\n- 12 месяцев:\n    - Корь, краснуха, паротит (КПК);\n    - Гепатит B (третья доза).\n- 18 месяцев:\n    - Ревакцинация АКДС;\n    - Ревакцинация полиомиелита.\n- 6 лет:\n    - Вторая доза КПК;\n    - Ревакцинация от дифтерии и столбняка (АДС).\n- 14 лет:\n    - Повторная ревакцинация от дифтерии и столбняка (АДС-М).",
          en: "According to the National Immunization Schedule, children receive the following vaccinations:\n\n- Newborns (at the maternity hospital):\n    - BCG (against tuberculosis);\n    - Hepatitis B (first dose).\n- 2 months:\n    - Hepatitis B (second dose);\n    - DTP (whooping cough, diphtheria, tetanus);\n    - Polio (oral or inactivated vaccine);\n    - Hib infection (Haemophilus influenzae type B).\n- 3 months:\n    - Second dose of DTP;\n    - Second dose of polio;\n    - Second dose of Hib infection.\n- 4 months:\n    - Third dose of DTP;\n    - Third dose of polio;\n    - Third dose of Hib infection.\n- 12 months:\n    - Measles, rubella, mumps (MMR);\n    - Hepatitis B (third dose).\n- 18 months:\n    - DTP booster;\n    - Polio booster.\n- 6 years:\n    - Second dose of MMR;\n    - Diphtheria and tetanus booster (DT).\n- 14 years:\n    - Additional diphtheria and tetanus booster (DT-M).",
          uz: "Milliy emlash taqvimiga ko'ra, bolalar quyidagi emlashlarni oladilar:\n\n- Yangi tug'ilgan chaqaloqlar (tug'ruqxonada):\n    - BCG (silga qarshi);\n    - Gepatit B (birinchi doza).\n- 2 oy:\n    - Gepatit B (ikkinchi doza);\n    - DTP (ko'kyo'tal, difteriya, qoqshol);\n    - Poliovirus (og'iz orqali yoki inaktivlangan vaksina);\n    - Hib-infeksiya (gemofil infeksiya).\n- 3 oy:\n    - DTPning ikkinchi dozasi;\n    - Poliovirusning ikkinchi dozasi;\n    - Hib-infeksiyaning ikkinchi dozasi.\n- 4 oy:\n    - DTPning uchinchi dozasi;\n    - Poliovirusning uchinchi dozasi;\n    - Hib-infeksiyaning uchinchi dozasi.\n- 12 oy:\n    - Qizamiq, qizilcha, epidemik parotit (MMR);\n    - Gepatit B (uchinchi doza).\n- 18 oy:\n    - DTP revaktsinatsiyasi;\n    - Poliovirus revaktsinatsiyasi.\n- 6 yil:\n    - MMRning ikkinchi dozasi;\n    - Difteriya va qoqsholga qarshi revaktsinatsiya (DT).\n- 14 yil:\n    - Difteriya va qoqsholga qo'shimcha revaktsinatsiya (DT-M).",
        },
      },
    ],
  },
  // ***** 13 *****
  {
    date: "01.04.2025",
    slug: "rekomendatsii-po-zdorovyu",
    title: {
      ru: "Здоровый образ жизни: как поддерживать свое здоровье без частых визитов к врачу?",
      en: "Healthy Lifestyle: How to Maintain Your Health Without Frequent Doctor Visits?",
      uz: "Sog‘lom turmush tarzi: Shifokorga tez-tez borishni talab qilmaydigan sog‘liqni qanday saqlash mumkin?",
    },
    description: {
      ru: "Здоровье – это не только отсутствие болезней, но и активный образ жизни, правильное питание и забота о своем физическом и психоэмоциональном состоянии. Соблюдение нескольких простых правил поможет вам чувствовать себя хорошо без необходимости частых визитов к врачу.",
      en: "Health is not just the absence of diseases but also an active lifestyle, proper nutrition, and taking care of your physical and emotional well-being. Following a few simple rules will help you feel good without the need for frequent doctor visits.",
      uz: "Sog‘liq – bu nafaqat kasalliklarning yo‘qligi, balki faol turmush tarzi, to‘g‘ri ovqatlanish va jismoniy hamda ruhiy holatga g‘amxo‘rlik qilishdir. Bir nechta oddiy qoidalarga rioya qilish sizga tez-tez shifokorga borishga hojat qoldirmasdan o‘zingizni yaxshi his qilishga yordam beradi.",
    },
    option: [
      {
        title: {
          ru: "1. Соблюдайте сбалансированное питание",
          en: "1. Maintain a Balanced Diet",
          uz: "1. Muvozanatli ovqatlanishni saqlang",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Рацион должен включать:\n- свежие овощи и фрукты (источник витаминов и клетчатки);\n- нежирные белки (курица, рыба, бобовые);\n- полезные жиры (орехи, авокадо, оливковое масло);\n- цельнозерновые продукты (гречка, бурый рис, овсянка);\n- достаточное количество воды (не менее 1,5–2 литров в день).",
          en: "Your diet should include:\n- Fresh vegetables and fruits (source of vitamins and fiber);\n- Lean proteins (chicken, fish, legumes);\n- Healthy fats (nuts, avocado, olive oil);\n- Whole grains (buckwheat, brown rice, oatmeal);\n- Sufficient water intake (at least 1.5–2 liters per day).",
          uz: "Sizning ratsioningiz quyidagilarni o‘z ichiga olishi kerak:\n- Yangi sabzavotlar va mevalar (vitaminlar va tolalar manbai);\n- Yog‘siz oqsillar (tovuq, baliq, dukkakli mahsulotlar);\n- Foydali yog‘lar (yong‘oq, avakado, zaytun moyi);\n- Butun don mahsulotlari (grechka, jigarrang guruch, suli yormasi);\n- Yetarli miqdorda suv iste’moli (kuniga kamida 1,5–2 litr).",
        },
      },
      {
        title: {
          ru: "2. Поддерживайте физическую активность",
          en: "2. Stay Physically Active",
          uz: "2. Jismoniy faollikni saqlang",
        },
        img: "https://ucarecdn.com/a4e557fc-cc5d-44aa-908c-cd481c8b65b1/-/preview/1000x777/",
        subtitle: {
          ru: "Регулярные занятия спортом укрепляют сердечно-сосудистую систему, улучшают настроение и помогают поддерживать вес. Достаточно 30 минут умеренной активности (ходьба, плавание, йога) 5 раз в неделю.",
          en: "Regular physical activity strengthens the cardiovascular system, improves mood, and helps maintain weight. Just 30 minutes of moderate activity (walking, swimming, yoga) five times a week is enough.",
          uz: "Muntazam jismoniy faollik yurak-qon tomir tizimini mustahkamlaydi, kayfiyatni yaxshilaydi va vaznni nazorat qilishga yordam beradi. Haftada besh marta 30 daqiqalik o‘rtacha jismoniy faollik (yurish, suzish, yoga) kifoya qiladi.",
        },
      },
    ],
  },
  {
    date: "20.02.2025",
    slug: "meditsiniskiy-straxovka-v-uzbekistane",
    title: {
        ru: "Медицинская страховка в Узбекистане: как она работает и где оформить?",
        en: "Medical insurance in Uzbekistan: how it works and where to get it?",
        uz: "O‘zbekistonda tibbiy sug‘urta: u qanday ishlaydi va qaerda rasmiylashtiriladi?"
      },
      description: {
        ru: "Медицинская страховка – это важный инструмент защиты здоровья и финансовой безопасности. В Узбекистане система медицинского страхования развивается, предлагая гражданам и иностранцам разные виды полисов. Разберемся, как работает страховка и где ее можно оформить.",
        en: "Medical insurance is an important tool for protecting health and financial security. In Uzbekistan, the medical insurance system is developing, offering different types of policies for both citizens and foreigners. Let's find out how the insurance works and where it can be obtained.",
        uz: "Tibbiy sug‘urta — bu sog‘liq va moliyaviy xavfsizlikni himoya qilishda muhim vosita. O‘zbekistonda tibbiy sug‘urta tizimi rivojlanib bormoqda, fuqarolar va chet elliklarga turli xil sug‘urta polislarini taklif etadi. Keling, sug‘urta qanday ishlashini va uni qaerda rasmiylashtirish mumkinligini ko‘rib chiqamiz."
      },
    option: [
      {
        title: {
            ru: "Как работает медицинская страховка?",
            en: "How does medical insurance work?",
            uz: "Tibbiy sug‘urta qanday ishlaydi?"
          },
        img: "https://ucarecdn.com/dc9414d3-229e-4779-af96-0dbc1112f788/-/preview/1000x777/",
        subtitle: {
            ru: `Медицинская страховка покрывает часть или все расходы на лечение, диагностику, медикаменты и другие медицинские услуги в зависимости от условий полиса. Основные принципы работы страхования в Узбекистане: 
          1.Выбор страховой компании – клиент заключает договор со страховой организацией.
          2.Оплата страхового взноса – ежемесячно, раз в год или единоразово.
          3.Обслуживание в медицинских учреждениях – страховая компания сотрудничает с определенными клиниками, где можно получить услуги.
          4.Компенсация расходов – при наступлении страхового случая компания покрывает часть или все медицинские затраты в рамках договора.`,
            en: `Medical insurance covers part or all of the costs of treatment, diagnosis, medications, and other medical services, depending on the policy conditions. The basic principles of insurance in Uzbekistan are:
          1. Choosing an insurance company – the client concludes an agreement with the insurance organization.
          2. Paying the insurance premium – monthly, annually, or as a one-time payment.
          3. Service in medical institutions – the insurance company collaborates with specific clinics where services can be provided.
          4. Expense reimbursement – in the event of an insured incident, the company covers part or all of the medical costs under the contract.`,
            uz: `Tibbiy sug‘urta sug‘urta polisining shartlariga qarab davolanish, diagnostika, dori-darmonlar va boshqa tibbiy xizmatlar xarajatlarining bir qismini yoki barchasini qoplaydi. O‘zbekistondagi sug‘urta tizimining asosiy tamoyillari:
          1. Sug‘urta kompaniyasini tanlash – mijoz sug‘urta tashkiloti bilan shartnoma tuzadi.
          2. Sug‘urta badalini to‘lash – oylik, har yili yoki bir martalik to‘lov sifatida.
          3. Tibbiy muassasalarda xizmat ko‘rsatish – sug‘urta kompaniyasi hamkorlik qiladigan muayyan klinikalarda xizmatdan foydalanish mumkin.
          4. Xarajatlarni qoplash – sug‘urta hodisasi sodir bo‘lgan taqdirda, kompaniya shartnoma doirasida tibbiy xarajatlarning bir qismini yoki barchasini qoplaydi.`
          }
          
      },
      {
        title: {
            ru: "Какие виды медицинского страхования доступны?",
            en: "What types of medical insurance are available?",
            uz: "Qanday turdagi tibbiy sug‘urta turlari mavjud?"
          },
          
        img: "https://ucarecdn.com/fe80ef95-4038-4cf1-8a61-8f6263a16c89/-/preview/1000x777/",
        subtitle: {
            ru: `- Государственное страхование – для сотрудников бюджетных организаций и отдельных категорий граждан.
          - Добровольное медицинское страхование (ДМС) – покрывает амбулаторное, стационарное лечение, диагностику и лекарства.
          - Корпоративное страхование – компании страхуют своих сотрудников, предоставляя доступ к медучреждениям.
          - Страхование для иностранных граждан – необходимо для получения медицинской помощи в стране.`,
            en: `- State insurance – for employees of publicly funded organizations and certain categories of citizens.
          - Voluntary medical insurance (VMI) – covers outpatient and inpatient treatment, diagnostics, and medications.
          - Corporate insurance – companies insure their employees, providing them with access to medical institutions.
          - Insurance for foreign citizens – required to receive medical care in the country.`,
            uz: `- Davlat sugʻurtasi – byudjet tashkilotlari xodimlari va ayrim toifadagi fuqarolar uchun.
          - Ixtiyoriy tibbiy sugʻurta (ITS) – ambulator va statsionar davolash, diagnostika hamda dori-darmonlarni qoplaydi.
          - Korporativ sugʻurta – kompaniyalar oʻz xodimlarini sugʻurtalab, ularga tibbiy muassasalarga kirish imkoniyatini taqdim etadi.
          - Chet el fuqarolari uchun sugʻurta – mamlakatda tibbiy yordam olish uchun zarur.`
          }
      },
      {
        title: {
            ru: "Где оформить медицинскую страховку в Узбекистане?",
            en: "Where to get medical insurance in Uzbekistan?",
            uz: "O‘zbekistonda tibbiy sug‘urtani qayerda rasmiylashtirish mumkin?"
          },
        img: "",
        subtitle: {
            ru: `
                    Медицинские полисы можно получить в страховых компаниях, предлагающих ДМС, а также в банках, сотрудничающих со страховщиками. Среди популярных организаций:
          - Uzagrosugurta
          - Kapital Sug'urta
          - Alfa Insurance
          - Gross Insurance
          - Madad Insurance
          
          Перед оформлением полиса важно:
          
          - Изучить покрытие (что входит в страховку, а что нет);
          - Узнать список клиник, с которыми сотрудничает страховая компания;
          - Проверить лимиты выплат и условия компенсации расходов.
                    `,
            en: `
                    You can get medical policies at insurance companies offering voluntary medical insurance (VMI), as well as at banks that partner with insurance providers. Some popular organizations include:
          - Uzagrosugurta
          - Kapital Sug'urta
          - Alfa Insurance
          - Gross Insurance
          - Madad Insurance
          
          Before obtaining a policy, it is important to:
          
          - Review the coverage (what is and isn't included);
          - Check the list of clinics affiliated with the insurance company;
          - Verify the coverage limits and the conditions for expense reimbursement.
                    `,
            uz: `
                    Tibbiy polislarni ixtiyoriy tibbiy sug‘urta (ITS) xizmatlari ko‘rsatadigan sug‘urta kompaniyalarida, shuningdek, sug‘urtalovchilar bilan hamkorlik qiladigan banklarda olish mumkin. Mashhur tashkilotlar orasida:
          - Uzagrosugurta
          - Kapital Sug'urta
          - Alfa Insurance
          - Gross Insurance
          - Madad Insurance
          
          Polisni rasmiylashtirishdan oldin quyidagilarga e’tibor qaratish muhim:
          
          - Qamrovni o‘rganish (nima sug‘urta qilinadi, nimalar qilinmaydi);
          - Sug‘urta kompaniyasi bilan hamkorlik qiladigan klinikalar ro‘yxatini tekshirish;
          - To‘lov limitlari va xarajatlarni qoplash shartlarini ko‘rib chiqish.
                    `
          }
          
      },
      {
        title: {
            ru: "Вывод",
            en: "Conclusion",
            uz: "Xulosa"
          },
        img: "",
        subtitle: {
            ru: `Медицинская страховка в Узбекистане становится все более востребованной, обеспечивая пациентам доступ к качественной медицине и снижая финансовую нагрузку при лечении. Выбирая полис, важно учитывать свои потребности, состояние здоровья и список доступных клиник. Оформление страхования – это инвестиция в безопасность и уверенность в будущем!`,
            en: `Medical insurance in Uzbekistan is becoming increasingly in demand, providing patients with access to quality healthcare and reducing financial burdens during treatment. When choosing a policy, it's important to consider your needs, health condition, and the list of available clinics. Obtaining insurance is an investment in security and confidence in the future!`,
            uz: `O‘zbekistonda tibbiy sug‘urta tobora ommalashib bormoqda, bemorlarga sifatli tibbiy yordam va davolanish jarayonida moliyaviy yukni kamaytirish imkonini bermoqda. Polis tanlayotganda, o‘z ehtiyojlaringizni, sog‘lig‘ingiz holatini va mavjud klinikalar ro‘yxatini inobatga olish muhim. Sug‘urtani rasmiylashtirish – bu xavfsizlikka va kelajakdagi ishonchga kiritilgan investitsiya!`
          }
          
      },
    ],
  },
{
    date: "21.02.2025",
    slug: "novie-meditsinskiy-texnologiya",
    title: {
        ru: "Новые медицинские технологии в Ташкенте: что доступно пациентам?",
        en: "New medical technologies in Tashkent: what is available for patients?",
        uz: "Toshkentdagi yangi tibbiy texnologiyalar: bemorlarga nimalar mavjud?"
      },
      
      description: {
        ru: "Медицина в Ташкенте стремительно развивается, предлагая пациентам передовые технологии диагностики, лечения и реабилитации. Современные медицинские центры внедряют инновационные методы, повышая уровень оказания помощи и улучшая результаты лечения.",
        en: "Medicine in Tashkent is rapidly evolving, offering patients advanced diagnostic, treatment, and rehabilitation technologies. Modern medical centers are introducing innovative methods, raising the quality of care and improving treatment outcomes.",
        uz: "Toshkentda tibbiyot tez sur’atlar bilan rivojlanmoqda, bemorlarga ilg‘or diagnostika, davolash va reabilitatsiya texnologiyalarini taklif etadi. Zamonaviy tibbiyot markazlari innovatsion usullarni joriy etib, tibbiy xizmat sifati va davolash natijalarini yaxshilashga xizmat qilmoqda."
      },
      
    option: [
      {
        title: {
            ru: "Роботизированная хирургия",
            en: "Robotic surgery",
            uz: "Robotlashtirilgan jarrohlik"
          },
        img: "https://ucarecdn.com/46cab630-9eae-4048-9a2c-ed53540c9038/-/preview/1000x777/",
        subtitle: {
            ru: `Современные клиники начали внедрять роботизированные хирургические системы, такие как Da Vinci. Эти технологии обеспечивают высокую точность операций, минимизируют травматичность и сокращают время реабилитации.`,
            en: `Modern clinics have started to introduce robotic surgical systems such as Da Vinci. These technologies ensure high surgical precision, minimize tissue trauma, and reduce rehabilitation time.`,
            uz: `Zamonaviy klinikalar Da Vinci kabi robotlashtirilgan jarrohlik tizimlarini joriy eta boshladi. Ushbu texnologiyalar operatsiyalarda yuqori aniqlikni taʼminlaydi, jarohat yetkazish ko‘lamini kamaytiradi va reabilitatsiya muddatini qisqartiradi.`
          }
          
      },
      {
        title: {
            ru: "Телемедицина и онлайн-консультации",
            en: "Telemedicine and online consultations",
            uz: "Telemeditsina va onlayn maslahatlar"
          }
          ,
        img: "",
        subtitle: {
            ru: `Теперь пациенты могут получить консультацию врача дистанционно, что особенно удобно для жителей удаленных регионов. Телемедицина позволяет оперативно связаться со специалистом и получить рекомендации без необходимости посещения клиники.`,
            en: `Now patients can receive a doctor's consultation remotely, which is especially convenient for residents of remote regions. Telemedicine allows quick contact with a specialist and provides recommendations without the need to visit a clinic.`,
            uz: `Endi bemorlar vrach bilan masofadan turib maslahatlashishlari mumkin, bu ayniqsa olis hududlarda yashovchilar uchun qulay. Telemeditsina shifokor bilan tezda bog‘lanish va klinikaga borishga hojat qolmagan holda tavsiyalar olish imkonini beradi.`
          }
          ,
      },
      {
        title: {
            ru: "Генетическое тестирование и персонализированная медицина",
            en: "Genetic testing and personalized medicine",
            uz: "Genetik test va shaxsiylashtirilgan tibbiyot"
          },
          
        img: "",
        subtitle: {
            ru: `Генетические исследования помогают выявить предрасположенность к заболеваниям и разработать индивидуальные программы профилактики и лечения, основанные на особенностях организма пациента.`,
            en: `Genetic studies help identify disease predispositions and develop individualized prevention and treatment programs based on the patient's specific characteristics.`,
            uz: `Genetik tadqiqotlar kasalliklarga moyillikni aniqlash va bemorning organizmi xususiyatlariga asoslangan individual profilaktika hamda davolash dasturlarini ishlab chiqish imkonini beradi.`
          }
          ,
      },
      {
        title: {
            ru: "Современные методы диагностики (МРТ, КТ, 3D-УЗИ)",
            en: "Modern diagnostic methods (MRI, CT, 3D Ultrasound)",
            uz: "Zamonaviy diagnostika usullari (MRT, KT, 3D UTT)"
          }
          ,
        img: "",
        subtitle: {
            ru: `Диагностические центры Ташкента предлагают высокоточные методы обследования, включая 3D-УЗИ, магнитно-резонансную и компьютерную томографию с использованием новейшего оборудования.`,
            en: "Tashkent's diagnostic centers offer highly accurate examination methods, including 3D ultrasound, magnetic resonance imaging (MRI), and computed tomography (CT) using state-of-the-art equipment.",
            uz: "Toshkentdagi diagnostika markazlari eng zamonaviy uskunalardan foydalangan holda 3D-UZI, magnit-rezonans va kompyuter tomografiyasi kabi yuqori aniqlikdagi tekshiruv usullarini taklif etadi."
          }
          ,
      },
      {
        title: {
            ru: "Лазерные технологии в лечении",
            en: "Laser technologies in treatment",
            uz: "Davolashda lazer texnologiyalari"
          },
          
        img: "",
        subtitle: {
            ru: `Лазерные методики широко применяются в офтальмологии, дерматологии и косметологии. Современные лазерные установки позволяют лечить катаракту, кожные заболевания и проводить эстетические процедуры без боли и длительного восстановления.`,
            en: `Laser techniques are widely used in ophthalmology, dermatology, and cosmetology. Modern laser equipment allows for the treatment of cataracts, skin diseases, and aesthetic procedures without pain or extended recovery periods.`,
            uz: `Lazer usullari oftalmologiya, dermatologiya va kosmetologiyada keng qo‘llaniladi. Zamonaviy lazer uskunalari kataraktani davolash, teri kasalliklarini bartaraf etish va estetik muolajalarni og‘riqsiz hamda uzoq tiklanish muddatisiz amalga oshirish imkonini beradi.`
          }
          ,
      },
      {
        title: {
            ru: "3D-печать в медицине",
            en: "3D printing in medicine",
            uz: "Tibbiyotda 3D chop etish"
          }
          ,
        img: "https://ucarecdn.com/efd5f619-cb49-47a2-8549-26ed9b9acdc1/-/preview/1000x777/",
        subtitle: {
            ru: `Технологии 3D-печати используются для создания индивидуальных имплантов, протезов и даже органов, что значительно улучшает качество жизни пациентов с травмами и врожденными патологиями.`,
            en: `3D printing technologies are used to create customized implants, prosthetics, and even organs, significantly improving the quality of life for patients with injuries and congenital conditions.`,
            uz: `3D bosma texnologiyalari individual implantlar, protezlar va hatto organlarni yaratish uchun qo‘llaniladi, bu jarohatlar va tug‘ma patologiyalarga ega bemorlarning hayot sifatini sezilarli darajada yaxshilaydi.`
          }
          ,
      },
      {
        title: {
            ru: "Реабилитационные технологии и роботизированные системы",
            en: "Rehabilitation technologies and robotic systems",
            uz: "Reabilitatsiya texnologiyalari va robotlashtirilgan tizimlar"
          }
          ,
        img: "",
        subtitle: {
            ru: `Центры реабилитации в Ташкенте внедряют экзоскелеты и роботизированные системы, помогающие пациентам быстрее восстановиться после инсультов и травм опорно-двигательного аппарата.`,
            en: `Rehabilitation centers in Tashkent are introducing exoskeletons and robotic systems that help patients recover more quickly after strokes and musculoskeletal injuries.`,
            uz: `Toshkentdagi reabilitatsiya markazlari insultlar va tayanch-harakat tizimi jarohatlaridan keyin bemorlarning tezroq tiklanishiga yordam beradigan ekzoskeletlar va robotlashtirilgan tizimlarni joriy qilmoqda.`
          }
          ,
      },
      {
        title: {
            ru: "Искусственный интеллект в диагностике",
            en: "Artificial intelligence in diagnostics",
            uz: "Diagnostikada sun’iy intellekt"
          }
          ,
        img: "",
        subtitle: {
            ru: `Некоторые медицинские учреждения используют алгоритмы ИИ для анализа рентгеновских снимков, МРТ и других обследований, что позволяет быстрее и точнее выявлять патологии.`,
            en: `Some medical institutions use AI algorithms to analyze X-ray images, MRIs, and other examinations, enabling faster and more accurate detection of pathologies.`,
            uz: `Ba’zi tibbiy muassasalar rentgen suratlari, MRT va boshqa tekshiruvlarni tahlil qilish uchun sun’iy intellekt algoritmlaridan foydalanishmoqda, bu patologiyalarni tezroq va aniqroq aniqlash imkonini beradi.`
          }
          ,
      },
      {
        title: {
            ru: "Заключение",
            en: "Conclusion",
            uz: "Xulosa"
          }
          ,
        img: "",
        subtitle: {
            ru: `Пациенты в Ташкенте могут воспользоваться передовыми медицинскими технологиями, которые делают диагностику и лечение более эффективными, комфортными и доступными. Современные клиники стремятся к интеграции инноваций, обеспечивая качественное медицинское обслуживание на уровне мировых стандартов.`,
            en: `In Tashkent, patients can take advantage of advanced medical technologies that make diagnosis and treatment more efficient, comfortable, and accessible. Modern clinics are striving to integrate innovations, ensuring high-quality medical care that meets global standards.`,
            uz: `Toshkentda bemorlar diagnostika va davolashni yanada samarali, qulay va ommabop qiladigan ilg‘or tibbiy texnologiyalardan foydalanishlari mumkin. Zamonaviy klinikalar innovatsiyalarni joriy etish orqali jahon standartlariga mos yuqori sifatli tibbiy xizmatni ta’minlashga intilishmoqda.`
          }
          ,
      },
    ],
  },
{
    date: "22.02.2025",
    slug: "gde-nayti-vracha-govoryashchego-na-russkom-uzbekskom-ili-angliyskom-v-tashkente",
    title: {
        ru: "Где найти врача, говорящего на русском, узбекском или английском языке в Ташкенте?",
        en: "Where to find a doctor who speaks Russian, Uzbek or English in Tashkent?",
        uz: "Toshkentda rus, o‘zbek yoki ingliz tilida gaplasha oladigan shifokorni qayerdan topish mumkin?"
      }
      ,
      description: {
        ru: "В Ташкенте работает множество врачей, владеющих разными языками, что делает медицинское обслуживание доступным для различных групп пациентов. Знание врачом нескольких языков – это не только удобство для пациента, но и гарантия точного понимания жалоб и назначения правильного лечения. Разберем, где можно найти специалистов, говорящих на русском, узбекском и английском языках.",
        en: "There are many doctors in Tashkent who speak various languages, making healthcare services accessible to different groups of patients. A doctor's knowledge of multiple languages is not only convenient for the patient, but also ensures accurate understanding of complaints and proper treatment prescriptions. Let's explore where one can find specialists who speak Russian, Uzbek, and English.",
        uz: "Toshkentda turli tillarni biladigan ko‘plab shifokorlar faoliyat yuritadi, bu turli xil bemorlar guruhlari uchun tibbiy xizmatlardan foydalanishni osonlashtiradi. Shifokorning bir nechta tilni bilishi nafaqat bemor uchun qulaylik, balki shikoyatlarni aniq tushunish va to‘g‘ri davolash buyurishni kafolatlaydi. Keling, rus, o‘zbek va ingliz tilida gaplasha oladigan mutaxassislarni qayerda topish mumkinligini ko‘rib chiqamiz."
      }
,
    option: [
      {
        title: {
            ru: "Частные медицинские центры",
            en: "Private medical centers",
            uz: "Xususiy tibbiyot markazlari"
          },
        img: "",
        subtitle: {
            ru: `Многие частные клиники Ташкента предоставляют услуги на нескольких языках. Среди них:
                    -Tashkent International Clinic – ориентирована на иностранцев, врачи говорят на английском, русском и узбекском.
          -AKFA Medline – ведущие специалисты владеют русским, узбекским и часто английским языком.
          -Dr. Lutfi International Hospital – международный стандарт обслуживания с многоязычным персоналом.
          -Nikamed – современный медицинский центр с врачами, говорящими на русском и узбекском.
                    `,
            en: `Many private clinics in Tashkent provide services in multiple languages. These include:
          - Tashkent International Clinic – oriented towards foreigners; doctors speak English, Russian, and Uzbek.
          - AKFA Medline – leading specialists speak Russian, Uzbek, and often English.
          - Dr. Lutfi International Hospital – offers an international standard of care with multilingual staff.
          - Nikamed – a modern medical center with doctors speaking Russian and Uzbek.
                    `,
            uz: `Toshkentdagi ko‘plab xususiy klinikalar bir nechta tilda xizmat ko‘rsatadi. Ular orasida:
          - Tashkent International Clinic – chet elliklarga mo‘ljallangan bo‘lib, vrachlar ingliz, rus va o‘zbek tillarida gaplashadi.
          - AKFA Medline – yetakchi mutaxassislar rus, o‘zbek va ko‘pincha ingliz tillarini bilishadi.
          - Dr. Lutfi International Hospital – ko‘p tilli xodimlari bilan xalqaro standartlarga mos xizmat ko‘rsatadi.
          - Nikamed – zamonaviy tibbiyot markazi bo‘lib, vrachlar rus va o‘zbek tillarida so‘zlashadilar.
                    `
          },
      },
      {
        title: {
            ru: "Государственные поликлиники и больницы",
            en: "Public clinics and hospitals",
            uz: "Davlat poliklinikalari va shifoxonalari"
          },
        img: "https://ucarecdn.com/30d630bb-bbc1-4bbb-8cdd-b9dbf7098f60/-/preview/600x400/",
        subtitle: {
            ru: `Врачи в государственных медучреждениях в основном говорят на узбекском и русском. Однако не во всех учреждениях можно найти специалистов с хорошим уровнем английского языка. Для уточнения информации лучше обратиться в регистратуру или на официальный сайт больницы.`,
            en: "In public medical institutions, doctors mostly speak Uzbek and Russian. However, not all institutions have specialists with a good command of English. To clarify information, it is best to contact the reception desk or visit the hospital’s official website.",
            uz: "Davlat tibbiyot muassasalarida shifokorlar asosan o‘zbek va rus tillarida gaplashishadi. Biroq, barcha muassasalarda ingliz tilini yaxshi biladigan mutaxassislarni topish imkoni mavjud emas. Ma’lumotlarni aniqlashtirish uchun ro‘yxatga olish bo‘limiga yoki shifoxonaning rasmiy veb-saytiga murojaat qilish tavsiya etiladi."
          },
      },
      {
        title: {
            ru: "Онлайн-платформы для поиска врачей",
            en: "Online platforms for finding doctors",
            uz: "Shifokorlarni topish uchun onlayn platformalar"
          }
          ,
        img: "",
        subtitle: {
            ru: `Некоторые платформы позволяют искать врачей по языковым критериям:
          
          - Медицинские агрегаторы – сервисы, где можно выбрать врача по языку общения.
          - Официальные сайты клиник – указывают, на каких языках ведется прием.
          - Телемедицина – удобный способ получить консультацию у врача, говорящего на нужном языке, не выходя из дома.`,
            en: `Some platforms allow you to search for doctors based on language criteria:
          
          - Medical aggregators – services where you can select a doctor by the language they speak.
          - Official clinic websites – often indicate which languages are used for consultations.
          - Telemedicine – a convenient way to receive a consultation from a doctor who speaks the required language without leaving home.`,
            uz: `Ba’zi platformalar shifokorlarni til mezonlariga ko‘ra qidirish imkonini beradi:
          
          - Tibbiy agregatorlar – shifokorni u gaplasha oladigan til bo‘yicha tanlash mumkin bo‘lgan xizmatlar.
          - Klinikalarning rasmiy saytlari – qabul qaysi tillarda amalga oshirilishini ko‘rsatadi.
          - Telemeditsina – uyda o‘tirib, kerakli tilda gaplasha oladigan shifokordan maslahat olishning qulay usuli.`
          }
          ,
      },
      {
        title: {
            ru: "Посольства и международные организации",
            en: "Embassies and international organizations",
            uz: "Elchixonalar va xalqaro tashkilotlar"
          }
          ,
        img: "",
        subtitle: {
            ru: `Иностранные представительства и международные организации часто предоставляют списки врачей, говорящих на английском языке. Например, посольства США, Великобритании или Германии могут рекомендовать медучреждения с англоязычным персоналом.`,
            en: `Foreign representations and international organizations often provide lists of doctors who speak English. For example, embassies of the USA, the United Kingdom, or Germany can recommend medical institutions with English-speaking staff.`,
            uz: `Chet el vakilliklari va xalqaro tashkilotlar ko‘pincha ingliz tilida gaplashadigan shifokorlar ro‘yxatini taqdim etadi. Masalan, AQSh, Buyuk Britaniya yoki Germaniya elchixonalari ingliz tilida gaplasha oladigan xodimlarga ega tibbiyot muassasalarini tavsiya etishi mumkin.`
          }
          ,
      },
      {
        title: {
            ru: "Вывод",
            en: "Conclusion",
            uz: "Xulosa"
          }
          ,
        img: "",
        subtitle: {
            ru: `В Ташкенте достаточно врачей, говорящих на русском, узбекском и английском языках. Для поиска подходящего специалиста можно использовать частные клиники, онлайн-сервисы и рекомендации посольств. Перед визитом важно уточнить информацию о языке общения врача, чтобы консультация прошла максимально комфортно и эффективно.`,
            en: `Tashkent has a sufficient number of doctors who speak Russian, Uzbek, and English. To find a suitable specialist, you can use private clinics, online services, and embassy recommendations. Before your visit, it is important to verify the language in which the doctor communicates, so that the consultation is as comfortable and effective as possible.`,
            uz: `Toshkentda rus, o‘zbek va ingliz tillarida gaplasha oladigan shifokorlar yetarlicha mavjud. Mos mutaxassisni topish uchun xususiy klinikalar, onlayn-servislar va elchixona tavsiyalaridan foydalanish mumkin. Tashrif buyurishdan oldin, shifokorning qaysi tilda muloqot qilishini aniqlashtirish muhim, shunda maslahat imkon qadar qulay va samarali bo‘ladi.`
          }
          ,
      },
    ],
  },
{
    date: "23.02.2025",
    slug: "kak-vybrat-luchshuyu-kliniku-za-predelami-uzbekistana-obzor-populyarnyh-napravleniy-meditsinskogo-turizma"
,
    title: {
        ru: "Как выбрать лучшую клинику за пределами Узбекистана: обзор популярных направлений медицинского туризма.",
        en: "How to choose the best clinic outside Uzbekistan: an overview of popular medical tourism destinations.",
        uz: "O‘zbekistondan tashqarida eng yaxshi klinikani qanday tanlash: mashhur tibbiy turizm yo‘nalishlari sharhi."
      },
      
      description: {
        ru: "Медицинский туризм становится все более востребованным среди жителей Узбекистана, стремящихся получить высококачественное лечение за границей. Однако выбор клиники за пределами страны требует тщательного подхода. Разберем ключевые критерии выбора и популярные направления медицинского туризма.",
        en: "Medical tourism is becoming increasingly in demand among residents of Uzbekistan who are seeking high-quality treatment abroad. However, choosing a clinic outside the country requires a careful approach. Let's explore the key selection criteria and popular medical tourism destinations.",
        uz: "O‘zbekiston fuqarolari orasida chet elda yuqori sifatli davolanishni olishga intilayotganlar uchun tibbiy turizm tobora talabga ega bo‘lmoqda. Biroq, mamlakat tashqarisidagi klinikani tanlash ehtiyotkor yondashuvni talab qiladi. Keling, tanlovning asosiy mezonlari va mashhur tibbiy turizm yo‘nalishlarini ko‘rib chiqamiz."
      },
      
    option: [
      {
        title: {
            ru: "Критерии выбора клиники",
            en: "Criteria for Choosing a Clinic",
            uz: "Klinika tanlash mezonlari"
          },
          
        img: "https://ucarecdn.com/bb48ccdf-01b9-48b2-b86e-4e349e47f7f6/-/preview/480x270/",
        subtitle: {
            ru: `
                    При выборе медицинского учреждения за рубежом важно учитывать следующие факторы:
                    - Репутация и отзывы – изучите рейтинги, отзывы пациентов и медицинские аккредитации клиники.
                    - Квалификация врачей – обратите внимание на опыт специалистов, их сертификацию и участие в международных медицинских ассоциациях.
                    - Оборудование и технологии – передовые технологии и современное оборудование повышают точность диагностики и эффективность лечения.
                    - Языковая доступность – наличие русскоговорящего или англоязычного персонала облегчает коммуникацию.
                    - Стоимость лечения – сравните цены в разных странах, учитывая качество медицинских услуг и дополнительные расходы (перелет, проживание, реабилитация).
                    - Доступность визы и логистика – важный аспект, особенно при необходимости длительного лечения или реабилитации.
                    `,
            en: `
                    When choosing a medical facility abroad, it is important to consider the following factors:
                    - Reputation and reviews – examine ratings, patient feedback, and the clinic’s medical accreditations.
                    - Qualification of doctors – pay attention to the specialists' experience, their certifications, and participation in international medical associations.
                    - Equipment and technology – advanced technologies and modern equipment enhance diagnostic accuracy and treatment effectiveness.
                    - Language accessibility – having Russian-speaking or English-speaking staff facilitates communication.
                    - Treatment cost – compare prices in different countries, taking into account the quality of medical services and additional expenses (flights, accommodation, rehabilitation).
                    - Visa availability and logistics – a crucial aspect, especially when long-term treatment or rehabilitation is required.
                    `,
            uz: `
                    Chet elda tibbiy muassasani tanlashda quyidagi omillarni hisobga olish muhim:
                    - Obro‘ va fikrlar – klinikaning reytinglari, bemorlarning fikr-mulohazalari va tibbiy akkreditatsiyalarini o‘rganing.
                    - Shifokorlarning malakasi – mutaxassislarning tajribasi, sertifikatlari va xalqaro tibbiyot assotsiatsiyalaridagi ishtirokiga e’tibor bering.
                    - Uskunalar va texnologiyalar – ilg‘or texnologiyalar va zamonaviy uskunalar diagnostika aniqligi va davolash samaradorligini oshiradi.
                    - Tilga oid qulaylik – rus tilida yoki ingliz tilida gaplasha oladigan xodimlarning mavjudligi muloqotni osonlashtiradi.
                    - Davolanish narxi – turli mamlakatlardagi narxlarni tibbiy xizmatlar sifati va qo‘shimcha xarajatlarni (uchish, turar joy, reabilitatsiya) hisobga olgan holda solishtiring.
                    - Viza olish imkoniyati va logistika – ayniqsa uzoq muddatli davolanish yoki reabilitatsiya zarurati bo‘lsa, bu muhim omil hisoblanadi.
                    `
          }
      },
      {
        title: {
            ru: "Популярные направления медицинского туризма",
            en: "Popular medical tourism destinations",
            uz: "Mashhur tibbiy turizm yo‘nalishlari"
          }
          ,
        img: "https://ucarecdn.com/d034d7a8-01e2-472e-a427-bc74be46f013/-/preview/630x360/",
        subtitle: {
            ru: `
          Турция
          
          - Специализируется на трансплантологии, онкологии, кардиохирургии и пластической хирургии.
          - Клиники: Acibadem, Memorial, Liv Hospital.
          - Преимущества: доступные цены, высокое качество услуг, русскоговорящий персонал.
          
          Германия
          
          - Лидер в области онкологии, нейрохирургии и ортопедии.
          - Клиники: Charité, Helios, Schön Klinik.
          - Преимущества: передовые технологии, высокий уровень квалификации врачей.
          
          Южная Корея
          
          - Известна своими достижениями в пластической хирургии, онкологии и кардиологии.
          - Клиники: Severance Hospital, Samsung Medical Center.
          - Преимущества: инновационные методики, отличное качество обслуживания.
          
          Израиль
          
          - Развита онкология, кардиология, репродуктивная медицина.
          - Клиники: Assuta, Hadassah, Sheba Medical Center.
          - Преимущества: высокий уровень медицины, новейшие методы диагностики.
          
          Индия
          
          - Популярна в кардиохирургии, ортопедии, трансплантологии.
          - Клиники: Apollo Hospitals, Fortis Healthcare.
          - Преимущества: доступные цены, опытные специалисты.
            `,
            en: `
          Turkey
          
          - Specializes in transplantology, oncology, cardiac surgery, and plastic surgery.
          - Clinics: Acibadem, Memorial, Liv Hospital.
          - Advantages: affordable prices, high quality services, Russian-speaking staff.
          
          Germany
          
          - A leader in oncology, neurosurgery, and orthopedics.
          - Clinics: Charité, Helios, Schön Klinik.
          - Advantages: advanced technologies, high level of doctor qualifications.
          
          South Korea
          
          - Known for its achievements in plastic surgery, oncology, and cardiology.
          - Clinics: Severance Hospital, Samsung Medical Center.
          - Advantages: innovative methods, excellent quality of service.
          
          Israel
          
          - Developed in oncology, cardiology, and reproductive medicine.
          - Clinics: Assuta, Hadassah, Sheba Medical Center.
          - Advantages: high level of healthcare, cutting-edge diagnostic methods.
          
          India
          
          - Popular in cardiac surgery, orthopedics, and transplantology.
          - Clinics: Apollo Hospitals, Fortis Healthcare.
          - Advantages: affordable prices, experienced specialists.
            `,
            uz: `
          Turkiya
          
          - Transplantatsiya, onkologiya, yurak jarrohligi va plastik jarrohlik bo‘yicha ixtisoslashgan.
          - Klinikalar: Acibadem, Memorial, Liv Hospital.
          - Afzalliklari: maqbul narxlar, yuqori sifatli xizmatlar, rus tilida gaplasha oladigan xodimlar.
          
          Germaniya
          
          - Onkologiya, neyroxirurgiya va ortopediya sohasida yetakchi.
          - Klinikalar: Charité, Helios, Schön Klinik.
          - Afzalliklari: ilg‘or texnologiyalar, shifokorlar malakasining yuqori darajasi.
          
          Janubiy Koreya
          
          - Plastik jarrohlik, onkologiya va kardiologiya sohasidagi yutuqlari bilan mashhur.
          - Klinikalar: Severance Hospital, Samsung Medical Center.
          - Afzalliklari: innovatsion usullar, a’lo darajadagi xizmat sifati.
          
          Isroil
          
          - Onkologiya, kardiologiya va reproduktiv tibbiyot rivojlangan.
          - Klinikalar: Assuta, Hadassah, Sheba Medical Center.
          - Afzalliklari: yuqori darajadagi tibbiyot, zamonaviy diagnostika usullari.
          
          Hindiston
          
          - Kardiokhirurgiya, ortopediya va transplantatsiya sohalarida mashhur.
          - Klinikalar: Apollo Hospitals, Fortis Healthcare.
          - Afzalliklari: maqbul narxlar, tajribali mutaxassislar.
            `
          }
          ,
      },
      {
        title: {
            ru: "Как организовать медицинское путешествие?",
            en: "How to organize a medical trip?",
            uz: "Tibbiy sayohatni qanday tashkil etish?"
          }
          ,
        img: "",
        subtitle: {
            ru: `- Определите направление и выберите клинику.
          - Свяжитесь с представителем клиники для консультации.
          - Подготовьте медицинские документы и переводы.
          - Организуйте перелет, проживание и трансфер.
          - Уточните возможность реабилитации после лечения.`,
            en: `- Determine the destination and choose a clinic.
          - Contact a clinic representative for consultation.
          - Prepare your medical documents and translations.
          - Arrange the flight, accommodation, and transfer.
          - Confirm the availability of post-treatment rehabilitation.`,
            uz: `- Yo'nalishni aniqlang va klinikani tanlang.
          - Maslahat uchun klinika vakili bilan bog'laning.
          - Tibbiy hujjatlar va tarjimalarni tayyorlang.
          - Uchish, turar joy va transferni tashkil eting.
          - Davolanishdan keyin reabilitatsiya imkoniyatini aniqlang.`
          }
          ,
      },
      {
        title: {
            ru: "Вывод",
            en: "Conclusion",
            uz: "Xulosa"
          }
          ,
        img: "",
        subtitle: {
            ru: `Выбор клиники за границей – ответственный шаг, требующий тщательного анализа. Определите приоритетные критерии, изучите рейтинги и рекомендации, а также заранее спланируйте поездку. Такой подход поможет получить качественное лечение и комфортный медицинский сервис за пределами Узбекистана.`,
            en: `Choosing a clinic abroad is a significant decision that requires careful analysis. Define your priority criteria, review ratings and recommendations, and plan your trip in advance. This approach will help you receive quality treatment and comfortable medical services outside Uzbekistan.`,
            uz: `Chet elda klinikani tanlash – puxta tahlil talab qiladigan mas'uliyatli qadamdir. Birinchi navbatdagi mezonlarni aniqlang, reytinglar va tavsiyalarni o‘rganing hamda sayohatingizni oldindan rejalashtiring. Bunday yondashuv O‘zbekistondan tashqarida sifatli davolanish va qulay tibbiy xizmat olishga yordam beradi.`
          }
          ,
      },
    ],
  },
];
