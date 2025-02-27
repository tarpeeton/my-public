"use client";
import { FC } from "react";
import Image from "next/image";
import { MdOutlineNavigateNext } from "react-icons/md";
import Success from "./assets/success.png";

import { useLocale } from "next-intl";

interface IModalProps {
  open: boolean;
  close: () => void;
  title: { ru: string; uz: string; en: string };
  subtitle: { ru: string; uz: string; en: string };
}

export const SuccessModal: FC<IModalProps> = ({
  open,
  close,
  title,
  subtitle,
}) => {
  const locale = useLocale();

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!open) return null;

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-[#050B2B] bg-opacity-50"
    >
      <div className="relative w-[90%] overflow-hidden rounded-[30px] bg-gradient-to-tl from-[#379FF2] to-[#022FE4] px-[24px] md:w-[450px] py-[30px] shadow-lg lg:w-[600px]">
        <div className="absolute right-[-5px] top-[-5px]">
          <Image
            src={Success}
            alt="Image One"
            width={400}
            height={400}
            quality={100}
            className="w-[200px] h-[200px] object-cover lg:w-[300px] lg:h-[300px]"
          />
        </div>
        <div className="lg:flex lg:flex-col lg:items-center">
          <h3 className="text-left  text-[30px] font-medium text-white slg:text-[45px] lg:text-center lg:text-[45px]">
            {title[locale]}
          </h3>

          <p className="mt-[16px] text-left text-[15px] font-medium text-white slg:text-[16px] lg:w-[60%] lg:text-center lg:text-[16.5px]">
            {subtitle[locale]}
          </p>
        </div>
        <div className="mt-[30px] slg:mt-[35px]">
          <button
            onClick={close}
            className="h-[55px] group w-full flex flex-row justify-center items-center bg-white rounded-[12px]"
          >
            <p className="rounded-[px] bg-white text-[14px] font-medium text-[#050B2B] slg:text-[15px]  lg:text-[17px]">
              {locale === "ru"
                ? "Вернуться на страницу"
                : locale === "uz"
                  ? "Sahifaga qaytish"
                  : "Return to page"}
            </p>
            <MdOutlineNavigateNext className="ml-2 group-hover:ml-[12px] lg:w-[20px] lg:h-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
