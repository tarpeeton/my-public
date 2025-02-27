"use client";
import { useEffect } from "react";
import { Input } from "../ui/input";
import { useLocale, useTranslations } from "next-intl";
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
import { useSpecialityStore } from "@/store/FilterDoctorClinick";

const Filter = () => {
  const t = useTranslations("Doctor");
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
  } = useSpecialityStore();
  const locale = useLocale();

  useEffect(() => {
    fetchSpecialities();
    fetchSity();
    fetchClincik();
    fetchDoctors();
  }, []);

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
                  {doctors.map((doctor) => (
                    <SelectItem
                      key={`doctor-${doctor.id}-${doctor.name[locale]}`}
                      value={`${doctor.name[locale]} || "salom"`}
                    >
                      {doctor.name[locale]}
                    </SelectItem>
                  ))}
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
            <Button className="bg-[#0129E3] text-white hover:bg-[#0129E3] flex items-center">
              <Search className="mr-2" /> {t("search")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
