"use client";

import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { TbEyeUp } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdMoneyOff } from "react-icons/md";

export default function TelegramBanner() {
  return (
    <div className="flex justify-center px-4">
      <div className="relative flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#379FF2] to-[#022FE4] rounded-3xl p-6 lg:p-10 w-full max-w-5xl shadow-lg text-white overflow-hidden">
        {/* Блок с изображением */}
        <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-10 relative w-[180px] md:w-[220px] lg:w-[280px]">
          <Image
            src="/frame-phone.png"
            alt="Telegram бот"
            width={400}
            height={300}
            className="drop-shadow-lg"
          />
        </div>

        {/* Контентный блок */}
        <div className="flex flex-col text-left relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Переходите в <span>Telegram-бот</span>
          </h2>

          <ul className="space-y-4 mb-6">
            {[
              { icon: BiLike, text: "Удобство использования" },
              { icon: TbEyeUp, text: "Повышение видимости" },
              { icon: IoSettingsOutline, text: "Быстрая настройка" },
              { icon: MdMoneyOff, text: "Абсолютно бесплатно" },
            ].map(({ icon: Icon, text }, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[#FFFFFF33] bg-opacity-20 rounded-xl">
                  <div className="w-14 h-14">
                    <Icon className="text-[#1EFAF7] w-10 h-10 ml-5 mt-4" />
                  </div>
                </div>
                <span className="text-xl">{text}</span>
              </li>
            ))}
          </ul>

          {/* Кнопка */}
          <button className="bg-white text-blue-600 py-3 rounded-full text-medium font-semibold hover:bg-gray-200 transition duration-300">
            Перейти к боту
          </button>
        </div>
      </div>
    </div>
  );
}
