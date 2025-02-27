import { useLocale } from "next-intl";
import Image from "next/image";

interface IBannerProps {
  total: number;
}

export const ClinicBanner = ({ total }: IBannerProps) => {
  const locale = useLocale() as "ru" | "uz" | "en";

  return (
    <section className="flex flex-col lg:h-[360px] lg:px-20  lg:justify-between  lg:flex-row  lg:items-center bg-gradient-to-tr from-[#012ae3ed] to-[#379FF2] lg:rounded-[40px] rounded-[12px]">
      <div className="text-white px-5 py-4 md:py-14 md:px-7 ">
        <p className="text-[24px] font-semibold md:text-[48px]  lg:text-[50px]">
          {locale === "ru"
            ? "Найдите лучших клиники раядом с вами"
            : locale === "uz"
              ? "Yaqin atrofdagi eng yaxshi klinikalarni toping"
              : "Find the best clinics near you"}
        </p>
        <p className="text-[16px] font-medium md:text-[24px]  lg:text-[24px] mt-5">
          {locale === "ru"
            ? `${total} клиник в Ташкенте`
            : locale === "uz"
              ? `Toshkentda ${total} ta klinikalar`
              : `${total} clinics in Tashkent`}
        </p>
      </div>
      <div className="h-full">
        <Image
          src="https://ucarecdn.com/8cc822e6-fb4d-4ee4-8348-b4a9baf42711/-/preview/494x505/"
          width={1000}
          height={800}
          quality={100}
          alt="Service Image"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};
