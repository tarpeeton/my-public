"use client";
import { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { Axios } from "@/axios/Axios";
import { useRouter } from "next/navigation";

interface IServiceCategoryForSelect {
  id: number;
  slug: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
}

export interface IService {
  id: number;
  categoryId: number;
  slug: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  useCount: number;
  categorySlug: string;
}

interface IServiceFilterDrawerProps {
  open: boolean;
  close: () => void;
}

export const ServiceFilterDrawer: React.FC<IServiceFilterDrawerProps> = ({
  open,
  close,
}) => {
    const router = useRouter()
  const locale = useLocale();
  const [serviceCategory, setServiceCategory] = useState<
    IServiceCategoryForSelect[]
  >([]);
  const [filteredServiceCategory, setFilteredServiceCategory] = useState<
    IServiceCategoryForSelect[]
  >([]);
  const [selectedCategory, setSelectedCategory] =
    useState<IServiceCategoryForSelect | null>(null);
  const [categorySearchText, setCategorySearchText] = useState("");
  const [openCategorySearch, setOpenCategorySearch] = useState(false);
  const [services, setServices] = useState<IService[]>([]);
  const [filteredServices, setFilteredServices] = useState<IService[]>([]);
  const [selectedService, setSelectedService] = useState<IService | null>(null);
  const [serviceSearchText, setServiceSearchText] = useState("");
  const [openServiceSearch, setOpenServiceSearch] = useState(false);
  const typingTimerCategoryRef = useRef<NodeJS.Timeout | null>(null);
  const typingTimerServiceRef = useRef<NodeJS.Timeout | null>(null);
  const categorySearchRef = useRef<HTMLDivElement>(null);
  const serviceSearchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchServiceCategory = async () => {
      try {
        const res = await Axios.get("/service-category");
        const data: IServiceCategoryForSelect[] = res.data.data;
        setServiceCategory(data);
        setFilteredServiceCategory(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServiceCategory();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const fetchServices = async () => {
        try {
          const res = await Axios.get("/service");
          const data: IService[] = res.data.data;
          const filtered = data.filter(
            (item) => item.categorySlug === selectedCategory.slug
          );
          setServices(filtered);
          setFilteredServices(filtered);
        } catch (error) {
          console.log(error);
        }
      };
      fetchServices();
    } else {
      setServices([]);
      setFilteredServices([]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const handleClickOutsideCategory = (event: MouseEvent) => {
      if (
        categorySearchRef.current &&
        !categorySearchRef.current.contains(event.target as Node)
      ) {
        setOpenCategorySearch(false);
      }
    };
    const handleClickOutsideService = (event: MouseEvent) => {
      if (
        serviceSearchRef.current &&
        !serviceSearchRef.current.contains(event.target as Node)
      ) {
        setOpenServiceSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideCategory);
    document.addEventListener("mousedown", handleClickOutsideService);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCategory);
      document.removeEventListener("mousedown", handleClickOutsideService);
    };
  }, []);

  const toggleCategorySearch = () => {
    setOpenCategorySearch(!openCategorySearch);
  };

  const toggleServiceSearch = () => {
    setOpenServiceSearch(!openServiceSearch);
  };

  const searchCategory = (text: string) => {
    if (typingTimerCategoryRef.current) {
      clearTimeout(typingTimerCategoryRef.current);
    }
    typingTimerCategoryRef.current = setTimeout(() => {
      if (!text.trim()) {
        setFilteredServiceCategory(serviceCategory);
        return;
      }
      const lowerText = text.toLowerCase();
      const filtered = serviceCategory.filter((cat) => {
        const { uz, ru, en } = cat.name;
        return (
          uz.toLowerCase().includes(lowerText) ||
          ru.toLowerCase().includes(lowerText) ||
          en.toLowerCase().includes(lowerText)
        );
      });
      setFilteredServiceCategory(filtered);
    }, 250);
  };

  const searchService = (text: string) => {
    if (typingTimerServiceRef.current) {
      clearTimeout(typingTimerServiceRef.current);
    }
    typingTimerServiceRef.current = setTimeout(() => {
      if (!text.trim()) {
        setFilteredServices(services);
        return;
      }
      const lowerText = text.toLowerCase();
      const filtered = services.filter((srv) => {
        const { uz, ru, en } = srv.name;
        return (
          uz.toLowerCase().includes(lowerText) ||
          ru.toLowerCase().includes(lowerText) ||
          en.toLowerCase().includes(lowerText)
        );
      });
      setFilteredServices(filtered);
    }, 250);
  };


  const search = () => {
    if (selectedCategory && selectedService) {
      router.push(`/${locale}/services/${selectedCategory.slug}/${selectedService.slug}`);
    }
  };
  const refreshAllData = () => {
    setSelectedCategory(null);
    setSelectedService(null);
    setCategorySearchText("");
    setServiceSearchText("");
    setFilteredServiceCategory(serviceCategory);
    setFilteredServices([]);
  };




  if (!open) return null;
  return (
    <aside>
      <div className="w-full h-full bg-[#050b2b63] fixed top-0 right-0 z-[99]">
        <div className="absolute right-0 w-[300px] md:w-[400px] md:px-6 px-5 py-7 h-full bg-white z-[999]">
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="text-[24px] font-semibold md:text-[30px] lg:text-[40px] text-black">
              {locale === "ru"
                ? "Фильтры"
                : locale === "uz"
                  ? "Filtrlar"
                  : "Filters"}
            </h1>
            <button onClick={close} aria-label="Закрыть" className="w-7 h-7">
              <IoClose className="w-7 h-7" />
            </button>
          </div>
          <div className="flex mt-5 flex-col gap-[20px] md:gap-[25px]">
            <div className="relative">
              <button
                onClick={toggleCategorySearch}
                className={`rounded-[10px] text-[20px] font-medium text-[#7C7C7C] p-5 flex items-center justify-between w-full ${
                  openCategorySearch
                    ? "border-[#0129E3] border"
                    : "border border-[#EBEBEB]"
                }`}
              >
                {selectedCategory ? (
                  <p>{selectedCategory.name[locale]}</p>
                ) : (
                  <p>
                    {locale === "ru"
                      ? "Категория услуги"
                      : locale === "uz"
                        ? "Xizmat turi"
                        : "Service category"}
                  </p>
                )}
                <IoIosArrowDown
                  className={`${openCategorySearch ? "duration-150 ease-in-out rotate-180" : ""}`}
                />
              </button>
              {openCategorySearch && (
                <div
                  ref={categorySearchRef}
                  className="w-full mt-4 border border-[#EBEBEB] shadow-lg rounded-[10px] p-[10px] flex flex-col gap-[12px]"
                >
                  <div className="border h-14 flex items-center flex-row border-[#EBEBEB] rounded-[10px] px-[10px] pr-[5px] md:px-4">
                    <IoSearchOutline className="w-[25px] h-[25px]" />
                    <input
                      value={categorySearchText}
                      onChange={(e) => {
                        setCategorySearchText(e.target.value);
                        searchCategory(e.target.value);
                      }}
                      placeholder={
                        locale === "ru"
                          ? "Поиск"
                          : locale === "uz"
                            ? "Qidiruv"
                            : "Search"
                      }
                      className="outline-none pl-2 w-full"
                    />
                  </div>
                  {filteredServiceCategory.map((cat) => (
                    <div
                      key={cat.id}
                      className="flex flex-row items-center justify-between"
                    >
                      <button
                        onClick={() => {
                          setSelectedCategory(cat);
                          setOpenCategorySearch(false);
                        }}
                        className={`font-medium lg:px-2 w-full ${
                          cat.slug === selectedCategory?.slug
                            ? "text-[#0129E3]"
                            : "text-[#7C7C7C]"
                        } text-[16px] flex flex-row items-center justify-between`}
                      >
                        <p className="text-[18px]">{cat.name[locale]}</p>
                        {cat.slug === selectedCategory?.slug && (
                          <FaCheck className="text-[#0129E3]" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleServiceSearch}
                className={`rounded-[10px] text-[16px] md:text-[20px] font-medium text-[#7C7C7C] p-5 flex items-center justify-between w-full ${
                  openServiceSearch
                    ? "border-[#0129E3] border"
                    : "border border-[#EBEBEB]"
                }`}
              >
                {selectedService ? (
                  <p className="text-left">{selectedService.name[locale]}</p>
                ) : (
                  <p>Выберите услугу</p>
                )}
                <IoIosArrowDown
                  className={`${openServiceSearch ? "duration-150 ease-in-out rotate-180" : ""}`}
                />
              </button>
              {openServiceSearch && (
                <div
                  ref={serviceSearchRef}
                  className="w-full mt-4 border border-[#EBEBEB] shadow-lg rounded-[10px] p-[10px] flex flex-col gap-[12px]"
                >
                  <div className="border h-14 flex items-center flex-row border-[#EBEBEB] rounded-[10px] px-[10px] pr-[5px] md:px-4">
                    <IoSearchOutline className="w-[25px] h-[25px]" />
                    <input
                      value={serviceSearchText}
                      onChange={(e) => {
                        setServiceSearchText(e.target.value);
                        searchService(e.target.value);
                      }}
                      placeholder="Поиск"
                      className="outline-none pl-2 w-full text-[16px]"
                    />
                  </div>
                  {selectedCategory === null && (
                    <p>
                      {locale === "ru"
                        ? "Выберите категорию услуги"
                        : locale === "uz"
                          ? "Xizmat turini tanlang"
                          : "Select service category"}
                    </p>
                  )}

                  {filteredServices.map((srv) => (
                    <div
                      key={srv.id}
                      className="flex flex-row items-center justify-between"
                    >
                      <button
                        onClick={() => {
                          setSelectedService(srv);
                          setOpenServiceSearch(false);
                        }}
                        className={`font-medium text-left lg:px-2 w-full ${
                          srv.slug === selectedService?.slug
                            ? "text-[#0129E3]"
                            : "text-[#7C7C7C]"
                        } text-[16px] flex flex-row items-center justify-between`}
                      >
                        <p className="text-[18px]">{srv.name[locale]}</p>
                        {srv.slug === selectedService?.slug && (
                          <FaCheck className="text-[#0129E3]" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-row items-center justify-between">
              <button onClick={search} className="rounded-[8px] bg-[#0129E3] w-[47%] font-medium text-center h-10 flex items-center justify-center text-white">
              {locale === "ru" ? "Искать" : locale === "uz" ? "Qidirish" : "Search"}
              </button>
              <button onClick={refreshAllData} className="rounded-[8px] bg-[#de3232] w-[47%] font-medium text-center h-10 flex items-center justify-center text-white">
              {locale === "ru" ? "Сбросить" : locale === "uz" ? "Tozalash" : "Reset"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
