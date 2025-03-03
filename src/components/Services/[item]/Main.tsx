import { Banner } from "./Banner"
import { ItemServices } from "./itemServices"
import { Result } from "./Results"
import { IMultiLang } from "@/types/Doctor";

interface IDataProps {
    id: number;
    slug: string;
    name: IMultiLang;
    useCount?: number;
}
interface IServiceProps  {
    totalElements: number
    serviceData: IDataProps
}



export const ServiceItemMain = ({totalElements , serviceData}: IServiceProps) => {
    return (
        <section className="flex flex-col gap-10  md:gap-24 2xl:gap-[80px] px-4 md:px-5 2xl:px-12">
            <Banner  name={serviceData.name}  total={totalElements}/>
            <ItemServices ServiceID={serviceData.id}  name={serviceData.name} />
            <Result />
        </section>
    )
}