import axios from "axios";
import { ServiceItemMain } from "@/components/Services/[item]/Main";
import { IMultiLang } from "@/types/Doctor";

interface PageProps {
  params: {
    id: string;
  };
}

export type ApiResponseServiceCategory = {
  message: string | null;
  data: {
    id: number;
    slug: string;
    name: IMultiLang;
    useCount?: number;
  };
  status: number;
  pagination: unknown | null;
};

export default async function Page({ params }: PageProps) {
  const { id } = params;
  try {
    const response = await axios.get(`https://medyordam.result-me.uz/api/service-category/${id}`);
    const fetchedData: ApiResponseServiceCategory = response.data;
    return (
      <div>
        <ServiceItemMain
          totalElements={fetchedData?.data.useCount || 0}
          serviceData={fetchedData.data}
        />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch data for slug:", id, error);
    throw new Error("Failed to fetch data");
  }
}
