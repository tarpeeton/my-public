import {
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#050B2B] text-white py-8 px-6 md:px-16 pt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 pb-16">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
          <Image 
              src="/Logo.png" 
              alt="Логотип" 
              width={40} 
              height={40} 
            />
          </h2>
          <p className="text-sm mt-2">Консультации от врачей</p>
        </div>
        <div>
          <h3 className="font-medium text-[#F8F8F8] text-sm">Выполнить</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                Клиники
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Врачи
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Услуги
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-[#F8F8F8] text-sm">Выполнить</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                Информация о проекте
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Регистрация
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Вход в личный кабинет
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start mt-4">
          <p className="text-lg">+998 (99) 838 80 78</p>
          <div className="flex space-x-7 mt-2">
            <a href="#" className="text-white hover:text-blue-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <FaTelegram size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-sm flex justify-between items-center">
        <p>MedYordam 2024 - Все права защищены</p>
        <div>
          <a href="#" className="hover:text-blue-400">
            Обработка данных
          </a>
        </div>
        <div>
          <a href="#" className="hover:text-blue-400">
            Условия использования
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
