"use client";

import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { TbEyeUp } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdMoneyOff } from "react-icons/md";

export default function TelegramBotSection() {
  return (
    <div className="flex justify-center px-5 lg:px-16 mt-24 mb-5">
      <div className="lg:h-[400px] lg:w-[1400px] lg:relative lg:flex lg:flex-row lg:items-center bg-gradient-to-r from-[#379FF2] to-[#022FE4] rounded-3xl shadow-lg text-white  p-8  max-w-8xl">
        {/* Блок с изображениями телефонов */}
        <div className="relative flex justify-center -ml-24">
          <Image
            src="/phone1.png"
            alt="Телефон 1"
            width={500}
            height={600}
            className="drop-shadow-lg relative lg:-top-20 lg:z-20 lg:-mr-72 -mr-44 ml-20 -top-36"
          />
          <Image
            src="/phone2.png"
            alt="Телефон 2"
            width={500}
            height={600}
            className="drop-shadow-lg relative z-10 -top-16 lg:-top-0"
          />
        </div>

        {/* Контентный блок */}
        <div className="flex flex-col text-left relative  md:-mt-0 -mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:text-left text-start">
            Переходите в <span>Telegram-бот</span>
          </h2>

          <ul className="space-y-3">
            {[
              { icon: BiLike, text: "Удобство использования" },
              { icon: TbEyeUp, text: "Повышение видимости" },
              { icon: IoSettingsOutline, text: "Быстрая настройка" },
              { icon: MdMoneyOff, text: "Абсолютно бесплатно" },
            ].map(({ icon: Icon, text }, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[#FFFFFF33] bg-opacity-20 rounded-tr-xl rounded-bl-xl">
                  <Icon className="text-[#1EFAF7] w-10 h-10" />
                </div>
                <span className="text-xl">{text}</span>
              </li>
            ))}
          </ul>

        </div>
        <button className="bg-white text-blue-600 py-3 rounded-full text-medium font-semibold hover:bg-gray-200 transition duration-300 lg:self-end px-10 mt-4 w-full lg:w-auto">
          Перейти к боту
        </button>
      </div>
    </div>
  );
}
