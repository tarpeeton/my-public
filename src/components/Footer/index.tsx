import { FaInstagram, FaYoutube } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { TiSocialFacebook } from "react-icons/ti";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const Footer = () => {
  return (
    <footer className="bg-[#050B2B] text-white py-8 px-6 md:px-16 pt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 pb-16">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Image
              src="/Footer-logo.png"
              alt="Логотип"
              width={230}
              height={230}
            />
          </h2>
          <p className="text-sm mt-2">Консультации от врачей</p>
        </div>
        <div>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/clinick" className="hover:text-blue-400">
                Клиники
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="hover:text-blue-400">
                Врачи
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400">
                Услуги
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                Информация о проекте
              </a>
            </li>
            <li>
              <a
                href="https://admin.med-yordam.uz/ru/register"
                target="_blank"
                className="hover:text-blue-400"
              >
                Регистрация
              </a>
            </li>
            <li>
              <a
                href="https://admin.med-yordam.uz/ru/login"
                target="_blank"
                className="hover:text-blue-400"
              >
                Вход в личный кабинет
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start mt-4">
          <Link href={"tel:+998998388078"} className="text-lg">
            +998 (99) 838 80 78
          </Link>
          <div className="flex space-x-7 mt-2 items-center">
            <a
              href="#"
              className="text-white hover:text-blue-400 flex items-center justify-center w-12 h-12 border rounded-full border-white"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 flex items-center justify-center w-12 h-12 border rounded-full border-white"
            >
              <TbBrandTelegram size={25} />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 flex items-center justify-center w-12 h-12 border rounded-full border-white"
            >
              <TiSocialFacebook size={30} />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 flex items-center justify-center w-12 h-12 border rounded-full border-white"
            >
              <FaYoutube size={25} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-sm flex justify-between items-center">
        <p>Med Yordam 2024 - Все права защищены</p>
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
