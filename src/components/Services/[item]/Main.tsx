import { ServiceData } from "../types/service"
import { Banner } from "./Banner"
import { ItemServices } from "./itemServices"
import { Result } from "./Results"


interface IServiceProps  {
    totalElements: number
    serviceData: ServiceData[]
}

export const ServiceItemMain = ({totalElements , serviceData}: IServiceProps) => {
    return (
        <div className="flex flex-col gap-10  md:gap-24 2xl:gap-[80px] px-4 md:px-5 2xl:px-12">
            <Banner   total={totalElements}/>
            <ItemServices serviceData={serviceData} total={totalElements} />
            <Result />
        </div>
    )
}