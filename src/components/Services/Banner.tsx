import { useLocale } from "next-intl"
import Image from "next/image"


interface IBannerProps {
    total: number
}


export const Banner = ({total}: IBannerProps) => {
    const locale = useLocale() as "ru" | "uz" | "en"

    return (
        <section className="flex flex-col mt-6 lg:h-[360px] lg:px-20  lg:justify-between  lg:flex-row  lg:items-center bg-gradient-to-tr from-[#012ae3ed] to-[#379FF2] lg:rounded-[40px] rounded-[12px]">
                <div className="text-white px-5 py-4 md:py-14 md:px-7 ">
                    <h1 className="text-[24px] font-semibold md:text-[48px]  lg:text-[50px]">
                        {locale === 'ru' ? "Медицинские услуги" : locale === 'uz' ? " Tibbiy xizmatlar" : "Medical services"}
                    </h1>
                    <h2 className="text-[16px] font-medium md:text-[24px]  lg:text-[24px] mt-5">
                    {locale === 'ru' ? `${total} услуги в Ташкенте` : locale === 'uz' ? `Toshkentda ${total} ta xizmatlar` : `${total} services in Tashkent`}
                    </h2>
                </div>
                <div className="h-full">
                    <Image src="https://ucarecdn.com/8cc822e6-fb4d-4ee4-8348-b4a9baf42711/-/preview/494x505/" priority width={1000} height={800} quality={100} alt="Service Image" className="object-cover w-full h-full" />
                </div>

        </section>
    )
}