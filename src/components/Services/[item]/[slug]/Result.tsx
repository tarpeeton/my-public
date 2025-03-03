"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDoctorStore } from "@/store/Doctors";
import { IDoctorFull } from "@/types/Doctor";
import { IClinicFull } from "@/types/Clinick";
import YandexMap from "@/components/YandexMap/Map";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { Link } from "@/i18n/routing";
import { FaArrowRight } from "react-icons/fa";
import { StarRating } from "@/components/Clinics/Clinics";
import { useLocale } from "next-intl";
import { ClinickAppLicationModal } from "@/components/Modals/ClinickApplicationModal";
import { useParams } from "next/navigation";
import { transformedPrice } from "../itemServices";

interface IDoctorResponse {
  data: IDoctorFull[];
}
interface IClinickResponse {
  data: IClinicFull[];
}

export const Result = () => {
  const { setDoctors, setClinick, clinick, filterClinickByServiceSlug } =
    useDoctorStore();
  const [openAppLication, setOpenApplication] = useState(false);
  const [clinickID, setClinickID] = useState(0);
  const [openServices, setOpenServices] = useState<Record<number, boolean>>({});
  const { slug: serviceSlug } = useParams();

  const locale = useLocale();

  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const res = await axios.get<IDoctorResponse>(
          "https://medyordam.result-me.uz/api/doctor",
          { headers: { "Accept-Language": "" } }
        );
        setDoctors(res.data.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };
    fetchAllDoctors();
    filterClinickByServiceSlug(serviceSlug[0]);
  }, []);

  const handleOpenAppLicationModal = (id: number) => {
    setClinickID(id);
    setOpenApplication(true);
  };

  useEffect(() => {
    const fetchAllClincik = async () => {
      try {
        const res = await axios.get<IClinickResponse>(
          "https://medyordam.result-me.uz/api/clinic",
          { headers: { "Accept-Language": "" } }
        );
        const filteredClinick =
          serviceSlug !== null
            ? res.data.data.filter((clinic) =>
                clinic.services.some((s) => s.service.slug === serviceSlug)
              )
            : res.data.data;

        setClinick(filteredClinick);
      } catch (error) {
        console.error("Error fetching clinic data:", error);
      }
    };
    fetchAllClincik();
  }, [setClinick, serviceSlug]);

  return (
    <section className="grid grid-cols-1 gap-[20px] pb-8 lg:pb-36">
      {clinick?.map((item, index) => (
        <Card
          key={index}
          className="p-6 flex flex-col lg:rounded-[20px]  lg:shadow-lg lg:flex-row gap-4 border-none shadow-xl "
        >
          <div className="flex-1 flex flex-col gap-4">
            <Image
              src={item.logo.url}
              alt={item.name + "photo"}
              width={1000}
              height={400}
              quality={100}
              className="lg:h-[100px]"
            />
            <p className="text-xl font-semibold">
              {locale === "ru"
                ? "Запись на приём: "
                : locale === "uz"
                  ? "Qabulga yozilish: "
                  : "Appointment booking: "}
            </p>
            <div className="flex items-center gap-3 text-center">
              <FaPhone
                className="text-[#0129E3] bg-[#0129E31A] mt-1 rounded-full py-2 px-2"
                size={40}
              />
              <a
                href={`tel:${item.phone}`}
                className="mt-2 font-semibold text-xl"
              >
                {item.phone}
              </a>
            </div>
            <div className="flex-grow" />

            <button
              onClick={() => handleOpenAppLicationModal(item.id)}
              className="mt-auto font-semibold bg-[#0129E3] text-white flex items-center justify-center rounded-full px-10 py-1 text-sm h-12 w-44"
            >
              {locale === "ru"
                ? "Записаться"
                : locale === "uz"
                  ? "Yozilish"
                  : "Book an appointment"}
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">
              {locale === "ru"
                ? "Клиника"
                : locale === "uz"
                  ? "Klinika"
                  : "Clinic"}
            </p>
            <p className="font-semibold">
              {item.doctors.length + 1}{" "}
              {locale === "ru"
                ? "врачей"
                : locale === "uz"
                  ? "Shifokorlar"
                  : "Doctors"}
            </p>
            <p className="mt-2 text-gray-700">
              {item.aboutUs[0].description[locale]}
            </p>
            <div className="mt-2 flex">
              <StarRating rating={item.id} /> /
              <p className="ml-2 text-sm text-gray-500">
                {item.id}{" "}
                {locale === "ru"
                  ? "отзывов"
                  : locale === "uz"
                    ? "Sharhlar"
                    : "reviews"}
              </p>
            </div>
            <div className="w-full pr-2">
              {item.services
                .filter((s) => s.service.slug === serviceSlug)
                .filter(
                  (service, index, self) =>
                    index ===
                    self.findIndex(
                      (s) =>
                        s.service.name[locale] === service.service.name[locale]
                    )
                )
                .map((filteredService, index) => (
                  <div
                    key={index}
                    className="w-full relative flex flex-row items-center justify-between"
                  >
                    <p className="text-[14.3px] md:text-[17px] text-[#7C7C7C] font-medium">
                      {filteredService.service.name[locale]}
                    </p>
                    <p className="text-[16.5px] md:text-[17px] text-black font-medium">
                      {locale === "ru"
                        ? ` ${transformedPrice(filteredService.price)} сум`
                        : locale === "uz"
                          ? `${filteredService.price} so'm`
                          : `${filteredService.price} uzs`}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex-1 h-full w-full overflow-hidden">
            <h1 className="text-lg font-semibold">{item.name}</h1>
            <p className="text-gray-500">{item.address[locale]}</p>
            <div className="flex items-center gap-2 flex-nowrap mb-5 mt-1">
              <Link
                href={`${item.receptionTimes?.[0].addressLink || ""}`}
                target="_blank"
                className="text-blue-600 hover:underline font-semibold"
              >
                {locale === "ru"
                  ? "Открыть в Яндекс картах"
                  : locale === "uz"
                    ? "Yandex xaritalarda ochish"
                    : "Open in Yandex Maps"}
              </Link>
              <FaArrowRight className="text-blue-500 hover:underline font-semibold" />
            </div>

            <div className="w-full max-w-full overflow-hidden">
              <YandexMap
                location={[
                  item.receptionTimes[0].latitude,
                  item.receptionTimes[0].longitude,
                ]}
              />
            </div>
          </div>
        </Card>
      ))}
      <ClinickAppLicationModal
        type="CLINCIK"
        clinickID={clinickID}
        open={openAppLication}
        setClose={() => setOpenApplication(false)}
      />
    </section>
  );
};
