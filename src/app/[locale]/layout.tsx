import "./globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Navbar/index";
import Footer from "@/components/Footer/index";

export const metadata: Metadata = {
  title: "Med Yordam",
  description:
    "Med Yordam – ваш надежный онлайн-помощник в сфере здравоохранения. Получите доступ к консультациям врачей, полезным советам по здоровью и проверенным медицинским ресурсам. Наша платформа предлагает услуги телемедицины, поддержку пациентов и современные решения для мониторинга здоровья. Будьте уверены в своем здоровье с помощью Med Yordam – мы всегда рядом, чтобы помочь!",
  keywords:
    "медицинские услуги, онлайн здравоохранение, телемедицина, консультации врачей, врачи онлайн, медицинские советы, платформа здравоохранения, решения для телемедицины, советы по здоровью, медицинские записи, медицинские ресурсы, мониторинг здоровья, фитнес-трекер, поддержка психического здоровья, виртуальный врач, медицинские консультации, медицинская помощь, поддержка пациентов, медицинская информация, рекомендации по здоровью, запись к врачу, доступные медицинские услуги, здоровый образ жизни, надежная медицинская платформа, профессиональные медицинские советы, удаленное здравоохранение, медицинский чат, Med Yordam, Result Agency медицинские решения",
  authors: [
    {
      name: "Рустам Кидиралиев + RESULT AGENCY",
      url: "https://my-works-ten.vercel.app/",
    },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const supportedLocales = ["en", "ru", "uz"];
  const locale = supportedLocales.includes(params?.locale)
    ? params.locale
    : "en";

  let messages = {};

  try {
    messages = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Ошибка загрузки файла локализации для '${locale}':`, error);
    messages = {};
  }

  
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          href="/favicon/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:title" content="Med Yordam" />
        <meta
          property="og:description"
          content="Ваш надежный онлайн-помощник в сфере здравоохранения. Получите доступ к консультациям врачей, полезным советам по здоровью и проверенным медицинским ресурсам."
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:type" content="favicon-96x96.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://med-yordam.uz/ru" />
        <meta property="og:type" content="website" />
      </head>
      <body className={` antialiased bg-white text-black`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
