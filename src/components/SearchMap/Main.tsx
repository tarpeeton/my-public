import { ListOrFilter } from "./ListOrFilter"
import { SearchingNavigation } from "./SeachNavigation"



export const SearchMapMain = () => {
    return (
        <section className="px-[16px] md:px-[20px] lg:px-[100px] pb-[40px] md:pb-[80px] ">
            <SearchingNavigation />
            <ListOrFilter />
        </section>
    )
}