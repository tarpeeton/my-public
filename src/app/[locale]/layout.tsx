import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { MantineProviderComponent } from '@/providers/MantineProvider';
import Navbar from "@/components/Navbar/index"
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const supportedLocales = ['en', 'ru', 'uz'];
  const locale = supportedLocales.includes(params?.locale)
    ? params.locale
    : 'en';

  let messages = {};

  try {
    messages = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Ошибка загрузки файла локализации для '${locale}':`, error);
    messages = {};
  }
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MantineProviderComponent>
            <Navbar/>
            {children}
            <Footer/>
          </MantineProviderComponent>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
