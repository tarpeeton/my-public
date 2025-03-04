"use client";
import { useEffect, useRef , useCallback } from "react";
import { useLocale } from "next-intl";
import { IoSearch } from "react-icons/io5";
import { NavigationActiveTab } from "@/types/AcitveTabMap";
import { useSearchMapStore } from "@/store/SearchMap";
import { Axios } from "@/axios/Axios";



export const SearchingNavigation = () => {
  const locale = useLocale();
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    setSpesiality,
    activeTab,
    setActiveTab,
    setService,
    searchByName,
    setSearchName,
    setDoctors,
    setClinick,
    setSity,
    filter,
    filteredResults
  } = useSearchMapStore();

  const fetchDoctors = useCallback(async () => {
    try {
      const res = await Axios.get("/doctor");
      setDoctors(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [setDoctors]);

  const fetchClinick = useCallback(async () => {
    try {
      const res = await Axios.get("/clinic");
      setClinick(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [setClinick]);

  const fetchSity = useCallback(async () => {
    try {
      const res = await Axios.get("/city");
      setSity(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [setSity]);

  const fetchServices = useCallback(async () => {
    try {
      const res = await Axios.get("/service");
      setService(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [setService]);

  const fetchSpecialitions = useCallback(async () => {
    try {
      const res = await Axios.get("/speciality");
      setSpesiality(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [setSpesiality]);

  const fetchedRef = useRef(false);
  useEffect(() => {
    if (!fetchedRef.current) {
      fetchedRef.current = true;
      fetchDoctors();
      fetchServices();
      fetchClinick();
      fetchSity();
      fetchSpecialitions();
    }
  }, [fetchDoctors, fetchServices, fetchClinick, fetchSity, fetchSpecialitions]);
  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-5 md:mt-7 lg:mt-8">
      <div className="flex lg:flex-1 w-full lg:w-[50%] flex-row items-center">
        <button
          onClick={() => inputRef.current?.focus()}
          className="relative  h-[50px]  w-full flex flex-row items-center pl-5 border border-[#EBEBEB] rounded-[8px] md:h-[60px]"
        >
          <IoSearch className="text-[#A6A6A6] w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]" />

          <input
            ref={inputRef}
            value={searchByName}
            onChange={(e) => setSearchName(e.target.value)}
            className="pl-5 pr-5  lg:text-[18px]  w-full outline-none text-[#A6A6A6]"
            placeholder={
                locale === "ru"
                  ? "Поиск врача или клиники"
                  : locale === "uz"
                    ? "Shifokor yoki klinikani qidirish"
                    : "Search for a doctor or clinic"
              }
              
          />
        </button>
        <button onClick={filter} className="md:flex px-5  lg:text-[18px] md:h-[60px] text-white font-medium text-[17.2px] bg-[#0129E3] rounded-tr-[10px] rounded-br-[10px] flex-row items-center gap-1 hidden">
          <IoSearch className="w-[25px] h-[25px]" />
          {locale === "ru" ? "Поиск" : locale === "uz" ? "Qidirish" : "Search"}

        </button>
      </div>
      <div className="w-full lg:w-[45%] lg:order-[-1] flex flex-row items-center justify-between lg:justify-normal lg:gap-2">
        <button
          onClick={() => setActiveTab(NavigationActiveTab.FILTER)}
          className={`rounded-[13px] h-[50px] min-w-[120px] lg:min-w-[190px] md:h-[60px] font-medium  ${
            activeTab === NavigationActiveTab.FILTER
              ? "bg-[#0129E3] text-white"
              : "bg-[#E5EAFF] text-[#0129E3]"
          }`}
        >
          {locale === "ru" ? "Фильтр" : locale === "uz" ? "Filter" : "Filter"}
        </button>
        <button
          onClick={() => setActiveTab(NavigationActiveTab.LIST)}
          className={`rounded-[13px] h-[50px] min-w-[120px] lg:min-w-[190px] md:h-[60px] font-medium  ${
            activeTab === NavigationActiveTab.LIST
              ? "bg-[#0129E3] text-white"
              : "bg-[#E5EAFF] text-[#0129E3]"
          }`}
        >
          {locale === "ru" ? "Список" : locale === "uz" ? "Ro'yxat" : "List"}
        </button>
      </div>
    </div>
  );
};
