import React from "react";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const ClinicFilter = () => {
  const t = useTranslations("Doctor");

  return (
    <div className="mt-[-50px] px-3 md:px-24">
      <div className="bg-white rounded-[20px] p-3 md:p-5 xl:p-10 border relative !z-10 block">
        <form className="flex flex-col space-y-4">
          <div className="relative w-full">
            <Input
              className="pl-10 outline-none"
              type="search"
              placeholder={t("filter_search")}
            />
            <Search className="absolute top-2 left-2" />
          </div>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-2 md:gap-x-4">
            {/* По специализации */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="По специализации" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Специализация</SelectLabel>
                  <SelectItem value="cardiologist">Кардиолог</SelectItem>
                  <SelectItem value="neurologist">Невролог</SelectItem>
                  <SelectItem value="therapist">Терапевт</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* По городу */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="По городу" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Город</SelectLabel>
                  <SelectItem value="tashkent">Ташкент</SelectItem>
                  <SelectItem value="samarkand">Самарканд</SelectItem>
                  <SelectItem value="bukhara">Бухара</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* По названию/имени */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="По названию/имени" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Название/Имя</SelectLabel>
                  <SelectItem value="clinic1">Клиника №1</SelectItem>
                  <SelectItem value="doctor-akhmedov">
                    Доктор Ахмедов
                  </SelectItem>
                  <SelectItem value="med-center">
                    Медицинский центр &quot;Здоровье&quot;
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Кнопка поиска */}
            <Button className="bg-[#0129E3] text-white hover:bg-[#0129E3] flex items-center">
              <Search className="mr-2" /> {t("search")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClinicFilter;
