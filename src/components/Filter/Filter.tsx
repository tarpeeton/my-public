"use client";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useLocale, useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Link } from "@/i18n/routing";
// IKONKA BU FAYZULLO
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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
import { useSpecialityStore } from "@/store/FilterDoctorClinick";
import Image from "next/image";
import { NoResultInfo } from "./NoResult";

const Filter = () => {
  const locale = useLocale();

  const t = useTranslations("Doctor");
  const [searched, setSearched] = useState(false);
  const [filteredData, setFilteredData] = useState<
    ReturnType<typeof getFilteredAll>
  >([]);

  const {
    fetchSpecialities,
    specialities,
    fetchSity,
    sity,
    fetchClincik,
    fetchDoctors,
    doctors,
    clinick,
    setSityID,
    setSpecialityID,
    setName,
    setDoctorNameOrClinick,
    searchingName,
    getFilteredAll,
  } = useSpecialityStore();

  useEffect(() => {
    fetchSpecialities();
    fetchSity();
    fetchClincik();
    fetchDoctors();
  }, []);

  const handleSearch = () => {
    const result = getFilteredAll();
    setFilteredData(result);
    setSearched(true);
  };

  return (
    <div className="mt-[-50px] px-3 md:px-24">
      <div className="bg-white rounded-[20px] p-3 md:p-5 xl:p-10 border relative !z-10 block">
        <form className="flex flex-col space-y-4">
          <div className="relative w-full">
            <Input
              className="pl-10 outline-none"
              type="search"
              placeholder={t("filter_search")}
              onChange={(e) => setDoctorNameOrClinick(e.target.value)}
              value={searchingName}
            />
            <Search className="absolute top-2 left-2" />
          </div>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-2 md:gap-x-4">
            {/* По специализации */}
            <Select onValueChange={(value) => setSpecialityID(Number(value))}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="По специализации" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Специализация</SelectLabel>
                  {specialities.map((item) => (
                    <SelectItem
                      key={`speciality-${item.id}`}
                      value={String(item.id)}
                    >
                      {item?.name?.[locale]}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* По городу */}
            <Select onValueChange={(value) => setSityID(Number(value))}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="По городу" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Город</SelectLabel>
                  {sity.map((item) => (
                    <SelectItem key={`sity-${item.id}`} value={String(item.id)}>
                      {item.name[locale]}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* По названию/имени */}
            <Select onValueChange={(value) => setName(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="По названию/имени" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Название/Имя</SelectLabel>
                  {doctors.map((doctor) => {
                    const docName =
                      doctor.name[locale] || `Unnamed-${doctor.id}`;
                    return (
                      <SelectItem key={`doctor-${doctor.id}`} value={docName}>
                        {docName}
                      </SelectItem>
                    );
                  })}

                  {clinick.map((clinic) => (
                    <SelectItem
                      key={`clinick-${clinic.id}-${clinic.name}`}
                      value={`${clinic.name}`}
                    >
                      {clinic.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Кнопка поиска */}
            <Button
              type="button"
              onClick={handleSearch}
              className="bg-[#0129E3] text-white hover:bg-[#0129E3] flex items-center"
            >
              <Search className="mr-2" /> {t("search")}
            </Button>
          </div>
        </form>
      </div>

      {searched && (
        <div className="mt-6 ">
          {filteredData.length === 0 ? (
            <NoResultInfo />
          ) : (
            <div className=" grid grid-cols-1  lg:grid-cols-4 gap-[20px]">
              {filteredData.map((item, idx) => {
                if (item.type === "doctor") {
                  const doctor = item.data;
                  return (
                    <div key={item.data.name.ru}>
                      <div className="lg:min-h-[510px] bg-white rounded-2xl overflow-hidden mb-10 shadow-sm hover:shadow-md duration-200 flex flex-col justify-between">
                        <div className="w-full 2xl:h-[300px] h-[250px] relative">
                          <Image
                            src={doctor.photo?.url || "/fallback.jpg"}
                            alt={doctor.name.ru}
                            fill
                            quality={100}
                            className="rounded-2xl object-cover object-top"
                          />
                          <div className="absolute bottom-3 bg-white px-2 py-1 rounded-r-md flex items-center shadow-md gap-1">
                            <span className="text-blue-500 font-bold text-sm">
                              <FaStar />
                            </span>
                            {doctor.rating || "-"}
                          </div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <span className="bg-[#CFFAFE] w-max px-3 py-1.5 rounded-md text-sm font-semibold">
                            {doctor.speciality?.[0]?.name[locale] ||
                              "Неизвестно"}
                          </span>

                          <h3 className="text-lg font-semibold mt-2">
                            {doctor.name[locale]} {doctor.patronymic[locale]}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1 flex-grow">
                            {doctor.description[locale]?.length > 50
                              ? doctor.description[locale].slice(0, 50) + "..."
                              : doctor.description[locale]}
                          </p>

                          <div className="flex items-center text-sm mt-2">
                            <FaLocationDot className="w-5 h-5 text-blue-500 mr-1" />
                            {doctor?.receptionTime[0]?.address[locale] ||
                              "Неизвестный адрес"}
                          </div>

                          <div className="flex flex-row items-center w-full mt-[15px] ">
                            <Link
                              href={`/doctors/${doctor.slug}`}
                              className="text-[#0129E3] w-full  flex items-center flex-row gap-2"
                            >
                              {locale === "ru"
                                ? "Подробнее"
                                : locale === "uz"
                                  ? "Batafsil"
                                  : "More details"}

                              <FiArrowRight className="w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  const clinic = item.data;
                  return (
                    <div
                      key={clinic.name}
                      className="bg-white rounded-2xl overflow-hidden mb-10 shadow-sm hover:shadow-md duration-200"
                    >
                      <div className="w-full h-[300px] relative">
                        <Image
                          src={clinic.mainPhoto?.url || "/placeholder.jpg"}
                          alt={clinic.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-2xl object-top"
                        />
                        <div className="absolute bottom-3 bg-white px-2 py-1 rounded-r-md flex items-center shadow-md gap-1">
                          <span className="text-blue-500 font-bold text-sm">
                            <FaStar />
                          </span>
                          {clinic.rating || "Нет рейтинга"}
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="h-[32px]" />
                        <h3 className="text-lg font-semibold mt-2">
                          {clinic.name}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {(clinic.aboutUs?.[0]?.description?.[locale]
                            ?.length || 0) > 70
                            ? clinic.aboutUs[0].description[locale].slice(
                                0,
                                70
                              ) + "..."
                            : clinic.aboutUs?.[0]?.description?.[locale] ||
                              "Описание отсутствует"}
                        </p>

                        <div className="flex items-center text-sm mt-2">
                          <FaLocationDot className="w-5 h-5 text-blue-500 mr-1" />
                          {clinic.address?.[0]?.name?.[locale] ||
                            "Адрес не указан"}
                        </div>

                        <Link href={`/clinick/${clinic.slug}`} passHref>
                          <Button
                            variant="link"
                            className="text-[#0129E3] flex items-center mt-2"
                          >
                            {locale === "ru"
                              ? "Подробнее"
                              : locale === "uz"
                                ? "Batafsil"
                                : "More details"}

                            <FiArrowRight className="w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Filter;
