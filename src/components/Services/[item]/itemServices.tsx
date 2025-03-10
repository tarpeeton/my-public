"use client";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { Axios } from "@/axios/Axios";
import { GrLinkNext } from "react-icons/gr";
import { Pagination } from "../Paginations";
import { ItemsPerPageSelect } from "../Select";
import BreacdCrambs from "@/components/bread-crumb";
import { ServiceName } from "./Banner";
import { useDoctorStore } from "@/store/Doctors";
import { IMultiLang } from "@/types/Doctor";
import { Link } from "@/i18n/routing";
import { useParams } from "next/navigation";

interface IDataProps {
  id: number;
  categoryId: number;
  slug: string;
  name: IMultiLang;
  useCount?: number | null;
  categorySlug: string;
}

interface IPagination {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  pageSize: number;
}

interface IServicesResponse {
  message: string | null;
  data: IDataProps[];
  status: number;
  pagination: IPagination;
}

interface IItemServiceProps {
  ServiceID: number;
  name: IMultiLang
}

export const transformedPrice = (price: number | null): string => {
  if (price === null) return "";
  return new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0,
  }).format(price);
};

export const ItemServices = ({ ServiceID , name }: IItemServiceProps) => {
  const locale = useLocale() as "ru" | "uz" | "en";
  const {id} = useParams()
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(9);
  const [serviceData, setServiceData] = useState<IDataProps[]>([]);
  const [total, setTotal] = useState<number>(0);
  const { getMinPriceByServiceId } = useDoctorStore();

  const totalPages = Math.ceil(total / perPage);

  const [serviceName, setServiceName] = useState<ServiceName>({
    ru: "Услуги",
    uz: "Xizmatlar",
    en: "Services",
  });

  const breadcrumbData = {
    title: { ru: "Услуги", uz: "Xizmatlar", en: "Services" },
    slug: `${locale}/services`,
  };

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentServices = serviceData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePerPageChange = (value: number) => {
    setPerPage(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchCategoryService = async () => {
      try {
        const res = await Axios.get<IServicesResponse>(`/service?categoryId=${ServiceID}`);
        setServiceData(res.data.data);
        setServiceName(name)
        setTotal(res.data.pagination.totalElements);
      } catch (error) {
        console.error("Failed to fetch services", error);
      }
    };
    fetchCategoryService();
  }, [ServiceID]);

  return (
    <section>
      <BreacdCrambs
        data={breadcrumbData}
        page={{ en: serviceName.en, ru: serviceName.ru, uz: serviceName.uz }}
      />
      <div>
        <p className="w-[120px] font-bold -rotate-[5deg] text-center py-[12px] text-white bg-gradient-to-tr from-[#012ae3ed] to-[#379FF2] rounded-[10px] items-center flex justify-center px-3">
          {locale === "ru" ? "Услуги" : locale === "uz" ? "Xizmatlar" : "Services"}
        </p>
        <p className="text-[24px] mt-2 md:text-[36px] lg:text-[40px] text-black font-semibold">
          {locale === "ru"
            ? `${serviceName.ru} услуги`
            : locale === "uz"
            ? `${serviceName.uz} xizmatlar`
            : `${serviceName.en} services`}
        </p>
      </div>
      <div className="mt-5 md:mt-8 lg:mt-10 grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
        {currentServices.map((service, index) => {
          const price = getMinPriceByServiceId(service.slug);
          const formattedPrice = transformedPrice(price);
          return (
            <div
              key={index}
              className="border lg:min-h-[200px] relative border-[#E8E8E8] rounded-t-[20px] md:rounded-t-[30px] md:rounded-tr-[30px] md:rounded-bl-[30px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[60px] md:rounded-br-[95px]"
            >
              <div className="flex flex-row items-center gap-[30px] p-5">
                <div className="flex flex-col gap-[10px] w-[40%] lg:w-[60%]">
                  <p className="text-[16px] md:text-[20px] lg:text-[24px] font-semibold">
                    {service.name[locale]}
                  </p>
                  <p className="text-[15.3px] md:text-[23px] font-semibold text-numberOrBg">
                    {locale === "ru"
                      ? `От ${formattedPrice} сум`
                      : locale === "uz"
                      ? `So'mdan ${formattedPrice}`
                      : `From ${formattedPrice}`}
                  </p>
                </div>
              </div>
              <div className="absolute flex group justify-center bottom-0 lg:bottom-1 lg:right-2 right-0 border-l border-t border-tl-[#E8E8E8] rounded-full bg-white z-10 w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex-row items-center">
                <Link
                  href={`/services/${id}/${service.slug}`}
                  className="border w-[40px] lg:w-[55px] lg:h-[55px] flex items-center justify-center h-[40px] bg-numberOrBg border-[#E8E8E8] rounded-full"
                >
                  <GrLinkNext className="text-white group-hover:ml-[8px] transition-all duration-100" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row items-center justify-between mt-5 md:mt-[40px] 2xl:mt-[80px] pb-10 md:pb-[100px]">
        <p className="text-[16px] text-[#667085] font-medium md:block hidden">
          {locale === "ru"
            ? `Всего ${total} типа услуги`
            : locale === "uz"
            ? `Jami ${total} turdagi xizmatlar`
            : `A total of ${total} types of services`}
        </p>
        <div className="flex-row justify-center md:w-[30%] w-full items-center gap-2 flex">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          <div className="hidden md:block">
            <ItemsPerPageSelect perPage={perPage} onChange={handlePerPageChange} />
          </div>
        </div>
      </div>
    </section>
  );
};
