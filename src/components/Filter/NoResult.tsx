import Image from "next/image";
import { useLocale } from "next-intl";

export const NoResultInfo = () => {
    const locale = useLocale()
    
  return (
    <div className="w-full  flex items-center justify-center">
      <div className="lg:w-[500px] flex items-center justify-center flex-col">
        <Image
          alt="no result image"
          quality={100}
          width={1200}
          height={1200}
          src={
            "https://ucarecdn.com/14d0b10b-8127-49ac-928c-380cce31be91/-/preview/1000x800/"
          }
        />
        <p className="text-[18px] text-[#050B2B] md:text-[20px] lg:text-[24px] font-medium">
          {locale === "ru"
            ? "Ничего не нашлось по вашему запросу"
            : locale === "uz"
              ? "Sizning so'rovingiz bo'yicha hech narsa topilmadi"
              : "Nothing found for your request"}
        </p>
      </div>
    </div>
  );
};
