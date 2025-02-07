import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex justify-around items-center mt-2 mb-4">
      <img src="/logo.png" alt="Логотип" />
      <div className="flex gap-5">
        <Button className="py-5 px-5" variant="outline">
          Врачи
        </Button>
        <Button className="py-5 px-5" variant="outline">
          Клиники
        </Button>
        <Button className="py-5 px-5" variant="outline">
          Услуги
        </Button>
      </div>

      <div className="flex gap-5">
        <button className="border border-[#0129E3] text-[#0129E3] px-4 py-2 rounded-3xl font-bold hover:bg-[#0129E3] transition-color duration-200 hover:text-white">
          Поиск по карте
        </button>

        {/* Стилизованный select */}
        <div className="relative">
          <select
            className="border border-[#0129E3] text-[#0129E3] bg-white px-4 py-2 rounded-3xl font-bold pr-8 appearance-none"
            defaultValue="Рус"
          >
            <option value="Рус">Рус</option>
            <option value="Eng">Eng</option>
          </select>
        </div>
        <button className="border border-[#0129E3] text-white bg-[#0129E3] px-4 py-2 rounded-3xl font-semibold text-[16px] hover:bg-white transition-color duration-200 hover:text-[#0129E3]">
          Регистрация
        </button>
      </div>
    </div>
  );
};

export default Header;
