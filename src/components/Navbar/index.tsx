'use client'
import { NavbarItemLinks } from "@/constants/navLink";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const link = NavbarItemLinks()
  const { language, changeLanguage } = useLanguage();

  const handleChangeLanguage = (e) => {
    changeLanguage(e.target.value)
  }

  return (
    <header className="flex justify-between items-center px-4 md:px-10 py-4 bg-white sticky top-0 z-50 shadow-md">

      <div className="flex items-center gap-2">
        <Image src="/Union.png" alt="Логотип" width={40} height={40} />
        <span className="text-2xl font-bold">Med Yordam</span>
      </div>

      {/* Десктопное меню */}
      <nav className="hidden md:flex gap-5">
        {link.map((el) => 
          <Link className="border p-3 px-6 rounded-[10px] text-[18px] font-medium transition-colorsn hover:bg-[#eae8e87d]" href={`/${language}${el.href}`} key={el.id}>
            {el.title}
          </Link>
        )}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <button className="border border-[#0129E3] text-[#0129E3] px-4 py-2 rounded-3xl font-bold hover:bg-[#0129E3] transition duration-200 hover:text-white">
          Поиск по карте
        </button>
        <div className="relative">
          <select value={language} onChange={handleChangeLanguage} className="border border-[#0129E3] text-[#0129E3] bg-white px-4 py-2 rounded-3xl font-bold pr-10 appearance-none w-full">
            <option value="ru">Рус</option>
            <option value="en">Eng</option>
            <option value="uz">Uzb</option>
          </select>
          <FaAngleDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0129E3] pointer-events-none" />
        </div>
        <a href="https://admin.med-yordam.uz/ru/register" target="_blank" className="border border-[#0129E3] text-white bg-[#0129E3] px-4 py-2 rounded-3xl font-semibold text-[16px] hover:bg-white transition duration-200 hover:text-[#0129E3]">
          Регистрация
        </a>
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
