"use client";
import { FC } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import Error from "./assets/error.png";

interface IModalProps {
  open: boolean;
  close: () => void;
  title: { ru: string; uz: string; en: string };
  subtitle: { ru: string; uz: string; en: string };
}

export const ErrorModal: FC<IModalProps> = ({
  open,
  close,
  title,
  subtitle,
}) => {
  const locale = useLocale();

  if (!open) return null;

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-50 bg-[#050B2B] bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
    >
      <div className="py-[30px] px-[24px] w-[90%] lg:w-[690px] relative overflow-hidden bg-gradient-to-tl from-[#379FF2] to-[#022FE4] shadow-lg rounded-[30px] ">
        <div className="absolute top-[-5px] right-[-5px] lg:right-0 h-[180px] lg:h-[220px]">
          <Image
            src={Error}
            alt="Image One"
            width={300}
            height={300}
            quality={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:flex lg:flex-col lg:items-center">
          <h3 className="text-[30px] w-[70%] md:w-full lg:text-center md:text-[45px] lg:text-[45px] text-left text-white font-medium">
            {title[locale]}
          </h3>

          <p className="mt-[16px]  lg:w-[60%] text-white lg:text-center text-left font-medium text-[15px] md:text-[16px] lg:text-[16.5px]">
            {subtitle[locale]}
          </p>
        </div>
        <div className="mt-[30px] md:mt-[35px]">
          <button onClick={close} className="w-full  h-full ">
            <p className="text-[14px] w-full h-[55px] font-medium md:text-[15px] rounded-[12px] flex items-center justify-center bg-white  text-[#202020] lg:h-[76px] lg:text-[17px]">
              {locale === "ru"
                ? "Вернуться на страницу"
                : locale === "uz"
                  ? "Sahifaga qaytish"
                  : "Return to page"}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
