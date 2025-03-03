// MainServiceIdSlug.tsx
import { Banner } from "./Banner";
import { InfoNavigation } from "./InfoNavigation";
import { Result } from "./Result";
import { IMultiLang } from "@/types/Doctor";

interface ServiceData {
  id: number;
  categoryId: number;
  slug: string;
  name: IMultiLang;
  useCount: number | null;
  categorySlug: string;
}

interface MainServiceIdSlugProps {
  totalElements: number;
  serviceData: ServiceData;
}

export const MainServiceIdSlug = ({ totalElements, serviceData }: MainServiceIdSlugProps) => {
  return (
    <main className="flex flex-col gap-10  md:gap-24 2xl:gap-[80px] px-4 md:px-5 2xl:px-12">
      <Banner  name={serviceData.name} total={totalElements}/>
      <InfoNavigation  name={serviceData.name} />
      <Result />

    </main>
  );
};
