import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<<<<<<< HEAD
    <div className="flex justify-around items-center mt-2 mb-4">
      <img src="/logo.png" alt="Логотип" />
      <div className="flex gap-5 text-black">
        <Button className="py-5 px-5" variant="outline">
          Врачи
        </Button>
        <Button className="py-5 px-5" variant="outline">
          Клиники
        </Button>
        <Button className="py-5 px-5" variant="outline">
          Услуги
        </Button>
=======
    <header className="relative flex justify-between items-center px-4 md:px-10 py-4 bg-white">
      <div className="flex items-center gap-2">
        <Image src="/Union.png" alt="Логотип" width={40} height={40} />
        <span className="text-2xl font-bold">Med Yordam</span>
>>>>>>> 67f19e8b042eed26e4993f858cfd3f9001a01a61
      </div>

      {/* Десктопное меню */}
      <nav className="hidden md:flex gap-5">
        <Button variant="outline">Врачи</Button>
        <Button variant="outline">Клиники</Button>
        <Button variant="outline">Услуги</Button>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <button className="border border-[#0129E3] text-[#0129E3] px-4 py-2 rounded-3xl font-bold hover:bg-[#0129E3] transition duration-200 hover:text-white">
          Поиск по карте
        </button>
        <div className="relative">
          <select className="border border-[#0129E3] text-[#0129E3] bg-white px-4 py-2 rounded-3xl font-bold pr-10 appearance-none w-full">
            <option value="Рус">Рус</option>
            <option value="Eng">Eng</option>
          </select>
          <FaAngleDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0129E3] pointer-events-none" />
        </div>

        <button className="border border-[#0129E3] text-white bg-[#0129E3] px-4 py-2 rounded-3xl font-semibold text-[16px] hover:bg-white transition duration-200 hover:text-[#0129E3]">
          Регистрация
        </button>
      </div>

      <button
        className="md:hidden text-[#0129E3] z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div
        className={`absolute top-0 left-0 w-full bg-white flex flex-col items-center gap-5 py-5 shadow-md transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Button variant="outline" onClick={() => setIsMenuOpen(false)}>
          Врачи
        </Button>
        <Button variant="outline" onClick={() => setIsMenuOpen(false)}>
          Клиники
        </Button>
        <Button variant="outline" onClick={() => setIsMenuOpen(false)}>
          Услуги
        </Button>
        <button
          className="border border-[#0129E3] text-[#0129E3] px-4 py-2 rounded-3xl font-bold hover:bg-[#0129E3] transition duration-200 hover:text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Поиск по карте
        </button>
        <select className="border border-[#0129E3] text-[#0129E3] bg-white px-4 py-2 rounded-3xl font-bold">
          <option value="Рус">Рус</option>
          <option value="Eng">Eng</option>
        </select>
        <button
          className="border border-[#0129E3] text-white bg-[#0129E3] px-4 py-2 rounded-3xl font-semibold text-[16px] hover:bg-white transition duration-200 hover:text-[#0129E3]"
          onClick={() => setIsMenuOpen(false)}
        >
          Регистрация
        </button>
      </div>
    </header>
  );
};

export default Header;
