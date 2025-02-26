import { Banner } from "./Banner"
import { Services } from "./Services"
import { ServiceData } from "./types/service"

interface IServiceProps  {
    data: ServiceData[]
    totalElements: number
}


export const MainServices = ({data , totalElements} : IServiceProps) => {
    return (
        <section className="flex flex-col gap-10  md:gap-24 2xl:gap-[80px] px-4 md:px-5 2xl:px-12">
            <Banner  total={totalElements} />
            <Services serviceData={data} total={totalElements} />
        </section>

    )
}